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
        Schema::create('planeacion_orden_trabajo_codificado', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Información principal
            $table->string('codigo')->nullable();
            $table->string('producto')->nullable();

            // Presentación
            $table->string('presentacion')->nullable();
            $table->decimal('tamano_lote', 10, 2)->nullable();
            $table->integer('cantidad')->nullable();
            $table->string('op')->nullable();

            // Información técnica
            $table->string('registro_sanitario')->nullable();
            $table->string('codigo_barras')->nullable();
            $table->string('numero_lote')->nullable();
            $table->date('fecha_vencimiento')->nullable();

            // Detalles de codificación (tabla inferior)
            $table->string('codigo_material')->nullable();
            $table->string('material_a_codificar')->nullable();
            $table->integer('cantidad_solicitada')->nullable();
            $table->integer('cantidad_entregada')->nullable();
            $table->string('numero_lote_material')->nullable();

            // Entregas
            $table->foreignId('creado_por')->nullable()->constrained('users');
            $table->foreignId('modificado_por')->nullable()->constrained('users');

            $table->foreignId('recibido_por')->nullable()->constrained('users');
            $table->timestamp('aprobado_fecha')->nullable();
            
            $table->char('estado', 1);
            $table->text('observacion_devolucion')->nullable();

            // Observaciones
            $table->text('observaciones')->nullable();

            // Soft delete y timestamps
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planeacion_orden_trabajo_codificado');
    }
};
