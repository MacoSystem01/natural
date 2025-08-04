<?php

namespace App\Http\Controllers\Bodega;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Materiales;
use App\Models\UnidadesMedida;

class DevolucionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('areas/bodega/devolucion/Devolucion', [
            'unidades' => UnidadesMedida::orderBy('descripcion')->get(),
            'materiales' => Materiales::orderBy('descripcion')->get(),
        ]);
    }

    public function descargarPDF($id)
    {
        
    }
}
