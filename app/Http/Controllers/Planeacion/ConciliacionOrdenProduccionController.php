<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConciliacionOrdenProduccionController extends Controller
{
    public function index()
    {
        return view('planeacion.conciliacion.index');
    }

    public function descargarPDF($id)
    {
        // Lógica para generar el PDF
        return "Descargando PDF de Conciliación con ID: {$id}";
    }
}
