<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use PHPUnit\Framework\Exception;
use App\Mail\SendEmail;
use App\Http\Controllers\ProductController;

class EmailOrdersController extends Controller
{
    public function insertOrderMail($mail_data) {
        DB::table('smi_email_orders')->insertGetId(
            [
                'mail_data' => $mail_data
            ]
        );
    }

    public function findAll() {
        $emails = DB::table('smi_email_orders')
            ->where('status', 0)
            ->get()
            ->jsonSerialize();
        return $emails;
    }

    function updateStatus($id, $status) {
        DB::table('smi_email_orders')
                ->where('id', $id)
                ->update([
                    'status' => $status,
                    'sent_date' => DB::raw('now()')
                ]);
    }

    public function sendAllEmails()
    {
        try {
            $sent_success = 1;
            $sent_failed = 2;
            $data = $this->findAll();
            foreach ($data as $value) {
                $id = $value->id;
                $mailContent = [];
                $mail_data = json_decode($value->mail_data);
                $products = [];
                foreach($mail_data->products as $p) {
                    $product = [];
                    $product["product_id"] = $p->product_id;
                    $product["product_name"] = $p->product_name;
                    $product["qty"] = $p->qty;
                    $product["price"] = $p->price;
                    $product["sku"] = $p->sku;
                    array_push($products, $product);
                }
                $mailContent['order_id'] = $mail_data->order_id;
                $mailContent['utm_source'] = $mail_data->utm_source;
                $mailContent['customer_name'] = $mail_data->customer_name;
                $mailContent['customer_phone'] = $mail_data->customer_phone;
                $mailContent['customer_email'] = $mail_data->customer_email;
                $mailContent['customer_address'] = $mail_data->customer_address;
                $mailContent['difference_address'] = $mail_data->difference_address;
                $mailContent['products'] = $products;
                $mailContent["total_amount"] = $mail_data->total_amount;
                $mailContent["total_checkout"] = $mail_data->total_checkout;
                $mailContent["shipping"] = $mail_data->shipping;
                $mailContent["order_date"] = $mail_data->order_date;
                $mailContent["note"] = $mail_data->note;
                Mail::to("shopmein.vn@gmail.com")->send(new SendEmail($mailContent));
                if (Mail::failures()) {
                    $this->updateStatus($id, $sent_failed);
                    Log::error("Send email is failed");
                } else {
                    $this->updateStatus($id, $sent_success);
                    Log::error("Send email is success");
                }
            }
        } catch (\Exception $ex) {
            dd($ex->getMessage());
            Log::error("Cannot send email");
        }
    }
    
}