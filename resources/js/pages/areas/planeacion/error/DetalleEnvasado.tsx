import React from 'react';
import { Head } from '@inertiajs/react';

export default function DetalleEnvasado() {
  return (
    <>
      <Head title="Detalle Envasado" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Detalle Envasado</h1>
        <p>Resumen del proceso de envasado en producción.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Producto</th>
              <th className="border px-4 py-2">Lotes Envasados</th>
              <th className="border px-4 py-2">Fecha</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Jarabe XYZ</td>
              <td className="border px-4 py-2">12</td>
              <td className="border px-4 py-2">2025-07-30</td>
              <td className="border px-4 py-2">
                <button className="text-blue-600 hover:underline">Ver</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
