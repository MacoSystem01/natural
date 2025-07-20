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
        title: 'Bodega / Entrega de Material',
        href: '/bodega/entrega',
    },
];

type ThisForm = {
    muestra_no: string;
    de: string;
    usuarios_id: string;
    cantidad: string;
    fecha: string;
    observacion: string;
};

export default function ({ id, onReload }: any) {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        muestra_no: '',
        de: '',
        usuarios_id: '',
        cantidad: '',
        fecha: '',
        observacion: '',
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
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="muestra_no"> MUESTRA No -- solo OP y muestra el formulario correspondiente </Label>

                                <Input
                                    autoFocus
                                    id="muestra_no"
                                    name="muestra_no"
                                    required
                                    value={data.muestra_no}
                                    placeholder="PROVEEDOR"
                                    onChange={(e) => setData('muestra_no', e.target.value)}
                                />

                                {errors.muestra_no && <p className="mt-1 text-sm text-red-500">{errors.muestra_no}</p>}
                            </div>
                            <div>
                                <Label htmlFor="area"> DE </Label>

                                <Input
                                    autoFocus
                                    id="de"
                                    name="de"
                                    required
                                    value={data.de}
                                    placeholder="O.C"
                                    onChange={(e) => setData('de', e.target.value)}
                                />

                                {errors.de && <p className="mt-1 text-sm text-red-500">{errors.de}</p>}
                            </div>
                            <div>
                                <Label htmlFor="area"> CANTIDAD MUESTRA </Label>

                                <Input
                                    autoFocus
                                    id="cantidad"
                                    name="cantidad"
                                    required
                                    value={data.cantidad}
                                    placeholder="LOTE"
                                    onChange={(e) => setData('cantidad', e.target.value)}
                                />

                                {errors.cantidad && <p className="mt-1 text-sm text-red-500">{errors.cantidad}</p>}
                            </div>
                            <div>
                                <Label htmlFor="area"> FECHA </Label>

                                <Input
                                    autoFocus
                                    type='date'
                                    id="fecha"
                                    name="fecha"
                                    required
                                    value={data.fecha}
                                    placeholder="REMISIÓN"
                                    onChange={(e) => setData('fecha', e.target.value)}
                                />

                                {errors.fecha && <p className="mt-1 text-sm text-red-500">{errors.fecha}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                            <h6 className="mb-5 font-bold text-center">OBSERVACIÓN</h6>
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
