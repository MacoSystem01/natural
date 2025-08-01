<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConciliacionOrdenProduccionController extends Controller
{
    public function index()
    {
        return Inertia::render('areas/planeacion/ConciliacionOrdenProduccion');
    }

    public function descargarPDF($id)
    {
        return "Descargando PDF de Conciliación con ID: {$id}";
    }
}
