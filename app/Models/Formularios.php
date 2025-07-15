<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Formularios extends Model
{
    use SoftDeletes;

    protected $table = 'formularios';
    protected $guarded = [];

    function proceso() {
        return $this->hasOne(Procesos::class, 'id', 'procesos_id');
    }

    function areas() {
        return $this->belongsToMany(Areas::class, 'formularios_areas', 'formularios_id', 'areas_id')
                ->withPivot('id')
                ->withTimestamps();
    }
    
    function versiones() {
        return $this->hasMany(Versiones::class, 'formularios_id');
    }
}
