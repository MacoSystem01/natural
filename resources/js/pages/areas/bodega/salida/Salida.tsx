import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, PlusIcon, Trash2 } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bodega / Salida de Bodega por Adición',
        href: '/bodega/salida',
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

export default function ({ id, materiales, unidades }: any) {
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

    const [resetKey, setResetKey] = useState(Date.now());

    const onAddMaterial = () => {
        const material: Material = {
            material: '',
            lote: '',
            unidades_id: '',
            cantidad: '',
        };
        setData('materiales', [...data.materiales, material]);
    };

    const onRemoveMaterial = (idx: number) => {
        const lista = [...data.materiales];
        lista.splice(idx, 1);
        setData('materiales', [...lista]);
    };

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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Salida de Bodega" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <h2 className='font-bold mb-10 text-center'>
                    SALIDA DE BODEGA
                </h2>

                <form onSubmit={submit}>
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-4">
                            <div>
                                <Label htmlFor="destino">DESTINO</Label>
                                <Input
                                    autoFocus
                                    id="destino"
                                    name="destino"
                                    required
                                    value={data.destino}
                                    placeholder="DESTINO"
                                    onChange={(e) => setData('destino', e.target.value)}
                                />
                                {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
                            </div>

                            <div>
                                <Label htmlFor="codigo">CÓDIGO</Label>
                                <Input
                                    id="codigo"
                                    name="codigo"
                                    required
                                    value={data.codigo}
                                    placeholder="CÓDIGO"
                                    onChange={(e) => setData('codigo', e.target.value)}
                                />
                                {errors.codigo && <p className="mt-1 text-sm text-red-500">{errors.codigo}</p>}
                            </div>

                            <div>
                                <Label htmlFor="op">OP</Label>
                                <Input id="op" name="op" required value={data.op} placeholder="OP" onChange={(e) => setData('op', e.target.value)} />
                                {errors.op && <p className="mt-1 text-sm text-red-500">{errors.op}</p>}
                            </div>

                            <div className="flex flex-col justify-end">
                                <Button type="submit" className="w-full">
                                    Buscar
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
                <form onSubmit={submit}>
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="mb-4 flex items-center justify-end">
                            <Button type="button" onClick={onAddMaterial}>
                                <PlusIcon />
                            </Button>
                        </div>

                        <table className="w-full table-fixed whitespace-nowrap">
                            <thead>
                                <tr className="text-left font-bold">
                                    <th className="w-1/5 text-center"> CÓDIGO </th>
                                    <th className="w-1/5 text-center"> MATERIAL </th>
                                    <th className="w-1/5 text-center"> LOTE </th>
                                    <th className="w-1/6 text-center"> CANTIDAD </th>
                                    <th className="w-1/6 text-center"> UNIDAD MEDIDA </th>
                                    <th className="align-center flex w-1/12"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.materiales.map((material, idx) => {
                                    return (
                                        <tr key={idx} className="focus-within:bg-gray-100 hover:bg-gray-100">
                                            <td className="w-1/4 border-t p-2 align-top break-words">-</td>
                                            <td className="w-1/4 border-t p-2 align-top break-words">-</td>
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
                                                <Select key={`materiales_id-${resetKey}`}>
                                                    <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                                        <SelectValue placeholder="Selecciona un Código" />
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
                                            <td>
                                                {idx > 0 && (
                                                    <Button type="button" onClick={() => onRemoveMaterial(idx)}>
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
