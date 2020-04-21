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
Route::post('/best-seller', 'BestSellerController@index');
Route::Resource('/attributes', 'AttributesController', ['parameters' => [
    'attributes' => 'id'
]]);
Route::Resource('/relate.category.type', 'RelateProductController');
Route::Resource('/recommend.category.type', 'RecommendController');
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
});
Route::post('/submit-reviews', 'ReviewsController@store');
Route::Resource('/reviews', 'ReviewsController');
Route::get('/rating-avg/{id}', 'ReviewsController@countRating');
Route::get('/rating-number-detail/{id}', 'ReviewsController@ratingNumberDetail');
Route::get('/total-reviews/{id}', 'ReviewsController@getTotalReviews');
Route::get('/viewed-product', 'ProductController@viewedProduct');

