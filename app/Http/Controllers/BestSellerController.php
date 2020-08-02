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

        $products = DB::select(DB::raw("SELECT DISTINCT b.id,
                                                                b.name,
                                                                b.image,
                                                                c.image as variant_image,
                                                                b.rating,
                                                                b.reviews,
                                                                MIN(c.retail) as retail
                                                FROM
                                                  (SELECT DISTINCT b.product_id
                                                   FROM smi_orders a
                                                   LEFT JOIN smi_order_detail b ON a.id = b.order_id
                                                   WHERE deleted = 0
                                                   ORDER BY a.created_date DESC
                                                   LIMIT 50) AS a
                                                INNER JOIN smi_products b ON a.product_id = b.id
                                                LEFT JOIN smi_variations c ON b.id = c.product_id
                                                WHERE b.status = 0
                                                  AND JSON_CONTAINS(b.social_publish, 1, '$.website')
                                                GROUP BY b.id,
                                                         b.name,
                                                         b.image,
                                                         b.rating,
                                                         b.retail,
                                                         b.reviews
                                                LIMIT $row, $rowperpage"));

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
