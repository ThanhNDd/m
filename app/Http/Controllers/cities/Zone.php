<?php

namespace App\Http\Controllers\cities;

class Zone
{
    public function __construct()
    {

    }

    public function get_name_city($id = '')
    {
        global $city_arr;
        if (!is_array($city_arr) || empty($city_arr)) {
            include 'city.php';
        }
        $city_id = sprintf("%02d", intval($id));
        if ($id < 10) {
            $city_id = sprintf("%01d", intval($id));
        }
        $city = (isset($city_arr[$city_id])) ? $city_arr[$city_id] : '';
        return $city;
    }

    public function get_name_district($id = '')
    {
        global $district_arr;
        if (!is_array($district_arr) || empty($district_arr)) {
            include 'district.php';
        }
        $district_id = sprintf("%03d", intval($id));
        if (is_array($district_arr) && !empty($district_arr)) {
            $district_name = $this->search_in_array($district_arr, 'maqh', $district_id);
            $district_name = isset($district_name[0]['name']) ? $district_name[0]['name'] : '';
            return $district_name;
        }
        return false;
    }

    public function search_in_array($array, $key, $value)
    {
        $results = array();

        if (is_array($array)) {
            if (isset($array[$key]) && is_numeric($array[$key]) && $array[$key] == $value) {
                $results[] = $array;
            } elseif (isset($array[$key]) && $this->is_serialized($array[$key]) && in_array($value, $this->maybe_unserialize($array[$key]))) {
                $results[] = $array;
            }
            foreach ($array as $subarray) {
                $results = array_merge($results, $this->search_in_array($subarray, $key, $value));
            }
        }

        return $results;
    }

    /**
     * Fee value to find if it was serialized.
     *
     * If $data is not an string, then returned value will always be false.
     * Serialized data is always a string.
     *
     * @param string $data Value to check to see if was serialized.
     * @param bool $strict Optional. Whether to be strict about the end of the string. Default true.
     * @return bool False if not serialized and true if it was.
     * @since 2.0.5
     *
     */
    public function is_serialized($data, $strict = true)
    {
        // if it isn't a string, it isn't serialized.
        if (!is_string($data)) {
            return false;
        }
        $data = trim($data);
        if ('N;' == $data) {
            return true;
        }
        if (strlen($data) < 4) {
            return false;
        }
        if (':' !== $data[1]) {
            return false;
        }
        if ($strict) {
            $lastc = substr($data, -1);
            if (';' !== $lastc && '}' !== $lastc) {
                return false;
            }
        } else {
            $semicolon = strpos($data, ';');
            $brace = strpos($data, '}');
            // Either ; or } must exist.
            if (false === $semicolon && false === $brace) {
                return false;
            }
            // But neither must be in the first X characters.
            if (false !== $semicolon && $semicolon < 3) {
                return false;
            }
            if (false !== $brace && $brace < 4) {
                return false;
            }
        }
        $token = $data[0];
        switch ($token) {
            case 's':
                if ($strict) {
                    if ('"' !== substr($data, -2, 1)) {
                        return false;
                    }
                } elseif (false === strpos($data, '"')) {
                    return false;
                }
            // or else fall through
            case 'a':
            case 'O':
                return (bool)preg_match("/^{$token}:[0-9]+:/s", $data);
            case 'b':
            case 'i':
            case 'd':
                $end = $strict ? '$' : '';
                return (bool)preg_match("/^{$token}:[0-9.E-]+;$end/", $data);
        }
        return false;
    }

    /**
     * Unserialize value only if it was serialized.
     *
     * @param string $original Maybe unserialized original, if is needed.
     * @return mixed Unserialized data can be any type.
     * @since 2.0.0
     *
     */
    public function maybe_unserialize($original)
    {
        if (is_serialized($original)) { // don't attempt to unserialize data that wasn't serialized going in
            return @unserialize($original);
        }
        return $original;
    }

    public function get_name_village($id = '')
    {
        global $village_arr;
        if (!is_array($village_arr) || empty($village_arr)) {
            include '$village.php';
        }
        $village_id = sprintf("%05d", intval($id));
        if (is_array($village_arr) && !empty($village_arr)) {
            $village_name = $this->search_in_array($village_arr, 'xaid', $village_id);
            $village_name = isset($village_name[0]['name']) ? $village_name[0]['name'] : '';
            return $village_name;
        }
        return false;
    }

    public function get_list_city()
    {
        global $city_arr;
        if (!is_array($city_arr) || empty($city_arr)) {
            include 'city.php';
        }
        $arr = array();
        foreach ($city_arr as $key => $value) {
            $city = array(
                'id' => $key,
                'text' => $value
            );
            array_push($arr, $city);
        }
        $content = array();
        $content['results'] = $arr;
        return json_encode($content);
    }

    function get_list_district_select($matp = '')
    {
        $district_select = array();
        $district_select_array = $this->get_list_district($matp);
        if ($district_select_array && is_array($district_select_array)) {
            foreach ($district_select_array as $district) {
                $district_select[$district['maqh']] = $district['name'];
            }
        }
        return $district_select;
    }

    function get_list_district($matp = '')
    {
        if (!$matp) return false;
        global $district_arr;
        if (!is_array($district_arr) || empty($district_arr)) {
            include 'district.php';
        }
        $matp = sprintf("%02d", intval($matp));
        $result = $this->search_in_array($district_arr, 'matp', $matp);
        $districts = array();
        foreach ($result as $key => $value) {
            $district = array(
                'id' => $value["maqh"],
                'text' => $value["name"]
            );
            array_push($districts, $district);
        }
        $content = array();
        $content['results'] = $districts;
        return json_encode($content);
    }

    function get_list_village_select($maqh = '')
    {
        $village_select = array();
        $village_select_array = $this->get_list_village($maqh);
        if ($village_select_array && is_array($village_select_array)) {
            foreach ($village_select_array as $village) {
                $village_select[$village['xaid']] = $village['name'];
            }
        }
        return $village_select;
    }

    function get_list_village($maqh = '')
    {
        if (!$maqh) return false;
        global $village_arr;
        if (!is_array($village_arr) || empty($village_arr)) {
            include 'village.php';
        }
        $id_xa = sprintf("%05d", intval($maqh));
        $result = $this->search_in_array($village_arr, 'maqh', $id_xa);
        $villages = array();
        foreach ($result as $key => $value) {
            $village = array(
                'id' => $value["xaid"],
                'text' => $value["name"]
            );
            array_push($villages, $village);
        }
        $content = array();
        $content['results'] = $villages;
        return json_encode($content);
    }
}