import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

type ThisForm = {
    area: string;
};

export const Cuarentena: React.FC<any> = ({ id, onReload }) => {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        area: '',
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
                    reset('area');
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
        <form onSubmit={submit}>
            <div className="my-4 rounded-lg bg-white p-4 shadow-md">
                <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                    <div>
                        <Label htmlFor="area"> MATERIA PRIMA </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="MATERIA PRIMA"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> MATERIAL DE EMPAQUE </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="MATERIAL DE EMPAQUE"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> CODIGO </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="CODIGO"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> DESCRIPCION </Label>

                        <Textarea
                            autoFocus
                            id="area"
                            name="area"
                            rows={3}
                            required
                            value={data.area}
                            placeholder="DESCRIPCION"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> FACTURA/REMISION	 </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="CODIGO"
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
                            placeholder="CODIGO"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> CANTIDAD </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="CODIGO"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> No RECIPIENTES </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="CODIGO"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> CONDICIONES DE ALMACENAMIENTO </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="CODIGO"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> T °C = </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="T °C ="
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> H.R % </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="H.R %"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>    
                    <div>
                        <Label htmlFor="area"> LOTE PROVEEDOR </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="LOTE PROVEEDOR"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>    
                    <div>
                        <Label htmlFor="area"> VENCE </Label>

                        <Input
                            autoFocus
                            type='date'
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="VENCE"
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
    );
};
