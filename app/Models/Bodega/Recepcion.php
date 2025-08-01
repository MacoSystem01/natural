<?php

namespace App\Models\Bodega;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
use App\Models\UnidadesMedida;
use App\Models\Materiales;

class Recepcion extends Model
{
    use SoftDeletes;

    protected $table = 'bodega_recepcion';
    protected $fillable=[
        'created_by',
        'updated_by',
        'approved_by',
        'materiales_id',
        'unidades_id',
        'tipo_material',
        'proveedor',
        'fabricante',
        'direccion',
        'orden_compra',
        'factura',
        'lote',
        'fecha_vencimiento',
        'lote_nmd',
        'cantidad_total',
        'cantidad_contenedor',
        'n_contenedor',
        'material',
        'descripcion',
        't_c',
        'certificado_analisis',
        'almacenar_especial',
        'observaciones',
        'contenedor_identificado',
        'contenedor_identificado_obs',
        'contendor_sucio',
        'contendor_sucio_obs',
        'contenedor_humedo',
        'contenedor_humedo_obs',
        'olor_extrano',
        'olor_extrano_obs',
        'contenedor_derrame',
        'contenedor_derrame_obs',
        'contenedor_golpeado',
        'contenedor_golpeado_obs',
        'contenedor_roto',
        'contenedor_roto_obs',
        'material_menor_cantidad',
        'material_menor_cantidad_obs',
        'material_mayor_cantidad',
        'material_mayor_cantidad_obs',
        'fecha_vigente',
        'fecha_vigente_obs',
        'material_factura',
        'material_factura_obs',
        'descripcion_corresponde',
        'descripcion_corresponde_obs',
        'material_certificado',
        'material_certificado_obs',
        'estado',
    ];

    protected $appends = [
        'tipo_material_obj'
    ];
    
    function creator(){
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    function approver(){
        return $this->belongsTo(User::class, 'approved_by', 'id');
    }
    
    function unidad_medida(){
        return $this->belongsTo(UnidadesMedida::class, 'unidades_id', 'id');
    }

    function producto(){
        return $this->belongsTo(Materiales::class, 'materiales_id', 'id');
    }

    function getTipoMaterialObjAttribute(){
        $materiales = collect( config('constants.tipo_material') );
        return $materiales->firstWhere('codigo', $this->tipo_material);
    }
}
