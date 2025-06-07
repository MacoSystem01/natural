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
    Route::apiResource('procesos', App\Http\Controllers\Api\ProcesosController::class);
    
    Route::get('formularios/proceso', [App\Http\Controllers\Api\FormulariosController::class, 'proceso'])->name('formularios.proceso');
    Route::apiResource('formularios', App\Http\Controllers\Api\FormulariosController::class);

    Route::apiResource('formularios_areas', App\Http\Controllers\Api\FormularioAreaController::class)->only(['store', 'destroy']);

    Route::get('versiones/formulario', [App\Http\Controllers\Api\VersionesController::class, 'formulario'])->name('versiones.formulario');
    Route::apiResource('versiones', App\Http\Controllers\Api\VersionesController::class);

    
    Route::get('campos/version', [App\Http\Controllers\Api\CamposController::class, 'version'])->name('campos.version');
    Route::apiResource('campos', App\Http\Controllers\Api\CamposController::class);
});
