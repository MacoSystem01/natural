<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Procesos extends Model
{
    use SoftDeletes;

    protected $table = 'procesos';
    protected $guarded = [];

    function formularios() {
        return $this->hasMany(Formularios::class, 'procesos_id');
    }
}
