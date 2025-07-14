<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Formularios;
use App\Models\Procesos;
use App\Http\Resources\FormulariosResource;

class FormulariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lista = Formularios::orderBy('orden')->get();
        return FormulariosResource::collection( $lista );
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
            'formulario' => 'required|string|max:255',
        ]);

        $data = $request->all();
        if ($data['orden'] > 0) {
            Formularios::where('orden', '>=', $data['orden'])->increment('orden');
        } else {
            $data['orden'] = Formularios::max('orden') + 1;
        }

        $item = Formularios::create( $data );
        // return new FormulariosResource( $item );
    }

    /**
     * Display the specified resource.
     */
    public function show(Formularios $formulario)
    {
        return new FormulariosResource($formulario);
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
    public function update(Request $request, Formularios $formulario)
    {
        $request->validate([
            'formulario' => 'required|string|max:255',
        ]);

        $data = $request->all();
        $currentOrden = $formulario->orden;

        if ($data['orden'] != $currentOrden) {
            if ($data['orden'] > $currentOrden) {
                Formularios::where('orden', '>', $currentOrden)
                    ->where('orden', '<=', $data['orden'])
                    ->decrement('orden');
            } else {
                Formularios::where('orden', '>=', $data['orden'])
                    ->where('orden', '<', $currentOrden)
                    ->increment('orden');
            }
        }

        $formulario->update( $data );
        // return new FormulariosResource($formulario);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formularios $formulario)
    {
        $formulario->delete();
    }


    public function proceso(Request $request)
    {
        $proceso = Procesos::findOrFail($request->id);
        $lista = $proceso->formularios()->get();
        return FormulariosResource::collection( $lista );
    }
}
