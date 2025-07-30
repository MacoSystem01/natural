<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DetalleDispensadoController extends Controller
{
    public function index()
    {
        return view('planeacion.dispensado.index');
    }
}
