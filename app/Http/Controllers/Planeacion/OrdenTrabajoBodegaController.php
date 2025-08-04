<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdenTrabajoBodegaController extends Controller
{
    public function index(string $tipo_material)
    {
        return Inertia::render('areas/planeacion/OrdenTrabajoBodega/OrdenTrabajoBodega', [
            'tipo_material' => $tipo_material,
        ]);
    }
}
