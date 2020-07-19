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
        $products = DB::select(DB::raw("select a.id, a.name, a.image as product_image, a.origin, a.material, a.short_description, b.sku, b.color, b.size, b.retail, b.quantity, b.image
            from smi_products a left join smi_variations b on a.id = b.product_id 
            where a.id = $id"));
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
                $img = $v->src;
//                $img = str_replace(".jpg","64x64.jpg",$img);
                array_push($images, $img);
            }
            $color = '';
            foreach ($data as $key => $value) {
                if($color != $value->color) {
                    $color = $value->color;
//                    $image = str_replace(".jpg","64x64.jpg",$value->image);
                    array_push($images, $value->image);
                }
            }
        }
        return response($images, Response::HTTP_OK);
    }
}
