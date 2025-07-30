<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DetalleEnvasadoController extends Controller
{
    public function index()
    {
        return view('planeacion.envasado.index');
    }
}
