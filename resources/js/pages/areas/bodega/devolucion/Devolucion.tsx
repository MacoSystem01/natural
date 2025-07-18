import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bodega / Ingreso a Bodega por Devolución',
        href: '/bodega/devolucion',
    },
];

type ThisForm = {
    proveedor: string;
    area: string;
    oc: string;
    lote: string;
    remision: string;
    materiales: [];
    observaciones: string;
};

export default function ({ id, onReload }: any) {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        proveedor: '',
        area: '',
        oc: '',
        lote: '',
        remision: '',
        materiales: [],
        observaciones: '',
    });

    const [resetKey, setResetKey] = useState(Date.now());

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();

        const options = {
            onSuccess: () => {
                reset();
                onReload();
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
            <Head title="Areas" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={submit}>
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="area"> PROVEEDOR </Label>

                                <Input
                                    autoFocus
                                    id="area"
                                    name="area"
                                    required
                                    value={data.area}
                                    placeholder="PROVEEDOR"
                                    onChange={(e) => setData('area', e.target.value)}
                                />

                                {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                            </div>
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
                                <Label htmlFor="area"> O.C </Label>

                                <Input
                                    autoFocus
                                    id="area"
                                    name="area"
                                    required
                                    value={data.area}
                                    placeholder="O.C"
                                    onChange={(e) => setData('area', e.target.value)}
                                />

                                {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                            </div>
                            <div>
                                <Label htmlFor="area"> LOTE </Label>

                                <Input
                                    autoFocus
                                    id="area"
                                    name="area"
                                    required
                                    value={data.area}
                                    placeholder="LOTE"
                                    onChange={(e) => setData('area', e.target.value)}
                                />

                                {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                            </div>
                            <div>
                                <Label htmlFor="area"> REMISIÓN </Label>

                                <Input
                                    autoFocus
                                    id="area"
                                    name="area"
                                    required
                                    value={data.area}
                                    placeholder="REMISIÓN"
                                    onChange={(e) => setData('area', e.target.value)}
                                />

                                {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <table className="w-full table-fixed whitespace-nowrap">
                            <thead>
                                <tr className="text-left font-bold">
                                    <th className="w-1/4"> CÓDIGO </th>
                                    <th className="w-1/4"> LOTE </th>
                                    <th className="w-1/4"> CANTIDAD </th>
                                    <th className="w-1/4"> DESCRIPCIÓN </th>
                                </tr>
                            </thead>
                            <tbody>
                                {new Array(6).fill('').map((_, idx) => {
                                    return (
                                        <tr key={idx} className="focus-within:bg-gray-100 hover:bg-gray-100">
                                            <td className="w-1/4 border-t align-top break-words">
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
                                            <td className="w-1/4 border-t align-top break-words">
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
                                            <td className="w-1/4 border-t align-top break-words">
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
                                            <td className="w-1/4 border-t break-words">
                                                <Textarea
                                                    autoFocus
                                                    id="area"
                                                    name="area"
                                                    rows={3}
                                                    required
                                                    value={data.area}
                                                    placeholder="DESCRIPCIÓN"
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
                            <h6 className="mb-5 font-bold text-center">OBSERVACIONES</h6>
                            <div>
                                <Textarea
                                    autoFocus
                                    id="area"
                                    rows={4}
                                    name="area"
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
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
                            Cancelar
                        </Button>
                        <Button disabled={processing}>
                            Guardar
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
