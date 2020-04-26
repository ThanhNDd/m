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
        $colors = DB::table('smi_variations')
            ->select('color')
            ->distinct()
            ->where('product_id', $id)
            ->get()->jsonSerialize();

        $sizes = DB::table('smi_variations')
            ->select('size')
            ->distinct()
            ->where('product_id', $id)
            ->get()->jsonSerialize();

        $attr = DB::table('smi_products')
            ->select('origin', 'material','short_description')
            ->where('id', $id)
            ->first();
        $attributes = array();
        $attributes['colors'] = $colors;
        $attributes['size'] = $sizes;
        $attributes['origin'] = $attr->origin;
        $attributes['material'] = $attr->material;
        $attributes['short_description'] = $attr->short_description;
        return response($attributes, Response::HTTP_OK);
    }

    public function get_all_products() {
        $is_active = 'sales';
        return view('theme.page.sales', compact('is_active'));
    }
}
