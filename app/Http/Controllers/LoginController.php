<?php


namespace App\Http\Controllers;

use App\Mail\SendEmailVerifyCode;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use PHPUnit\Framework\Exception;

class LoginController extends Controller
{
    public function checkExistPhone($phone) {
        $count = DB::table('smi_customers')
            ->where('phone', '=', $phone)
            ->count();
        return response($count, Response::HTTP_OK);
    }

    public function login(Request $request)
    {
        $phone = $request->phone;
        $password = $request->password;
        try {
            if(empty($phone) || empty($password)) {
                throw new Exception ("Invalid input data");
            }
            $customer = DB::table('smi_customers')
                ->where('phone', '=', $phone)
                ->get()
                ->jsonSerialize();
            $pwd = $customer[0]->password;
            if(empty($pwd)) {
                return response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $check = $this->check_password($password, $pwd);
            if($check) {
                return response($customer, Response::HTTP_OK);
            } else {
                return response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch (\Exception $e) {
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function sendEmailChangePassword(Request $request)
    {
        $email = $request->email;
        $phone = $request->phone;
        try {
            if(!empty($email) && !preg_match('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/', $email)) {
                throw new Exception ("Invalid input data");
            }
//            $customer = DB::table('smi_customers')
//                ->where('phone', $phone)
//                ->update(['votes' => 1]);
            $this->sendEmailVerifyCode($data);
            return response($verify_code, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function sendEmailVerifyCode($data) {
        $mailContent['fullname'] = $data['fullname'];
        $mailContent['verify_code'] = $this->generate_tmp_password();

    }

    public function store(Request $request)
    {
        $body = $request->body;
        $data = $body[0];
        DB::beginTransaction();
        try {
            if(!$this->validate_form($data)) {
                throw new Exception ("Invalid input data");
            }
            $password = $data['password'];
            $password = $this->generate_password($password);
            DB::table('smi_customers')->insertGetId(
                [
                    'username' => $data['username'],
                    'password' => $password,
                    'name' => $data['fullname'],
                    'phone' => $data['phone'],
                    'email' => $data['email'],
                    'city_id' => (integer)$data['city'],
                    'district_id' => (integer)$data['district'],
                    'village_id' => (integer)$data['village'],
                    'address' => $data['address'],
                    'birthday' => (integer)$data['birthday'],
                    'gender' => (integer)$data['gender'],
                ]
            );
            DB::commit();
            return response()->json(201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json("".$e->getMessage());
        }
    }

    function validate_form($data){
        if(empty($data) || count($data) == 0) {
            return false;
        }
        $username = $data["username"];
        if(empty($username)) {
            return false;
        }
        $password = $data["password"];
        if(empty($password) || count($password) < 6) {
            return false;
        }
        $password2 = $data["password2"];
        if(empty($password2) || $password != $password2) {
            return false;
        }
        $fullname = $data["fullname"];
        if(empty($fullname)) {
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
        $city = $data["city"];
        if(empty($city)) {
            return false;
        }
        $district = $data["district"];
        if(empty($district)) {
            return false;
        }
        $village = $data["village"];
        if(empty($village)) {
            return false;
        }
        $address = $data["address"];
        if(empty($address)) {
            return false;
        }
        $birthday = $data["birthday"];
        if(empty($birthday)) {
            return false;
        }
        $gender = $data["gender"];
        if(empty($gender)) {
            return false;
        }
        return true;
    }

    function check_password($input_password, $get_password) {
        $check = crypt($input_password, $get_password);
        if (hash_equals($check, $get_password)) {
            return true;
        } else {
            return false;
        }
    }
    function generate_password($password_plain) {
        $salt = strtr(base64_encode(random_bytes(16)), '+', '.');
        $salt = sprintf("$2y$%02d$", 10) . $salt;
        $password = crypt($password_plain, $salt);
        return $password;
    }
    function generate_tmp_password() {
        $password = strtr(base64_encode(random_bytes(10)), '+', '.');
        return $password;
    }
}