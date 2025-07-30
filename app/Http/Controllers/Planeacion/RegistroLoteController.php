<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegistroLoteController extends Controller
{
    public function index()
    {
        return view('planeacion.registro_lote.index');
    }
}
