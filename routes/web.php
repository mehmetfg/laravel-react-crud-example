<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/react/{any}', function () {
    return view('welcome');
})->where('any', '.*');
Route::get('/product', function () {
    return view('welcome');
});

Route::resource('tokens', \App\Http\Controllers\TokenController::class);
Route::resource('wallets', \App\Http\Controllers\WalletController::class);
