<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_procesos_fabricacion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('orden_produccion_id')->constrained('f_pr_08_ordenes_produccion')->onDelete('cascade');
            $table->timestamps();

            $table->date('fecha_fabricacion')->nullable();
            $table->string('sublote')->nullable();
            $table->time('hora_inicio')->nullable();
            $table->time('hora_fin')->nullable();
            $table->string('fabricado_por')->nullable();

            $table->decimal('tarro_1', 10, 2)->nullable();
            $table->decimal('tarro_2', 10, 2)->nullable();
            $table->decimal('tarro_3', 10, 2)->nullable();
            $table->decimal('tarro_4', 10, 2)->nullable();

            $table->string('verificado_por')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_procesos_fabricacion');
    }
};
