<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
//    $products = DB::table('smi_products')->where([['status', '=', 0], ["social_publish->website", "=", 1]])
//      ->orderBy('id', 'desc')
//      ->offset($row)
//      ->limit($rowperpage)
//      ->get()->jsonSerialize();
        $products = DB::select(DB::raw("SELECT a.id,
                                                   a.name,
                                                   a.image,
                                                   a.rating,
                                                   a.reviews,
                                                   CASE
                                                       WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                       ELSE CONCAT(MIN(b.retail),' - ', MAX(b.retail))
                                                   END AS retail
                                            FROM smi_products a
                                            LEFT JOIN smi_variations b ON a.id = b.product_id
                                            WHERE a.status = 0
                                              AND a.social_publish->'$.website' = 1
                                            GROUP BY a.id,
                                                     a.name,
                                                     a.image,
                                                     a.rating,
                                                     a.reviews
                                            ORDER BY a.updated_at DESC, a.created_at DESC
                                            LIMIT $row,
                                                  $rowperpage"));
        return response($products, Response::HTTP_OK);
    }

    public function find_all()
    {
        $products = DB::table('smi_products')->where([['status', "=", 0], ["social_publish->website", "=", 1]])
            ->orderBy('id', 'desc')
            ->take(10)
            ->get();
        return view('theme.page.product.home', compact('products'));
    }

    public function getProduct(Request $request, $slug, $id)
    {
//    $product = DB::table('smi_products')->where([['id', "=", $id], ["social_publish->website", "=", 1]])->first();
        $products = DB::select(DB::raw("SELECT a.id,
                                                    b.sku,
                                                   a.name,
                                                   a.image,
                                                   a.rating,
                                                   a.reviews,
                                                   a.type,
                                                   a.category_id,
                                                   a.description,
                                                   CASE
                                                       WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                       ELSE CONCAT(MIN(b.retail), \" - \", MAX(b.retail))
                                                   END AS retail
                                            FROM smi_products a
                                            LEFT JOIN smi_variations b ON a.id = b.product_id
                                            WHERE a.id = $id
                                              AND a.status = 0
                                              AND a.social_publish->'$.website' = 1"));
        $product = $products[0];
        $prod_title = '';
        if (!empty($product)) {
            $isDetail = "isDetail";
            $prod_title = $product->name;
            $type = $product->type;
            $cat_title = '';
            $cat_uri = '';
            if ($type == 0) {
                $cat_title = 'Thời trang bé trai';
                $cat_uri = url('') . '/danh-muc/be-trai.html';
            } else if ($type == 1) {
                $cat_title = 'Thời trang bé gái';
                $cat_uri = url('') . '/danh-muc/be-gai.html';
            }
            $images = "[";
            foreach (json_decode($product->image) as $key => $image) {
                $path_parts = pathinfo($image->src);
                $dirname = $path_parts['dirname'];
                $extension = $path_parts['extension'];
                $filename = $path_parts['filename'];
                $thumb = $dirname . '/' . $filename . '.100x100xz.' . $extension;

                $myObj['id'] = "image$key";
                $myObj['src'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $image->src);
                $myObj['thumbnail'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $thumb);
                $images .= json_encode($myObj) . ",";
            }
            $images .= "]";
        }
        $hasCookie = $request->hasCookie('recently_viewed');
        // store in cookie
        $recentlyViewed = $this->storeInCookie($request, $product);

        $retail = $product->retail;
        if (!empty($retail) && strrpos($retail, " - ")) {
            $arr = explode(" - ", $retail);
            $min_price = number_format((float)$arr[0]);
            $max_price = number_format((float)$arr[1]);
            $retail = $min_price . " - " . $max_price;
        } else {
            $retail = number_format($retail);
        }
        if ($this->is_mobile()) {
            return response(view('theme.page.product.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images', 'hasCookie', 'retail')))
                ->withCookie($recentlyViewed);
        } else {
            return response(view('web.page.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images', 'hasCookie', 'retail')))
                ->withCookie($recentlyViewed);
        }

    }

    function storeInCookie(Request $request, $product)
    {
        $products = array();
        $minutes = 60 * 24 * 30;// 1 month
        $is_exists = false;
        if ($request->hasCookie('recently_viewed')) {
            $products = json_decode($request->cookie('recently_viewed'));
            foreach ($products as $key => $v) {
                if ($v->id == $product->id) {
                    $is_exists = true;
                }
            }
        }
        if (!$is_exists) {
            $viewed = array();
            $viewed["id"] = $product->id;
            $viewed["name"] = $product->name;
            $viewed["retail"] = $product->retail;
            $viewed["image"] = $product->image;
            $viewed["rating"] = $product->rating;
            $viewed["reviews"] = $product->reviews;
            array_push($products, $viewed);
            $reversed = array_reverse($products);
            return cookie("recently_viewed", json_encode($reversed), $minutes);
        }
        return cookie("recently_viewed", json_encode($products), $minutes);
    }

    public function getProductInCookie(Request $request)
    {
        $products = array();
        if ($request->hasCookie('recently_viewed')) {
            $products = Crypt::decrypt(Cookie::get('recently_viewed'), false);
            $listId = array();
            $products = json_decode($products);
            foreach ($products as $key => $value) {
                array_push($listId, $value->id);
            }
            $products = DB::table('smi_products')
                ->whereIn('id', $listId)
                ->get()->jsonSerialize();
        }
        return $products;
    }

    public function bestViewProduct()
    {
        $products = DB::table('smi_products')
            ->whereIn('id', [513, 510, 509, 504])
            ->get()->jsonSerialize();
        return response($products, Response::HTTP_OK);
    }

    public function hotboyProduct()
    {
        $products = DB::table('smi_products')
            ->whereIn('id', [92, 88, 452, 379])
            ->get()->jsonSerialize();
        return response($products, Response::HTTP_OK);
    }

    public function updateRatingAndReviews($productId, $rating)
    {
        $product = DB::table('smi_products')->where('id', $productId)->first();
        $reviews = $product->reviews++;

        DB::table('smi_products')->where('id', $productId)->update(['rating' => $rating, 'reviews' => $reviews]);
        return response('', Response::HTTP_OK);
    }

    public function getStatus($productId)
    {
        $total = DB::table('smi_variations')
            ->where('product_id', $productId)
            ->sum('quantity');
        return response($total, Response::HTTP_OK);
    }
}


