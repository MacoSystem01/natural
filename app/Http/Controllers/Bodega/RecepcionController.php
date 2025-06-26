<?php

namespace App\Http\Controllers\Bodega;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Areas;
use App\Models\Formularios;
use App\Http\Resources\FormulariosResource;
use App\Http\Resources\FormulariosCollection;
use App\Http\Resources\AreasCollection;

class RecepcionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lista = Formularios::with('proceso')
            ->orderBy('orden')
            ->paginate(1);

        return Inertia::render('areas/bodega/recepcion/Index', [
            'collection' => new FormulariosCollection($lista)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }


    public function areas(string $id)
    {
        $formulario = Formularios::findOrFail($id);
        $lista = $formulario->areas()->paginate(1);

        return Inertia::render('formularios/areas/Index', [
            'formulario' => new FormulariosResource($formulario),
            'collection' => new AreasCollection($lista)
        ]);
    }
}
