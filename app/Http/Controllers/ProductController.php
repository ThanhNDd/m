<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

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
      // store in cookie
      $this->storeInSession($request, $product);
      $images = "[";
      foreach (json_decode($product->image) as $key => $image) {
        $myObj['id'] = "image$key";
        $myObj['src'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $image->src);
        $myObj['thumbnail'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $image->src);
        $images .= json_encode($myObj) . ",";
      }
      $images .= "]";
    }
    if ($this->is_mobile()) {
      return view('theme.page.product.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images'));
    } else {
      return view('web.page.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images'));
    }

  }

  function storeInSession(Request $request, $product)
  {
    $vieweds = array();
    $is_exists = false;
    if ($request->session()->has("viewed")) {
      $vieweds = $request->session()->get("viewed");
      foreach ($vieweds as $key => $v) {
        if ($v["id"] == $product->id) {
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
      array_push($vieweds, $viewed);
      $reversed = array_reverse($vieweds);
      $request->session()->put('viewed', $reversed);
    }
  }

  public function viewedProduct(Request $request)
  {
    $vieweds = array();
    if ($request->session()->has("viewed")) {
      $vieweds = $request->session()->get("viewed");
    }
    return response()->json($vieweds);
  }

  public function bestViewProduct()
  {
    $products = DB::table('smi_products')
      ->whereIn('id', [513, 510, 509])
      ->get()->jsonSerialize();
    return response($products, Response::HTTP_OK);
  }
}


