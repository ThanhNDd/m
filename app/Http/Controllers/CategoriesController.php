<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class CategoriesController extends Controller
{
    public function boys(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByType($row, $rowperpage, 0);
        return response($products, Response::HTTP_OK);
    }

    public function girls(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByType($row, $rowperpage, 1);
        return response($products, Response::HTTP_OK);
    }

    public function accessories(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(7,8));
        return response($products, Response::HTTP_OK);
    }

    public function shoes(Request $request) {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(5,6));
        return response($products, Response::HTTP_OK);
    }

    private function getProductsByType($row, $rowperpage, $type) {
        if($type == 0) {
            $cat = [1,2,3];
        } else {
            $cat = [1,2,3,4];
        }
        $products = DB::table('smi_products')
            ->where([['status', '=',0],["social_publish->website", "=", 1],['type', '=',$type]])
            ->whereIn('category_id', $cat)
            ->orderBy('created_at', 'desc')
            ->offset($row)
            ->limit($rowperpage)
            ->get()->jsonSerialize();
        return $products;
    }

    private function getProductsByCategory($row, $rowperpage, $catId) {
        $products = DB::table('smi_products')
            ->where([['status', '=',0],["social_publish->website", "=", 1]])
            ->whereIn('category_id', $catId)
            ->orderBy('created_at', 'desc')
            ->offset($row)
            ->limit($rowperpage)
            ->get()->jsonSerialize();
        return $products;
    }

    public function countBoys() {
      $total = $this->countProductByType(0);
      return response($total, Response::HTTP_OK);
    }

    public function countGirls() {
      $total = $this->countProductByType(1);
      return response($total, Response::HTTP_OK);
    }

    public function countAccessories() {
      $products = $this->countProductsByCategory(array(7,8));
      return response($products, Response::HTTP_OK);
    }

    public function countShoes() {
      $products = $this->countProductsByCategory(array(5,6));
      return response($products, Response::HTTP_OK);
    }

    private function countProductByType($type) {
        if($type == 0) {
          $cat = [1,2,3];
        } else {
          $cat = [1,2,3,4];
        }
        $count = DB::table('smi_products')
            ->where([['status', '=',0],["social_publish->website", "=", 1],['type', '=',$type]])
            ->whereIn('category_id', $cat)
            ->count();
        return $count;
    }

    private function countProductsByCategory($catId) {
        $count = DB::table('smi_products')
          ->where([['status', '=',0],["social_publish->website", "=", 1]])
          ->whereIn('category_id', $catId)
          ->count();
        return $count;
    }

    public function categories() {
        $is_active = 'categories';
        return view('theme.page.category.categories', compact('is_active'));
    }

    function getGirls() {
        $cat_title = 'Thời trang bé gái';
        return $this->getCategory($cat_title);
    }
    function getBoys() {
        $cat_title = 'Thời trang bé trai';
        return $this->getCategory($cat_title);
    }
    function getShoes() {
        $cat_title = 'Giày dép';
        return $this->getCategory($cat_title);
    }
    function getAccessories() {
        $cat_title = 'Phụ kiện';
        return $this->getCategory($cat_title);
    }
    function getCategory($cat_title) {
        if ($this->is_mobile()) {
            return view('theme.page.category.category', compact('cat_title'));
        } else {
            return view('web.page.category', compact('cat_title'));
        }

    }
}
