<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_10_orden_trabajo_bodega_me', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('producto')->nullable();
            $table->string('lote')->nullable();
            $table->string('op')->nullable();

            $table->decimal('tamano_lote_ml', 10, 2)->nullable();
            $table->integer('cantidad_un')->nullable();

            // Información de materiales de envase
            $table->json('materiales_envase')->nullable();
            /*
              Formato sugerido:
              [
                {
                  "codigo": "ENV001",
                  "nombre": "Botella PET 500ml",
                  "cantidad_solicitada": 1000,
                  "cantidad_entregada": 980,
                  "numero_lote": "LENV123",
                  "numero_contenedores": 5,
                  "verificado_produccion": "Sí"
                },
                ...
              ]
            */

            // Firmas
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
        Schema::dropIfExists('f_pr_10_orden_trabajo_bodega_me');
    }
};
