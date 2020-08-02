<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class RecommendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param $cat_id
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $id = $request->product_id;
        $cat_id = $request->cat_id;
        $type = $request->type;
//        $products = DB::table('smi_products')->where([['category_id', '<>', $cat_id],['id','<>',$id],['status','=','0'],['type','=',$type],["social_publish->website", "=", 1]])
//            ->orderBy('id', 'desc')
//            ->offset($row)
//            ->limit($rowperpage)
//            ->get()->jsonSerialize();
        $products = DB::select(DB::raw("SELECT a.id,
                                                       a.name,
                                                       a.image,
                                                       b.image as variant_image,
                                                       a.rating,
                                                       a.reviews,
                                                       a.type,
                                                       a.category_id,
                                                       a.description,
                                                       CASE
                                                           WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                           ELSE CONCAT(MIN(b.retail), \" - \", MAX(b.retail))
                                                       END AS retail
                                                FROM smi_products a
                                                LEFT JOIN smi_variations b ON a.id = b.product_id
                                                WHERE a.id <> $id
                                                  AND category_id <> $cat_id
                                                  AND TYPE = $type
                                                  AND a.status = 0
                                                  AND JSON_CONTAINS(a.social_publish, 1, '$.website')
                                                GROUP BY a.id,
                                                         a.name,
                                                         a.image,
                                                         a.rating,
                                                         a.reviews,
                                                         a.type,
                                                         a.category_id,
                                                         a.description
                                                order by  a.updated_at desc
                                                limit $row, $rowperpage"));
        return response($products, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
