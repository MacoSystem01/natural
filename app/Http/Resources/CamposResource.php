<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CamposResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if (is_null($this->resource)) {
            return [];
        }

        return [
            'id' => $this->id,
            'version' => $this->version,
            'etiqueta' => $this->etiqueta,
            'nombre' => $this->nombre,
            'tipo' => $this->tipo,
            'requerido' => $this->requerido,
            'usa_bd' => $this->usa_bd,
            'tabla_fuente' => $this->tabla_fuente,
            'columna_valor' => $this->columna_valor,
            'columna_texto' => $this->columna_texto,
            'depende_de' => $this->depende_de,
            'grupo' => $this->grupo,
            'orden' => $this->orden,
        ];
    }
}
