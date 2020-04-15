<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class InfoController extends Controller
{

    public function show() {
        $is_active = 'info';
        return view('theme.page.info', compact('is_active'));
    }
}
