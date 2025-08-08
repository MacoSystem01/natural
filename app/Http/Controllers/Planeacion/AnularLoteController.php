<?php

namespace App\Http\Controllers\Planeacion;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnularLoteController extends Controller
{
    public function index()
    {
        return Inertia::render('areas/planeacion/anulacion/AnularLote');
    }

    public function descargarPDF($id)
    {
        return "Descargando PDF Anulacion de Lote con ID: {$id}";
    }
}
