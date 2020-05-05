<?php

namespace App\Http\Controllers;

use App\Mail\SendEmail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class CheckoutController extends Controller
{

    public function store(Request $request)
    {
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
//                print_r('customerId: ' . $customerId);
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
//                print_r('orderId: ' . $orderId);
                if (empty($orderId)) {
                    throw new Exception ('Cannot insert Order!!!');
                }
                // create order detail
                $carts = null;
                if ($request->session()->has("cart")) {
                    $carts = $request->session()->get("cart");
                    foreach ($carts as $key => $value) {
                        $product_id = $value['id'];
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
                    }
                } else {
                    throw new Exception ("Not exist item in cart !!!");
                }


                // clear session
                $request->session()->forget("cart");
                $request->session()->put("finish", true);
                try {
                    Mail::to('thanhit228@gmail.com')->send(new SendEmail());
                } catch (\Exception $ex) {
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
