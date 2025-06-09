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

    Route::controller(App\Http\Controllers\ProcesosController::class)
        ->prefix('procesos')
        ->group( function(){
            Route::get('/', 'index');
        });

    Route::controller(App\Http\Controllers\FormulariosController::class)
        ->prefix('formularios')
        ->group( function(){
            Route::get('/', 'index');
            Route::get('/{id}/areas', 'areas')->name('formularios.areas');
            Route::get('/{id}/versiones', 'versiones')->name('formularios.versiones');
        });

    Route::controller(App\Http\Controllers\VersionesController::class)
        ->prefix('versiones')
        ->group( function(){
            Route::get('/', 'index');
        });

    Route::controller(App\Http\Controllers\CamposController::class)
        ->prefix('campos')
        ->group( function(){
            Route::get('/', 'index');
        });

        
    Route::controller(App\Http\Controllers\UsuariosController::class)
        ->prefix('usuarios')
        ->group( function(){
            Route::get('/', 'index');
        });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
