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
        Schema::create('f_pr_05_controllotes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->timestamps('fecha_emision');
            $table->string('categoria');
            $table->string('codigo');
            $table->string('producto');
            $table->string('presentación');
            $table->string('o_p');
            $table->string('numero_lote');
            $table->timestamps('fecha_vencimiento');
            $table->decimal('tamano_lote', 10, 2);
            $table->string('unidad_medida');
            $table->number('numero_unidades_lote');
            //METADATA
            $table->timestamp('aproved_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('f_pr_05_controllotes');
    }
};
