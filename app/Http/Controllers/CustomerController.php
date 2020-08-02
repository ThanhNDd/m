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
}