<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('e_pr_07_material_envase_empaque_dispensado', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('descripcion')->nullable();
            $table->string('codigo')->nullable();
            $table->string('numero_lote')->nullable();

            $table->string('producto')->nullable();
            $table->string('presentacion')->nullable();

            $table->string('lote')->nullable();
            $table->string('op')->nullable();

            $table->decimal('cantidad', 10, 2)->nullable();

            $table->string('realizado_por')->nullable();
            $table->date('fecha_realizado')->nullable();

            $table->string('verificado_por')->nullable();
            $table->date('fecha_verificado')->nullable();

            $table->text('observaciones')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('e_pr_07_material_envase_empaque_dispensado');
    }
};
