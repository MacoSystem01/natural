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
        Schema::create('f_pr_08_envasado', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');   
            $table->string('lote');
            $table->string('registro_sanitario');
            $table->string('codigo_barras');
            $table->decimal('tamaño', 10, 2);
            $table->timestamp('fecha_vencimiento')->nullable();
            $table->string('unidades_lote');
            // PROCESO ENVASADO
            $table->integer('numero_lote');
            $table->string('codigo_material');
            $table->string('material_requerido');
            $table->integer('unidad');
            $table->string('cantidad_lote_estandar');
            $table->timestamp('entrega_material_orden_fecha')->nullable();
            $table->integer('entrega_material_orden_cantidad');
            $table->string('revisado_por');
            $table->timestamp('revisado_fecha')->nullable();
            // ENVASADO
            $table->timestamp('fecha_envasado')->nullable();
            $table->string('personal_envasado_nombre');
            $table->integer('personal_envasado_codigo');
            $table->timestamp('hora_inicio_envasado')->nullable();
            $table->timestamp('hora_fin_envasado')->nullable();
            $table->string('cantidad_un');
            $table->string('observaciones_generales');
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
        Schema::dropIfExists('f_pr_08_envasado');
    }
};
