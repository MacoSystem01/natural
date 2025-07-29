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
        Schema::create('f_pr_08_tiempos_inproductivos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');   
            $table->string('lote');
            $table->string('registro_sanitario');
            $table->string('codigo_barras');
            $table->decimal('tamaño', 10, 2);
            $table->timestamp('fecha_vencimiento')->nullable();
            $table->string('unidades_lote');
            // TIEMPOS INPRODUCTIVOS
            $table->timestamp('fecha')->nullable();
            $table->string('proceso');
            $table->string('codigo_parada');
            $table->string('descripcion_parada');
            $table->timestamp('hora_inicio')->nullable();
            $table->timestamp('hora_fin')->nullable();
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
        Schema::dropIfExists('f_pr_08_tiempos_inproductivos');
    }
};
