import React from 'react';
import { Head } from '@inertiajs/react';

export default function FPr09BodegaMP() {
  return (
    <>
      <Head title="Bodega Materia Prima (FPr09)" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bodega Materia Prima - FPr09</h1>
        <p>Listado de entradas y salidas de materias primas.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Materia Prima</th>
              <th className="border px-4 py-2">Movimiento</th>
              <th className="border px-4 py-2">Cantidad</th>
              <th className="border px-4 py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Glicerina</td>
              <td className="border px-4 py-2">Entrada</td>
              <td className="border px-4 py-2">200 kg</td>
              <td className="border px-4 py-2">2025-07-30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
