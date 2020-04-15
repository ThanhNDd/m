<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{

    public function index(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = DB::table('smi_products')->where([['status', '=',0],["social_publish->website", "=", 1],['discount', '>',0]])
            ->orderBy('discount', 'desc')
            ->orderBy('id', 'desc')
            ->offset($row)
            ->limit($rowperpage)
            ->get()->jsonSerialize();
        return response($products, Response::HTTP_OK);
    }

    public function get_all_products() {
        $is_active = 'sales';
        return view('theme.page.sales', compact('is_active'));
    }
}
