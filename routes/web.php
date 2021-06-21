<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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

Route::get('import',[HomeController::class,'import']);
Route::get('export',[HomeController::class,'export']);
Route::get('mail',[HomeController::class,'mail']);
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any','^(?!api).*$');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::view('/', 'chat')->middleware('auth');
// Route::resource('messages', App\Http\Controllers\MessageController::class)->only([
//     'index',
//     'store'
// ]);
