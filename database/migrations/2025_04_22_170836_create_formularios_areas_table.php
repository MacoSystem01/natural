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
        Schema::create('formularios_areas', function (Blueprint $table) {
            $table->id();

            $table->foreignId('areas_id')->constrained('areas');

            $table->unsignedBigInteger('formularios_id')->nullable();
            $table->foreign('formularios_id')->references('id')->on('formularios');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formularios_areas');
    }
};
