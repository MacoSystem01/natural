import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
      title: 'Planeacion / Conciliacion orden de Producción',
      href: '/planeacion/conciliacion-orden-produccion',
  },
];

export default function ConciliacionOrdenProduccion() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Conciliación Orden de Producción" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Conciliación Orden de Producción</h1>
        <p>Aquí se listan las conciliaciones realizadas.</p>

        <table className="min-w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Fecha</th>
              <th className="border px-4 py-2">Responsable</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí irá el mapeo de datos reales */}
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">2025-07-30</td>
              <td className="border px-4 py-2">Mauricio</td>
              <td className="border px-4 py-2">Descargar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
