<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class BestSellerController extends Controller
{

    public function index(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;

        $products = DB::select(DB::raw("select p.id, p.name, p.image, p.retail, p.rating, p.reviews from smi_products p inner join
          (select distinct e.product_id from (
          select b.product_id from smi_orders a left join smi_order_detail b on a.id = b.order_id where a.deleted = 0
          order by a.created_date desc limit 50) as e) d on p.id = d.product_id
          where p.status = 0 and p.social_publish->'$.website' = 1 limit $row, $rowperpage"));

        // on server with mariadb
//        $products = DB::select(DB::raw("select p.id, p.name, p.image, p.retail, p.rating, p.reviews from smi_products p inner join
//          (select distinct e.product_id from (
//          select b.product_id from smi_orders a left join smi_order_detail b on a.id = b.order_id where a.deleted = 0
//          order by a.created_date desc limit 50) as e) d on p.id = d.product_id
//          where p.status = 0 and JSON_CONTAINS(p.social_publish, 1, '$.website') limit $row, $rowperpage"));


        return response($products, Response::HTTP_OK);
    }

    public function get_all_products() {
        $is_active = 'sales';
        return view('theme.page.sales', compact('is_active'));
    }
}
