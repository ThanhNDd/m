<?php

namespace App\Http\Controllers;

use App\Http\Controllers\cities\Zone;
use App\Jobs\SendEmailJob;
use App\Mail\SendEmail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use PHPUnit\Framework\Exception;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\EmailOrdersController;

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
                    'other_receiver' => $otherReceiverId,
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
                        // print_r($detailId);
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

    public function storeFromLanding(Request $request)
    {
        $mailContent = [];
        $body = $request->body;
        $data = $body[0];
        $productController = new ProductController();
        $customerController = new CustomerController();
        $emailOrdersController = new EmailOrdersController();
        DB::beginTransaction();
        try {
            if(empty($data["phone"])) {
                return response("invalid_input", Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $zone = new Zone();
            $customer_id = $data["customer_id"];
            $city = $zone->get_name_city($data["city_id"]);
            $district = $zone->get_name_district($data["district_id"]);
            $village = $zone->get_name_village($data["village_id"]);
            $address = $data["address"].' - '. $village. ' - '.$district. ' - '.$city;
            $source_website = 2;
            if(empty($customer_id)) {
                // create new user
                $customer = [];
                $customer["password"] = "";
                $customer["fullname"] = $data["name"];
                $customer["phone"] = $data["phone"];
                $customer["email"] = $data["email"];
                $customer["city"] = $data["city_id"];
                $customer["district"] = $data["district_id"];
                $customer["village"] = $data["village_id"];
                $customer["address"] = $data["address"];
                $customer["full_address"] = $address;
                $customer["source_register"] = $source_website;
                $customer["birthday"] = null;
                $customer["gender"] = "";
                $customer_id = $customerController->saveCustomer($customer);
                $data["customer_id"] = $customer_id;
            } else {
                //update
                $customer = [];
                $customer["customer_id"] = $data["customer_id"];
                $customer["fullname"] = $data["name"];
                $customer["phone"] = $data["phone"];
                $customer["email"] = $data["email"];
                $customer["city"] = $data["city_id"];
                $customer["district"] = $data["district_id"];
                $customer["village"] = $data["village_id"];
                $customer["address"] = $data["address"];
                $customer["source_register"] = $source_website;
                $customer["full_address"] = $address;
                $customerController->updateCustomer($customer);
            }
            if(!$this->validate_form($data)) {
                return response("invalid_input", Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $otherReceiverId = null;
            $shipping = $data["shipping"];
            $payment_method = $data["payment_method"];
            $total_amount = $data["total_amount"];
            $total_checkout = $data["total_checkout"];
            $utm_source = $data["utm_source"];
            // create order
            $orderId = DB::table('smi_orders')->insertGetId(
                [
                    'total_amount' => $total_amount,
                    'total_checkout' => $total_checkout,
                    'type' => '1', // online
                    'status' => '0', // pending
                    'shipping' => $shipping,
                    'payment_type' => $payment_method,
                    'customer_id' => $customer_id,
                    'source' => '1', // website
                    'other_receiver' => $otherReceiverId,
                    'utm_source' =>$utm_source
                ]
            );
            if (empty($orderId)) {
                throw new Exception ('error_created_order!!!');
            }
            // create order detail
            $products = [];
            $data_orders = $data["data_orders"];
            foreach ($data_orders as $key => $value) {
                $product_id = $value["product_id"];
                $product_name = $value["name"];
                $details = $value["detail"];
                foreach ($details as $key1 => $value1) {
                    foreach ($value1 as $key2 => $value2) {
                        foreach ($value2 as $key3 => $value3) {
                            $detailId = DB::table('smi_order_detail')->insertGetId(
                                        [
                                            'order_id' => $orderId,
                                            'product_id' => $value["product_id"],
                                            'variant_id' => $value3["variant_id"],
                                            'sku' => $value3['sku'],
                                            'price' => $value3['retail'],
                                            'quantity' => $value3['quantity'],
                                            'profit' => $value3['p']
                                        ]
                                    );
                            if (empty($detailId)) {
                                throw new Exception ('Cannot insert Order Detail !!!');
                            }
                            // update quantity 
                            $affected = $productController->updateQuantityBySku($value3['sku'], $value3['quantity']);
                            if (empty($affected)) {
                                Log::error("Cannot update quantity for variation");
                            }
                            $product = [];
                            $product["product_id"] = $product_id;
                            $product["product_name"] = $product_name;
                            $product["qty"] = $value3['quantity'];
                            $product["price"] = $value3['retail'];
                            $product["sku"] = $value3['sku'];
                            array_push($products, $product);
                        }
                    }
                }
            }
            // save to order logs
            $message_log = 'Đơn hàng mới';
            DB::table('smi_order_logs')->insert(
                [
                    'order_id' => $orderId,
                    'action' => $message_log
                ]);
            $mailContent['order_id'] = $orderId;
            $mailContent['utm_source'] = $utm_source;
            $mailContent['customer_name'] = $data["name"];
            $mailContent['customer_phone'] = $data["phone"];
            $mailContent['customer_email'] = $data["email"];
            $mailContent['customer_address'] = $address;
            $mailContent['difference_address'] = $data["difference_address"];
            $mailContent['products'] = $products;
            $mailContent["total_amount"] = $data['total_amount'];
            $mailContent["total_checkout"] = $data['total_checkout'];
            $mailContent["shipping"] = $data['shipping'];
            $mailContent["order_date"] = date("d/m/Y H:i:s");
            $mailContent["note"] = $data['note'];
            $mailContent = json_encode($mailContent);
             // save to mail order table
             $emailOrdersController->insertOrderMail($mailContent);

             DB::commit();
            return response("success", Response::HTTP_OK);
        } catch (\Exception $e) {
            DB::rollback();
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
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
