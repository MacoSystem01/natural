<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use App\Models\Planeacion\OrdenProduccion;

class DetalleDispensado extends Model
{
    protected $table = 'detalle_dispensado';

    protected $fillable = [
        'orden_produccion_id',
        'hora_inicio',
        'hora_fin',
        'numero_lote',
        'codigo_materia_prima',
        'materia_prima_requerida',
        'porcentaje',
        'cantidad_estandar',
        'unidad',
        'fecha_pesaje',
        'cantidad_pesada',
        'pesado_por',
        'fecha_verificacion',
        'peso_corregido',
        'verificado_por',
    ];

    public function orden() {
        return $this->belongsTo(OrdenProduccion::class, 'orden_produccion_id');
    }
}
