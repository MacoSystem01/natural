<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use App\Models\Planeacion\OrdenProduccion;

class TiempoImproductivo extends Model
{
    protected $table = 'tiempos_improductivos';

    protected $fillable = [
        'orden_produccion_id',
        'fecha',
        'proceso',               // 'dispensado', 'fabricacion', 'envase', 'acondicionamiento'
        'codigo_parada',         // Código de tipo de parada
        'descripcion_parada',    // Detalle del motivo
        'hora_inicio',
        'hora_final',
        'observaciones'
    ];

    public function orden()
    {
        return $this->belongsTo(OrdenProduccion::class, 'orden_produccion_id');
    }
}
