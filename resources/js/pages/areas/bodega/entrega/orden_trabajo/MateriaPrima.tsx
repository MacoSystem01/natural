import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { LoaderCircle, PlusIcon, Trash2 } from 'lucide-react';
import { useState } from 'react';

type Material = {
    material: string;
    lote: string;
    cantidad: string;
    unidades_id: string;
};

type SearchForm = {
    tipo_material: string;
    op: string;
    materiales: Material[];
};

export const MateriaPrima = ({ materiales }: any) => {
    const { data, setData, processing, errors, get, reset } = useForm<SearchForm>({
        tipo_material: '',
        op: '',
        materiales: [
            {
                material: '',
                lote: '',
                cantidad: '',
                unidades_id: '',
            },
        ],
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

    return (
        <>
            <h2 className='font-bold mb-10 text-center'>
                ORDEN DE TRABAJO BODEGA MATERIA PRIMA
            </h2>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
                    <div>
                        <Label htmlFor="destino">PRODUCTO</Label>
                        <Input
                            autoFocus
                            id="destino"
                            name="destino"
                            required
                            value={data.destino}
                            placeholder="PRODUCTO"
                            onChange={(e) => setData('destino', e.target.value)}
                        />
                        {errors.destino && <p className="mt-1 text-sm text-red-500">{errors.destino}</p>}
                    </div>

                    <div>
                        <Label htmlFor="codigo">PRESENTACIÓN</Label>
                        <Input
                            id="codigo"
                            name="codigo"
                            required
                            value={data.codigo}
                            placeholder="PRESENTACIÓN"
                            onChange={(e) => setData('codigo', e.target.value)}
                        />
                        {errors.codigo && <p className="mt-1 text-sm text-red-500">{errors.codigo}</p>}
                    </div>

                    <div>
                        <Label htmlFor="codigo">LOTE</Label>
                        <Input
                            id="codigo"
                            name="codigo"
                            required
                            value={data.codigo}
                            placeholder="LOTE"
                            onChange={(e) => setData('codigo', e.target.value)}
                        />
                        {errors.codigo && <p className="mt-1 text-sm text-red-500">{errors.codigo}</p>}
                    </div>

                    <div>
                        <Label htmlFor="codigo">TAMAÑO DEL LOTE </Label>
                        <Input
                            id="codigo"
                            name="codigo"
                            required
                            value={data.codigo}
                            placeholder="TAMAÑO DEL LOTE"
                            onChange={(e) => setData('codigo', e.target.value)}
                        />
                        {errors.codigo && <p className="mt-1 text-sm text-red-500">{errors.codigo}</p>}
                    </div>

                    <div>
                        <Label htmlFor="codigo">CANTIDAD</Label>
                        <Input
                            id="codigo"
                            name="codigo"
                            required
                            value={data.codigo}
                            placeholder="CANTIDAD"
                            onChange={(e) => setData('codigo', e.target.value)}
                        />
                        {errors.codigo && <p className="mt-1 text-sm text-red-500">{errors.codigo}</p>}
                    </div>
                </div>
            </div>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                <div className="mb-4 flex items-center justify-end">
                    <Button type="button" onClick={onAddMaterial}>
                        <PlusIcon />
                    </Button>
                </div>

                <table className="w-full table-fixed whitespace-nowrap">
                    <thead>
                        <tr className="text-left font-bold">
                            <th className="w-1/7 text-center text-wrap"> CÓDIGO </th>
                            <th className="w-1/7 text-center text-wrap"> MATERIAL </th>
                            <th className="w-1/6 text-center text-wrap"> CANT. SOLICITADA </th>
                            <th className="w-1/6 text-center text-wrap"> CANTIDAD ENTREGADA </th>
                            <th className="w-1/6 text-center text-wrap"> NUMERO DE LOTE </th>
                            <th className="w-1/6 text-center text-wrap"> # CONTENEDORES </th>
                            <th className="w-1/6 align-center flex w-1/12"> </th>
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
                            placeholder="Observaciones"
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
};
