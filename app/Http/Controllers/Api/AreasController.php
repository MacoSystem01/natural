<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Areas;
use App\Http\Resources\AreasResource;

class AreasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lista = Areas::all();
        return AreasResource::collection( $lista );
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
            'area' => 'required|string|max:255',
        ]);

        $item = Areas::create( $request->all() );
        // return  new AreasResource($item);
    }

    /**
     * Display the specified resource.
     */
    public function show(Areas $area)
    {
        return  new AreasResource($area);
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
    public function update(Request $request, Areas $area)
    {
        $request->validate([
            'area' => 'required|string|max:255',
        ]);

        $area->update( $request->all() );
        // return  new AreasResource($area);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Areas $area)
    {
        $area->delete();
    }
}
