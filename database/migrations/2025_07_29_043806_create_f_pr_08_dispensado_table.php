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
        Schema::create('f_pr_08_dispensado', function (Blueprint $table) {
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
            // PROCESO DISPENSADO
            $table->timestamp('hora_inicio')->nullable();
            $table->timestamp('hora_fin')->nullable();
            $table->integer('numero_lote');
            $table->integer('codigo_materia_prima');
            $table->string('materia_prima_requerida');
            $table->decimal('porcentaje', 5, 2);
            $table->string('cantidad_estandar');
            $table->string('unidad');
            $table->timestamp('fecha_pesaje')->nullable();
            $table->decimal('cantidad_pesada', 10, 2);
            $table->string('pesado_por');
            $table->timestamp('fecha_verificacion')->nullable();
            $table->decimal('peso_corregido', 10, 2);
            $table->string('verificado_por');
            // FABRICADO
            $table->timestamp('fecha_fabricacion')->nullable();
            $table->integer('numero_sublote');
            $table->timestamp('hora_inicio_fabricado')->nullable();
            $table->timestamp('hora_fin_fabricado')->nullable();
            $table->string('fabricado_por');
            $table->decimal('peso_neto_tarro_uno', 10, 2);
            $table->decimal('peso_neto_tarro_dos', 10, 2);
            $table->decimal('peso_neto_tarro_tres', 10, 2);
            $table->decimal('peso_neto_tarro_cuatro', 10, 2);
            $table->string('verificado_por_fabricado');
            $table->string('observaciones_fabricado');
            $table->string('produccion_emitido_por');
            $table->timestamp('produccion_fecha')->nullable();
            $table->string('gestion_calidad_por');
            $table->timestamp('gestion_calidad_fecha')->nullable();
            $table->string('descargo_inventario_por');
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
        Schema::dropIfExists('f_pr_08');
    }
};
