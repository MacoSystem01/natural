<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class OrdenProduccion extends Model
{
    use SoftDeletes;

    protected $table = 'ordenes_produccion';

    protected $fillable = [
        'created_by',
        'codigo',
        'producto',
        'presentacion_ml',
        'lote',
        'registro_sanitario',
        'codigo_barras',
        'tamano_ml',
        'fecha_vencimiento',
        'unidades_por_lote',
        'fecha_emision',
        'observaciones',
        'emitido_por',
        'fecha_emitido',
        'revisado_por',
        'fecha_revisado',
        'descargado_por',
        'fecha_descargado',
    ];

    public function creator() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function emitidoPor() {
        return $this->belongsTo(User::class, 'emitido_por');
    }

    public function revisadoPor() {
        return $this->belongsTo(User::class, 'revisado_por');
    }

    public function descargadoPor() {
        return $this->belongsTo(User::class, 'descargado_por');
    }

    public function dispensado() {
        return $this->hasMany(DetalleDispensado::class, 'orden_produccion_id');
    }

    public function fabricacion() {
        return $this->hasMany(DetalleFabricacion::class, 'orden_produccion_id');
    }
}
