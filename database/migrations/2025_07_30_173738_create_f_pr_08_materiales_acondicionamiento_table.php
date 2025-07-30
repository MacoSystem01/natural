<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('f_pr_08_materiales_acondicionamiento', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('orden_produccion_id')
                ->constrained('f_pr_08_ordenes_produccion')
                ->onDelete('cascade');

            $table->string('no_lote')->nullable();
            $table->string('codigo_material')->nullable();
            $table->string('material_requerido')->nullable();
            $table->string('unidad')->nullable();
            $table->decimal('cantidad_lote_estandar', 10, 2)->nullable();

            $table->date('fecha_entrega')->nullable();
            $table->decimal('cantidad_entregada', 10, 2)->nullable();

            $table->date('fecha_revisado')->nullable();
            $table->string('firma_revisado')->nullable();
        });
    }

    public function down(): void {
        Schema::dropIfExists('f_pr_08_materiales_acondicionamiento');
    }
};

