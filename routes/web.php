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

        
    Route::controller(App\Http\Controllers\UsuariosController::class)
        ->prefix('usuarios')
        ->group( function(){
            Route::get('/', 'index');
        });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
