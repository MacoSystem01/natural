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


    // API PLANEACIÓN
    Route::prefix('planeacion')->group(function () {

        // Conciliación Orden Producción
        Route::controller(App\Http\Controllers\Planeacion\ConciliacionOrdenProduccionController::class)
            ->prefix('conciliacion-orden-produccion')
            ->group(function () {
                Route::get('/', 'index');
                Route::get('/pdf/{id}', 'descargarPDF')->name('api.planeacion.conciliacionOrdenProduccion.pdf');
            });

        // Detalle Acondicionamiento
        Route::controller(App\Http\Controllers\Planeacion\DetalleAcondicionamientoController::class)
            ->prefix('detalle-acondicionamiento')
            ->group(function () {
                Route::get('/', 'index');
            });

        // Detalle Dispensado
        Route::controller(App\Http\Controllers\Planeacion\DetalleDispensadoController::class)
            ->prefix('detalle-dispensado')
            ->group(function () {
                Route::get('/', 'index');
            });

        // Detalle Envasado
        Route::controller(App\Http\Controllers\Planeacion\DetalleEnvasadoController::class)
            ->prefix('detalle-envasado')
            ->group(function () {
                Route::get('/', 'index');
            });

        // Detalle Fabricación
        Route::controller(App\Http\Controllers\Planeacion\DetalleFabricacionController::class)
            ->prefix('detalle-fabricacion')
            ->group(function () {
                Route::get('/', 'index');
            });

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
    });
});
