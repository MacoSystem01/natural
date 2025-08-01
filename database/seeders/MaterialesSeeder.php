<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MaterialesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Materiales::insert([
            [
                'codigo' => '110242',
                'descripcion' => 'UVA EN POLVO',
            ],
            [
                'codigo' => '110144',
                'descripcion' => 'ESPINACA EN POLVO',
            ],
            [
                'codigo' => '110109',
                'descripcion' => 'SULFATO FERROSO (MONOHIDRATADO)',
            ],
            [
                'codigo' => '110072',
                'descripcion' => 'VITAMINA B3 (NICOTINAMIDA)',
            ],
            [
                'codigo' => '110111',
                'descripcion' => 'VITAMINA B1 (TIAMINA)',
            ],
            [
                'codigo' => '110077',
                'descripcion' => 'VITAMINA B6 (PIRIDOXINA)',
            ],
            [
                'codigo' => '110002',
                'descripcion' => 'VITAMINA C (ACIDO ASCORBICO)',
            ],
            [
                'codigo' => '110028',
                'descripcion' => 'ALCOHOL ETILICO 96%POTABLE',
            ],
            [
                'codigo' => '110070',
                'descripcion' => 'METIL PARABENO SODICO',
            ],
            [
                'codigo' => '110081',
                'descripcion' => 'PROPIL PARABENO SODICO',
            ],
            [
                'codigo' => '110049',
                'descripcion' => 'GLICERINA USP',
            ],
            [
                'codigo' => '110105',
                'descripcion' => 'SORBITOL AL 70%',
            ],
            [
                'codigo' => '110071',
                'descripcion' => 'MIEL DE ABEJAS',
            ],
            [
                'codigo' => '110087',
                'descripcion' => 'VITAMINA B2 (RIBOFLAVINA)',
            ],
            [
                'codigo' => '150002',
                'descripcion' => 'SABOR CARAMELO',
            ],
            [
                'codigo' => '140017',
                'descripcion' => 'COLOR CARAMELO',
            ],
            [
                'codigo' => '510015',
                'descripcion' => 'ENVASE CANECA AMBAR x 360 mL',
            ],
            [
                'codigo' => '037',       
                'descripcion' => 'TAPA DE SEGURIDAD BLANCA CON LOGO # 28 mm',
            ],
        ]);
    }
}
