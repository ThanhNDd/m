<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = DB::select(DB::raw("SELECT a.id,
                                                   a.name,
                                                   a.image,
                                                   b.image as variant_image,
                                                   a.rating,
                                                   a.reviews,
                                                   CASE
                                                       WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                       ELSE CONCAT(MIN(b.retail),' - ', MAX(b.retail))
                                                   END AS retail
                                            FROM smi_products a
                                            LEFT JOIN smi_variations b ON a.id = b.product_id
                                            WHERE a.status = 0
                                              AND JSON_CONTAINS(a.social_publish, 1, '$.website')
                                            GROUP BY a.id,
                                                     a.name,
                                                     a.image,
                                                     a.rating,
                                                     a.reviews
                                            ORDER BY a.created_at DESC
                                            LIMIT $row,
                                                  $rowperpage"));
        return response($products, Response::HTTP_OK);
    }

    public function find_all()
    {
        $products = DB::table('smi_products')->where([['status', "=", 0], ["social_publish->website", "=", 1]])
            ->orderBy('id', 'desc')
            ->take(10)
            ->get();
        return view('theme.page.product.home', compact('products'));
    }
    function remote_file_exists($url)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_NOBODY, true);
        curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if( $httpCode == 200 ){return true;}
    }
    public function getProduct(Request $request, $slug, $id)
    {
        $products = DB::select(DB::raw("SELECT a.id,
                                                    b.sku,
                                                   a.name,
                                                   a.image,
                                                   b.image as variant_image,
                                                   a.rating,
                                                   a.reviews,
                                                   a.type,
                                                   a.category_id,
                                                   a.description,
                                                   a.short_description,
                                                   CASE
                                                       WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                       ELSE CONCAT(MIN(b.retail), \" - \", MAX(b.retail))
                                                   END AS retail
                                            FROM smi_products a
                                            LEFT JOIN smi_variations b ON a.id = b.product_id
                                            WHERE a.id = $id
                                              AND a.status = 0
                                              AND JSON_CONTAINS(a.social_publish, 1, '$.website')"));
        $product = $products[0];
        $prod_title = '';
        if (!empty($product->id)) {
            $isDetail = "isDetail";
            $prod_title = $product->name;
            $type = $product->type;
            $cat_title = '';
            $cat_uri = '';
            if ($type == 0) {
                $cat_title = 'Thời trang bé trai';
                $cat_uri = url('') . '/danh-muc/be-trai.html';
            } else if ($type == 1) {
                $cat_title = 'Thời trang bé gái';
                $cat_uri = url('') . '/danh-muc/be-gai.html';
            }
            $images = "[";
            if(!empty(json_decode($product->image))) {
                foreach (json_decode($product->image) as $key => $image) {
                    $path_parts = pathinfo($image->src);
                    $dirname = $path_parts['dirname'];
                    $filename = $path_parts['filename'];
                    if (isset($path_parts['extension'])) {
                        $extension = $path_parts['extension'];
                        $thumb = $dirname . '/' . $filename . '.100x100xz.' . $extension;
                    } else {
                        $thumb = $filename;
                    }
                    $myObj['id'] = "image$key";
                    $myObj['src'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $image->src);
                    $myObj['thumbnail'] = url($image->type == 'upload' ? env('IMAGE_URL') . $image->src : $thumb);
                    $images .= json_encode($myObj) . ",";
                }
            }
            $images .= "]";
            $hasCookie = $request->hasCookie('recently_viewed');

            $retail = $product->retail;
            if (!empty($retail) && strrpos($retail, " - ")) {
                $arr = explode(" - ", $retail);
                $min_price = number_format((float)$arr[0], 0, '', ".");
                $max_price = number_format((float)$arr[1], 0, '', ".");
                $retail = $min_price . " - " . $max_price;
            } else {
                $retail = number_format($retail,0,'', ".");
            }
        } else {
            $product = null;
        }
        $recentlyViewed = $this->storeInCookie($request, $product);
        if ($this->is_mobile()) {
            return response(view('theme.page.product.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images', 'hasCookie', 'retail')))
                ->withCookie($recentlyViewed);
        } else {
            return response(view('webv2.pages.detail', compact('isDetail', 'cat_title', 'prod_title', 'cat_uri', 'product', 'images', 'hasCookie', 'retail')))
                ->withCookie($recentlyViewed);
//          return response(view('webv2.pages.detail'));
        }

    }

    function storeInCookie(Request $request, $product)
    {
        $products = array();
        $minutes = 60 * 24 * 30;// 1 month
        $is_exists = false;
        if ($request->hasCookie('recently_viewed')) {
            $products = json_decode($request->cookie('recently_viewed'));
            if(!empty($product)) {
                foreach ($products as $key => $v) {
                    if ($v->id == $product->id) {
                        $is_exists = true;
                    }
                }
            } else {
                $is_exists = true;
            }
        }
        if (!$is_exists) {
            $viewed = array();
            $viewed["id"] = $product->id;
            array_push($products, $viewed);
            $reversed = array_reverse($products);
            return cookie("recently_viewed", json_encode($reversed), $minutes);
        }
        return cookie("recently_viewed", json_encode($products), $minutes);
    }

    public function getProductInCookie(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = array();
        if ($request->hasCookie('recently_viewed')) {
            try {
                $products = Crypt::decrypt(Cookie::get('recently_viewed'), false);

                $products = json_decode($products);
                $ids = '';
                foreach ($products as $key => $value) {
                    if(!empty($value->id)) {
                        $ids .= ",".$value->id;
                    }
                }
                if(!empty($ids)) {
                    $ids = substr($ids, 1);
                    $products = DB::select(
                        DB::raw("SELECT a.id,
                                                   a.name,
                                                   a.image,
                                                   b.image as variant_image,
                                                   a.rating,
                                                   a.reviews,
                                                   CASE
                                                       WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                       ELSE CONCAT(MIN(b.retail),' - ', MAX(b.retail))
                                                   END AS retail
                                            FROM smi_products a
                                            LEFT JOIN smi_variations b ON a.id = b.product_id
                                            WHERE a.id in ($ids) 
                                              AND a.status = 0
                                              AND JSON_CONTAINS(a.social_publish, 1, '$.website')
                                            GROUP BY a.id,
                                                     a.name,
                                                     a.image,
                                                     a.rating,
                                                     a.reviews
                                            ORDER BY a.updated_at DESC, a.created_at DESC
                                            LIMIT $row,$rowperpage"
                        )
                    );
                }
            } catch (\Exception $ex) {
                echo $ex->getMessage();
            }
        }
        return $products;
    }

    public function bestViewProduct()
    {
        $products = DB::table('smi_products')
            ->whereIn('id', [513, 510, 509, 504])
            ->get()->jsonSerialize();
        return response($products, Response::HTTP_OK);
    }

    public function hotboyProduct()
    {
        $products = DB::table('smi_products')
            ->whereIn('id', [92, 88, 452, 379])
            ->get()->jsonSerialize();
        return response($products, Response::HTTP_OK);
    }

    public function updateRatingAndReviews($productId, $rating)
    {
        $product = DB::table('smi_products')->where('id', $productId)->first();
        $reviews = $product->reviews++;

        DB::table('smi_products')->where('id', $productId)->update(['rating' => $rating, 'reviews' => $reviews]);
        return response('', Response::HTTP_OK);
    }

    public function getStatus($productId)
    {
        $total = DB::table('smi_variations')
            ->where('product_id', $productId)
            ->sum('quantity');
        return response($total, Response::HTTP_OK);
    }


    public function getProductBySlug($slug)
    {
        $arr = array();
        if($slug == "superman") {
            $products = DB::select(DB::raw("SELECT  a.id,
                    a.name,
                    a.image as product_image,
                    b.color,
                    b.retail,
                    b.size,
                    b.image as variation_image,
                    a.description,
                    b.sku
            FROM smi_products a
            LEFT JOIN smi_variations b ON a.id = b.product_id
            WHERE a.id in (1322, 1321, 1320, 1319, 1318, 1317, 1316, 1315)"));
            
            $data = array();
            $product_id = 0;
            $i = 0;
            $c = "";
            $retails = array();
            $first_size = "";
            $last_size = "";
            foreach ($products as $k => $row) {
                if ($product_id != $row->id) {
                    $product = array(
                        'product_id' => $row->id,
                        'name' => $row->name,
                        'description' => $row->description,
                        "retail" => $row->retail,
                        "color" => $row->color,
                        "size" => "first_size - last_size",
                        "slider" => $row->product_image,
                        'image' => $row->variation_image,
                        "detail" => array()
                    );
                    $color = array(
                        'sku' => $row->sku,
                        'size' => $row->size,
                        'image' => $row->variation_image,
                        'retail' => number_format($row->retail),
                    );
                    $product['detail'][$row->color] = array();
                    array_push($product['detail'][$row->color], $color);
                    array_push($data, $product);
                    $product_id = $row->id;
                    $c = $row->color;
                    $first_size = $row->size;
                    $retails = array();
                    array_push($retails, $row->retail);
                    $i++;
                } else {
                    // print_r($data);
                    $color = array(
                        'sku' => $row->sku,
                        'size' => $row->size,
                        'image' => $row->variation_image,
                        'retail' => number_format($row->retail),
                    );
                    if($c != $row->color) {
                        // $$data[$i - 1]['detail'][$row["color"]] = $color;
                        $data[$i - 1]['detail'][$row->color] = array();
                        array_push($data[$i - 1]['detail'][$row->color], $color);

                        $color_product = $data[$i - 1]["color"];
                        $color_product .= ", ".$row->color;
                        $data[$i - 1]["color"] = $color_product;
                    } else {
                        array_push($data[$i - 1]['detail'][$row->color], $color);
                    }

                    $last_size = $row->size;
                    $data[$i - 1]["size"] = $first_size." - ".$last_size;

                    array_push($retails, $row->retail);
                    sort($retails);
                    $retailLength = count($retails);
                    if($retailLength > 1 && $retails[0] != $retails[$retailLength-1]) {
                        $data[$i - 1]["retail"] = number_format($retails[0])." - ".number_format($retails[$retailLength-1]);
                    } else {
                        $data[$i - 1]["retail"] = number_format($retails[0]);
                    }

                    $c = $row->color;
                }
            }
            $products = array();
            for($i=0; $i<count($data); $i++) {
                $product = array();
                $p = array(
                    "title" => $data[$i]["name"],
                    "subtitle" => "Giá: ".$data[$i]["retail"]." VNĐ\nMàu: ".$data[$i]["color"]."\nSize: ".$data[$i]["size"],
                    "image" => $data[$i]["image"],
                    "product_id" => $data[$i]["product_id"]
                );
                $products["product_".($i+1)] = $p;
                // array_push($products, $p);
            }
            
            $arr["data"] = $data;
            $arr["products"] = $products;
        }
        
        return response($arr, Response::HTTP_OK);
    }


    public function getDataProductById($id)
    {
        $arr = array();
        $products = DB::select(DB::raw("SELECT  a.id,
                    a.name,
                    a.image as product_image,
                    b.color,
                    b.retail,
                    b.size,
                    b.image as variation_image,
                    a.description,
                    b.sku,
                    b.id as variant_id,
                    b.profit as p,
                    b.quantity
            FROM smi_products a
            LEFT JOIN smi_variations b ON a.id = b.product_id
            WHERE a.id = $id and a.id in (1322, 1321, 1320, 1319, 1318, 1317, 1316, 1315)"));
            
            $data = array();
            if($products) {
                $product_id = 0;
                $i = 0;
                $c = "";
                $retails = array();
                $first_size = "";
                $last_size = "";
                $colors = array();
                $sizes = array();
                foreach ($products as $k => $row) {
                    if ($product_id != $row->id) {
                        $product = array(
                            'product_id' => $row->id,
                            'name' => $row->name,
                            'description' => $row->description,
                            "retail" => $row->retail,
                            "color" => $row->color,
                            "size" => "first_size - last_size",
                            "slider" => $row->product_image,
                            'image' => $row->variation_image,
                            "detail" => array()
                        );
                        $color = array(
                            'sku' => $row->sku,
                            'size' => $row->size,
                            'image' => $row->variation_image,
                            'retail' => number_format($row->retail),
                            'variant_id' => $row->variant_id,
                            'p' => $row->p,
                            'quantity' => $row->quantity
                        );
                        $product['detail'][$row->color] = array();
                        array_push($product['detail'][$row->color], $color);
                        array_push($data, $product);
                        $product_id = $row->id;
                        $c = $row->color;
                        $first_size = $row->size;
                        $retails = array();
                        array_push($retails, $row->retail);
                        array_push($colors, $row->color);
                        array_push($sizes, $row->size);
                        $i++;
                    } else {
                        // print_r($data);
                        $color = array(
                            'sku' => $row->sku,
                            'size' => $row->size,
                            'image' => $row->variation_image,
                            'retail' => number_format($row->retail),
                            'variant_id' => $row->variant_id,
                            'p' => $row->p,
                            'quantity' => $row->quantity
                        );
                        if($c != $row->color) {
                            // $$data[$i - 1]['detail'][$row["color"]] = $color;
                            $data[$i - 1]['detail'][$row->color] = array();
                            array_push($data[$i - 1]['detail'][$row->color], $color);

                            $color_product = $data[$i - 1]["color"];
                            $color_product .= ", ".$row->color;
                            $data[$i - 1]["color"] = $color_product;
                        } else {
                            array_push($data[$i - 1]['detail'][$row->color], $color);
                        }

                        $last_size = $row->size;
                        $data[$i - 1]["size"] = $first_size." - ".$last_size;

                        array_push($retails, $row->retail);
                        sort($retails);
                        $retailLength = count($retails);
                        if($retailLength > 1 && $retails[0] != $retails[$retailLength-1]) {
                            $data[$i - 1]["retail"] = number_format($retails[0])." - ".number_format($retails[$retailLength-1]);
                        } else {
                            $data[$i - 1]["retail"] = number_format($retails[0]);
                        }
                        $c = $row->color;
                        array_push($colors, $row->color);
                        array_push($sizes, $row->size);
                    }
                }
                $data[0]["sizes"] = array_values(array_unique($sizes));
                $data[0]["colors"] = array_values(array_unique($colors));
            }
            $arr["data"] = $data;
        return response($arr, Response::HTTP_OK);
    }

    function getProductById($slug, $id) {
        return view('landing.detail',["product_id" => $id, "source" => $slug]); 
    }

    public function getRelateProducts($id)
    {
        $arr = array();
        $products = DB::select(DB::raw("SELECT  a.id,
                a.name,
                b.retail,
                b.image as variation_image
        FROM smi_products a
        LEFT JOIN smi_variations b ON a.id = b.product_id
        WHERE a.id in (1322, 1321, 1320, 1319, 1318, 1317, 1316, 1315)
        and a.id <> $id group by a.id"));
        
        $data = array();
        foreach ($products as $k => $row) {
            $product = array(
                'product_id' => $row->id,
                'name' => $row->name,
                "retail" => number_format($row->retail),
                'image' => $row->variation_image
            );
            array_push($data, $product);
        }
        $arr["data"] = $data;
        return response($arr, Response::HTTP_OK);
    }

    function updateQuantityBySku($sku, $qty) {
        $affected = DB::update(
            'UPDATE smi_variations a,
                (SELECT CASE
                            WHEN a.quantity > 0 THEN a.quantity - ?
                            ELSE 0
                        END AS qty
                FROM smi_variations a
                WHERE a.sku = ?) b
            SET a.quantity = b.qty
            WHERE sku = ?',
            [$qty, $sku, $sku]
        );
        return $affected;
    }
}


