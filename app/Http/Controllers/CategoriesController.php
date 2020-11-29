<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class CategoriesController extends Controller
{
    public function boys(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $type = Constant::GENDER_BOY . "," . Constant::GENDER_BOTH;
        $products = $this->getProductsByType($row, $rowperpage, $type);
        return response($products, Response::HTTP_OK);
    }

    public function girls(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $type = Constant::GENDER_GIRL . "," . Constant::GENDER_BOTH;
        $products = $this->getProductsByType($row, $rowperpage, $type);
        return response($products, Response::HTTP_OK);
    }

    public function accessories(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(Constant::CAT_HAT, Constant::CAT_ACCESSORIES));
        return response($products, Response::HTTP_OK);
    }

    public function shoes(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(Constant::CAT_SHOES, Constant::CAT_SANDAL));
        return response($products, Response::HTTP_OK);
    }

    public function balo(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(Constant::CAT_BALO));
        return response($products, Response::HTTP_OK);
    }

    public function dress(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(Constant::CAT_DRESS));
        return response($products, Response::HTTP_OK);
    }

    public function suit(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(Constant::CAT_SUIT));
        return response($products, Response::HTTP_OK);
    }

    public function shirt(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(Constant::CAT_SHIRT));
        return response($products, Response::HTTP_OK);
    }

    public function trouser(Request $request)
    {
        $row = $request->row;
        $rowperpage = $request->rowperpage;
        $products = $this->getProductsByCategory($row, $rowperpage, array(Constant::CAT_TROUSER));
        return response($products, Response::HTTP_OK);
    }

    private function getProductsByType($row, $rowperpage, $type)
    {
        if ($type == Constant::GENDER_BOY) {
            $cat = [Constant::CAT_SUIT, Constant::CAT_SHIRT, Constant::CAT_TROUSER];
        } else {
            $cat = [Constant::CAT_SUIT, Constant::CAT_SHIRT, Constant::CAT_TROUSER, Constant::CAT_DRESS];
        }
//    $products = DB::table('smi_products')
//      ->where([['status', '=', Constant::STATUS_STOCK], ["social_publish->website", "=", Constant::ACTIVE], ['type', '=', $type]])
//      ->whereIn('category_id', $cat)
//      ->orderBy('created_at', 'desc')
//      ->offset($row)
//      ->limit($rowperpage)
//      ->get()->jsonSerialize();
        $listCatId = implode(",", $cat);
        $products = DB::select(DB::raw("SELECT a.id,
                                                       a.name,
                                                       a.image,
                                                       b.image as variant_image,
                                                       a.rating,
                                                       a.reviews,
                                                       a.type,
                                                       a.category_id,
                                                       a.description,
                                                       CASE
                                                           WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                           ELSE CONCAT(MIN(b.retail), \" - \", MAX(b.retail))
                                                       END AS retail
                                                FROM smi_products a
                                                LEFT JOIN smi_variations b ON a.id = b.product_id
                                                WHERE a.status = 0
                                                    and category_id in ($listCatId)
                                                    and type in ($type)
                                                    AND JSON_CONTAINS(a.social_publish, 1, '$.website')
                                                GROUP BY a.id,
                                                         a.name,
                                                         a.image,
                                                         a.rating,
                                                         a.reviews,
                                                         a.type,
                                                         a.category_id,
                                                         a.description
                                                order by a.updated_at desc, a.created_at desc
                                                limit $row, $rowperpage"));

        return $products;
    }

    private function getProductsByCategory($row, $rowperpage, $catId)
    {
//    $products = DB::table('smi_products')
//      ->where([['status', '=', Constant::STATUS_STOCK], ["social_publish->website", "=", Constant::ACTIVE]])
//      ->whereIn('category_id', $catId)
//      ->orderBy('created_at', 'desc')
//      ->offset($row)
//      ->limit($rowperpage)
//      ->get()->jsonSerialize();
        $listCatId = implode(",", $catId);
        $products = DB::select(DB::raw("SELECT a.id,
                                                       a.name,
                                                       a.image,
                                                       b.image as variant_image,
                                                       a.rating,
                                                       a.reviews,
                                                       a.type,
                                                       a.category_id,
                                                       a.description,
                                                       CASE
                                                           WHEN MIN(b.retail) = MAX(b.retail) THEN MIN(b.retail)
                                                           ELSE CONCAT(MIN(b.retail), \" - \", MAX(b.retail))
                                                       END AS retail
                                                FROM smi_products a
                                                LEFT JOIN smi_variations b ON a.id = b.product_id
                                                WHERE a.status = 0
                                                    and category_id in ($listCatId)
                                                    AND JSON_CONTAINS(a.social_publish, 1, '$.website')
                                                GROUP BY a.id,
                                                         a.name,
                                                         a.image,
                                                         a.rating,
                                                         a.reviews,
                                                         a.type,
                                                         a.category_id,
                                                         a.description
                                                order by a.updated_at desc, a.created_at desc
                                                limit $row, $rowperpage"));
        return $products;
    }

    public function countBoys()
    {
        $total = $this->countProductByType(Constant::GENDER_BOY);
        return response($total, Response::HTTP_OK);
    }

    public function countGirls()
    {
        $total = $this->countProductByType(Constant::GENDER_GIRL);
        return response($total, Response::HTTP_OK);
    }

    public function countAccessories()
    {
        $products = $this->countProductsByCategory(array(Constant::CAT_HAT, Constant::CAT_ACCESSORIES));
        return response($products, Response::HTTP_OK);
    }

    public function countShoes()
    {
        $products = $this->countProductsByCategory(array(Constant::CAT_SHOES, Constant::CAT_SANDAL));
        return response($products, Response::HTTP_OK);
    }
    public function countBalo()
    {
        $products = $this->countProductsByCategory(array(Constant::CAT_BALO));
        return response($products, Response::HTTP_OK);
    }
    public function countDress()
    {
        $products = $this->countProductsByCategory(array(Constant::CAT_DRESS));
        return response($products, Response::HTTP_OK);
    }

    public function countSuit()
    {
        $products = $this->countProductsByCategory(array(Constant::CAT_SUIT));
        return response($products, Response::HTTP_OK);
    }

    public function countShirt()
    {
        $products = $this->countProductsByCategory(array(Constant::CAT_SHIRT));
        return response($products, Response::HTTP_OK);
    }

    public function countTrouser()
    {
        $products = $this->countProductsByCategory(array(Constant::CAT_TROUSER));
        return response($products, Response::HTTP_OK);
    }

    private function countProductByType($type)
    {
        if ($type == Constant::GENDER_BOY) {
            $cat = [Constant::CAT_SUIT, Constant::CAT_SHIRT, Constant::CAT_TROUSER];
        } else {
            $cat = [Constant::CAT_SUIT, Constant::CAT_SHIRT, Constant::CAT_TROUSER, Constant::CAT_DRESS];
        }
        $count = DB::table('smi_products')
            ->where([['status', '=', Constant::STATUS_STOCK], ["social_publish->website", "=", Constant::ACTIVE], ['type', '=', $type]])
            ->whereIn('category_id', $cat)
            ->count();
        return $count;
    }

    private function countProductsByCategory($catId)
    {
        $count = DB::table('smi_products')
            ->where([['status', '=', Constant::STATUS_STOCK], ["social_publish->website", "=", Constant::ACTIVE]])
            ->whereIn('category_id', $catId)
            ->count();
        return $count;
    }

    public function categories()
    {
        $is_active = 'categories';
        return view('theme.page.category.categories', compact('is_active'));
    }

    function getGirls()
    {
        $cat_title = 'Thời trang bé gái';
        return $this->getCategory($cat_title);
    }

    function getBoys()
    {
        $cat_title = 'Thời trang bé trai';
        return $this->getCategory($cat_title);
    }

    function getShoes()
    {
        $cat_title = 'Giày dép';
        return $this->getCategory($cat_title);
    }

    function getAccessories()
    {
        $cat_title = 'Phụ kiện';
        return $this->getCategory($cat_title);
    }

    function getBalo()
    {
        $cat_title = 'Balo';
        return $this->getCategory($cat_title);
    }

    function getDress()
    {
        $cat_title = 'Bộ sưu tập Váy';
        return $this->getCategory($cat_title);
    }

    function getSuit()
    {
        $cat_title = 'Bộ quần áo';
        return $this->getCategory($cat_title);
    }

    function getShirt()
    {
        $cat_title = 'Bộ sưu tập áo';
        return $this->getCategory($cat_title);
    }

    function getTrouser()
    {
        $cat_title = 'Bộ sưu tập quần';
        return $this->getCategory($cat_title);
    }

    function getCategory($cat_title)
    {
        if ($this->is_mobile()) {
            return view('theme.page.category.category', compact('cat_title'));
        } else {
//            return view('web.page.category', compact('cat_title'));
          return view('webv2.pages.category', compact('cat_title'));
        }

    }
}
