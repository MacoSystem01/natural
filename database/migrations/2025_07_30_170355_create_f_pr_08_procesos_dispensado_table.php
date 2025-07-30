<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_procesos_dispensado', function (Blueprint $table) {
            $table->id();
            $table->foreignId('orden_produccion_id')->constrained('f_pr_08_ordenes_produccion')->onDelete('cascade');
            $table->timestamps();

            $table->time('hora_inicio')->nullable();
            $table->time('hora_fin')->nullable();
            $table->string('no_lote')->nullable();
            $table->string('codigo_materia_prima')->nullable();
            $table->string('materia_prima_requerida')->nullable();
            $table->decimal('porcentaje', 5, 2)->nullable();
            $table->decimal('cantidad_estandar', 10, 2)->nullable();
            $table->string('unidad')->nullable();
            $table->date('fecha_pesaje')->nullable();
            $table->decimal('cantidad_pesada', 10, 2)->nullable();
            $table->string('pesado_por')->nullable();
            $table->date('fecha_verificacion')->nullable();
            $table->decimal('peso_corregido', 10, 2)->nullable();
            $table->string('verificado_por')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_procesos_dispensado');
    }
};
