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
    formularios_id: string;
    areas_id: string;
};

export const Form = ({ formulario, onReload, onClose }: any) => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<ThisForm>>({
        formularios_id: formulario.id,
        areas_id: '',
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
                if (errors.proceso) {
                    reset();
                }
            },
        };

        post(route('formularios_areas.store'), options);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const {
                    data: { data: areas },
                }: any = await axios.get(route('areas.index'));

                const filtered = areas.filter( (area: any) => !formulario.areas.some((a: any) => a.id === area.id) )

                setAreas(filtered ?? []);
            } catch (error) {
                console.error('Error fetching data:', error);
                showAlert('error', 'No se pudieron cargar algunos datos');
            }
        };

        getData();
    }, []);

    return (
        <div className="pt-6 pb-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="formulario"> Proceso </Label>

                            <Input
                                readOnly
                                autoFocus
                                id="formulario"
                                name="formulario"
                                required
                                value={formulario.proceso?.proceso}
                            />
                        </div>
                        
                        <div>
                            <Label htmlFor="formulario"> Formato </Label>

                            <Input
                                readOnly
                                autoFocus
                                id="formulario"
                                name="formulario"
                                required
                                value={formulario.formulario}
                            />
                        </div>

                        <div>
                            <Label htmlFor="areas_id"> Area </Label>
                            <Select
                                key={`areas_id-${resetKey}`}
                                defaultValue={data.areas_id}
                                onValueChange={(value) => setData('areas_id', value)}
                            >
                                <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                    <SelectValue placeholder="Selecciona un Area" />
                                </SelectTrigger>
                                <SelectContent
                                    position="popper"
                                    align="start"
                                    side="bottom"
                                    sideOffset={3}
                                    className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                >
                                    {areas.map((item: any, idx: number) => {
                                        return (
                                            <SelectItem key={idx} value={`${item.id}`}>
                                                {' '}
                                                {item.area}{' '}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>

                            {errors.areas_id && <p className="mt-1 text-sm text-red-500">{errors.areas_id}</p>}
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
