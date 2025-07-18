<?php

namespace App\Http\Controllers\Api\Bodega;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bodega\Recepcion;

class RecepcionController extends Controller
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
        $data['created_by'] = \Auth::user()->id;

        $item = Recepcion::create( $data );

        return response()->json(['id' => $item->id]);
        // return  new AreasResource($item);
    }

    /**
     * Display the specified resource.
     */
    public function show(Recepcion $recepcion)
    {
        // return  new AreasResource($area);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Recepcion $recepcion)
    {
        /*$request->validate([
            'area' => 'required|string|max:255',
        ]);*/

        $recepcion->update( $request->all() );
        // return  new AreasResource($area);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recepcion $recepcion)
    {
        $recepcion->delete();
    }
}
