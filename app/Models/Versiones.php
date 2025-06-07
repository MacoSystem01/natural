<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Versiones extends Model
{
    use SoftDeletes;

    protected $table = 'versiones';
    protected $guarded = [];
    
    function formulario() {
        return $this->belongsTo(Formularios::class, 'formularios_id');
    }
}
