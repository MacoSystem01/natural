import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { LoaderCircle, PlusIcon, Trash2 } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bodega / Ingreso a Bodega por Devolución',
        href: '/bodega/devolucion',
    },
];

type Material = {
    material: string;
    lote: string;
    cantidad: string;
    unidades_id: string;
};

type ThisForm = {
    area: string;
    op: string;
    producto: string;
    proveedor: string;
    lote: string;
    remision: string;
    materiales: Material[];
    observaciones: string;
};

export default function ({ id, materiales, unidades }: any) {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        area: '',
        op: '',
        producto: '',
        proveedor: '',
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

    const [resetKey, setResetKey] = useState(Date.now());

    const onAddMaterial = () => {
        const material: Material = {
            material: '',
            lote: '',
            unidades_id: '',
            cantidad: '',
        }
        setData('materiales', [...data.materiales, material] )
    }

    const onRemoveMaterial = (idx: number) => {
        const lista = [...data.materiales]
        lista.splice(idx, 1)
        setData('materiales', [...lista]);
    }

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();

        const options = {
            onSuccess: () => {
                reset();
            },
            onError: (errors: any) => {
                console.log(errors);
                if (errors.area) {
                    reset();
                }
            },
        };

        if (id) {
            put(route('areas.update', id), options);
        } else {
            post(route('areas.store'), options);
        }
    };

    useEffect(() => {
        const getRecepcion = async (op: any) => {
            if (!op) return;

            const {
                data: { recepcion },
            } = await axios.post(route(`bodega.recepcion.find`, { op }));
            if (recepcion) {
                setData('producto', recepcion.producto?.codigo + '-' + recepcion.producto?.descripcion);
            }
        };

        setTimeout(() => {
            getRecepcion(data.op);
        }, 500);
    }, [data.op]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Areas" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={submit}>
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="area"> AREA DE PRODUCCION </Label>

                                <Input
                                    autoFocus
                                    id="area"
                                    name="area"
                                    required
                                    value={data.area}
                                    placeholder="AREA DE PRODUCCION"
                                    onChange={(e) => setData('area', e.target.value)}
                                />

                                {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                            </div>
                            <div>
                                <Label htmlFor="area"> OP </Label>

                                <Input
                                    autoFocus
                                    id="op"
                                    name="op"
                                    required
                                    value={data.op}
                                    placeholder="OP"
                                    onChange={(e) => setData('op', e.target.value)}
                                />

                                {errors.op && <p className="mt-1 text-sm text-red-500">{errors.op}</p>}
                            </div>
                            <div>
                                <Label htmlFor="area"> PRODUCTO </Label>

                                <Input
                                    readOnly
                                    autoFocus
                                    id="producto"
                                    name="producto"
                                    required
                                    value={data.producto}
                                    placeholder="PRODUCTO"
                                    onChange={(e) => setData('producto', e.target.value)}
                                />

                                {errors.producto && <p className="mt-1 text-sm text-red-500">{errors.producto}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="mb-4 flex items-center justify-end">
                            <Button type='button' onClick={onAddMaterial}>
                                <PlusIcon />
                            </Button>
                        </div>

                        <table className="w-full table-fixed whitespace-nowrap">
                            <thead>
                                <tr className="text-left font-bold">
                                <th className="w-1/4"> MATERIAL </th>
                                    <th className="w-1/4"> LOTE </th>
                                    <th className="w-1/5"> CANTIDAD </th>
                                    <th className="w-1/4"> UNIDAD MEDIDA </th>
                                    <th className="align-center flex w-1/12"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.materiales.map((material, idx) => {
                                    return (
                                        <tr key={idx} className="focus-within:bg-gray-100 hover:bg-gray-100">
                                            <td className="w-1/4 border-t p-2 align-top break-words">
                                                <Select key={`materiales_id-${resetKey}`}>
                                                    <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                                        <SelectValue placeholder="Selecciona un Valor" />
                                                    </SelectTrigger>
                                                    <SelectContent
                                                        position="popper"
                                                        align="start"
                                                        side="bottom"
                                                        sideOffset={3}
                                                        className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                                    >
                                                        {materiales.map((material: any, idx: number) => {
                                                            return (
                                                                <SelectItem key={idx} value={material.codigo}>
                                                                    {' '}
                                                                    {material.codigo} - {material.descripcion}{' '}
                                                                </SelectItem>
                                                            );
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                            </td>
                                            <td className="w-1/4 border-t p-2 align-top break-words">
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
                                            <td className="w-1/4 border-t p-2 align-top break-words">
                                                <Input
                                                    autoFocus
                                                    id="area"
                                                    name="area"
                                                    required
                                                    value={data.area}
                                                    placeholder="CANTIDAD"
                                                    onChange={(e) => setData('area', e.target.value)}
                                                />
                                            </td>
                                            <td className="w-1/4 border-t p-2 align-top break-words">
                                                <Select key={`unidades_id-${resetKey}`}>
                                                    <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                                        <SelectValue placeholder="Selecciona un Valor" />
                                                    </SelectTrigger>
                                                    <SelectContent
                                                        position="popper"
                                                        align="start"
                                                        side="bottom"
                                                        sideOffset={3}
                                                        className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                                    >
                                                        {unidades.map((unidad: any, idx: number) => {
                                                            return (
                                                                <SelectItem key={idx} value={unidad.id.toString()}>
                                                                    {' '}
                                                                    {unidad.descripcion}{' '}
                                                                </SelectItem>
                                                            );
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                            </td>
                                            
                                            <td>
                                                {idx > 0 && (
                                                    <Button type="button" onClick={ ( ) => onRemoveMaterial(idx)}>
                                                        <Trash2 />
                                                    </Button>
                                                )}
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
                            Guardar
                        </Button>
                        <Button disabled={processing}>
                            Guardar y Enviar
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
