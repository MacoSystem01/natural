<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_ordenes_produccion', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Datos generales
            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');
            $table->string('lote');
            $table->string('registro_sanitario')->nullable();
            $table->string('codigo_barras')->nullable();
            $table->decimal('tamano', 10, 2)->nullable();
            $table->date('fecha_vencimiento')->nullable();
            $table->integer('unidades_por_lote')->nullable();
            $table->date('fecha_emision')->nullable();

            // Observaciones
            $table->text('observaciones')->nullable();

            // Firmas
            $table->string('emitido_por')->nullable();
            $table->date('emitido_fecha')->nullable();

            $table->string('revisado_por')->nullable();
            $table->date('revisado_fecha')->nullable();

            $table->string('descargado_por')->nullable();
            $table->date('descargado_fecha')->nullable();

            $table->softDeletes();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_ordenes_produccion');
    }
};
