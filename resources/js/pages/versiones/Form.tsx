import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { FormEventHandler, useEffect } from "react";

type ThisForm = {
    formularios_id: string;
    version: string;
    activa: boolean;
    locked: boolean;
};

export const Form = ({ id, formulario, onReload, onClose }: any) => {

    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        formularios_id: formulario.id,
        version: '',
        activa: false,
        locked: false,
    });

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
                if (errors.area) {
                    reset();
                }
            },
        };

        if (id) {
            put(route('versiones.update',id), options);
        } else {
            post(route('versiones.store'), options);
        }
    };

    const onGetItem = async () => {

        const { data: response } = await axios.get(route('versiones.show', id));
        const item = response.data;

        setData({
            formularios_id: formulario.id,
            version: item.version || '',
            activa: item.activa == '1'  ? true : false,
            locked: item.locked == '1'  ? true : false,
        });
    }

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
                            <Label htmlFor="proceso"> Proceso </Label>

                            <Input
                                readOnly={true}
                                autoFocus
                                id="proceso"
                                name="proceso"
                                value={formulario.proceso?.proceso}
                            />
                        </div>

                        <div>
                            <Label htmlFor="formulario"> Formulario </Label>

                            <Input
                                readOnly={true}
                                autoFocus
                                id="formulario"
                                name="formulario"
                                value={formulario.formulario}
                            />
                        </div>

                        <div>
                            <Label htmlFor="version"> Versión </Label>

                            <Input
                                autoFocus
                                id="version"
                                name="version"
                                required
                                value={data.version}
                                placeholder="version"
                                onChange={(e) => setData('version', e.target.value)}
                            />
                            
                            {errors.version && <p className="text-red-500 text-sm mt-1">{errors.version}</p>}
                        </div>
                    
                        <div className="flex items-center space-x-3">
                            <Checkbox checked={data.activa} onCheckedChange={(checked) => setData('activa', checked as boolean)} />
                            <Label htmlFor="version"> Versión Activa? </Label>
                            
                            {errors.version && <p className="text-red-500 text-sm mt-1">{errors.version}</p>}
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
