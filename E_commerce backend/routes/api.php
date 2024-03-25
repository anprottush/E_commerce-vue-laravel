<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SeedController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function () {
    return '<h1>welcome to the server</h1>';
});

Route::get('database', function () {

    try {
        DB::connection('mongodb');
        return response()->json(['message' => 'MongoDB connection is successfully established']);
    } catch (Exception $e) {
        return response()->json(['message' => 'MongoDB connection failed', 'error' => $e->getMessage()], 500);
    }

    });

    //Route::apiResource('users', UserController::class);

    Route::controller(AuthController::class)->group(function () {
        Route::post('user/login', 'login');
        Route::post('user/register', 'register');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
    });

    Route::middleware(['auth.api'])->group(function (){
        Route::get('/user', [UserController::class, 'index']);

        Route::get('/user/{id}', [UserController::class, 'show']);
        Route::post('/user', [UserController::class, 'store']);
        Route::put('/user/{id}', [UserController::class, 'update']);
        Route::delete('/user/{id}', [UserController::class, 'destroy']);
    });

    Route::get('/seed', [SeedController::class, 'index']);

    Route::get('/demo-url',  function  (Request $request)  {
        return response()->json(['Laravel CORS Demo']);
     });


