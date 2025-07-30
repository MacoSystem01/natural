<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class OrdenTrabajoMP extends Model
{
    use SoftDeletes;

    protected $table = 'orden_trabajo_mp';

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

    public function items()
    {
        return $this->hasMany(OrdenTrabajoMPItem::class, 'orden_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
