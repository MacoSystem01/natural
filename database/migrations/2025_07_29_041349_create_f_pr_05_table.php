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
            $table->foreignId('materiales_id')->nullable()->constrained('materiales');
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->foreignId('checked_by')->nullable()->constrained('users');
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->foreignId('free_by')->nullable()->constrained('users');

            $table->string('codigo');
            $table->string('presentacion');
            $table->string('op');
            $table->decimal('tamano', 10, 2);
            $table->decimal('cantidad', 10, 2);
            $table->string('lote');
            $table->timestamp('fecha_vencimiento')->nullable();
            $table->timestamp('fecha_inicio')->nullable();
            $table->timestamp('fecha_finalizado')->nullable();

            $table->decimal('cant_producida', 10, 2);
            $table->timestamp('fecha')->nullable();

            // METADATOS
            $table->timestamp('checked_at')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('free_at')->nullable();

            $table->timestamps();
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
