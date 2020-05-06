<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Request $request) {
        $products = DB::table('smi_products')->where('status', 0)
            ->orderBy('id', 'desc')
            ->take(1)
            ->get();
        $is_active = 'home';
        if($this->is_mobile()) {
            return view('theme.page.home', compact('is_active', 'products'));
        } else {
            return view('web.page.home', compact('is_active', 'products'));
        }
    }
    public function transport() {
      if($this->is_mobile()) {
        return view('theme.page.policy.transport');
      } else {
        return view('web.page.policy.transport');
      }
    }
  public function return() {
    if($this->is_mobile()) {
      return view('theme.page.policy.return');
    } else {
      return view('web.page.policy.return');
    }
  }
}
