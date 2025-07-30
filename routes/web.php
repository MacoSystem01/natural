<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');


    Route::controller(App\Http\Controllers\AreasController::class)
        ->prefix('areas')
        ->group( function(){
            Route::get('/', 'index');
        });
    
        // RUTA BODEGA
    Route::controller(App\Http\Controllers\Bodega\RecepcionController::class)
        ->prefix('bodega')
        ->group( function(){
            Route::prefix('recepcion')
            ->group( function(){
                Route::get('/', 'recepcion');
                Route::get('/pdf/{id}', 'descargarPDF')->name('bodega.recepcion.pdf');
            });

            Route::get('/entrega', 'entrega');
            Route::get('/salida', 'salida');
            Route::get('/devolucion', 'devolucion');
        });

        // PLANEACIÓN
        Route::prefix('planeacion')->group(function () {

            // Conciliación Orden Producción
            Route::controller(App\Http\Controllers\Planeacion\ConciliacionOrdenProduccionController::class)
                ->prefix('conciliacion-orden-produccion')
                ->group(function () {
                    Route::get('/', 'index');
                    Route::get('/pdf/{id}', 'descargarPDF')->name('planeacion.conciliacionOrdenProduccion.pdf');
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

        // PRODUCCIÓN
    // Route::controller(App\Http\Controllers\Produccion\RecepcionController::class)
    //     ->prefix('produccion')
    //     ->group( function(){
    //         Route::prefix('recepcion')
    //         ->group( function(){
    //             Route::get('/', 'recepcion');
    //             Route::get('/pdf/{id}', 'descargarPDF')->name('produccion.recepcion.pdf');
    //         });

    //         Route::get('/entrega', 'entrega');
    //         Route::get('/salida', 'salida');
    //         Route::get('/devolucion', 'devolucion');
    //     });

        // RUTA CALIDAD
    // Route::controller(App\Http\Controllers\Calidad\RecepcionController::class)
    //     ->prefix('calidad')
    //     ->group( function(){
    //         Route::prefix('recepcion')
    //         ->group( function(){
    //             Route::get('/', 'recepcion');
    //             Route::get('/pdf/{id}', 'descargarPDF')->name('calidad.recepcion.pdf');
    //         });

    //         Route::get('/entrega', 'entrega');
    //         Route::get('/salida', 'salida');
    //         Route::get('/devolucion', 'devolucion');
    //     });
    

        
    Route::controller(App\Http\Controllers\UsuariosController::class)
        ->prefix('usuarios')
        ->group( function(){
            Route::get('/', 'index');
        });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
