<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = DB::table('smi_products')->where([['status', '=',0],["social_publish->website", "=", 1]])
            ->orderBy('id', 'desc')
            ->offset($row)
            ->limit($rowperpage)
            ->get()->jsonSerialize();
        return response($products, Response::HTTP_OK);
    }

    public function find_all() {
        $products = DB::table('smi_products')->where('status', 0)
            ->orderBy('id', 'desc')
            ->take(10)
            ->get();
        return view('theme.page.product.home', compact('products'));
    }

    public function getProduct($id) {
        $product = DB::table('smi_products')->where('id', $id)->first();
        $isDetail = "isDetail";
        $prod_title = $product->name;
        $type = $product->type;
        $cat_title = '';
        $cat_uri = '';
        if($type == 0) {
            $cat_title = 'Thời trang bé trai';
            $cat_uri = '/categories/boys';
        } else if($type == 1) {
            $cat_title = 'Thời trang bé gái';
            $cat_uri = '/categories/girls';
        }
        return view('theme.page.product.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product'));
    }
}
