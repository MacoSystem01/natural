import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Planeación / Orden de Trabajo Codificado',
    href: '/planeacion/orden-trabajo-codificado',
  },
];

type Material = {
  material: string;
  lote: string;
  cantidad: string;
  unidades_id: string;
};

type ThisForm = {
  proveedor: string;
  area: string;
  oc: string;
  lote: string;
  remision: string;
  materiales: Material[];
  observaciones: string;
};

export default function () {
  const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
    proveedor: '',
    area: '',
    oc: '',
    lote: '',
    remision: '',
    materiales: [
      {
        material: '',
        lote: '',
        cantidad: '',
        unidades_id: '',
      },
    ],
    observaciones: '',
  });

  const submit: FormEventHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Orden de Trabajo Codificado" />

      <div className="columns-1 gap-4 space-y-4 p-8">
        <h2 className='font-bold mb-10 text-center'>
          ORDEN DE TRABAJO CODIFICADO
        </h2>

        <form onSubmit={submit}>
          <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
            <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="destino">CODIGO</Label>
                <Input
                  autoFocus
                  id="destino"
                  name="destino"
                  required
                  value={data.destino}
                  placeholder="CODIGO"
                  onChange={(e) => setData('destino', e.target.value)}
                />
                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
              </div>

              <div>
                <Label htmlFor="codigo">PRODUCTO</Label>
                <Input
                  id="codigo"
                  name="codigo"
                  required
                  value={data.codigo}
                  placeholder="PRODUCTO"
                  onChange={(e) => setData('codigo', e.target.value)}
                />
                {errors.codigo && <p className="mt-1 text-sm text-red-500">{errors.codigo}</p>}
              </div>

              <div>
                <Label htmlFor="op">PRESENTACIÓN</Label>
                <Input id="op" name="op" required value={data.op} placeholder="PRESENTACIÓN" onChange={(e) => setData('op', e.target.value)} />
                {errors.op && <p className="mt-1 text-sm text-red-500">{errors.op}</p>}
              </div>

              <div>
                <Label htmlFor="destino">TAMAÑO DEL LOTE (mL)</Label>
                <Input
                  autoFocus
                  id="destino"
                  name="destino"
                  required
                  value={data.destino}
                  placeholder="TAMAÑO DEL LOTE (mL)"
                  onChange={(e) => setData('destino', e.target.value)}
                />
                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
              </div>

              <div>
                <Label htmlFor="destino">CANTIDAD</Label>
                <Input
                  autoFocus
                  id="destino"
                  name="destino"
                  required
                  value={data.destino}
                  placeholder="CANTIDAD"
                  onChange={(e) => setData('destino', e.target.value)}
                />
                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
              </div>

              <div>
                <Label htmlFor="destino">O.P</Label>
                <Input
                  autoFocus
                  id="destino"
                  name="destino"
                  required
                  value={data.destino}
                  placeholder="O.P"
                  onChange={(e) => setData('destino', e.target.value)}
                />
                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
              </div>

              <div>
                <Label htmlFor="destino">CODIGO DE BARRAS</Label>
                <Input
                  autoFocus
                  id="destino"
                  name="destino"
                  required
                  value={data.destino}
                  placeholder="CODIGO DE BARRAS"
                  onChange={(e) => setData('destino', e.target.value)}
                />
                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
              </div>

              <div>
                <Label htmlFor="destino">NUMERO DE LOTE</Label>
                <Input
                  autoFocus
                  id="destino"
                  name="destino"
                  required
                  value={data.destino}
                  placeholder="NUMERO DE LOTE"
                  onChange={(e) => setData('destino', e.target.value)}
                />
                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
              </div>

              <div>
                <Label htmlFor="destino">FECHA DE VENCIMIENTO</Label>
                <Input
                  type='date'
                  autoFocus
                  id="destino"
                  name="destino"
                  required
                  value={data.destino}
                  placeholder="FECHA DE VENCIMIENTO"
                  onChange={(e) => setData('destino', e.target.value)}
                />
                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
              </div>

            </div>
          </div>
        </form>
        <form onSubmit={submit}>
          <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">

            <table className="w-full table-fixed whitespace-nowrap">
              <thead>
                <tr className="text-left font-bold">
                  <th className="w-1/5 text-center"> CÓDIGO </th>
                  <th className="w-1/5 text-center"> MATERIAL </th>
                  <th className="w-1/4 text-center"> CANTIDAD SOLICITADA </th>
                  <th className="w-1/4 text-center"> CANTIDAD ENTREGADA </th>
                  <th className="w-1/6 text-center"> LOTE </th>
                  <th className="align-center flex w-1/12"> </th>
                </tr>
              </thead>
              <tbody>
                {data.materiales.map((material, idx) => {
                  return (
                    <tr key={idx} className="focus-within:bg-gray-100 hover:bg-gray-100">
                      <td className="w-1/4 border-t p-2 align-top break-words">
                        <Input
                          autoFocus
                          id="area"
                          name="area"
                          required
                          value={data.area}
                          placeholder="CÓDIGO"
                          onChange={(e) => setData('area', e.target.value)}
                        />
                      </td>
                      <td className="w-1/4 border-t p-2 align-top break-words">
                        <Input
                          autoFocus
                          id="area"
                          name="area"
                          required
                          value={data.area}
                          placeholder="MATERIAL"
                          onChange={(e) => setData('area', e.target.value)}
                        />
                      </td>
                      <td className="w-1/4 border-t p-2 align-top break-words">
                        <Input
                          autoFocus
                          id="area"
                          name="area"
                          required
                          value={data.area}
                          placeholder="CANTIDAD SOLICITADA"
                          onChange={(e) => setData('area', e.target.value)}
                        />
                      </td>
                      <td className="w-1/4 border-t p-2 align-top break-words">
                        <Input
                          autoFocus
                          id="area"
                          name="area"
                          required
                          value={data.area}
                          placeholder="CANTIDAD ENTREGADA"
                          onChange={(e) => setData('area', e.target.value)}
                        />
                      </td>

                      <td>
                        <Input
                          autoFocus
                          id="area"
                          name="area"
                          required
                          value={data.area}
                          placeholder="LOTE"
                          onChange={(e) => setData('area', e.target.value)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
              <h6 className="mb-5 text-center font-bold">OBSERVACIONES</h6>
              <div>
                <Textarea
                  autoFocus
                  id="area"
                  rows={4}
                  name="area"
                  required
                  value={data.area}
                  placeholder="MOTIVO DE SOLICITUD"
                  onChange={(e) => setData('area', e.target.value)}
                />

                {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Button
              variant={'outline'}
              className="mx-4 ms-4"
              disabled={processing}
              type="button"
              onClick={() => {
                reset();
              }}
            >
              {processing ? (
                <>
                  Guardando <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                'Guardar Borrador'
              )}
            </Button>
            <Button disabled={processing}>
              {processing ? (
                <>
                  Guardando <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                'Guardar y Emitir'
              )}
            </Button>
          </div>

        </form>
      </div>
    </AppLayout>
  );
}
