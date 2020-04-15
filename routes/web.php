<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/product-details/{id}', 'ProductController@getProduct');

Route::get('/all-reviews/{id}','ReviewsController@getAllReviews');

Route::group(['prefix' => '/categories'], function () {
    Route::get('/', 'CategoriesController@categories');
    Route::get('/boys', 'CategoriesController@getBoys');
    Route::get('/girls', 'CategoriesController@getGirls');
    Route::get('/shoes', 'CategoriesController@getShoes');
    Route::get('/accessories', 'CategoriesController@getAccessories');
});

Route::get('/sales', 'SaleController@get_all_products');
Route::get('/cart', 'CartController@show');
Route::get('/checkout', 'CartController@checkout');
Route::get('/info', 'InfoController@show');
Route::get('/notifications', function () {
    return view('theme.page.notifications');
});
Route::get('/finish', 'CheckoutController@finish');

