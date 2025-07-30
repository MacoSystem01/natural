<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_09_orden_trabajo_bodega_mp', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('producto')->nullable();
            $table->string('lote')->nullable();
            $table->string('op')->nullable();

            // Presentación del lote
            $table->decimal('tamano_lote_ml', 10, 2)->nullable();
            $table->integer('cantidad_un')->nullable();

            // Información por cada materia prima
            $table->json('materias_primas')->nullable();
            /*
              Formato sugerido del JSON:
              [
                {
                  "codigo": "MP001",
                  "nombre": "Alcohol etílico",
                  "cantidad_solicitada": 20.5,
                  "cantidad_entregada": 20.5,
                  "numero_lote": "L123",
                  "numero_contenedores": 2,
                  "verificado_produccion": "Sí"
                },
                ...
              ]
            */

            // Firmas y verificaciones
            $table->string('verificado_por')->nullable();
            $table->date('fecha_verificado')->nullable();

            $table->string('entregado_por')->nullable();
            $table->date('fecha_entregado')->nullable();

            $table->string('recibido_por')->nullable();
            $table->date('fecha_recibido')->nullable();

            $table->text('observaciones')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_09_orden_trabajo_bodega_mp');
    }
};
