<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware(['web', 'verified'])
->prefix('web')
->group(function () {
    Route::apiResource('areas', App\Http\Controllers\Api\AreasController::class);
    Route::apiResource('usuarios', App\Http\Controllers\Api\UsuariosController::class);

    // BODEGA
    Route::prefix('bodega')
        ->name('bodega.')
        ->group( function(){
            Route::apiResource('recepcion', App\Http\Controllers\Api\Bodega\RecepcionController::class);
        });

    // PLANEACION
    Route::prefix('planeacion')
        ->name('planeacion.')
        ->group( function(){
            Route::apiResource('recepcion', App\Http\Controllers\Api\Planeacion\RecepcionController::class);
        });

    // PRODUCCION
    Route::prefix('produccion')
        ->name('produccion.')
        ->group( function(){
            Route::apiResource('recepcion', App\Http\Controllers\Api\Produccion\RecepcionController::class);
        });

    // CALIDAD
    Route::prefix('calidad')
        ->name('calidad.')
        ->group( function(){
            Route::apiResource('recepcion', App\Http\Controllers\Api\Calidad\RecepcionController::class);
        });
});
