<?php

namespace App\Http\Controllers;

use App\Mail\SendEmailReviews;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ReviewsController extends Controller
{

    public function getAllReviews($slug, $product_id) {
        $product = DB::table('smi_products')->where('id', $product_id)->first();
        $reviews = $this->all($product_id);
        $rating_avg = $this->getRatingAvg($product_id);
        return view('theme.page.product.reviews', compact('product', 'reviews', 'rating_avg'));
    }

    public function getRatingAvg($product_id) {
        $avg = DB::table("smi_reviews")
            ->selectRaw('CAST(AVG(rating) AS DECIMAL(10,1)) as rating_avg')
            ->where('product_id', $product_id)
            ->get();
        $rating_avg = $avg[0]->rating_avg;
        return $rating_avg;
    }

    public function all($product_id) {
        $reviews = DB::table('smi_reviews')->where('product_id', $product_id)
            ->orderBy('created_date', 'desc')
            ->get()->jsonSerialize();
        return $reviews;
    }

    public function countRating($product_id) {
        $rating_avg = $this->getRatingAvg($product_id);
        return response($rating_avg, Response::HTTP_OK);
    }

    public function checkReviewed(Request $request) {
        $customer_id = $request->customer_id;
        $product_id = $request->product_id;
        $reviews = DB::table('smi_reviews')
            ->where([['product_id','=', $product_id],['customer_id','=',$customer_id]])
            ->count();
        return response($reviews, Response::HTTP_OK);
    }

    public function ratingNumberDetail($product_id) {
        $ratings = DB::table("smi_reviews")
            ->selectRaw('rating, count(rating) as number, cast(count(rating) * 100 / (select count(rating) from smi_reviews where product_id = ?) as decimal(10,0)) as percent', [$product_id])
            ->where('product_id', $product_id)
            ->groupBy('rating')
            ->orderBy('rating','asc')
            ->get();
        return response($ratings, Response::HTTP_OK);
    }

    public function getTotalReviews($product_id) {
        $ratings = DB::table("smi_reviews")
            ->where('product_id', $product_id)
            ->count();
        return response($ratings, Response::HTTP_OK);
    }

    public function show(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $product_id = $request->product_id;
        $reviews = DB::table('smi_reviews')
            ->join('smi_products', 'smi_reviews.product_id', '=', 'smi_products.id')
            ->join('smi_customers', 'smi_reviews.customer_id', '=', 'smi_customers.id')
            ->select('smi_reviews.*', 'smi_products.name as product_name','smi_customers.name')
            ->where([['product_id', $product_id]])
            ->orderBy('created_date', 'desc')
            ->offset($row)
            ->limit($rowperpage)
            ->get()->jsonSerialize();
        return response($reviews, Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $body = $request->body;
        $data = $body[0];
        DB::beginTransaction();
        try {
            if(!$this->validate_form($data)) {
                return response("invalid_input", Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $customer_id = $data['customer_id'];
            $id = DB::table('smi_reviews')->insertGetId(
                [
                    'customer_id' => $data['customer_id'],
                    'content' => $data['content'],
                    'rating' => (integer)$data['rating'],
                    'product_id' => (integer)$data['product_id'],
                    "purchased" => $data["purchased"]
                ]
            );
            if(empty($id)) {
              throw new Exception('Cannot insert reviews');
            }
            DB::commit();
            try {
                $rating_avg = $this->getRatingAvg($data['product_id']);
                $product = new ProductController();
                $product->updateRatingAndReviews($data['product_id'],$rating_avg);

                $customerController = new CustomerController();
                $customer = $customerController->findById($customer_id);

                $mailContent = [];
                if(!empty($customer)) {
                    $mailContent['customer_name'] = $customer[0]->name;
                    $mailContent['customer_phone'] = $customer[0]->phone;
                    $mailContent['customer_email'] = $customer[0]->email;
                }
                $mailContent['product_name'] = $data['product_name'];
                $mailContent['rating'] = $data['rating'];
                $mailContent["content"] = $data['content'];
                $mailContent["review_date"] = date("d/m/Y H:i:s");
                Mail::to(env("MAIL_TO_ADDRESS"))->send(new SendEmailReviews($mailContent));
            } catch (\Exception $ex) {
                Log::error('[Reviews][Store] Error Exception >>>>>> '.$ex->getMessage());
            }
            return response('success', Response::HTTP_OK);
        } catch (Exception $e) {
            DB::rollback();
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function validate_form($data) {
        if(empty($data)) {
            return false;
        }
        $customer_id = $data['customer_id'];
        if(empty($customer_id)) {
            return false;
        }
        $content = $data['content'];
        if(empty($content)) {
            return false;
        }
        $rating = $data['rating'];
        if(empty($rating)) {
            return false;
        }
        $product_id = $data['product_id'];
        if(empty($product_id)) {
            return false;
        }
        return true;
    }
}
