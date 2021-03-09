<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use PHPUnit\Framework\Exception;

class CustomerController extends Controller
{
    public function findById($customer_id)
    {
        $customer = DB::table('smi_customers')
            ->where('id', $customer_id)
            ->get()
            ->jsonSerialize();
        return $customer;
    }

    public function store(Request $request)
    {
        $body = $request->body;
        $data = $body[0];
        DB::beginTransaction();
        try {
            this.saveCustomer($data);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    function saveCustomer($data) {
            $customer_id = DB::table('smi_customers')->insertGetId(
                [
                    'password' => $data['password'],
                    'name' => $data['fullname'],
                    'phone' => $data['phone'],
                    'email' => $data['email'],
                    'city_id' => (integer)$data['city'],
                    'district_id' => (integer)$data['district'],
                    'village_id' => (integer)$data['village'],
                    'address' => $data['address'],
                    'birthday' => $data['birthday'],
                    'gender' => $data['gender'],
                    'full_address' => $data['full_address'],
                    'source_register' => $data['source_register'],
                    "active" => 1
                ]
            );
        return $customer_id;
    }

    function updateCustomer($data) {
        DB::table('smi_customers')
                ->where('id', $data["customer_id"])
                ->update([
                    'name' => $data['fullname'],
                    'phone' => $data['phone'],
                    'email' => $data['email'],
                    'city_id' => (integer)$data['city'],
                    'district_id' => (integer)$data['district'],
                    'village_id' => (integer)$data['village'],
                    'address' => $data['address'],
                    'full_address' => $data['full_address'],
                    'source_register' => $data['source_register'],
                ]);
    }
}