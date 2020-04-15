<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class BestSellerController extends Controller
{

    public function index(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = DB::select(DB::raw("select a.id, a.name, a.image, a.retail from smi_products as a inner join
                    (select distinct d.product_id from smi_orders c left join smi_order_detail d on c.id = d.order_id order by c.created_date desc limit 10) as b
                    on a.id = b.product_id where a.status = 0 and a.social_publish->'$.website' = 1 limit $row, $rowperpage"));
        // on server with mariadb
//        $products = DB::select(DB::raw("select a.id, a.name, a.image, a.retail from smi_products as a inner join
//                    (select distinct d.product_id from smi_orders c left join smi_order_detail d on c.id = d.order_id order by c.created_date desc limit 10) as b
//                    on a.id = b.product_id where a.status = 0 and JSON_CONTAINS(a.social_publish, 1, '$.website') limit $row, $rowperpage"));
        return response($products, Response::HTTP_OK);
    }

    public function get_all_products() {
        $is_active = 'sales';
        return view('theme.page.sales', compact('is_active'));
    }
}
