<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('versiones', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('formularios_id')->constrained('formularios');

            $table->string('version')->default('1.0');
            $table->boolean('activa')->default(true);
            $table->boolean('locked')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('versiones');
    }
};
