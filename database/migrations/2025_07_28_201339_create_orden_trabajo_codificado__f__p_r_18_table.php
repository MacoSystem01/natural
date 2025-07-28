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
        Schema::create('orden_trabajo_codificado__f__p_r_18', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');
            $table->decimal('tamano_lote', 10, 2);
            $table->decimal('cantidad', 10, 2);
            $table->string('op');
            $table->string('registro_sanitario');
            $table->string('codigo_barras');
            $table->string('numero_lote');
            $table->timestamp('fecha_vencimiento');
            $table->string('codigo_codificar');
            $table->string('material_codificar');
            $table->string('cantidad_solicitada');
            $table->string('cantidad_entregada');
            $table->string('numero_lote');
            $table->string('entregado_nombre');
            $table->timestamp('entregado_fecha');
            $table->string('recibido_nombre');
            $table->timestamp('recibido_fecha');
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
        Schema::dropIfExists('orden_trabajo_codificado__f__p_r_18');
    }
};
