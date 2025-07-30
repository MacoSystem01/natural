<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_tiempos_improductivos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Relación con la orden de producción
            $table->foreignId('orden_produccion_id')
                  ->constrained('f_pr_08_ordenes_produccion')
                  ->onDelete('cascade');

            // Campos del registro
            $table->date('fecha')->nullable();
            $table->string('proceso')->nullable(); // ejemplo: dispensado, fabricación, etc.
            $table->string('codigo_parada')->nullable(); // podría ser un código definido por planta
            $table->text('descripcion_parada')->nullable();

            $table->time('hora_inicio')->nullable();
            $table->time('hora_final')->nullable();

            $table->text('observaciones')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_tiempos_improductivos');
    }
};
