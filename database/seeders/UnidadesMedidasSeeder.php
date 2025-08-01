<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UnidadesMedidasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\UnidadesMedida::insert([
            [
                'descripcion' => 'Gramo (g)',
            ],
            [
                'descripcion' => 'Kilogramo (kg)',
            ],
            [
                'descripcion' => 'Litro (L)',
            ],
            [
                'descripcion' => 'Mililitro (mL)',
            ],
        ]);
    }
}
