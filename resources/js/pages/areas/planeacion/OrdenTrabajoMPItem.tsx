import React from 'react';
import { Head } from '@inertiajs/react';

export default function OrdenTrabajoMPItem() {
  return (
    <>
      <Head title="Ítems Orden Trabajo MP" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Ítems de Orden de Trabajo MP</h1>
        <p>Componentes o materiales asignados por orden de trabajo.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Material</th>
              <th className="border px-4 py-2">Cantidad</th>
              <th className="border px-4 py-2">Orden</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Agua Purificada</td>
              <td className="border px-4 py-2">500 L</td>
              <td className="border px-4 py-2">OP-023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
