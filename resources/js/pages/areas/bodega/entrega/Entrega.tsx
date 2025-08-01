import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

type SearchForm = {
    tipo_material: string;
    op: string;
};

export default function ({ constants }: any) {
    const { data, setData, processing, errors, get, reset } = useForm<SearchForm>({
        tipo_material: '',
        op: '',
    });

    const [resetKey, setResetKey] = useState(Date.now());

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Reemplaza con tu llamada real: get(...) o post(...)
        console.log('Buscar con:', data);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Buscar Salida" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={submit} className="space-y-6">
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="tipo_material">Tipo Material</Label>
                                <Select
                                    key={`tipos_id-${resetKey}`}
                                    defaultValue={data.tipo_material}
                                    onValueChange={(value) => setData('tipo_material', value)}
                                >
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
                                        {constants.tipo_material.map((item: any, idx: number) => {
                                            return (
                                                <SelectItem key={idx} value={item.codigo}>
                                                    {' '}
                                                    {item.descripcion}{' '}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                                {errors.tipo_material && <p className="mt-1 text-sm text-red-500">{errors.tipo_material}</p>}
                            </div>

                            <div>
                                <Label htmlFor="op">OP</Label>
                                <input
                                    id="op"
                                    name="op"
                                    autoComplete="off"
                                    required
                                    value={data.op}
                                    placeholder="OP"
                                    onChange={(e) => setData('op', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                />
                                {errors.op && <p className="mt-1 text-sm text-red-500">{errors.op}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <Button
                            variant="outline"
                            type="button"
                            onClick={() => {
                                reset();
                            }}
                            disabled={processing}
                            className="mx-4 ms-4"
                        >
                            Limpiar
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? (
                                <>
                                    Buscando <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                                </>
                            ) : (
                                'Buscar'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
