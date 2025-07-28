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
        Schema::create('trabajo_bodega_me', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // FORMULARIO 1
            $table->string('producto');
            $table->string('presentacion');
            $table->string('op');
            $table->string('lote');
            $table->decimal('tamano_lote', 10, 2);
            $table->decimal('cantidad', 10, 2);
            // PRODUCTO
            $table->string('codigo_envase');
            $table->string('materia_envase');
            $table->decimal('cant_solicitada_envase', 10, 2);
            $table->decimal('cant_entregada_envase', 10, 2);
            $table->string('numero_lote_envase');
            $table->integer('num_contenedores_envase');
            $table->string('verificado_produccion_envase');
            // VERIFICACIÓN
            $table->string('verificado_nombre');
            $table->date('verificado_fecha');
            $table->string('entregado_nombre');
            $table->date('entregado_fecha');
            $table->string('recibido_nombre');
            $table->date('recibido_fecha');
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
        Schema::dropIfExists('trabajo_bodega_me');
    }
};
