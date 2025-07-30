import React from 'react';
import { Head } from '@inertiajs/react';

export default function OrdenProduccion() {
  return (
    <>
      <Head title="Órdenes de Producción" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Órdenes de Producción</h1>
        <p>Listado general de órdenes de producción.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Producto</th>
              <th className="border px-4 py-2">Cantidad</th>
              <th className="border px-4 py-2">Estado</th>
              <th className="border px-4 py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Shampoo</td>
              <td className="border px-4 py-2">1.000</td>
              <td className="border px-4 py-2">En proceso</td>
              <td className="border px-4 py-2">2025-07-30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
