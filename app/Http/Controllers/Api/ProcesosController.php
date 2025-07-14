<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Procesos;
use App\Http\Resources\ProcesosResource;

class ProcesosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lista = Procesos::all();
        return ProcesosResource::collection( $lista );
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
        $request->validate([
            'proceso' => 'required|string|max:255',
        ]);

        $item = Procesos::create( $request->all() );
        // return new ProcesosResource( $item );
    }

    /**
     * Display the specified resource.
     */
    public function show(Procesos $proceso)
    {
        return new ProcesosResource($proceso);
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
    public function update(Request $request, Procesos $proceso)
    {
        $request->validate([
            'proceso' => 'required|string|max:255',
        ]);

        $proceso->update( $request->all() );
        // return new ProcesosResource($proceso);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Procesos $proceso)
    {
        $proceso->delete();
    }
}
