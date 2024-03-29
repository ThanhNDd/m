<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/products', 'ProductController@index');
Route::post('/flash-sales', 'SaleController@index');
Route::post('/sales', 'SaleController@index');
Route::get('/sales', 'SaleController@count');
Route::post('/best-seller', 'BestSellerController@index');
Route::get('/best-view-product', 'ProductController@bestViewProduct');
Route::get('/hot-boy-product', 'ProductController@hotboyProduct');
Route::Resource('/attributes', 'AttributesController', ['parameters' => [
    'attributes' => 'id'
]]);
Route::get('/images/{id}', 'AttributesController@get_image_product');
//Route::post('/relate.category.type', 'RelateProductController@show');
Route::post('/relate', 'RelateProductController@show');
Route::post('/recommend', 'RecommendController@show');
Route::Resource('/cart', 'CartController');
Route::get('/carts', 'CartController@get_all_items');
Route::group(['prefix' => 'cart'], function(){
    Route::get('/', 'CartController@count');
    Route::post('/change', 'CartController@change');
    Route::post('/remove', 'CartController@remove');
});
Route::group(['prefix' => 'zone'], function(){
    Route::get('/city', 'ZoneController@city');
    Route::get('/district/{id}', 'ZoneController@district');
    Route::get('/village/{id}', 'ZoneController@village');
});
Route::post('/thuc-hien-thanh-toan', 'CheckoutController@store');

Route::group(['prefix' => 'danh-muc'], function(){
    Route::post('/be-gai.html', 'CategoriesController@girls');
    Route::post('/be-trai.html', 'CategoriesController@boys');
    Route::post('/phu-kien.html', 'CategoriesController@accessories');
    Route::post('/giay-dep.html', 'CategoriesController@shoes');
    Route::post('/balo.html', 'CategoriesController@balo');
    Route::get('/be-gai.html', 'CategoriesController@countGirls');
    Route::get('/be-trai.html', 'CategoriesController@countBoys');
    Route::get('/phu-kien.html', 'CategoriesController@countAccessories');
    Route::get('/giay-dep.html', 'CategoriesController@countShoes');
    Route::get('/balo.html', 'CategoriesController@countBalo');
  Route::post('/vay.html', 'CategoriesController@dress');
  Route::get('/vay.html', 'CategoriesController@countDress');
  Route::post('/bo-quan-ao.html', 'CategoriesController@suit');
  Route::get('/bo-quan-ao.html', 'CategoriesController@countSuit');
  Route::post('/ao.html', 'CategoriesController@shirt');
  Route::get('/ao.html', 'CategoriesController@shirt');
  Route::post('/quan.html', 'CategoriesController@trouser');
});
Route::post('/submit-reviews', 'ReviewsController@store');
Route::post('/reviews', 'ReviewsController@show');
Route::get('/rating-avg/{id}', 'ReviewsController@countRating');
Route::get('/rating-number-detail/{id}', 'ReviewsController@ratingNumberDetail');
Route::get('/total-reviews/{id}', 'ReviewsController@getTotalReviews');
Route::post('/check-reviewed', 'ReviewsController@checkReviewed');
//Route::get('/viewed-product', 'ProductController@viewedProduct');
Route::post('/viewed-product', 'ProductController@getProductInCookie');
Route::get('/status/{id}', 'ProductController@getStatus');
Route::post('/blog', 'BlogController@index');
Route::post('/dang-ky', 'LoginController@register');
Route::post('/dang-nhap', 'LoginController@login');
Route::post('/send-email-change-password', 'LoginController@sendEmailChangePassword');
Route::get('/check-exist-phone/{phone}', 'LoginController@checkExistPhone');
Route::get('/find-by-phone/{phone}', 'LoginController@getCustomerByPhone');
Route::get('/check-exist-email/{email}', 'LoginController@checkExistEmail');
Route::post('/verify-code', 'LoginController@verifyCode');
Route::post('/change-password', 'LoginController@changePassword');
Route::post('/check-logged', 'LoginController@checkLogged');
Route::post('/logout', 'LoginController@logout');


//for chat bot
Route::get('/products/{slug}', 'ProductController@getProductBySlug');
Route::get('/chat-bot/{id}', 'ProductController@getDataProductById');
Route::get('/chat-bot/relate-product/{id}', 'ProductController@getRelateProducts');

Route::get('/landing/{id}', 'ProductController@getDataProductById');
Route::get('/landing/relate-product/{id}', 'ProductController@getRelateProducts');

Route::post('/landing/thanh-toan', 'CheckoutController@storeFromLanding');

Route::get('/send-emails', 'EmailOrdersController@sendAllEmails');