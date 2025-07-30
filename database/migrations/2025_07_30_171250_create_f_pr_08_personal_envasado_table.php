<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_personal_envasado', function (Blueprint $table) {
            $table->id();
            $table->foreignId('orden_envasado_id')->constrained('f_pr_08_ordenes_envasado')->onDelete('cascade');
            $table->timestamps();

            $table->date('fecha_envasado')->nullable();
            $table->string('codigo')->nullable();
            $table->string('nombre')->nullable();
            $table->time('hora_inicio')->nullable();
            $table->time('hora_fin')->nullable();
            $table->decimal('cantidad_unidades', 10, 2)->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_personal_envasado');
    }
};
