<?php


namespace App\Http\Controllers;

use App\Mail\RegisterNew;
use App\Mail\SendEmailVerifyCode;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Monolog\Logger;
use PHPUnit\Framework\Exception;
use App\Http\Controllers\cities\Zone;

class LoginController extends Controller
{
    public function index()
    {
      if ($this->is_mobile()) {
          return view('webv2.pages.login');
      } else {
          return view('webv2.pages.login');
      }

    }

    public function checkExistPhone($phone) {
        $customer = DB::table('smi_customers')
            ->where('phone', '=', $phone)
            ->get()
            ->jsonSerialize();
        if(empty($customer)) {
            return response("user_not_exist", Response::HTTP_OK);
        }
        $active  = $customer[0]->active;
        if($active == 0) {
            return response("user_inactive", Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response("success", Response::HTTP_OK);
    }
    public function checkExistEmail($email) {
        $customer = DB::table('smi_customers')
            ->where('email', '=', $email)
            ->get()
            ->jsonSerialize();
        if(!empty($customer)) {
            return response("email_existed", Response::HTTP_OK);
        }
        return response("success", Response::HTTP_OK);
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
            $active  = $customer[0]->active;
            if($active == 0) {
                return response("user_inactive", Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $pwd = $customer[0]->password;
            if(empty($pwd)) {
                return response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $check = $this->check_password($password, $pwd);
            if($check) {
                $cookie = $this->storeInCookie($request, $customer);
                return response("success", Response::HTTP_OK)->withCookie($cookie);
            } else {
                return response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch (\Exception $e) {
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    function getCustomerByPhone($phone) {
        $customer = DB::table('smi_customers')
                ->select('id', 'phone', 'name', 'email', 'city_id', 'district_id', 'village_id', 'address')
                ->where('phone', '=', $phone)
                ->get()
                ->jsonSerialize();
        return response($customer, Response::HTTP_OK);
    }

    function storeInCookie(Request $request, $cus)
    {
        $minutes = 60 * 24 * 30;// 1 month
        if ($request->hasCookie('_customer')) {
            cookie("_customer", json_encode($cus), $minutes*-1);
        }
        $customer = $cus[0];
        $data = array();
        $data["id"] = $customer->id;
        $data["name"] = $customer->name;
        $data["email"] = $customer->email;
        $data["phone"] = $customer->phone;
        $data["city_id"] = $customer->city_id;
        $data["address"] = $this->get_address($customer);
        $data["avatar"] = $customer->avatar;
        $data["gender"] = $customer->gender;
        return cookie("_customer", json_encode($data), $minutes);
    }

    function logout(Request $request) {
        if ($request->hasCookie('_customer')) {
            $cookie = cookie("_customer", '', -1);
            return response("success", Response::HTTP_OK)->withCookie($cookie);
        }
        return response('not_exist_user', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    function checkLogged(Request $request) {
        if ($request->hasCookie('_customer')) {
            $customer = $request->cookie('_customer');
            return response($customer, Response::HTTP_OK);
        }
        return response('not_exist_user', Response::HTTP_OK);
    }

    function get_address($customer)
    {
        $zone = new Zone();
        $cityId = $customer->city_id;
        $cityName = $zone->get_name_city($cityId);
        $districtId = $customer->district_id;
        $districtName = $zone->get_name_district($districtId);
        $villageId = $customer->village_id;
        $villageName = $zone->get_name_village($villageId);
        if (!empty($customer->address)) {
            $address = $customer->address;
            if (!empty($villageName)) {
                $address .= ", " . $villageName;
                if (!empty($districtName)) {
                    $address .= ", " . $districtName;
                    if (!empty($cityName)) {
                        $address .= ", " . $cityName;
                        return $address;
                    }
                }
            }
        }
        return "";
    }

    public function sendEmailChangePassword(Request $request)
    {
        $email = $request->email;
        $phone = $request->phone;
        try {
            if(!empty($email) && !preg_match('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/', $email)) {
                throw new Exception ("Invalid input data");
            }
            if(empty($phone) || !preg_match('/^((09|03|07|08|05)+([0-9]{8})\b)$/', $phone)) {
                throw new Exception ("Invalid input data");
            }
            // generate tmp password
            $verify_code = $this->generate_tmp_password();
            // get valid password time
            $valid_password_time = $this->get_valid_password_time();
            // update password and valid password time smi_customer
            DB::table('smi_customers')
                ->where('phone', $phone)
                ->update(['password' => $verify_code, 'valid_password_time' => strval($valid_password_time)]);
            // get customer info to send email
            $customer = DB::table('smi_customers')
                ->where('phone', $phone)
                ->get()
                ->jsonSerialize();
            $fullname = $customer[0]->name;
            $valid_password_time = $customer[0]->valid_password_time;
            // send email
            $sent = $this->sendEmail($email, $fullname, $valid_password_time, $verify_code);
            if ($sent) {
                return response('sent', Response::HTTP_OK);
            }else {
                return response('failure', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch (\Exception $e) {
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function sendEmail($email, $fullname, $valid_password_time, $verify_code) {
        $mailContent['fullname'] = $fullname;
        $mailContent['valid_password_time'] = $valid_password_time;
        $mailContent['verify_code'] = $verify_code;
        Mail::to($email)->send(new SendEmailVerifyCode($mailContent));
        if (Mail::failures()) {
            return false;
        }else {
            return true;
        }
    }

    public function get_valid_password_time() {
        $date = date_create(date ('Y-m-d H:i', time()));
        date_add($date,date_interval_create_from_date_string("15 minutes"));
        return date_format($date,"Y-m-d H:i");
    }

    public function verifyCode(Request $request)
    {
        $verifyCode = $request->verifyCode;
        $phone = $request->phone;
        try {
            if(empty($phone) || empty($verifyCode)) {
                throw new Exception ("Invalid input data");
            }
            $count = DB::table('smi_customers')
                ->where([['phone', '=', $phone],['password','=',$verifyCode]])
                ->whereDate('valid_password_time','<=',date ('Y-m-d H:i', time()))
                ->count();
            if(empty($count)) {
                return response('unverified', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            return response('verified', Response::HTTP_OK);
        } catch (\Exception $e) {
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function changePassword(Request $request)
    {
        $password = $request->password;
        $password2 = $request->password2;
        $phone = $request->phone;
        try {
            if(empty($phone) || empty($password) || empty($password2) || $password != $password2) {
                throw new Exception ("Invalid input data");
            }
            $password = $this->generate_password($password);
            DB::table('smi_customers')
                ->where('phone', $phone)
                ->update(['password' => $password, 'active' => 1]);
            return response('changed', Response::HTTP_OK);
        } catch (\Exception $e) {
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function register(Request $request)
    {
        $body = $request->body;
        $data = $body[0];
        DB::beginTransaction();
        try {
            if(!$this->validate_form($data)) {
                throw new Exception ("Invalid input data");
            }
            $password = $this->generate_password($data['password']);
//            $verify_code = $this->generate_tmp_password();
            // get valid password time
//            $valid_password_time = $this->get_valid_password_time();
//            $fullname = $data['fullname'];
//            $email = $data['email'];
            $customer_id = DB::table('smi_customers')->insertGetId(
                [
                    'password' => $password,
                    'name' => $data['fullname'],
                    'phone' => $data['phone'],
                    'email' => $data['email'],
                    'city_id' => (integer)$data['city'],
                    'district_id' => (integer)$data['district'],
                    'village_id' => (integer)$data['village'],
                    'address' => $data['address'],
                    'birthday' => $data['birthday'],
                    'gender' => $data['gender'],
//                    'valid_password_time' => $valid_password_time,
                    "active" => 1
                ]
            );
            DB::commit();
            try {
                $customer = array();
                $customer["city_id"] = $data['city'];
                $customer["district_id"] = $data['district'];
                $customer["village_id"] = $data['village'];
                $customer["address"] = $data['address'];
                $customer =  (object) ($customer);

                $mailContent = [];
                $mailContent['customer_name'] = $data['fullname'];
                $mailContent['customer_phone'] = $data['phone'];
                $mailContent['customer_email'] = $data['email'];
                $mailContent['customer_address'] = $this->get_address($customer);
                $mailContent["register_date"] = date("d/m/Y H:i:s");
                Mail::to(env("MAIL_TO_ADDRESS"))->send(new RegisterNew($mailContent));
            } catch (\Exception $e) {
                Log::debug('Send Email Register new user : '. $e->getMessage());
            }
            return response('sent', Response::HTTP_OK);

            // send email
//            $sent = $this->sendEmail($email, $fullname, $valid_password_time, $verify_code);
//            if ($sent) {
//                return response('sent', Response::HTTP_OK);
//            } else {
//                return response('failure', Response::HTTP_INTERNAL_SERVER_ERROR);
//            }

        } catch (\Exception $e) {
            DB::rollback();
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    function validate_form($data){
        if(empty($data)) {
            return false;
        }
        $password = $data["password"];
        if(empty($password)) {
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
        return strval($password);
    }
}
