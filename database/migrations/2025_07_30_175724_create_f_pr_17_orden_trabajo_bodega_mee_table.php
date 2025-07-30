<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_17_orden_trabajo_bodega_mee', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('producto')->nullable();
            $table->string('lote')->nullable();
            $table->string('op')->nullable();

            $table->decimal('tamano_lote_ml', 10, 2)->nullable();
            $table->integer('cantidad_un')->nullable();

            // Información de materiales de empaque
            $table->json('materiales_empaque')->nullable();
            /*
              Ejemplo de estructura JSON:
              [
                {
                  "codigo": "EMP001",
                  "nombre": "Caja de cartón 20x30",
                  "cantidad_solicitada": 500,
                  "cantidad_entregada": 480,
                  "numero_lote": "LMPK456",
                  "numero_contenedores": 3,
                  "verificado_produccion": "Sí"
                },
                ...
              ]
            */

            // Firmas y fechas
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
        Schema::dropIfExists('f_pr_17_orden_trabajo_bodega_mee');
    }
};
