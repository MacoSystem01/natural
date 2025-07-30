<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_conciliaciones_produccion', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('orden_produccion_id')
                ->constrained('f_pr_08_ordenes_produccion')
                ->onDelete('cascade');

            $table->enum('proceso', ['dispensado', 'fabricacion', 'envasado', 'acondicionado'])->index();
            $table->string('no_lote_material')->nullable();
            $table->string('codigo_material')->nullable();
            $table->string('material_requerido')->nullable();
            $table->string('unidad')->nullable();

            // Entrega de materiales
            $table->date('fecha_entrega_orden')->nullable();
            $table->decimal('cantidad_entrega_orden', 10, 2)->nullable();

            $table->date('fecha_adiciones')->nullable();
            $table->decimal('cantidad_adiciones', 10, 2)->nullable();

            $table->date('fecha_devoluciones')->nullable();
            $table->decimal('cantidad_devoluciones', 10, 2)->nullable();

            // Resultados
            $table->decimal('desperdicio', 10, 2)->nullable();
            $table->text('motivo_desperdicio')->nullable();
            $table->decimal('porcentaje_rendimiento', 5, 2)->nullable();
            $table->string('responsable')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_conciliaciones_produccion');
    }
};
