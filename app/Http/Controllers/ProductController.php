<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cookie;

class ProductController extends Controller
{
  public function index(Request $request)
  {
    $row = $request->row;
    $rowperpage = $request->rowperpage;
    $products = DB::table('smi_products')->where([['status', '=', 0], ["social_publish->website", "=", 1]])
      ->orderBy('id', 'desc')
      ->offset($row)
      ->limit($rowperpage)
      ->get()->jsonSerialize();
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
    $product = DB::table('smi_products')->where([['id', "=", $id], ["social_publish->website", "=", 1]])->first();
    $prod_title = '';
    if (!empty($product)) {
      $isDetail = "isDetail";
      $prod_title = $product->name;
      $type = $product->type;
      $cat_title = '';
      $cat_uri = '';
      if ($type == 0) {
        $cat_title = 'Thời trang bé trai';
        $cat_uri = url('') . '/categories/boys';
      } else if ($type == 1) {
        $cat_title = 'Thời trang bé gái';
        $cat_uri = url('') . '/categories/girls';
      }
      $images = "[";
      foreach (json_decode($product->image) as $key => $image) {
        $myObj['id'] = "image$key";
        $myObj['src'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $image->src);
        $myObj['thumbnail'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $image->src);
        $images .= json_encode($myObj) . ",";
      }
      $images .= "]";
    }
    $hasCookie = $request->hasCookie('recently_viewed');
    // store in cookie
    $recentlyViewed = $this->storeInCookie($request, $product);
    if ($this->is_mobile()) {
      return response(view('theme.page.product.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images', 'hasCookie')))
        ->withCookie($recentlyViewed);
    } else {
      return response(view('web.page.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images', 'hasCookie')))
        ->withCookie($recentlyViewed);
    }

  }

  function storeInCookie(Request $request, $product)
  {
    $products = array();
    $minutes = 60*24*30;// 1 month
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
      $products = json_decode($products);
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

  public function updateRatingAndReviews($productId, $rating) {
      $product = DB::table('smi_products')->where('id',$productId)->first();
      $reviews = $product->reviews++;

      DB::table('smi_products')->where('id',$productId)->update(['rating' => $rating, 'reviews' => $reviews]);
      return response('', Response::HTTP_OK);
  }
  public function getStatus($productId)
  {
    $products = DB::table('smi_products')
      ->select('status')
      ->where('id', $productId)
      ->get();
    return response($products, Response::HTTP_OK);
  }
}


