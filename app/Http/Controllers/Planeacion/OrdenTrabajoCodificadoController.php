<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdenTrabajoCodificadoController extends Controller
{
    public function index()
    {
        return Inertia::render('areas/planeacion/OrdenTrabajoCodificado/OrdenTrabajoCodificado', []);
    }
}
