<?php

namespace App\Http\Controllers\Planeacion;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdenProduccionController extends Controller
{
    public function index()
    {
        return Inertia::render('areas/planeacion/orden_produccion/OrdenProduccion');
        
    }

    public function descargarPDF($id)
    {
        return "Descargando PDF Orden de Producción con ID: {$id}";
    }
}