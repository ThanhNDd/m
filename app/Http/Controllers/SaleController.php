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
        $products = DB::select(DB::raw("SELECT a.id,
                                                   a.name,
                                                   a.image,
                                                   b.image as variant_image,
                                                   a.rating,
                                                   a.reviews,
                                                   a.discount,
                                                   CASE
                                                       WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                       ELSE CONCAT(MIN(b.retail),' - ', MAX(b.retail))
                                                   END AS retail
                                            FROM smi_products a
                                            LEFT JOIN smi_variations b ON a.id = b.product_id
                                            WHERE a.status = 0
                                              AND JSON_CONTAINS(a.social_publish, 1, '$.website')
                                              and a.discount > 0
                                            GROUP BY a.id,
                                                     a.name,
                                                     a.image,
                                                     a.rating,
                                                     a.reviews
                                            ORDER BY a.discount desc, a.updated_at DESC, a.created_at DESC
                                            LIMIT $row,
                                                  $rowperpage"));
        return response($products, Response::HTTP_OK);
    }

  public function count() {
    $total = DB::table('smi_products')->where([['status', '=',0],["social_publish->website", "=", 1],['discount', '>',0]])
      ->count();
    return response($total, Response::HTTP_OK);
  }

    public function get_all_products() {
      if ($this->is_mobile()) {
          $is_active = 'sales';
          return view('theme.page.sales', compact('is_active'));
      } else {
          return view('web.page.sales');
      }
    }
}
