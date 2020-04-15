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
Route::post('/process-checkout', 'CheckoutController@store');
Route::group(['prefix' => 'category'], function(){
    Route::post('/girls', 'CategoriesController@girls');
    Route::post('/boys', 'CategoriesController@boys');
    Route::post('/accessories', 'CategoriesController@accessories');
    Route::post('/shoes', 'CategoriesController@shoes');
});
Route::post('/submit-reviews', 'ReviewsController@store');
Route::Resource('/reviews', 'ReviewsController');
Route::get('/rating-avg/{id}', 'ReviewsController@countRating');
Route::get('/rating-number-detail/{id}', 'ReviewsController@ratingNumberDetail');


