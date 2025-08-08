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
        Schema::create('f_pr_05_anulacion_lote', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->timestamp('fecha_emision')->useCurrent();
            $table->string('o_p');
            $table->string('motivo');
            $table->boolean('anular');
            //METADATA
            $table->timestamp('aproved_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('f_pr_05_anulacion_lote');
    }
};
