<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Campos;
use App\Models\Procesos;
use App\Http\Resources\CamposResource;

class CamposController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lista = Campos::all();
        return CamposResource::collection( $lista );
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
            'versiones_id' => 'required|integer|max:255',
        ]);

        $data = $request->except('options_json');
        $data['options_json'] = json_encode( $request->options_json );
        
        if ($data['orden'] > 0) {
            Campos::where('orden', '>=', $data['orden'])->increment('orden');
        } else {
            $data['orden'] = Campos::max('orden') + 1;
        }

        $item = Campos::create( $data );
        // return new CamposResource( $item );
    }

    /**
     * Display the specified resource.
     */
    public function show(Campos $campo)
    {
        return new CamposResource($campo);
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
    public function update(Request $request, Campos $campo)
    {
        $request->validate([
            'versiones_id' => 'required|integer|max:255',
        ]);
        
        $data = $request->except('options_json');
        $data['options_json'] = json_encode( $request->options_json );
        
        $currentOrden = $campo->orden;

        if ($data['orden'] != $currentOrden) {
            if ($data['orden'] > $currentOrden) {
                Campos::where('orden', '>', $currentOrden)
                    ->where('orden', '<=', $data['orden'])
                    ->decrement('orden');
            } else {
                Campos::where('orden', '>=', $data['orden'])
                    ->where('orden', '<', $currentOrden)
                    ->increment('orden');
            }
        }

        $campo->update( $data );
        // return new CamposResource($campo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Campos $campo)
    {
        $campo->delete();
    }


    public function version(Request $request)
    {
        $lista = Campos::with('version.formulario.proceso')
            ->where('versiones_id', $request->id)
            ->orderBy('orden')
            ->get();

        return CamposResource::collection( $lista );
    }
}
