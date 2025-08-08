import { useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { LoaderCircle } from 'lucide-react';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Planeación / CONTROL DE EMISIÓN DE LOTES',
        href: '/planeacion/control-emision',
    },
];

export default function ControlEmision() {
    const { data, setData, post, processing, errors, reset } = useForm({
        fecha_emision: '', // autogenerada
        categoria: '',
        codigo: '',
        producto: '',
        presentacion: '',
        op: '',
        numero_lote: '',
        fecha_vencimiento: '', // autocalculada
        tamano_lote: '',
        unidad_medida: '',
        modo: '', // borrador o emitir
    });

    // Fecha automática
    useEffect(() => {
        const hoy = new Date();
        const dosAnios = new Date();
        dosAnios.setFullYear(hoy.getFullYear() + 2);
        setData('fecha_emision', hoy.toISOString().slice(0, 10));
        setData('fecha_vencimiento', dosAnios.toISOString().slice(0, 10));
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        const ruta =
            data.modo === 'borrador'
                ? '/planeacion/control-emision/borrador'
                : '/planeacion/control-emision/emitir';

        post(ruta, { onSuccess: () => console.log('Guardado correctamente') });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Control de Emisión de Lotes" />

            <div className="p-8">
                <h2 className="text-center text-xl font-bold mb-10">CONTROL DE EMISIÓN DE LOTES</h2>

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <Label>Fecha de Emisión</Label>
                            <input
                                value={data.fecha_emision}
                                disabled
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>Categoría</Label>
                            <select
                                value={data.categoria}
                                onChange={(e) => setData('categoria', e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            >
                                <option value="">Seleccione</option>
                                <option value="Fitoterapeutico">Fitoterapéutico</option>
                                <option value="Suplemento Dietario">Suplemento Dietario</option>
                                <option value="Alimentos">Alimentos</option>
                            </select>
                        </div>

                        <div>
                            <Label>Código</Label>
                            <input
                                value={data.codigo}
                                onChange={(e) => setData('codigo', e.target.value)}
                                placeholder="Digitar"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>Producto</Label>
                            <input
                                value={data.producto}
                                onChange={(e) => setData('producto', e.target.value)}
                                placeholder="Asociado automáticamente al código"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>Presentación</Label>
                            <input
                                value={data.presentacion}
                                onChange={(e) => setData('presentacion', e.target.value)}
                                placeholder="Digitar"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>OP</Label>
                            <input
                                value={data.op}
                                onChange={(e) => setData('op', e.target.value)}
                                placeholder="Automática consecutiva"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>Número de Lote</Label>
                            <input
                                value={data.numero_lote}
                                onChange={(e) => setData('numero_lote', e.target.value)}
                                placeholder="Digitar manual"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>Fecha de Vencimiento</Label>
                            <input
                                value={data.fecha_vencimiento}
                                disabled
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>Tamaño de Lote</Label>
                            <input
                                value={data.tamano_lote}
                                onChange={(e) => setData('tamano_lote', e.target.value)}
                                placeholder="Digitar manual"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <Label>Unidad de Medida</Label>
                            <select
                                value={data.unidad_medida}
                                onChange={(e) => setData('unidad_medida', e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            >
                                <option value="">Seleccione</option>
                                <option value="Kg">Kilogramo (Kg)</option>
                                <option value="L">Litro (L)</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-6">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                const hoy = new Date();
                                const dosAnios = new Date();
                                dosAnios.setFullYear(hoy.getFullYear() + 2);

                                setData({
                                    fecha_emision: hoy.toISOString().slice(0, 10),
                                    fecha_vencimiento: dosAnios.toISOString().slice(0, 10),
                                    categoria: '',
                                    codigo: '',
                                    producto: '',
                                    presentacion: '',
                                    op: '',
                                    numero_lote: '',
                                    tamano_lote: '',
                                    unidad_medida: '',
                                    modo: '',
                                });
                            }}
                            disabled={processing}
                        >
                            Limpiar
                        </Button>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                setData('modo', 'borrador');
                                document
                                    .querySelector('form')
                                    ?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                            }}
                            disabled={processing}
                        >
                            {processing && data.modo === 'borrador' ? (
                                <>Guardando... <LoaderCircle className="ml-2 h-4 w-4 animate-spin" /></>
                            ) : (
                                'GUARDAR'
                            )}
                        </Button>

                        <Button
                            type="submit"
                            onClick={() => setData('modo', 'emitir')}
                            disabled={processing}
                        >
                            {processing && data.modo === 'emitir' ? (
                                <>Guardando... <LoaderCircle className="ml-2 h-4 w-4 animate-spin" /></>
                            ) : (
                                'GUARDAR Y EMITIR'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
