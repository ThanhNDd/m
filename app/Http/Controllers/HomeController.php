<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{

    public function index() {
        $products = DB::table('smi_products')->where('status', 0)
            ->orderBy('id', 'desc')
            ->take(1)
            ->get();
//        return new ProductCollection($products);
        $is_active = 'home';
        return view('theme.page.home', compact('is_active', 'products'));
    }
}
