<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TiempoImproductivoController extends Controller
{
    public function index()
    {
        return view('planeacion.tiempo_improductivo.index');
    }
}
