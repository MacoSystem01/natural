<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_procesos_envasado', function (Blueprint $table) {
            $table->id();
            $table->foreignId('orden_envasado_id')->constrained('f_pr_08_ordenes_envasado')->onDelete('cascade');
            $table->timestamps();

            // Datos del material
            $table->string('no_lote')->nullable();
            $table->string('codigo_material')->nullable();
            $table->string('material_requerido')->nullable();
            $table->string('unidad')->nullable();
            $table->decimal('cantidad_lote_estandar', 10, 2)->nullable();

            // Entrega de material
            $table->date('fecha_entrega_material')->nullable();
            $table->decimal('cantidad_entregada', 10, 2)->nullable();

            // Revisión
            $table->date('fecha_revision')->nullable();
            $table->string('firma_revision')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_procesos_envasado');
    }
};
