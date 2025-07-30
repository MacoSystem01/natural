<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use App\Models\Planeacion\OrdenProduccion;

class DetalleFabricacion extends Model
{
    protected $table = 'detalle_fabricacion';

    protected $fillable = [
        'orden_produccion_id',
        'fecha_fabricacion',
        'sublote_numero',
        'hora_inicio',
        'hora_fin',
        'fabricado_por',
        'tarro_1_peso_neto',
        'tarro_2_peso_neto',
        'tarro_3_peso_neto',
        'tarro_4_peso_neto',
        'verificado_por',
    ];

    public function orden() {
        return $this->belongsTo(OrdenProduccion::class, 'orden_produccion_id');
    }
}
