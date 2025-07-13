import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showAlert } from "@/plugins/sweetalert";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { FormEventHandler, useEffect, useState } from "react";

type ThisForm = {
    areas_id: string;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export const Form = ({ id, onReload, onClose }: any) => {

    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        areas_id: '0',        
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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
                console.log( errors )
                if (errors.name) {
                    reset('name');
                }
            },
        };

        if (id) {
            put(route('usuarios.update',id), options);
        } else {
            post(route('usuarios.store'), options);
        }
    };

    const onGetItem = async () => {

        const { data: response } = await axios.get(route('usuarios.show', id));
        const item = response.data;

        setData({
            areas_id: item.areas_id?.toString() || '0',
            name: item.name || '',
            email: item.email || '',
            password: '',
            password_confirmation: '',
        });

        setResetKey(Date.now())
    }


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
    }, [id])

    return (
        <div className="pb-12 pt-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name"> Nombre </Label>

                            <Input
                                autoFocus
                                id="name"
                                name="name"
                                required
                                value={data.name}
                                placeholder="Nombre"
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <Label htmlFor="email"> Email </Label>

                            <Input
                                autoFocus
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={data.email}
                                placeholder="Email"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <Label htmlFor="role"> Area </Label>
                            <Select
                                key={`role-${resetKey}`}
                                defaultValue={data.areas_id}
                                onValueChange={(value) => setData('areas_id', value)}
                            >
                                <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                    <SelectValue placeholder="Selecciona un area" />
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

                        <div>
                            <Label htmlFor="password"> Contraseña </Label>

                            <Input
                                autoFocus
                                type="password"
                                id="password"
                                name="password"
                                required={!id}
                                value={data.password}
                                placeholder="Contraseña"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        
                        <div>
                            <Label htmlFor="email"> Confirmar Contraseña </Label>

                            <Input
                                autoFocus
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                required={!id}
                                value={data.password_confirmation}
                                placeholder="Confirmar Contraseña"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            
                            {errors.password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>}
                        </div>
                        
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button
                            variant={"outline"}
                            className="ms-4 mx-4"
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
