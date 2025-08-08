import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Planeación / Orden de Producción',
    href: '/planeacion/orden-produccion',
  },
];

export default function OrdenProduccion() {
  const [formData, setFormData] = useState({
    op: '',
    codigo: '',
    producto: '',
    presentacion: '',
    lote: '',
    registroSanitario: '',
    codigoBarras: '',
    tamano: '',
    fechaVencimiento: '',
    unidadesLote: '',
  });

  const limpiarFormulario = () => {
    setFormData({
      op: '',
      codigo: '',
      producto: '',
      presentacion: '',
      lote: '',
      registroSanitario: '',
      codigoBarras: '',
      tamano: '',
      fechaVencimiento: '',
      unidadesLote: '',
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Orden de Producción" />

      <div className="p-6 space-y-6 text-sm text-gray-700">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Orden de Producción</h1>
        </div>

        {/* OP + Buscar */}
        <div className="grid grid-cols-3 gap-4 border p-4 rounded-xl shadow items-end">
          <div>
            <Label htmlFor="op">O.P.:</Label>
            <Input
              id="op"
              name="op"
              className="mt-1"
              placeholder="Ej: OP-2025-0001"
              value={formData.op}
              onChange={(e) => setFormData({ ...formData, op: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <Button className="mt-5" type="button">
              Buscar
            </Button>
          </div>
        </div>

        {/* Campos adicionales */}
        <div className="grid grid-cols-2 gap-4 border p-4 rounded-xl shadow">
          <div>
            <Label htmlFor="codigo">CÓDIGO:</Label>
            <Input
              id="codigo"
              name="codigo"
              className="mt-1"
              placeholder="Ingrese código del producto"
              value={formData.codigo}
              onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="producto">PRODUCTO:</Label>
            <Input
              id="producto"
              name="producto"
              className="mt-1"
              placeholder="Nombre del producto"
              value={formData.producto}
              onChange={(e) => setFormData({ ...formData, producto: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="presentacion">PRESENTACIÓN (mL):</Label>
            <Input
              id="presentacion"
              name="presentacion"
              className="mt-1"
              placeholder="Ej: 50"
              value={formData.presentacion}
              onChange={(e) => setFormData({ ...formData, presentacion: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="lote">LOTE:</Label>
            <Input
              id="lote"
              name="lote"
              className="mt-1"
              placeholder="Número de lote"
              value={formData.lote}
              onChange={(e) => setFormData({ ...formData, lote: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="registroSanitario">REGISTRO SANITARIO:</Label>
            <Input
              id="registroSanitario"
              name="registroSanitario"
              className="mt-1"
              placeholder="Ingrese registro sanitario"
              value={formData.registroSanitario}
              onChange={(e) => setFormData({ ...formData, registroSanitario: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="codigoBarras">CÓDIGO DE BARRAS:</Label>
            <Input
              id="codigoBarras"
              name="codigoBarras"
              className="mt-1"
              placeholder="Ej: 1234567890123"
              value={formData.codigoBarras}
              onChange={(e) => setFormData({ ...formData, codigoBarras: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="tamano">TAMAÑO (mL):</Label>
            <Input
              id="tamano"
              name="tamano"
              className="mt-1"
              placeholder="Ej: 50"
              value={formData.tamano}
              onChange={(e) => setFormData({ ...formData, tamano: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="fechaVencimiento">FECHA DE VENCIMIENTO:</Label>
            <Input
              type="date"
              id="fechaVencimiento"
              name="fechaVencimiento"
              className="mt-1"
              placeholder="DD/MM/YYYY"
              value={formData.fechaVencimiento}
              onChange={(e) => setFormData({ ...formData, fechaVencimiento: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="unidadesLote">UNIDADES POR LOTE:</Label>
            <Input
              id="unidadesLote"
              name="unidadesLote"
              className="mt-1"
              placeholder="Ej: 1000"
              value={formData.unidadesLote}
              onChange={(e) => setFormData({ ...formData, unidadesLote: e.target.value })}
            />
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={limpiarFormulario} type="button">
            Limpiar
          </Button>
          <Button variant="outline" type="button">
            Guardar Borrador
          </Button>
          <Button type="button">Guardar y Enviar</Button>
        </div>
      </div>
    </AppLayout>
  );
}