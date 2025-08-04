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
    Route::prefix('bodega')
        ->group( function(){
            Route::prefix('recepcion')
            ->controller(App\Http\Controllers\Bodega\RecepcionController::class)
            ->group( function(){
                Route::get('/', 'index');
                Route::get('/pdf/{id}', 'descargarPDF')->name('bodega.recepcion.pdf');
            });

            Route::prefix('entrega')
            ->controller(App\Http\Controllers\Bodega\EntregaController::class)
            ->group( function(){
                Route::get('/', 'index');
            });

            Route::prefix('salida')
            ->controller(App\Http\Controllers\Bodega\SalidaController::class)
            ->group( function(){
                Route::get('/', 'index');
            });

            Route::prefix('devolucion')
            ->controller(App\Http\Controllers\Bodega\DevolucionController::class)
            ->group( function(){
                Route::get('/', 'index');
            });

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

        // ORDEN DE TRABAJO BODEGA MEE
        Route::controller(App\Http\Controllers\Planeacion\OrdenTrabajoBodegaController::class)
            ->prefix('orden-trabajo-bodega')
            ->group(function () {
                Route::get('/{tipo_material}', 'index');
            });

        // MATERIAL ENVASE Y EMPAQUE DISPENSADO
        Route::controller(App\Http\Controllers\Planeacion\MaterialDispensadoController::class)
            ->prefix('material-dispensado')
            ->group(function () {
                Route::get('/{tipo_material}', 'index');
            });

        // ORDEN DE TRABAJO CODIFICADO
        Route::controller(App\Http\Controllers\Planeacion\OrdenTrabajoCodificadoController::class)
            ->prefix('orden-trabajo-codificado')
            ->group(function () {
                Route::get('/', 'index');
            });
        //REGISTRO LOTE
            Route::controller(App\Http\Controllers\Planeacion\RegistroLoteController::class)
                ->prefix('registrolote')
                ->group(function () {
                    Route::get('/', 'index')->name('index');
                    Route::get('pdf/{registroLote}', 'descargarPDF')->name('pdf');
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
