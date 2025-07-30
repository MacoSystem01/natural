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

            $table->string('tipo_material');
            $table->string('codigo');
            $table->string('nombre');
            $table->string('proveedor');
            $table->string('fabricante');
            $table->string('direccion');
            $table->string('orden_compra');
            $table->string('factura');
            $table->string('lote');
            $table->date('fecha_vencimiento');
            $table->string('lote_nmd');
            $table->string('cantidad_total');
            $table->string('cantidad_contenedor');
            $table->string('n_contendor');
            $table->string('unidad_medida');
            $table->string('valor_conversion');
            $table->string('material');
            $table->text('descripcion');
            $table->string('t_c');
            $table->boolean('certificado_analisis');
            $table->boolean('almacenar_especial');
            $table->string('observaciones')->nullable();
            $table->boolean('contenedor_identificado');
            $table->string('contenedor_identificado_obs')->nullable();
            $table->boolean('contendor_sucio');
            $table->string('contendor_sucio_obs')->nullable();
            $table->boolean('contenedor_humedo');
            $table->string('contenedor_humedo_obs')->nullable();
            $table->boolean('olor_extrano');
            $table->string('olor_extrano_obs')->nullable();
            $table->boolean('contenedor_derrame');
            $table->string('contenedor_derrame_obs')->nullable();
            $table->boolean('contenedor_golpeado');
            $table->string('contenedor_golpeado_obs')->nullable();
            $table->boolean('contenedor_roto');
            $table->string('contenedor_roto_obs')->nullable();
            $table->boolean('material_menor_cantidad');
            $table->string('material_menor_cantidad_obs')->nullable();
            $table->boolean('material_mayor_cantidad');
            $table->string('material_mayor_cantidad_obs')->nullable();
            $table->boolean('fecha_vigente');
            $table->string('fecha_vigente_obs')->nullable();
            $table->boolean('material_factura');
            $table->string('material_factura_obs')->nullable();
            $table->boolean('descripcion_corresponde');
            $table->string('descripcion_corresponde_obs')->nullable();
            $table->boolean('material_certificado');
            $table->string('material_certificado_obs')->nullable();
            $table->timestamps();
            $table->timestamp('approved_at')->nullable();
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
