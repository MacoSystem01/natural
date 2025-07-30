<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrdenProduccionController extends Controller
{
    public function index()
    {
        return view('planeacion.orden.index');
    }
}
