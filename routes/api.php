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

    Route::prefix('bodega')
        ->name('bodega.')
        ->group( function(){
            Route::prefix('recepcion')
                ->controller(App\Http\Controllers\Api\Bodega\RecepcionController::class)
                ->name('recepcion.')
                ->group( function(){
                    Route::post('next/{tipo_material}', 'next')->name('next');
                    
                    Route::post('byOP/{op}', 'byOP')->name('find');
                });
            Route::apiResource('recepcion', App\Http\Controllers\Api\Bodega\RecepcionController::class);
        });
});
