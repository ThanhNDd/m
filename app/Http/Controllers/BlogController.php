<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BlogController extends Controller
{

    public function index(Request $request)
    {
        $rowperpage = $request->rowperpage;
        $client = new Client();
        $data = $client->get('https://blog.shopmein.vn/wp-json/wp/v2/posts?_embed&per_page='.$rowperpage);
        return response($data->getBody(), Response::HTTP_OK);
    }

}