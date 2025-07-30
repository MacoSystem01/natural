<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use App\Models\Planeacion\OrdenProduccion;

class DetalleAcondicionamiento extends Model
{
    protected $table = 'detalle_acondicionamiento';

    protected $fillable = [
        'orden_produccion_id',

        // PROCESO DE ACONDICIONAMIENTO
        'numero_lote',
        'codigo_material',
        'material_requerido',
        'unidad',
        'cantidad_estandar',

        // ENTREGA MATERIAL POR ORDEN
        'fecha_entrega_material_1',
        'cantidad_entregada_1',
        'fecha_revision_1',
        'firma_revision_1',

        'fecha_entrega_material_2',
        'cantidad_entregada_2',
        'fecha_revision_2',
        'firma_revision_2',

        'fecha_entrega_material_3',
        'cantidad_entregada_3',
        'fecha_revision_3',
        'firma_revision_3',

        // PERSONAL ACONDICIONAMIENTO 1
        'fecha_acondicionamiento_1',
        'codigo_personal_1',
        'nombre_personal_1',
        'hora_inicio_1',
        'hora_fin_1',
        'cantidad_unidades_1',

        // PERSONAL ACONDICIONAMIENTO 2
        'codigo_personal_2',
        'nombre_personal_2',
        'hora_inicio_2',
        'hora_fin_2',
        'fecha_acondicionamiento_2',
        'cantidad_unidades_2',

        // PERSONAL ACONDICIONAMIENTO 3
        'codigo_personal_3',
        'nombre_personal_3',
        'hora_inicio_3',
        'hora_fin_3',
        'fecha_acondicionamiento_3',
        'cantidad_unidades_3',

        // OBSERVACIONES
        'observaciones_generales',

        // FIRMAS
        'emitido_por_produccion_firma',
        'emitido_por_produccion_fecha',
        'revisado_por_calidad_firma',
        'revisado_por_calidad_fecha',
        'descargado_por_inventario_firma',
        'descargado_por_inventario_fecha',
    ];

    public function orden()
    {
        return $this->belongsTo(OrdenProduccion::class, 'orden_produccion_id');
    }
}
