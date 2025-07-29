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
        Schema::create('f_pr_18_trabajo_codificado', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');
            $table->decimal('tamano_lote', 10, 2);
            $table->integer('cantidad');
            $table->string('op');
            $table->string('registro_sanitario');
            $table->string('codigo_barras');
            $table->integer('numero_lote');
            $table->timestamp('fecha_vencimiento')->nullable();
            $table->integer('codigo_material');
            $table->string('material_codificar');
            $table->decimal('cant_solicitada', 10, 2);
            $table->decimal('cant_entregada', 10, 2);
            $table->decimal('numero_lote_material', 10, 2);
            // FIRMA
            $table->string('entregado_por');
            $table->timestamp('fecha_entregado')->nullable();
            $table->string('recibido_por');
            $table->timestamp('fecha_recibido')->nullable();
            $table->string('observcacion');
            
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
        Schema::dropIfExists('f_pr_18_trabajo_codificado');
    }
};
