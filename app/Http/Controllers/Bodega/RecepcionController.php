<?php

namespace App\Http\Controllers\Bodega;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Bodega\Recepcion;
use App\Models\Materiales;
use App\Models\UnidadesMedida;

class RecepcionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function recepcion()
    {
        $borrador = Recepcion::where('estado', 'B')
            ->where('created_by', \Auth::user()->id)
            ->first();

        return Inertia::render('areas/bodega/recepcion/Recepcion', [
            'constants' => config('constants'),
            'unidades' => UnidadesMedida::orderBy('descripcion')->get(),
            'materiales' => Materiales::orderBy('descripcion')->get(),
            'id' => $borrador?->id,
        ]);
    }

    public function descargarPDF($id)
    {
        $item = Recepcion::with('creator', 'approver', 'unidad_medida', 'producto')
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
        return Inertia::render('areas/bodega/salida/Salida', [
            'unidades' => UnidadesMedida::orderBy('descripcion')->get(),
            'materiales' => Materiales::orderBy('descripcion')->get(),
        ]);
    }

    public function devolucion()
    {
        return Inertia::render('areas/bodega/devolucion/Devolucion', [
            'unidades' => UnidadesMedida::orderBy('descripcion')->get(),
            'materiales' => Materiales::orderBy('descripcion')->get(),
        ]);
    }
}
