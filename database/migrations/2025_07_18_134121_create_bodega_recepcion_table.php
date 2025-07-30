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
        Schema::create('bodega_recepcion', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->foreignId('materiales_id')->nullable()->constrained('materiales');
            $table->foreignId('unidades_id')->nullable()->constrained('unidades_medida');

            $table->string('tipo_material');
            $table->string('proveedor');
            $table->string('fabricante');
            $table->string('direccion');
            $table->string('orden_compra');
            $table->string('factura');
            $table->string('lote');
            $table->date('fecha_vencimiento');
            $table->integer('lote_nmd');
            $table->string('cantidad_total');
            $table->string('cantidad_contenedor');
            $table->string('n_contenedor');
            $table->string('valor_conversion');
            $table->string('material');
            $table->text('descripcion');
            $table->string('t_c');
            $table->boolean('certificado_analisis');
            $table->boolean('almacenar_especial');
            $table->text('observaciones')->nullable();
            
            $table->boolean('contenedor_identificado');
            $table->text('contenedor_identificado_obs')->nullable();
            $table->boolean('contendor_sucio');
            $table->text('contendor_sucio_obs')->nullable();
            $table->boolean('contenedor_humedo');
            $table->text('contenedor_humedo_obs')->nullable();
            $table->boolean('olor_extrano');
            $table->text('olor_extrano_obs')->nullable();
            $table->boolean('contenedor_derrame');
            $table->text('contenedor_derrame_obs')->nullable();
            $table->boolean('contenedor_golpeado');
            $table->text('contenedor_golpeado_obs')->nullable();
            $table->boolean('contenedor_roto');
            $table->text('contenedor_roto_obs')->nullable();
            $table->boolean('material_menor_cantidad');
            $table->text('material_menor_cantidad_obs')->nullable();
            $table->boolean('material_mayor_cantidad');
            $table->text('material_mayor_cantidad_obs')->nullable();
            $table->boolean('fecha_vigente');
            $table->text('fecha_vigente_obs')->nullable();
            $table->boolean('material_factura');
            $table->text('material_factura_obs')->nullable();
            $table->boolean('descripcion_corresponde');
            $table->text('descripcion_corresponde_obs')->nullable();
            $table->boolean('material_certificado');
            $table->text('material_certificado_obs')->nullable();

            $table->char('estado', 1);

            $table->boolean('aprobado')->nullable();
            $table->text('observacion_devolucion')->nullable();
            $table->timestamp('approved_at')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bodega_recepcion');
    }
};
