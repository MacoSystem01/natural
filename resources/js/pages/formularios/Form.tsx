import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { showAlert } from '@/plugins/sweetalert';
import { useForm } from '@inertiajs/react';
import { Select } from '@radix-ui/react-select';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

type ThisForm = {
    procesos_id: string;
    formulario: string;
    orden: number;
};

export const Form = ({ id, onReload, onClose }: any) => {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        procesos_id: '',
        formulario: '',
        orden: 0,
    });

    const [procesos, setProcesos] = useState([]);
    const [resetKey, setResetKey] = useState(Date.now());

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();

        const options = {
            onSuccess: () => {
                reset();
                onClose();
                onReload();
            },
            onError: (errors: any) => {
                console.log(errors);
                if (errors.proceso) {
                    reset();
                }
            },
        };

        if (id) {
            put(route('formularios.update', id), options);
        } else {
            post(route('formularios.store'), options);
        }
    };

    const onGetItem = async () => {
        const { data: response } = await axios.get(route('formularios.show', id));
        const item = response.data;

        setData({
            procesos_id: item.proceso?.id.toString() || '',
            formulario: item.formulario || '',
            orden: item.orden || 0,
        });

        setResetKey(Date.now());
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const {
                    data: { data: procesos },
                }: any = await axios.get(route('procesos.index'));

                setProcesos(procesos ?? []);
            } catch (error) {
                console.error('Error fetching data:', error);
                showAlert('error', 'No se pudieron cargar algunos datos');
            }
        };

        getData();
    }, []);

    useEffect(() => {
        reset();
        if (id) onGetItem();
    }, [id]);

    return (
        <div className="pt-6 pb-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="procesos_id"> Proceso </Label>
                            <Select
                                key={`procesos_id-${resetKey}`}
                                defaultValue={data.procesos_id}
                                onValueChange={(value) => setData('procesos_id', value)}
                            >
                                <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                    <SelectValue placeholder="Selecciona un Proceso" />
                                </SelectTrigger>
                                <SelectContent
                                    position="popper"
                                    align="start"
                                    side="bottom"
                                    sideOffset={3}
                                    className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                >
                                    {procesos.map((item: any, idx: number) => {
                                        return (
                                            <SelectItem key={idx} value={`${item.id}`}>
                                                {' '}
                                                {item.proceso}{' '}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>

                            {errors.procesos_id && <p className="mt-1 text-sm text-red-500">{errors.procesos_id}</p>}
                        </div>

                        <div>
                            <Label htmlFor="formulario"> Formato </Label>

                            <Input
                                autoFocus
                                id="formulario"
                                name="formulario"
                                required
                                value={data.formulario}
                                placeholder="Proceso"
                                onChange={(e) => setData('formulario', e.target.value)}
                            />

                            {errors.formulario && <p className="mt-1 text-sm text-red-500">{errors.formulario}</p>}
                        </div>

                        <div>
                            <Label htmlFor="orden"> Orden </Label>

                            <Input
                                type='number'
                                autoFocus
                                id="orden"
                                name="orden"
                                required
                                value={data.orden}
                                placeholder="Proceso"
                                onChange={(e) => setData('orden', Number(e.target.value))}
                            />

                            {errors.orden && <p className="mt-1 text-sm text-red-500">{errors.orden}</p>}
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
                                onClose();
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
        </div>
    );
};
