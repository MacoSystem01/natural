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
        Schema::create('trabajo_bodega_mp', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // FORMULARIO 1
            $table->string('producto');
            $table->string('presentacion');
            $table->string('op');
            $table->string('lote');
            $table->string('tamano_lote');
            $table->decimal('cantidad', 10, 2);
            // PRODUCTO
            $table->string('codigo_producto');
            $table->string('materia_prima_producto');
            $table->decimal('cant_solicitada_producto', 10, 2);
            $table->decimal('cant_entregada_producto', 10, 2);
            $table->string('numero_lote_producto');
            $table->integer('num_contenedores_producto');
            $table->string('verificado_produccion_producto');
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
        Schema::dropIfExists('trabajo_bodega_mp');
    }
};
