import React from 'react';
import { Head } from '@inertiajs/react';

export default function TiempoImproductivo() {
  return (
    <>
      <Head title="Tiempo Improductivo" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Tiempos Improductivos</h1>
        <p>Registro de eventos o pausas no productivas.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Motivo</th>
              <th className="border px-4 py-2">Duración</th>
              <th className="border px-4 py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Mantenimiento</td>
              <td className="border px-4 py-2">2 horas</td>
              <td className="border px-4 py-2">2025-07-30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
