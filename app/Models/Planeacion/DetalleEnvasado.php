<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use App\Models\Planeacion\OrdenProduccion;

class DetalleEnvasado extends Model
{
    protected $table = 'detalle_envasado';

    protected $fillable = [
        'orden_produccion_id',

        // PROCESO DE ENVASADO
        'numero_lote',
        'codigo_material',
        'material_requerido',
        'unidad',
        'cantidad_estandar',

        // ENTREGA MATERIAL POR ORDEN
        'fecha_entrega_orden',
        'cantidad_entregada_orden',
        'fecha_revision',
        'firma_revision',

        // PERSONAL ENVASADO 1
        'fecha_envasado_1',
        'codigo_personal_1',
        'nombre_personal_1',
        'hora_inicio_1',
        'hora_fin_1',
        'fecha_envasado_final_1',
        'cantidad_unidades_1',

        // PERSONAL ENVASADO 2
        'codigo_personal_2',
        'nombre_personal_2',
        'hora_inicio_2',
        'hora_fin_2',
        'fecha_envasado_final_2',
        'cantidad_unidades_2',

        // PERSONAL ENVASADO 3
        'codigo_personal_3',
        'nombre_personal_3',
        'hora_inicio_3',
        'hora_fin_3',
        'fecha_envasado_final_3',
        'cantidad_unidades_3',

        // OBSERVACIONES
        'observaciones_generales',
    ];

    public function orden()
    {
        return $this->belongsTo(OrdenProduccion::class, 'orden_produccion_id');
    }
}
