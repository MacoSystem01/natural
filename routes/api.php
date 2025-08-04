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
            // API RECEPCION
            Route::prefix('recepcion')
                ->controller(App\Http\Controllers\Api\Bodega\RecepcionController::class)
                ->name('recepcion.')
                ->group( function(){
                    Route::post('next/{tipo_material}', 'next')->name('next');
                    
                    Route::post('byOP/{op}', 'byOP')->name('find');
                });
            Route::apiResource('recepcion', App\Http\Controllers\Api\Bodega\RecepcionController::class);

            // Entrega
        });


    // API PLANEACIÓN
    Route::prefix('planeacion')
        ->name('planeacion.')
        ->group( function(){
            // Route::apiResource('conciliacion-orden-produccion', App\Http\Controllers\Api\Planeacion\ConciliacionOrdenProduccionController::class);
            // Route::apiResource('detalle-acondicionamiento', App\Http\Controllers\Api\Planeacion\DetalleAcondicionamientoController::class);
            // Route::apiResource('detalle-dispensado', App\Http\Controllers\Api\Planeacion\DetalleDispensadoController::class);
            // Route::apiResource('detalle-envasado', App\Http\Controllers\Api\Planeacion\DetalleEnvasadoController::class);
            // Route::apiResource('detalle-fabricacion', App\Http\Controllers\Api\Planeacion\DetalleFabricacionController::class);
            // Route::apiResource('detalle-fabricacion', App\Http\Controllers\Api\Planeacion\DetalleFabricacionController::class);
        
        });


    Route::prefix('planeacion')->group(function () {
/*
        // FPr09 Bodega MP
        Route::controller(App\Http\Controllers\Planeacion\FPr09BodegaMPController::class)
            ->prefix('fpr09-bodega-mp')
            ->group(function () {
                Route::get('/', 'index');
            });

        // Orden Producción
        Route::controller(App\Http\Controllers\Planeacion\OrdenProduccionController::class)
            ->prefix('orden-produccion')
            ->group(function () {
                Route::get('/', 'index');
            });

        // Orden Trabajo MP Item
        Route::controller(App\Http\Controllers\Planeacion\OrdenTrabajoMPItemController::class)
            ->prefix('orden-trabajo-mp-item')
            ->group(function () {
                Route::get('/', 'index');
            });

        // Registro Lote
        Route::controller(App\Http\Controllers\Planeacion\RegistroLoteController::class)
            ->prefix('registro-lote')
            ->group(function () {
                Route::get('/', 'index');
            });

        // Tiempo Improductivo
        Route::controller(App\Http\Controllers\Planeacion\TiempoImproductivoController::class)
            ->prefix('tiempo-improductivo')
            ->group(function () {
                Route::get('/', 'index');
            });


*/
    });
});
