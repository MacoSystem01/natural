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
        Schema::create('f_pr_08_OrdenProduccion', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('o_p');
            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');
            $table->string('lote');
            $table->string('registrosanitario');
            $table->string('codigobarras');
            $table->string('tamano');
            $table->string('fechavencimiento');
            $table->string('unidadlote');
            $table->string('proceso');
            $table->string('desperdicio');
            $table->string('motivodesperdicio');
            $table->string('rendimiento');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('f_pr_08_OrdenProduccion');
    }
};
