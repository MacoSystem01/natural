<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_personal_acondicionamiento', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('orden_produccion_id')
                ->constrained('f_pr_08_ordenes_produccion')
                ->onDelete('cascade');

            $table->date('fecha_acondicionamiento')->nullable();

            // Registro personal 1
            $table->string('codigo_personal_1')->nullable();
            $table->string('nombre_personal_1')->nullable();
            $table->time('hora_inicio_1')->nullable();
            $table->time('hora_fin_1')->nullable();

            // Registro personal 2
            $table->string('codigo_personal_2')->nullable();
            $table->string('nombre_personal_2')->nullable();
            $table->time('hora_inicio_2')->nullable();
            $table->time('hora_fin_2')->nullable();

            $table->decimal('cantidad_unidades', 10, 2)->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_personal_acondicionamiento');
    }
};

