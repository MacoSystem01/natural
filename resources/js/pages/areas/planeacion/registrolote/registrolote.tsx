import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Planeación / Control de Emisión Lotes de Producción',
    href: '/planeacion/registro-lote',
  },
];

export default function RegistroLote() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Registro de Lote" />

      <div className="p-6 space-y-6 text-sm text-gray-700">
        <div className="text-center">
          {/* <img src="/logo.png" alt="Logo" className="mx-auto h-16" /> */}
          <h1 className="text-2xl font-bold">Control de Emisión Lotes de Producción</h1>
          {/* <p className="text-sm font-medium">(BATCH RECORD / CONTROL DE EMISIÓN DE LOTES DE PRODUCCIÓN)</p> */}
        </div>

        {/* Datos Generales */}
        <div className="grid grid-cols-2 gap-4 border p-4 rounded-xl shadow">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="codigo">CÓDIGO:</Label>
              <Input id="codigo" name="codigo" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="producto">PRODUCTO:</Label>
              <Input id="producto" name="producto" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="op">OP:</Label>
              <Input id="op" name="op" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="lote">LOTE:</Label>
              <Input id="lote" name="lote" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="tamano">TAMAÑO (mL):</Label>
              <Input id="tamano" name="tamano" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="presentacion">PRESENTACIÓN (mL):</Label>
              <Input id="presentacion" name="presentacion" className="mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="cantidad_producida">CANTIDAD (UN):</Label>
              <Input id="cantidad_producida" name="cantidad_producida" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="vencimiento">FECHA DE VENCIMIENTO:</Label>
              <Input id="vencimiento" name="vencimiento" type="date" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inicio">FECHA DE INICIO:</Label>
              <Input id="inicio" name="inicio" type="date" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="finalizacion">FECHA DE FINALIZACIÓN:</Label>
              <Input id="finalizacion" name="finalizacion" type="date" className="mt-1" />
            </div>
          </div>
        </div>

        {/* Documentación Contenida */}
        <div>
          <h2 className="font-semibold text-lg">DOCUMENTACIÓN CONTENIDA</h2>
          <table className="w-full border mt-2 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1">DOCUMENTO</th>
                <th className="border p-1">RESPONSABLE</th>
                <th className="border p-1">FECHA</th>
              </tr>
            </thead>
            <tbody>
              {[
                'EMISIÓN ORDEN DE PRODUCCIÓN Y EMPAQUE',
                'DESPEJE DISPENSADO',
                'ETIQUETAS DISPENSADO MATERIA PRIMA',
                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS DISPENSADO',
                'DESPEJE Y PROCEDIMIENTO DE FABRICACIÓN',
                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS DE FABRICACIÓN',
                'TARJETA DE APROBACIÓN GRANEL',
                'ORDEN DE TRABAJO CODIFICADO',
                'DESPEJE DE LÍNEA CODIFICADO',
                'CONTROLES DE PROCESO CODIFICADO',
                'DESPEJE Y PROCEDIMIENTO ENVASADO',
                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS ENVASADO',
                'ETIQUETAS MATERIAL EMPAQUE',
                'CONTROLES EN PROCESO LÍNEA DE ENVASADO',
                'DESPEJE Y PROCEDIMIENTO ACONDICIONAMIENTO',
                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS ACONDICIONAMIENTO',
                'CONTROLES EN PROCESO ACONDICIONAMIENTO',
                'CONCILIACIÓN ORDEN DE PRODUCCIÓN',
                'FORMATO ENTREGA PRODUCTO TERMINADO ALMACÉN',
                'CERTIFICADO DE ANÁLISIS PRODUCTO TERMINADO',
                'RÓTULO APROBADO PRODUCTO TERMINADO',
                'OTROS:',
              ].map((item, i) => (
                <tr key={i}>
                  <td className="border p-1">{item}</td>
                  <td className="border p-1">
                    <input className="w-full p-1 border" />
                  </td>
                  <td className="border p-1">
                    <input className="w-full p-1 border" type="date" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cantidad producida */}
        <div className="grid grid-cols-2 gap-4 border p-4 rounded-xl shadow">
          <div>
            <Label htmlFor="cantidad_producida_final">CANTIDAD PRODUCIDA:</Label>
            <Input
              autoFocus
              id="cantidad_producida_final"
              name="cantidad_producida_final"
              required
              placeholder="Cantidad producida"
            />
          </div>
          <div>
            <Label htmlFor="fecha_produccion">FECHA:</Label>
            <Input
              type="date"
              id="fecha_produccion"
              name="fecha_produccion"
              required
            />
          </div>
        </div>

        {/* Firmas */}
        <div className="grid grid-cols-3 gap-4 border p-4 rounded-xl shadow">
          <div className="space-y-2">
            <label className="block font-medium">REVISADO POR:</label>
            <input className="border p-1 w-full" />
            <label className="block font-medium">FECHA:</label>
            <input className="border p-1 w-full" type="date" />
          </div>
          <div className="space-y-2">
            <label className="block font-medium">
              APROBADO POR (GESTIÓN DE CALIDAD):
            </label>
            <input className="border p-1 w-full" />
            <label className="block font-medium">FECHA:</label>
            <input className="border p-1 w-full" type="date" />
          </div>
          <div className="space-y-2">
            <label className="block font-medium">
              LIBERADO POR (DIRECCIÓN TÉCNICA):
            </label>
            <input className="border p-1 w-full" />
            <label className="block font-medium">FECHA:</label>
            <input className="border p-1 w-full" type="date" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
