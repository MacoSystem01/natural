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
        Schema::create('orden_trabajo_mp_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('orden_id');

            $table->string('codigo')->nullable();
            $table->string('materia_prima')->nullable();
            $table->decimal('cantidad_solicitada', 10, 2)->nullable();
            $table->decimal('cantidad_entregada', 10, 2)->nullable();
            $table->string('numero_lote')->nullable();
            $table->integer('num_contenedores')->nullable();
            $table->boolean('verificado_produccion')->default(false);

            // Foreign Key
            $table->foreign('orden_id')
                ->references('id')
                ->on('f_pr_09_bodega_mp') 
                ->onDelete('cascade');

            $table->timestamps(); // solo debe ir una vez al final
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orden_trabajo_mp_items');
    }
};