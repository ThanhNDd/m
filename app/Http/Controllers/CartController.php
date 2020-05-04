<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class CartController extends Controller
{

    public function show()
    {

        if ($this->is_mobile()) {
            $is_active = 'cart';
            return view('theme.page.cart', compact('is_active'));
        } else {
            return view('web.page.cart');
        }
    }

    public function count(Request $request) {
        $cart = '';
//        $request->session()->forget('cart');
        if($request->session()->has("cart")) {
            $carts = $request->session()->get("cart");
            $cart = count($carts);
        }
        return $cart;
    }

    public function store(Request $request)
    {
        $body = $request->body;
        $body = $body[0];
        $carts = array();
        $is_exists = false;
        if($request->session()->has("cart")) {
            $carts = $request->session()->get("cart");
            foreach ($carts as $key => $c) {
                if($c["id"] == $body["id"]
                    && $c["color"] == $body["color"]
                    && $c["size"] == $body["size"]) {
                    $cart = $carts[$key];
                    $cart["qty"] = $cart["qty"] + 1;
                    $carts[$key] = $cart;
                    $is_exists = true;
                }
            }
            $request->session()->forget('cart');
        }
        if(!$is_exists) {
            $cart = array();
            $cart["id"] = $body["id"];
            $cart["name"] = $body["name"];
            $cart["price"] = $body["price"];
            $cart["image"] = $body["image"];
            $cart["color"] = $body["color"];
            $cart["size"] = $body["size"];
            $cart["qty"] = 1;
            array_push($carts, $cart);
        }
        $request->session()->put('cart', $carts);
        return response()->json($carts);
    }


    function get_all_items(Request $request) {
        $carts = array();
        if($request->session()->has("cart")) {
            $carts = $request->session()->get("cart");
        }
        return response()->json($carts);
    }

    public function change(Request $request)
    {
        $body = $request->body;
        $body = $body[0];
        $carts = array();
        if($request->session()->has("cart")) {
            $type = $body['type'];
            $carts = $request->session()->get("cart");
            foreach ($carts as $key => $c) {
                if($c["id"] == $body["id"]
                    && $c["color"] == $body["color"]
                    && $c["size"] == $body["size"]) {
                    $cart = $carts[$key];
                    if($type == 'plus') {
                        $cart["qty"] = $cart["qty"] + 1;
                    } else if($type == 'minus' && $cart["qty"] > 1) {
                        $cart["qty"] = $cart["qty"] - 1;
                    }
                    $carts[$key] = $cart;
                }
            }
            $request->session()->forget('cart');
        }
        $request->session()->put('cart', $carts);
        return response()->json($carts);
    }

    public function remove(Request $request)
    {
        $body = $request->body;
        $body = $body[0];
        if($request->session()->has("cart")) {
            $carts = $request->session()->get("cart");
            foreach ($carts as $key => $c) {
                if($c["id"] == $body["id"]
                    && $c["color"] == $body["color"]
                    && $c["size"] == $body["size"]) {
                    array_splice($carts, $key, 1);
                }
            }
            $request->session()->forget('cart');
        }
        $request->session()->put('cart', $carts);
        return response()->json($carts);
    }

    public function checkout()
    {
        $is_active = 'checkout';
        return view('theme.page.checkout', compact('is_active'));
    }
}
