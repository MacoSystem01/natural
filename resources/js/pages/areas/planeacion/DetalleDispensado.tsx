import React from 'react';
import { Head } from '@inertiajs/react';

export default function DetalleDispensado() {
  return (
    <>
      <Head title="Detalle Dispensado" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Detalle Dispensado</h1>
        <p>Registros del dispensado de materiales en producción.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Material</th>
              <th className="border px-4 py-2">Cantidad</th>
              <th className="border px-4 py-2">Fecha</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Alcohol Etílico</td>
              <td className="border px-4 py-2">50 L</td>
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
