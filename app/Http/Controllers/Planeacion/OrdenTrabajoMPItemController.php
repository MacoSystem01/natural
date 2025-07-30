<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrdenTrabajoMPItemController extends Controller
{
    public function index()
    {
        return view('planeacion.orden_trabajo_mp.index');
    }
}
