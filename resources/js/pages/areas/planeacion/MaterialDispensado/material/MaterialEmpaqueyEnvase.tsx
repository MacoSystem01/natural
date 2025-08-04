import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Planeación / Materia Prima Dispensada',
        href: '/planeacion/materia-prima-dispensada',
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

export const MaterialEmpaqueyEnvase = () => {
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
        <>
            <h2 className='font-bold mb-10 text-center'>
                MATERIAL DE ENVASE Y EMPAQUE DISPENSADO
            </h2>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-1 mb-4">
                    <div>
                        <Label htmlFor="destino">DESCRIPCIÓN</Label>
                        <Textarea
                            autoFocus
                            id="area"
                            rows={4}
                            name="area"
                            required
                            value={data.area}
                            placeholder="DESCRIPCIÓN"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                </div>

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
                        <Label htmlFor="destino">LOTE</Label>
                        <Input
                            autoFocus
                            id="destino"
                            name="destino"
                            required
                            value={data.destino}
                            placeholder="LOTE"
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
                </div>
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
        </>
    );
}
