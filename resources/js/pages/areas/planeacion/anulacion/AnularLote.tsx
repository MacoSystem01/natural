import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Planeación / Anular Lote',
        href: '/planeacion/Anular-Lote',
    },
];

type SearchForm = {
    op: string;
    anular: boolean;
    motivo: string;
    modo: 'borrador' | 'emitir' | ''; // nuevo campo
};

export default function () {
    const { data, setData, processing, errors, reset, post } = useForm<SearchForm>({
        op: '',
        anular: false,
        motivo: '',
        modo: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const ruta =
            data.modo === 'borrador'
                ? '/planeacion/Anular-Lote/borrador'
                : '/planeacion/Anular-Lote/guardar';

        post(ruta, {
            onSuccess: () => console.log('Guardado correctamente'),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Orden de Trabajo" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <h2 className="font-bold mb-10 text-center">
                    ANULACIÓN DE LOTE
                </h2>

                <form id="form-anular-lote" onSubmit={submit} className="space-y-6">
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {/* OP */}
                            <div>
                                <Label htmlFor="op">OP</Label>
                                <input
                                    id="op"
                                    name="op"
                                    autoComplete="off"
                                    required
                                    value={data.op}
                                    placeholder="Número de OP"
                                    onChange={(e) => setData('op', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                />
                                {errors.op && (
                                    <p className="mt-1 text-sm text-red-500">{errors.op}</p>
                                )}
                            </div>

                            {/* Checkbox Anular */}
                            <div className="flex items-center mt-6">
                                <input
                                    id="anular"
                                    type="checkbox"
                                    checked={data.anular}
                                    onChange={(e) => setData('anular', e.target.checked)}
                                    className="mr-2 h-4 w-4"
                                />
                                <Label htmlFor="anular">Anular</Label>
                            </div>

                            {/* Motivo */}
                            <div className="col-span-2">
                                <Label htmlFor="motivo">Motivo</Label>
                                <textarea
                                    id="motivo"
                                    name="motivo"
                                    value={data.motivo}
                                    onChange={(e) => setData('motivo', e.target.value)}
                                    placeholder="Escribe el motivo de la anulación..."
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                />
                                {errors.motivo && (
                                    <p className="mt-1 text-sm text-red-500">{errors.motivo}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end gap-4">
                        <Button
                            variant="outline"
                            type="button"
                            onClick={() => reset()}
                            disabled={processing}
                        >
                            Limpiar
                        </Button>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                setData('modo', 'borrador');
                                document.getElementById('form-anular-lote')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                            }}
                            disabled={processing}
                        >
                            {processing && data.modo === 'borrador' ? (
                                <>
                                    Guardando <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                                </>
                            ) : (
                                'Guardar Borrador'
                            )}
                        </Button>

                        <Button
                            type="submit"
                            onClick={() => setData('modo', 'emitir')}
                            disabled={processing}
                        >
                            {processing && data.modo === 'emitir' ? (
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
