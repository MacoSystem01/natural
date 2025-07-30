<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class FPr09BodegaMP extends Model
{
    use SoftDeletes;

    protected $table = 'f_pr_09_bodega_mp';

    protected $fillable = [
        'producto',
        'lote',
        'presentacion',
        'tamaño_lote',
        'unidad_medida',
        'op',
        'verificado_por',
        'fecha_verificado',
        'entregado_por',
        'fecha_entregado',
        'recibido_por',
        'fecha_recibido',
        'observaciones',
        'created_by'
    ];

    // Relación con los ítems de materia prima (orden_trabajo_mp_items)
    public function items()
    {
        return $this->hasMany(OrdenTrabajoMPItem::class, 'orden_id');
    }

    // Relación con el usuario que creó la orden
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
