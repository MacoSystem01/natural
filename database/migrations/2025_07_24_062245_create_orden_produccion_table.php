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
        Schema::create('orden_produccion', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // DOCUMENTO 1 - ORDEN DE PRODUCCION
            $table->string('codigo');
            $table->string('producto');
            $table->integer('presentacion');
            $table->string('lote');
            $table->string('registro_sanitario');
            $table->string('codigo_barras');
            $table->integer('tamano');
            $table->date('fecha_vencimiento')->nullable();
            $table->integer('unidades_lote');
            // DOCUMENTO 2 - PROCESO ENVASADO
            $table->string('proceso_envasado_num_lote');
            $table->string('proceso_envasado_codigo_material');
            $table->string('proceso_envasado_material_requerido');
            $table->string('proceso_envasado_unidad', 10);
            $table->decimal('proceso_envasado_cantidad_lote_estandar', 10, 2);
            $table->date('proceso_envasado_entrega_material_orden_fecha');
            $table->decimal('proceso_envasado_entrega_material_orden_cantidad', 10, 2);
            $table->date('proceso_envasado_revisado_fecha');
            $table->string('proceso_envasado_revisado_firma');
            // PROCESO ENVASADO PARTE 2
            $table->date('fecha_envasado');
            $table->string('personal_codigo');
            $table->string('personal_nombre');
            $table->time('hora_inicio');
            $table->time('hora_fin');
            $table->decimal('cantidad_un', 10, 2);
            $table->string('observaciones_generales');
            // DOCUMENTO 3 - PROCESO DE ACONDICIONAMIENTO
            $table->string('proceso_acondicionamiento_num_lote');
            $table->string('proceso_acondicionamiento_codigo_material');
            $table->string('proceso_acondicionamiento_material_requerido');
            $table->string('proceso_acondicionamiento_unidad', 10);
            $table->decimal('proceso_acondicionamiento_cantidad_lote_estandar', 10, 2);
            $table->date('proceso_acondicionamiento_entrega_material_orden_fecha');
            $table->decimal('proceso_acondicionamiento_entrega_material_orden_cantidad', 10, 2);
            $table->date('proceso_acondicionamiento_revisado_fecha');
            $table->string('proceso_acondicionamiento_revisado_firma');
            // PROCESO ACONDICIONAMIENTO PARTE 2
            $table->date('proceso_acondicionamiento_fecha_acondicionamiento');
            $table->string('proceso_acondicionamiento_personal_codigo');
            $table->string('proceso_acondicionamiento_personal_nombre');
            $table->time('proceso_acondicionamiento_hora_inicio');
            $table->time('proceso_acondicionamiento_hora_fin');
            $table->decimal('proceso_acondicionamiento_cantidad_un', 10, 2);
            $table->string('proceso_acondicionamiento_observaciones');
            $table->string('proceso_acondicionamiento_emitido_produccion_firma');
            $table->date('proceso_acondicionamiento_emitido_produccion_fecha');
            $table->string('proceso_acondicionamiento_gestion_calidad_firma');
            $table->date('proceso_acondicionamiento_gestion_calidad_fecha');
            $table->string('proceso_acondicionamiento_inventario_firma');
            $table->date('proceso_acondicionamiento_inventario_fecha');
            // DOCUMENTO 4 - CONCILIACION DE LA ORDEN DE PRODUCCION
            // PROCESO DISPENSADO
            $table->string('orden_produccion_dispensado_numero_lote_material');
            $table->string('orden_produccion_dispensado_codigo_material');
            $table->string('orden_produccion_dispensado_material_requerido');
            $table->string('orden_produccion_dispensado_material_orden_unidad');
            $table->string('orden_produccion_dispensado_material_orden_fecha');
            $table->string('orden_produccion_dispensado_material_orden_cantidad');
            $table->string('orden_produccion_dispensado_material_adicciones_fecha');
            $table->string('orden_produccion_dispensado_material_adicciones_cantidad');
            $table->string('orden_produccion_dispensado_material_devoluciones_fecha');
            $table->string('orden_produccion_dispensado_material_devoluciones_cantidad');
            $table->string('orden_produccion_dispensado_desperdicio');
            $table->string('orden_produccion_dispensado_motivo_desperdicio');
            $table->string('orden_produccion_dispensado_porcentaje_rendimiento');
            $table->string('orden_produccion_dispensado_responsable');
            // PROCESO FABRICACION
            $table->string('orden_produccion_fabricacion_numero_lote_material');
            $table->string('orden_produccion_fabricacion_codigo_material');
            $table->string('orden_produccion_fabricacion_material_requerido');
            $table->string('orden_produccion_fabricacion_material_orden_unidad');
            $table->string('orden_produccion_fabricacion_material_orden_fecha');
            $table->string('orden_produccion_fabricacion_material_orden_cantidad');
            $table->string('orden_produccion_fabricacion_material_adicciones_fecha');
            $table->string('orden_produccion_fabricacion_material_adicciones_cantidad');
            $table->string('orden_produccion_fabricacion_material_devoluciones_fecha');
            $table->string('orden_produccion_fabricacion_material_devoluciones_cantidad');
            $table->string('orden_produccion_fabricacion_desperdicio');
            $table->string('orden_produccion_fabricacion_motivo_desperdicio');
            $table->string('orden_produccion_fabricacion_porcentaje_rendimiento');
            $table->string('orden_produccion_fabricacion_responsable');
            // PROCESO ENVASE
            $table->string('orden_produccion_envase_numero_lote_material');
            $table->string('orden_produccion_envase_codigo_material');
            $table->string('orden_produccion_envase_material_requerido');
            $table->string('orden_produccion_envase_material_orden_unidad');
            $table->string('orden_produccion_envase_material_orden_fecha');
            $table->string('orden_produccion_envase_material_orden_cantidad');
            $table->string('orden_produccion_envase_material_adicciones_fecha');
            $table->string('orden_produccion_envase_material_adicciones_cantidad');
            $table->string('orden_produccion_envase_material_devoluciones_fecha');
            $table->string('orden_produccion_envase_material_devoluciones_cantidad');
            $table->string('orden_produccion_envase_desperdicio');
            $table->string('orden_produccion_envase_motivo_desperdicio');
            $table->string('orden_produccion_envase_porcentaje_rendimiento');
            $table->string('orden_produccion_envase_responsable');
            // PROCESO ACONDICIONAMIENTO
            $table->string('orden_produccion_acondicionamiento_numero_lote_material');
            $table->string('orden_produccion_acondicionamiento_codigo_material');
            $table->string('orden_produccion_acondicionamiento_material_requerido');
            $table->string('orden_produccion_acondicionamiento_material_orden_unidad');
            $table->date('orden_produccion_acondicionamiento_material_orden_fecha');
            $table->decimal('orden_produccion_acondicionamiento_material_orden_cantidad', 10, 2);
            $table->date('orden_produccion_acondicionamiento_material_adicciones_fecha');
            $table->decimal('orden_produccion_acondicionamiento_material_adicciones_cantidad', 10, 2);
            $table->date('orden_produccion_acondicionamiento_material_devoluciones_fecha');
            $table->decimal('orden_produccion_acondicionamiento_material_devoluciones_cantidad', 10, 2);
            $table->decimal('orden_produccion_acondicionamiento_desperdicio', 10, 2);
            $table->string('orden_produccion_acondicionamiento_motivo_desperdicio');
            $table->decimal('orden_produccion_acondicionamiento_porcentaje_rendimiento', 10, 2);
            $table->string('orden_produccion_acondicionamiento_responsable');
            // // DOCUMENTO 4 - CONCILIACION DE LA ORDEN DE PRODUCCION PARTE 2
            $table->integer('un_embalaje');
            $table->integer('numeros_caja_completa');
            $table->decimal('saldo_un');
            $table->decimal('q_entrega_almacen');
            $table->decimal('q_entrega_calidad');
            $table->decimal('q_total_acondicionada');
            $table->decimal('q_total_envasada');
            $table->decimal('desperdicio_un');
            $table->decimal('porcentaje_q_total_acondicionada_q_teorica');
            $table->string('revisado_jefe_produccion_firma');
            $table->date('revisado_jefe_produccion_fecha');
            // DOCUMENTO 5 - TIEMPOS IMPRODUCTIVOS
            $table->date('tiempo_improductivo_fecha');
            $table->string('tiempo_improductivo_proceso');
            $table->string('tiempo_improductivo_codigo_parada');
            $table->string('tiempo_improductivo_descripcion_parada');
            $table->time('tiempo_improductivo_hora_inicio');
            $table->time('tiempo_improductivo_hora_final');
            $table->string('observaciones');
            $table->string('observaciones_generales');
            // 
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');
            $table->string('');



            $table->string('codigo');
            $table->string('producto');
            $table->string('presentacion');
            $table->string('lote');
            $table->string('registro_sanitario');
            $table->string('codigo_barras');
            $table->string('tamano');
            $table->string('fecha_vencimiento')->nullable();
            $table->string('unidades_lote');
            $table->string('hora_inicio');
            $table->string('hora_fin');
            $table->string('numero_lote');
            $table->string('codigo_materia_prima');
            $table->string('materia_prima_requerida');
            $table->string('porcentaje');
            $table->string('cantidad_estandar');
            $table->string('unidad');
            $table->string('fecha_pesaje')->nullable();
            $table->string('cantidad_pesada');
            $table->string('pesado_por');
            $table->string('fecha_verificacion');
            $table->string('peso_corregido');
            $table->string('verificado_por');
            $table->string('fecha_fabricacion');
            $table->string('numero_sublote');
            $table->string('hora_inicio');
            $table->string('hora_fin');
            $table->string('fabricado_por');
            $table->string('tarro_uno_peso_neto');
            $table->string('tarro_dos_peso_neto');
            $table->string('tarro_tres_peso_neto');
            $table->string('tarro_cuatro_peso_neto');
            $table->string('verificado_por');
            $table->string('observaciones');
            $table->string('firma_emision_producto');
            $table->string('fecha_emision_producto');
            $table->string('firma_revisado_gestion_calidad');
            $table->string('fecha_revisado_gestion_calidad');
            $table->string('descargado_inventario_firma');
            $table->string('descargado_inventario_fecha');
            $table->string('observaciones_generales');
            $table->string('numero_lote');
            $table->string('codigo_materia_prima');
            $table->string('material_requerido');
            $table->string('unidad');
            $table->string('cantidad_lote_estandar');
            $table->string('fecha');
            $table->string('cantidad');
            $table->string('fecha_envasado');
            $table->string('codigo');
            $table->string('nombre');
            $table->string('fecha_envasado');
            $table->string('codigo_personal');
            $table->string('nombre_personal');
            $table->string('cantidad_unidad');
            $table->string('proceso_acondicionamiento_num_lote');
            $table->string('proceso_acondicionamiento_codigo_material');
            $table->string('fecha_acondicionamiento');
            $table->string('proceso_dispensado_num_lote_material');
            $table->string('proceso_dispensado_codigo_material');
            $table->string('proceso_dispensado_material_requerido');
            $table->string('proceso_dispensado_material_adision_fecha');
            $table->string('proceso_dispensado_material_adision_cantidad');
            $table->string('proceso_dispensado_material_devolucion_fecha');
            $table->string('proceso_dispensado_material_devolucion_cantidad');
            $table->string('proceso_dispensado_desperdicio');
            $table->string('proceso_dispensado_motivo_desperdicio');
            $table->string('proceso_dispensado_porcentaje_rendimiento');
            $table->string('proceso_dispensado_responsable_dispensado');
            $table->string('proceso_fabricacion_num_lote_material');
            $table->string('proceso_fabricacion_codigo_material');
            $table->string('proceso_fabricacion_material_requerido');
            $table->string('proceso_fabricacion_material_adision_fecha');
            $table->string('proceso_fabricacion_material_adision_cantidad');
            $table->string('proceso_fabricacion_material_devolucion_fecha');
            $table->string('proceso_fabricacion_material_devolucion_cantidad');
            $table->string('proceso_fabricacion_desperdicio');
            $table->string('proceso_fabricacion_motivo_desperdicio');
            $table->string('proceso_fabricacion_porcentaje_rendimiento');
            $table->string('proceso_fabricacion_responsable_dispensado');
            $table->string('proceso_envase_num_lote_material');
            $table->string('proceso_envase_codigo_material');
            $table->string('proceso_envase_material_requerido');
            $table->string('proceso_envase_material_adision_fecha');
            $table->string('proceso_envase_material_adision_cantidad');
            $table->string('proceso_envase_material_devolucion_fecha');
            $table->string('proceso_envase_material_devolucion_cantidad');
            $table->string('proceso_envase_desperdicio');
            $table->string('proceso_envase_motivo_desperdicio');
            $table->string('proceso_envase_porcentaje_rendimiento');
            $table->string('proceso_envase_responsable_dispensado');
            $table->string('proceso_adicionamiento_num_lote_material');
            $table->string('proceso_adicionamiento_codigo_material');
            $table->string('proceso_adicionamiento_material_requerido');
            $table->string('proceso_adicionamiento_material_adision_fecha');
            $table->string('proceso_adicionamiento_material_adision_cantidad');
            $table->string('proceso_adicionamiento_material_devolucion_fecha');
            $table->string('proceso_adicionamiento_material_devolucion_cantidad');
            $table->string('proceso_adicionamiento_desperdicio');
            $table->string('proceso_adicionamiento_motivo_desperdicio');
            $table->string('proceso_adicionamiento_porcentaje_rendimiento');
            $table->string('proceso_adicionamiento_responsable_dispensado');
            $table->string('un_embalaje');
            $table->string('numeros_caja_completa');
            $table->string('saldo_un');
            $table->string('entrega_almacen');
            $table->string('entrega_calidad');
            $table->string('total_acondicionada');
            $table->string('total_envasada');
            $table->string('desperdicio_un');
            $table->string('porcentaje_acondicionada_teorica');
            $table->string('jefe_produccion_fecha');
            $table->string('jefe_produccion_firma');
            $table->string('proceso');
            $table->string('codigo_parada');
            $table->string('descripcion_parada');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orden_produccion');
    }
};
