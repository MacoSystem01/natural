<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Campos extends Model
{
    use SoftDeletes;

    protected $table = 'campos';
    protected $guarded = [];
    
    function version() {
        return $this->belongsTo(Versiones::class, 'versiones_id');
    }
}
