<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FPr09BodegaMPController extends Controller
{
    public function index()
    {
        return view('planeacion.bodega_mp.index');
    }
}
