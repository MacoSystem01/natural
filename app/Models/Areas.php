<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Areas extends Model
{
    use SoftDeletes;

    protected $table = 'areas';
    protected $guarded = [];

    function formularios() {
        return $this->belongsToMany(Formularios::class, 'formularios_areas', 'areas_id', 'formularios_id')
                ->withPivot('id')
                ->withTimestamps();
    }
}
