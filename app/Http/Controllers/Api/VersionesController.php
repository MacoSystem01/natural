<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Versiones;
use App\Models\Procesos;
use App\Http\Resources\VersionesResource;

class VersionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lista = Versiones::all();
        return VersionesResource::collection( $lista );
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
            'version' => 'required|string|max:255',
        ]);

        if( $request->activa ) {
            Versiones::where('formularios_id', $request->formularios_id)
                ->update([
                    'activa' => false
                ]);
        }

        $item = Versiones::create( $request->all() );
        // return new VersionesResource( $item );
    }

    /**
     * Display the specified resource.
     */
    public function show(Versiones $versione)
    {
        return new VersionesResource($versione);
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
    public function update(Request $request, Versiones $versione)
    {
        $request->validate([
            'version' => 'required|string|max:255',
        ]);

        if( $request->activa ) {
            Versiones::where('formularios_id', $request->formularios_id)
                ->where('id', '!=', $versione->id)
                ->update([
                    'activa' => false
                ]);
        }

        $versione->update( $request->all() );
        // return new VersionesResource($versione);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Versiones $versione)
    {
        $versione->delete();
    }


    public function formulario(Request $request)
    {
        $lista = Versiones::with('formulario.proceso')
            ->where('formularios_id', $request->id)
            ->orderBy('id', 'DESC')
            ->get();

        return VersionesResource::collection( $lista );
    }
}
