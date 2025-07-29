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
        Schema::create('f_pr_08_acondicionamiento', function (Blueprint $table) {
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
            // PROCESO DE ACONDICIONAMIENTO
            $table->integer('numero_lote');
            $table->string('codigo_material');
            $table->string('material_requerido');
            $table->integer('unidad');
            $table->string('cantidad_lote_estandar');
            $table->timestamp('entrega_material_orden_fecha')->nullable();
            $table->integer('entrega_material_orden_cantidad');
            $table->string('revisado_por');
            $table->timestamp('revisado_fecha')->nullable();
            // ACONDICIONAMIENTO
            $table->timestamp('fecha_acondicionamiento')->nullable();
            $table->string('personal_acondicionamiento_nombre');
            $table->integer('personal_acondicionamiento_codigo');
            $table->timestamp('hora_inicio_acondicionamiento')->nullable();
            $table->timestamp('hora_fin_acondicionamiento')->nullable();
            $table->string('cantidad_un');
            $table->string('observaciones_generales');
            // FIRMA
            $table->string('emitido_produccion_nombre');
            $table->timestamp('emitido_produccion_fecha')->nullable();
            $table->string('gestion_calidad_nombre');
            $table->timestamp('gestion_calidad_fecha')->nullable();
            $table->string('descargo_inventario_nombre');
            $table->timestamp('descargo_inventario_fecha')->nullable();
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
        Schema::dropIfExists('f_pr_08_acondicionamiento');
    }
};
