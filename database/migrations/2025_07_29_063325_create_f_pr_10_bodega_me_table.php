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
        Schema::create('f_pr_10_bodega_me', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('producto');
            $table->string('presentacion');
            $table->string('op');
            $table->string('lote');
            $table->decimal('tamano_lote');
            $table->integer('cantidad_un');
            // REGISTRO
            $table->string('codigo');
            $table->string('material_envase');
            $table->decimal('cant_solicitada');
            $table->decimal('cantidad_entregada');
            $table->string('numero_lote');
            $table->decimal('num_contenedores');
            $table->string('verificado_produccion');
            // FIRMA
            $table->string('verificado_por');
            $table->timestamp('verificado_fecha')->nullable();
            $table->string('entregado_por');
            $table->timestamp('entregado_fecha')->nullable();
            $table->string('recibido_por');
            $table->timestamp('recibido_fecha')->nullable();
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
        Schema::dropIfExists('f_pr_10_bodega_me');
    }
};
