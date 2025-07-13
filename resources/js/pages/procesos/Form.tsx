import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { showAlert } from '@/plugins/sweetalert';
import { useForm } from '@inertiajs/react';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

type ThisForm = {
    proceso: string;
};

export const Form = ({ id, onReload, onClose }: any) => {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        proceso: '',
    });

    const [areas, setAreas] = useState([]);
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
                if (errors.area) {
                    reset();
                }
            },
        };

        if (id) {
            put(route('procesos.update', id), options);
        } else {
            post(route('procesos.store'), options);
        }
    };

    const onGetItem = async () => {
        const { data: response } = await axios.get(route('procesos.show', id));
        const item = response.data;

        setData({
            proceso: item.proceso || '',
        });

        setResetKey(Date.now());
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const {
                    data: { data: areas },
                }: any = await axios.get(route('areas.index'));

                setAreas(areas ?? []);
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
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Label htmlFor="proceso"> Proceso </Label>

                            <Input
                                autoFocus
                                id="proceso"
                                name="proceso"
                                required
                                value={data.proceso}
                                placeholder="Proceso"
                                onChange={(e) => setData('proceso', e.target.value)}
                            />

                            {errors.proceso && <p className="mt-1 text-sm text-red-500">{errors.proceso}</p>}
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
