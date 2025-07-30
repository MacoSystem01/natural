<?php

namespace App\Models\Planeacion;

use Illuminate\Database\Eloquent\Model;

class OrdenTrabajoMPItem extends Model
{
    protected $table = 'orden_trabajo_mp_items';

    protected $fillable = [
        'orden_id',
        'codigo',
        'materia_prima',
        'cantidad_solicitada',
        'cantidad_entregada',
        'numero_lote',
        'num_contenedores',
        'verificado_produccion'
    ];

    public function orden()
    {
        return $this->belongsTo(OrdenTrabajoMP::class, 'orden_id');
    }
}
