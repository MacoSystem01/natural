import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { FormEventHandler, useEffect } from "react";

type ThisForm = {
    area: string;
};

export const Form = ({ id, onReload, onClose }: any) => {

    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        area: '',
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
                    reset('area');
                }
            },
        };

        if (id) {
            put(route('areas.update',id), options);
        } else {
            post(route('areas.store'), options);
        }
    };

    const onGetItem = async () => {

        const { data: response } = await axios.get(route('areas.show', id));
        const item = response.data;

        setData({
            area: item.area || '',
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
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Label htmlFor="area"> Area </Label>

                            <Input
                                autoFocus
                                id="area"
                                name="area"
                                required
                                value={data.area}
                                placeholder="Area"
                                onChange={(e) => setData('area', e.target.value)}
                            />
                            
                            {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}
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
