<?php

namespace App\Http\Controllers\Bodega;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Bodega\Recepcion;

class RecepcionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function recepcion()
    {
        return Inertia::render('areas/bodega/recepcion/Recepcion', []);
    }

    public function descargarPDF($id)
    {
        $item = Recepcion::with('creator', 'approver')
            ->find($id);
        
        $pdf = Pdf::loadView('pdf.bodega.recepcion', compact('item'));
        
        return $pdf->download('bodega_recepcion_'.$id.'.pdf');
    }

    public function entrega()
    {
        return Inertia::render('areas/bodega/entrega/Entrega', []);
    }

    public function salida()
    {
        return Inertia::render('areas/bodega/salida/Salida', []);
    }

    public function devolucion()
    {
        return Inertia::render('areas/bodega/devolucion/Devolucion', []);
    }
}
