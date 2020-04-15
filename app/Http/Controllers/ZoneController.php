<?php

namespace App\Http\Controllers;

use App\Http\Controllers\cities\Zone;
use Illuminate\Http\Request;

class ZoneController extends Controller
{
    public function city() {
        $zone = new Zone();
        $city = $zone->get_list_city();
        return response()->json($city);
    }

    public function district($id) {
        $zone = new Zone();
        $district = $zone->get_list_district($id);
        return response()->json($district);
    }

    public function village($id) {
        $zone = new Zone();
        $village = $zone->get_list_village($id);
        return response()->json($village);
    }
}
