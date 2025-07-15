<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CamposCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        if (is_null($this->resource)) {
            return [];
        }

        return $this->collection->map->only(
            'id',
            'version',
            'etiqueta',
            'nombre',
            'tipo',
            'requerido',
            'usa_bd',
            'tabla_fuente',
            'columna_valor',
            'columna_texto',
            'depende_de',
            'grupo',
            'orden',
        )->all();
    }
}
