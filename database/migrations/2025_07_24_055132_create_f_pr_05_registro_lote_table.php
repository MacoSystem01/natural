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
        Schema::create('registrolote', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');
            $table->string('o_p');
            $table->string('tamano');
            $table->string('cantidad');
            $table->string('lote');
            $table->timestamp('fecha_vencimiento')->nullable();
            $table->timestamp('fecha_inicio')->useCurrent();
            $table->timestamp('fecha_inicializacion')->useCurrent();
            $table->string('cantidad_producida');
            $table->timestamp('fecha')->useCurrent();
            $table->string('observaciones')->nullable();
            // FIRMAS
             $table->string('revisado_por')->nullable();
            $table->date('fecha_revisado')->nullable();
            $table->string('aprobado_por')->nullable();
            $table->date('fecha_aprobado')->nullable();
            $table->string('liberado_por')->nullable();
            $table->date('fecha_liberado')->nullable();
            //METADATA
            $table->timestamp('fecha_contenida')->nullable(); //Es la fecha de la tabla "DOCUMENTACIÓN CONTENIDA"
            $table->timestamp('aproved_at')->nullable();
            $table->softDeletes();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrolote');
    }
};
