<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class AttributesController extends Controller
{

    public function show($id) {
        $products = DB::select(DB::raw("SELECT a.id,
                                                   a.name,
                                                   a.image AS product_image,
                                                   a.origin,
                                                   a.material,
                                                   a.short_description,
                                                   a.description,
                                                   b.sku,
                                                   b.color,
                                                   b.size,
                                                   b.retail,
                                                   b.quantity,
                                                   b.image
                                            FROM smi_products a
                                            LEFT JOIN smi_variations b ON a.id = b.product_id
                                            WHERE a.id = $id"));
//        $colors = DB::table('smi_variations')
//            ->select('color')
//            ->distinct()
//            ->where('product_id', $id)
//            ->get()->jsonSerialize();
//
//        $sizes = DB::table('smi_variations')
//            ->select('size')
//            ->distinct()
//            ->where('product_id', $id)
//            ->get()->jsonSerialize();

//        $attr = DB::table('smi_products')
//            ->select('origin', 'material','short_description')
//            ->where('id', $id)
//            ->first();
        $attributes = array();
//        $attributes['colors'] = $colors;
//        $attributes['size'] = $sizes;
//        $attributes['origin'] = $attr->origin;
//        $attributes['material'] = $attr->material;
//        $attributes['short_description'] = $attr->short_description;
        $attributes['products'] = $products;
        return response($attributes, Response::HTTP_OK);
    }

    public function get_all_products() {
        $is_active = 'sales';
        return view('theme.page.sales', compact('is_active'));
    }

    public function get_image_product($product_id) {
        $data = DB::select(DB::raw("SELECT a.image AS product_image, b.color, b.image
                                          FROM smi_products a
                                          LEFT JOIN smi_variations b ON a.id = b.product_id
                                          WHERE product_id = $product_id"));
        $images = array();
        if(!empty($data)) {
            $image_product = $data[0]->product_image;
            foreach (json_decode($image_product) as $k => $v) {
                if(!empty($v->src)) {
                    $img = $v->src;
                    if ($v->type == 'upload') {
                        $img = env('IMAGE_URL') . $img;
                    }
                    array_push($images, $img);
                }
            }
            if(empty($images)) {
                $color = '';
                foreach ($data as $key => $value) {
                    if ($color != $value->color) {
                        $color = $value->color;
                        if (!empty($value->image)) {
                            array_push($images, $value->image);
                        }
                    }
                }
            }
        }
        return response($images, Response::HTTP_OK);
    }
}
