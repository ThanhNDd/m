<?php

namespace App\Http\Controllers;

use App\Http\Controllers\cities\Zone;
use App\Jobs\SendEmailJob;
use App\Mail\SendEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use PHPUnit\Framework\Exception;

class CheckoutController extends Controller
{

    public function store(Request $request)
    {
        $mailContent = [];
        $body = $request->body;
        $data = $body[0];
        DB::beginTransaction();
        try {
            if (!empty($data['customer_name']) &&
                !empty($data['number_phone']) &&
                !empty($data['address']) &&
                !empty($data['cityId']) &&
                !empty($data['districtId']) &&
                !empty($data['villageId']) &&
                !empty($data['total_amount']) &&
                !empty($data['total_checkout'])) {

                $customerId = DB::table('smi_customers')->insertGetId(
                    [
                        'name' => $data['customer_name'],
                        'phone' => $data['number_phone'],
                        'email' => $data['email'],
                        'address' => $data['address'],
                        'city_id' => (integer)$data['cityId'],
                        'district_id' => (integer)$data['districtId'],
                        'village_id' => (integer)$data['villageId'],
                    ]
                );
                if (empty($customerId)) {
                    throw new Exception ('Cannot insert customer!!!');
                }
                // create order
                $orderId = DB::table('smi_orders')->insertGetId(
                    [
                        'total_amount' => $data['total_amount'],
                        'total_checkout' => $data['total_checkout'],
                        'type' => '1', // online
                        'status' => '1', // processing
                        'shipping' => $data['shipping'],
                        'payment_type' => '1', // transfer,
                        'customer_id' => $customerId,
                        'source' => '1' // website
                    ]
                );

                if (empty($orderId)) {
                    throw new Exception ('Cannot insert Order!!!');
                }
                // create order detail
                $products = [];
                $carts = null;
                if ($request->session()->has("cart")) {
                    $carts = $request->session()->get("cart");
                    foreach ($carts as $key => $value) {
                        $product = [];
                        $product_id = $value['id'];
                        $product_name = $value['name'];
                        $color = $value['color'];
                        $size = $value['size'];
                        $qty = $value['qty'];
                        $price = $value['price'];
                        $variations = DB::table('smi_variations')
                            ->where([
                                ['product_id', $product_id],
                                ['color', $color],
                                ['size', $size]
                            ])
                            ->first();

                        if (!empty($variations)) {
                            $detailId = DB::table('smi_order_detail')->insertGetId(
                                [
                                    'order_id' => $orderId,
                                    'product_id' => $variations->product_id,
                                    'variant_id' => $variations->id,
                                    'sku' => $variations->sku,
                                    'price' => $price,
                                    'quantity' => $qty
                                ]
                            );
                            if (empty($detailId)) {
                                throw new Exception ('Cannot insert Order Detail !!!');
                            }
                        } else {
                            throw new Exception ("Variation is empty!!!");
                        }
                        $product["product_id"] = $product_id;
                        $product["product_name"] = $product_name;
                        $product["qty"] = $qty;
                        $product["price"] = $price;
                        $product["sku"] = $variations->sku;
                        array_push($products, $product);
                    }
                } else {
                    throw new Exception ("Not exist item in cart !!!");
                }
                // clear session
                $request->session()->forget("cart");
                $request->session()->put("finish", true);
                try {

                    $zone = new Zone();
                    $cityName = $zone->get_name_city($data['cityId']);
                    $districtName = $zone->get_name_district($data['districtId']);
                    $villageName = $zone->get_name_village($data['villageId']);
                    $address = $data['address'].' - '. $villageName. ' - '.$districtName. ' - '.$cityName;

                    $mailContent['customer_name'] = $data['customer_name'];
                    $mailContent['customer_phone'] = $data['number_phone'];
                    $mailContent['customer_email'] = $data['email'];
                    $mailContent['customer_address'] = $address;
                    $mailContent['order_id'] = $orderId;
                    $mailContent['products'] = $products;
                    $mailContent["total_amount"] = $data['total_amount'];
                    $mailContent["total_checkout"] = $data['total_checkout'];
                    $mailContent["shipping"] = $data['shipping'];
                    $mailContent["order_date"] = date("d/m/Y H:i:s");
                    $mailContent["note"] = $data['note'];
                    Mail::send(new SendEmail($mailContent));
                } catch (\Exception $ex) {
                  return response()->json($ex);
                }
                DB::commit();
                return response()->json(201);
            } else {
                throw new Exception ("Invalid input data");
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json("".$e->getMessage());
        }
    }

    public function finish() {
        if ($this->is_mobile()) {
          return view('theme.page.finish');
        } else {
          return view('web.page.finish');
        }
    }
}
