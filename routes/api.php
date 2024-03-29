<?php

use App\Http\Controllers\Api\ChatController;
use App\Http\Controllers\Api\ConversationController;
use App\Http\Controllers\Api\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::prefix('v1')->group(function () {
    Route::post('login', [LoginController::class, 'login']);
    Route::post('register', [LoginController::class, 'register']);
    Route::middleware(['auth:api'])->group(function () {
        Route::get('/user', function (Request $request) {
            return response()->json($request->user());
        })->name('user');

        Route::get('/conversations',[ConversationController::class,'conversations']);

        Route::post('message/send', [ChatController::class, 'store']);
        Route::get('chats', [ChatController::class, 'index']);
        Route::post('message/delivered/{message}', [ChatController::class, 'delivered']);
    });
});
