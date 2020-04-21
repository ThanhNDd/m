<?php

namespace App\Http\Controllers;

use App\Mail\SendEmail;
use App\Mail\SendEmailReviews;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
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

    public function show($product_id) {
        $reviews = DB::table('smi_reviews')
            ->join('smi_products', 'smi_reviews.product_id', '=', 'smi_products.id')
            ->select('smi_reviews.*', 'smi_products.name as product_name')
            ->where([['product_id', $product_id]])
            ->orderBy('created_date', 'desc')
            ->take(3)
            ->get()->jsonSerialize();
        return response($reviews, Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $body = $request->body;
        $data = $body[0];
        DB::beginTransaction();
        try {
            if (!empty($data['name']) &&
                !empty($data['phone']) &&
                !empty($data['content']) &&
                !empty($data['rating']) &&
                !empty($data['product_id'])) {

                DB::table('smi_reviews')->insert(
                    [
                        'name' => $data['name'],
                        'phone' => $data['phone'],
                        'email' => $data['email'],
                        'content' => $data['content'],
                        'rating' => (integer)$data['rating'],
                        'product_id' => (integer)$data['product_id']
                    ]
                );

//                Mail::to('thanhit228@gmail.com')->send(new SendEmailReviews());

                DB::commit();
                return response()->json(201);
            } else {
                throw new Exception ("Invalid input data");
            }
        } catch (Exception $e) {
            DB::rollback();
            return response()->json($e);
        }
    }
}
