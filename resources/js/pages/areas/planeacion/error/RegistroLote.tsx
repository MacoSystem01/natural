import React from 'react';
import { Head } from '@inertiajs/react';

export default function RegistroLote() {
  return (
    <>
      <Head title="Registro de Lotes" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Registro de Lotes</h1>
        <p>Lotes generados en la producción.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Lote</th>
              <th className="border px-4 py-2">Producto</th>
              <th className="border px-4 py-2">Cantidad</th>
              <th className="border px-4 py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">L-202507</td>
              <td className="border px-4 py-2">Gel Antibacterial</td>
              <td className="border px-4 py-2">800</td>
              <td className="border px-4 py-2">2025-07-30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
