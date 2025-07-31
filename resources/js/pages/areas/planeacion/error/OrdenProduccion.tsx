import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function OrdenProduccion() {
  return (
    <AuthenticatedLayout>
      <Head title="Orden de Producción" />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Orden de Producción</h1>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="codigo" className="text-sm font-medium mb-1">Código</label>
              <input type="text" id="codigo" name="codigo" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="producto" className="text-sm font-medium mb-1">Producto</label>
              <input type="text" id="producto" name="producto" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="presentacion" className="text-sm font-medium mb-1">Presentación (mL)</label>
              <input type="text" id="presentacion" name="presentacion" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lote" className="text-sm font-medium mb-1">Lote</label>
              <input type="text" id="lote" name="lote" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="registro_sanitario" className="text-sm font-medium mb-1">Registro Sanitario</label>
              <input type="text" id="registro_sanitario" name="registro_sanitario" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="codigo_barras" className="text-sm font-medium mb-1">Código de Barras</label>
              <input type="text" id="codigo_barras" name="codigo_barras" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="tamano" className="text-sm font-medium mb-1">Tamaño (mL)</label>
              <input type="text" id="tamano" name="tamano" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="fecha_vencimiento" className="text-sm font-medium mb-1">Fecha Vencimiento</label>
              <input type="date" id="fecha_vencimiento" name="fecha_vencimiento" className="border rounded-lg px-3 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="unidades_por_lote" className="text-sm font-medium mb-1">Unidades por Lote</label>
              <input type="number" id="unidades_por_lote" name="unidades_por_lote" className="border rounded-lg px-3 py-2" />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
