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
        Schema::create('campos', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('versiones_id')->constrained('versiones');

            $table->string('etiqueta');
            $table->string('nombre');
            $table->enum('tipo', ['text', 'number', 'date', 'select', 'textarea', 'checkbox', 'radio']);
            $table->boolean('requerido')->default(false);
            
            $table->boolean('usa_bd')->default(false);
            $table->string('tabla_fuente')->nullable(); // Si usa_bd es true
            $table->string('columna_valor')->nullable(); // clave
            $table->string('columna_texto')->nullable(); // display

            $table->unsignedBigInteger('depende_de')->nullable(); // id de campo de la misma tabla del que depende
            $table->json('options_json')->nullable();

            $table->string('grupo')->nullable();
            $table->unsignedInteger('orden')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('versiones');
    }
};
