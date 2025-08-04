<?php

namespace App\Http\Controllers\Api\Bodega;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bodega\Entrega;

class EntregaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $lista = Areas::all();
        // return AreasResource::collection( $lista );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {        
        /*$request->validate([
            'area' => 'required|string|max:255',
        ]);*/

        $data = $request->all();
        $data['creado_por'] = \Auth::user()->id;

        $item = Entrega::create( $data );

        return response()->json(['id' => $item->id]);
        // return  new AreasResource($item);
    }

    /**
     * Display the specified resource.
     */
    public function show(Entrega $recepcion)
    {
        return response()->json(['recepcion' => $recepcion]);
        // return  new AreasResource($area);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Entrega $recepcion)
    {
        /*$request->validate([
            'area' => 'required|string|max:255',
        ]);*/

        $data = $request->all();
        $data['modificado_por'] = \Auth::user()->id;

        $recepcion->update( $data );

        return response()->json(['recepcion' => $recepcion]);
        // return  new AreasResource($area);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Entrega $recepcion)
    {
        $recepcion->delete();
    }


    public function next(String $tipo_material)
    {
        $nextID = Entrega::where('tipo_material', $tipo_material)->max('lote_nmd') + 1;
        return ['next' => str_pad($nextID, 4, "0", STR_PAD_LEFT) ];
    }


    public function byOP(String $op)
    {
        $str = explode('-', $op);
        
        if( isset($str[1]) ) {
            $recepcion = Entrega::with('producto')
                            ->where('tipo_material', $str[0])
                            ->where('id', $str[1])
                            ->first();
    
            return response()->json(['recepcion' => $recepcion]);
        } else {
            return null;
        }
    }
}
