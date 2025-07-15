<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Formularios;

class FormularioAreaController extends Controller
{
    
    public function store(Request $request)
    {
        $formulario = Formularios::findOrFail($request->formularios_id);
        $formulario->areas()->syncWithoutDetaching($request->areas_id);
    }

    public function destroy($id)
    {
        \DB::table('formularios_areas')->where('id', $id)->delete();
    }
}
