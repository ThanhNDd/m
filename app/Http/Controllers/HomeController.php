<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Request $request) {
        $desktop = 'false';
        if($request->session()->has('desktop')) {
            $desktop = $request->session()->get('desktop');
        }
        $products = DB::table('smi_products')->where('status', 0)
            ->orderBy('id', 'desc')
            ->take(1)
            ->get();
        $is_active = 'home';

        if($desktop == 'true') {
            return view('web.page.home', compact('is_active', 'products'));
        } else {
            return view('theme.page.home', compact('is_active', 'products'));
        }
    }
}
