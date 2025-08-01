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
        Schema::create('planeacion_batch_records', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Datos generales
            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');
            $table->string('op');
            $table->decimal('tamano', 10, 2);
            $table->decimal('cantidad', 10, 2);
            $table->string('lote');
            $table->date('fecha_vencimiento')->nullable();
            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_finalizacion')->nullable();

            // Documentación contenida (responsable y fecha por cada documento)
            $documentos = [
                'emision_orden_produccion_empaque',
                'despeje_dispensado',
                'etiquetas_dispensado_materia_prima',
                'estados_limpieza_area_dispensado',
                'despeje_fabricacion',
                'estados_limpieza_area_fabricacion',
                'tarjeta_aprobacion_granel',
                'orden_trabajo_codificado',
                'despeje_linea_codificado',
                'controles_proceso_codificado',
                'despeje_envasado',
                'estados_limpieza_envasado',
                'etiquetas_material_empaque',
                'controles_proceso_linea_envasado',
                'despeje_acondicionamiento',
                'estados_limpieza_acondicionamiento',
                'controles_proceso_acondicionamiento',
                'conciliacion_orden_produccion',
                'formato_entrega_producto_almacen',
                'certificado_analisis_producto',
                'rotulo_aprobado_producto',
                'otros',
            ];

            foreach ($documentos as $doc) {
                $table->boolean($doc)->nullable();
            }

            // Datos de producción y control final
            $table->decimal('cant_producida', 10, 2)->nullable();
            $table->date('fecha_produccion')->nullable();

            // Firmas
            $table->foreignId('creado_por')->nullable()->constrained('users');
            $table->foreignId('modificado_por')->nullable()->constrained('users');

            $table->foreignId('aprobado_por')->nullable()->constrained('users');
            $table->timestamp('aprobado_fecha')->nullable();

            $table->foreignId('revisado_por')->nullable()->constrained('users');
            $table->timestamp('revisado_fecha')->nullable();
            
            $table->foreignId('liberado_por')->nullable()->constrained('users');
            $table->timestamp('liberado_fecha')->nullable();
            
            $table->char('estado', 1);
            $table->text('observacion_devolucion')->nullable();

            // Metadata
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planeacion_batch_records');
    }
};
