<?php

namespace App\Http\Controllers;

use App\Http\Controllers\cities\Zone;
use App\Jobs\SendEmailJob;
use App\Mail\SendEmail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use PHPUnit\Framework\Exception;
use App\Http\Controllers\CustomerController;

class CheckoutController extends Controller
{

    public function store(Request $request)
    {
        $mailContent = [];
        $body = $request->body;
        $data = $body[0];
        DB::beginTransaction();
        try {
            if(!$this->validate_form($data)) {
                return response("invalid_input", Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $otherReceiverId = null;
            $difference_address = $data["difference_address"];
            if($difference_address) {
                $otherReceiverId = DB::table('smi_other_receiver')->insertGetId(
                    [
                        'name' => $data['name'],
                        'phone' => $data['phone'],
                        'email' => $data['email'],
                        'address' => $data['address'],
                        'city_id' => (integer)$data['city_id'],
                        'district_id' => (integer)$data['district_id'],
                        'village_id' => (integer)$data['village_id'],
                    ]
                );
                if (empty($otherReceiverId)) {
                    throw new Exception ('error_created_other_receiver!!!');
                }
            }
            $customer_id = $data["customer_id"];
            $shipping = $data["shipping"];
            $payment_method = $data["payment_method"];
            $total_amount = $data["total_amount"];
            $total_checkout = $data["total_checkout"];
            // create order
            $orderId = DB::table('smi_orders')->insertGetId(
                [
                    'total_amount' => $total_amount,
                    'total_checkout' => $total_checkout,
                    'type' => '1', // online
                    'status' => '1', // processing
                    'shipping' => $shipping,
                    'payment_type' => $payment_method,
                    'customer_id' => $customer_id,
                    'source' => '1', // website
                    'other_receiver' => $otherReceiverId
                ]
            );
            if (empty($orderId)) {
                throw new Exception ('error_created_order!!!');
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
                    $sku = $value['sku'];
                    $qty = $value['qty'];
                    $price = $value['price'];
                    $variations = DB::table('smi_variations')
                        ->where('sku', $sku)
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
                        print_r($detailId);
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
            DB::commit();
//             clear session
            $request->session()->forget("cart");
            $request->session()->put("finish", true);
            try {
                $customerController = new CustomerController();
                $customer = $customerController->findById($customer_id);
                if(!empty($customer)) {
                    $zone = new Zone();
                    $mailContent['order_id'] = $orderId;
                    $mailContent['customer_name'] = $customer[0]->name;
                    $mailContent['customer_phone'] = $customer[0]->phone;
                    $mailContent['customer_email'] = $customer[0]->email;
                    $city = $zone->get_name_city($customer[0]->city_id);
                    $district = $zone->get_name_district($customer[0]->district_id);
                    $village = $zone->get_name_village($customer[0]->village_id);
                    $address = $customer[0]->address.' - '. $village. ' - '.$district. ' - '.$city;
                    $mailContent['customer_address'] = $address;
                    $mailContent['difference_address'] = $difference_address;
                    if(!empty($difference_address)) {
                        $cityName = $zone->get_name_city($data['city_id']);
                        $districtName = $zone->get_name_district($data['district_id']);
                        $villageName = $zone->get_name_village($data['village_id']);
                        $address = $data['address'].' - '. $villageName. ' - '.$districtName. ' - '.$cityName;
                        $mailContent['name'] = $data['name'];
                        $mailContent['phone'] = $data['phone'];
                        $mailContent['address'] = $address;
                    }
                    $mailContent['products'] = $products;
                    $mailContent["total_amount"] = $data['total_amount'];
                    $mailContent["total_checkout"] = $data['total_checkout'];
                    $mailContent["shipping"] = $data['shipping'];
                    $mailContent["order_date"] = date("d/m/Y H:i:s");
                    $mailContent["note"] = $data['note'];
                    Mail::to("shopmein.vn@gmail.com")->send(new SendEmail($mailContent));
                }
            } catch (\Exception $ex) {
                return response($ex->getMessage(), Response::HTTP_OK);
            }
            return response("success", Response::HTTP_OK);
        } catch (\Exception $e) {
            DB::rollback();
//            return response()->json("".$e->getMessage());
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function validate_form($data) {
        $customer_id = $data["customer_id"];
        if(empty($customer_id)) {
            return false;
        }
        $difference_address = $data["difference_address"];
        if($difference_address) {
            $name = $data["name"];
            if(empty($name)) {
                return false;
            }
            $phone = $data["phone"];
            if(empty($phone) || !preg_match('/^((09|03|07|08|05)+([0-9]{8})\b)$/', $phone)) {
                return false;
            }
            $email = $data["email"];
            if(!empty($email) && !preg_match('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/', $email)) {
                return false;
            }
            $city_id = $data["city_id"];
            if(empty($city_id)) {
                return false;
            }
            $district_id = $data["district_id"];
            if(empty($district_id)) {
                return false;
            }
            $village_id = $data["village_id"];
            if(empty($village_id)) {
                return false;
            }
            $address = $data["address"];
            if(empty($address)) {
                return false;
            }
        }
        $payment_method = $data["payment_method"];
        if(empty($payment_method)) {
            return false;
        }
        $total_amount = $data["total_amount"];
        if(empty($total_amount)) {
            return false;
        }
        $total_checkout = $data["total_checkout"];
        if(empty($total_checkout)) {
            return false;
        }
        return true;
    }

    public function finish() {
        if ($this->is_mobile()) {
          return view('theme.page.finish');
        } else {
          return view('web.page.finish');
        }
    }
}
