<?php

namespace App\Models\Bodega;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class Recepcion extends Model
{
    use SoftDeletes;

    protected $table = 'registro_lote';
    protected $fillable=[
        'created_by',
        'codigo',
        'producto',
        'presentacion',
        'op',
        'tamaño',
        'cantidad',
        'lote',
        'fecha_vencimiento',
        'fecha_inicio',
        'fecha_finalizacion',
        'emision_orden_produccion_empaque',
        'despeje_dispensado',
        'etiquetas_materia_prima',
        'limpieza_area_equipos_dispensado',
        'despeje_procedimiento_fabricacion',
        'limpieza_area_equipos_fabricacion',
        'tarjeta_aprobacion_granel',
        'orden_trabajo_codificado',
        'despeje_linea_codificado',
        'controles_proceso_codificado',
        'despeje_procedimiento_envasado',
        'limpieza_area_equipos_envasado',
        'etiquetas_material_empaque',
        'controles_linea_envasado',
        'despeje_procedimiento_acondicionamiento',
        'limpieza_area_equipos_acondicionamiento',
        'controles_proceso_acondicionamiento',
        'formato_entrega_producto_terminado_almacen',
        'certificado_analisis_producto_terminado',
        'otros',
        'cantidad_producida',
        'fecha_produccion',
        'revisado_por',
        'fecha_revisado',
        'aprobado_por',
        'fecha_aprobado',
        'liberado_por',
        'fecha_liberado',

    ];
    
    function creator(){
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    function approver(){
        return $this->belongsTo(User::class, 'approved_by', 'id');
    }

    // ESTAS FUNCIONES SON CORRECTAS?
    function reviewedBy() {
        return $this->belongsTo(User::class, 'revisado_por', 'id');
    }

    function releasedBy() {
        return $this->belongsTo(User::class, 'liberado_por', 'id');
    }
}