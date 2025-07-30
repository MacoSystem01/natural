<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DetalleFabricacionController extends Controller
{
    public function index()
    {
        return view('planeacion.fabricacion.index');
    }
}
