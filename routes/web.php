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
Route::get('/trang-chu.html', 'HomeController@index');
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/san-pham/{slug}-{id}.html', 'ProductController@getProduct')
    ->where('slug', '[a-zA-Z0-9-_]+')
    ->where('id', '[0-9]+');

Route::get('/danh-gia/{slug}-{id}.html','ReviewsController@getAllReviews')
    ->where('slug', '[a-zA-Z0-9-_]+')
    ->where('id', '[0-9]+');

Route::get('/danh-muc.html', 'CategoriesController@categories');
Route::group(['prefix' => '/danh-muc'], function () {
    Route::get('/be-trai.html', 'CategoriesController@getBoys');
    Route::get('/be-gai.html', 'CategoriesController@getGirls');
    Route::get('/giay-dep.html', 'CategoriesController@getShoes');
    Route::get('/phu-kien.html', 'CategoriesController@getAccessories');
});

Route::get('/khuyen-mai.html', 'SaleController@get_all_products');
Route::get('/gio-hang.html', 'CartController@show');
Route::get('/thanh-toan.html', 'CartController@checkout');
Route::get('/gioi-thieu.html', 'InfoController@show');
Route::get('/thong-bao.html', function () {
    return view('theme.page.notifications');
});
Route::get('/cam-on.html', 'CheckoutController@finish');

