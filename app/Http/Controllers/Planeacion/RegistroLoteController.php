<?php

namespace App\Http\Controllers\Planeacion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistroLoteController extends Controller
{
    public function index()
    {
        return Inertia::render('areas/planeacion/registrolote/registrolote');
    }
}
