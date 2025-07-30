<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_conciliacion_totales', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('orden_produccion_id')
                ->constrained('f_pr_08_ordenes_produccion')
                ->onDelete('cascade');

            $table->integer('unidades_por_embalaje')->nullable();
            $table->integer('cajas_completas')->nullable();
            $table->decimal('saldo_unidades', 10, 2)->nullable();

            $table->decimal('entregada_almacen', 10, 2)->nullable();
            $table->decimal('entregada_calidad', 10, 2)->nullable();
            $table->decimal('total_acondicionada', 10, 2)->nullable();
            $table->decimal('total_envasada', 10, 2)->nullable();

            $table->decimal('desperdicio_unidades', 10, 2)->nullable();
            $table->decimal('rendimiento_final', 5, 2)->nullable(); // total_acondicionada / teórica

            // Firma final
            $table->string('revisado_jefe_produccion')->nullable();
            $table->date('fecha_revision')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_conciliacion_totales');
    }
};
