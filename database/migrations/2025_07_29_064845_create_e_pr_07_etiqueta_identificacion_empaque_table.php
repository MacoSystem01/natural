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
        Schema::create('e_pr_07_etiqueta_identificacion_empaque', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('descripcion');
            $table->string('codigo');
            $table->string('numero_lote');
            $table->string('producto');
            $table->string('presentacion');
            $table->string('lote');
            $table->string('op');
            $table->string('cantidad');
            $table->string('realizado_por');
            $table->string('fecha_realizado');
            $table->string('verificado_por');
            $table->string('fecha_verificado');
            $table->string('observaciones');

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
        Schema::dropIfExists('e_pr_07_etiqueta_identificacion_empaque');
    }
};
