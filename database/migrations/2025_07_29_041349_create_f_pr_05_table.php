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
        Schema::create('f_pr_05', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('codgio');
            $table->string('producto');
            $table->string('presentacion');
            $table->string('op');
            $table->decimal('tamaño', 10, 2);
            $table->decimal('cantidad', 10, 2);
            $table->string('lote');
            $table->timestamp('fecha_vencimiento')->nullable();
            $table->timestamp('fecha_inicio')->nullable();
            $table->timestamp('fecha_finalizado')->nullable();
            $table->decimal('cant_producida', 10, 2);
            $table->timestamp('fecha')->nullable();
            $table->string('revisado_por');
            $table->timestamp('revisado_fecha')->nullable();
            $table->string('aprobado_por');
            $table->string('aprobado_fecha')->nullable();
            $table->string('liberado_por');
            $table->string('liberado_fecha')->nullable();

            // METADATOS
            $table->timestamp('fecha_contenida')->nullable();
            $table->timestamp('aproved_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('f_pr_05');
    }
};
