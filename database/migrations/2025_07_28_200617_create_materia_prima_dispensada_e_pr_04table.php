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
        Schema::create('materia_prima_dispensada__e__p_r_04', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('descripcion');
            $table->string('codigo');
            $table->decimal('numero_lote', 10, 2);
            $table->string('producto');
            $table->string('presentacion');
            $table->string('lote');
            $table->string('op');
            $table->decimal('cantidad', 10, 2);
            $table->string('realizado_nombre');
            $table->timestamp('realizado_fecha');
            $table->string('verificado_nombre');
            $table->timestamp('verificado_fecha');
            $table->string('observaciones');

            // METADATOS
            $table->timestamp('fecha_contenida')->nullable();
            $table->timestamp('aproved_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materia_prima_dispensada__e__p_r_04');
    }
};
