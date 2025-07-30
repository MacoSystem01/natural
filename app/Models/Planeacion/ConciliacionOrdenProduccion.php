<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use App\Models\Planeacion\OrdenProduccion;

class ConciliacionOrdenProduccion extends Model
{
    protected $table = 'conciliacion_orden_produccion';

    protected $fillable = [
        'orden_produccion_id',

        // CATEGORIA DEL PROCESO: DISPENSADO / FABRICACION / ENVASADO / ACONDICIONAMIENTO
        'proceso', // 'dispensado', 'fabricacion', 'envase', 'acondicionamiento'

        // MATERIALES
        'numero_lote_material',
        'codigo_material',
        'material_requerido',
        'unidad',

        // ENTREGA MATERIAL POR ORDEN
        'fecha_entrega',
        'cantidad_entrega',

        // ADICIONES
        'fecha_adicion',
        'cantidad_adicion',

        // DEVOLUCIONES
        'fecha_devolucion',
        'cantidad_devolucion',

        // DESECHOS Y RENDIMIENTO
        'cantidad_despilfarro',
        'motivo_despilfarro',
        'porcentaje_rendimiento',

        'responsable',

        // TOTALES FINALES (última fila)
        'un_por_embalaje',
        'cajas_completas',
        'saldo_unidades',

        'cantidad_entregada_almacen',
        'cantidad_entregada_calidad',
        'cantidad_total_acondicionada',
        'cantidad_total_envasada',

        'desperdicio_unidades',
        'rendimiento_final', // Q total acondicionada / Q teórica

        // FIRMAS
        'firma_jefe_produccion',
        'fecha_revision_jefe_produccion',
    ];

    public function orden()
    {
        return $this->belongsTo(OrdenProduccion::class, 'orden_produccion_id');
    }
}
