import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectOptions, SelectType } from '@/types/SelectOptions';
import { useForm } from '@inertiajs/react';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

type Option = {
    valor: string;
    texto: string;
};

type ThisForm = {
    versiones_id: string;
    etiqueta: string;
    nombre: string;
    tipo: string;
    requerido: boolean;
    usa_bd: boolean;
    tabla_fuente?: string;
    columna_valor?: string;
    columna_texto?: string;
    depende_de?: string;
    options_json?: Option[];
    grupo?: string;
    orden: number;
};

export const Form = ({ id, version, onReload, onClose }: any) => {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        versiones_id: version.id,
        etiqueta: '',
        nombre: '',
        tipo: '',
        requerido: false,
        usa_bd: false,
        tabla_fuente: '',
        columna_valor: '',
        columna_texto: '',
        depende_de: '',
        options_json: [],
        grupo: '',
        orden: 0,
    });

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
            put(route('campos.update', id), options);
        } else {
            post(route('campos.store'), options);
        }
    };

    const onGetItem = async () => {
        const { data: response } = await axios.get(route('campos.show', id));
        const item = response.data;

        setData({
            versiones_id: version.id,
            etiqueta: item.etiqueta || '',
            nombre: item.nombre || '',
            tipo: item.tipo || '',
            requerido: item.requerido == '1' ? true : false,
            usa_bd: item.usa_bd == '1' ? true : false,
            tabla_fuente: item.tabla_fuente || '',
            columna_valor: item.columna_valor || '',
            columna_texto: item.columna_texto || '',
            depende_de: item.depende_de || '',
            options_json: item.options_json || [],
            grupo: item.grupo || '',
            orden: item.orden || 0,
        });

        setResetKey(Date.now());
    };

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
                            <Label htmlFor="proceso"> Proceso </Label>

                            <Input readOnly={true} autoFocus id="proceso" name="proceso" value={version.formulario?.proceso?.proceso} />
                        </div>

                        <div>
                            <Label htmlFor="formulario"> Formulario </Label>

                            <Input readOnly={true} autoFocus id="formulario" name="formulario" value={version.formulario?.formulario} />
                        </div>

                        <div>
                            <Label htmlFor="version"> Versión </Label>

                            <Input readOnly={true} autoFocus id="version" name="version" value={version.version} />
                        </div>

                        <div>
                            <Label htmlFor="etiqueta"> Etiqueta </Label>

                            <Input
                                autoFocus
                                id="etiqueta"
                                name="etiqueta"
                                required
                                value={data.etiqueta}
                                placeholder="Etiqueta"
                                onChange={(e) => setData('etiqueta', e.target.value)}
                            />

                            {errors.etiqueta && <p className="mt-1 text-sm text-red-500">{errors.etiqueta}</p>}
                        </div>

                        <div>
                            <Label htmlFor="nombre"> Nombre </Label>

                            <Input
                                autoFocus
                                id="nombre"
                                name="nombre"
                                required
                                value={data.nombre}
                                placeholder="Nombre"
                                onChange={(e) => setData('nombre', e.target.value)}
                            />

                            {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
                        </div>

                        <div>
                            <Label htmlFor="tipo"> Tipo </Label>

                            <Select key={`tipos_id-${resetKey}`} defaultValue={data.tipo} onValueChange={(value) => setData('tipo', value)}>
                                <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                    <SelectValue placeholder="Selecciona un Formato" />
                                </SelectTrigger>
                                <SelectContent
                                    position="popper"
                                    align="start"
                                    side="bottom"
                                    sideOffset={3}
                                    className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                >
                                    {SelectOptions.map((item: any, idx: number) => {
                                        return (
                                            <SelectItem key={idx} value={`${item.key}`}>
                                                {' '}
                                                {item.value}{' '}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>

                            {errors.tipo && <p className="mt-1 text-sm text-red-500">{errors.tipo}</p>}
                        </div>

                        <div className="flex items-center space-x-3">
                            <Checkbox checked={data.requerido} onCheckedChange={(checked) => setData('requerido', checked as boolean)} />
                            <Label htmlFor="requerido"> Campo requerido? </Label>

                            {errors.requerido && <p className="mt-1 text-sm text-red-500">{errors.requerido}</p>}
                        </div>

                        <div className="flex items-center space-x-3">
                            <Checkbox checked={data.usa_bd} onCheckedChange={(checked) => setData('usa_bd', checked as boolean)} />
                            <Label htmlFor="usa_bd"> Usa Base de Datos? </Label>

                            {errors.usa_bd && <p className="mt-1 text-sm text-red-500">{errors.usa_bd}</p>}
                        </div>

                        {data.usa_bd ? (
                            <>
                                <div>
                                    <Label htmlFor="tabla_fuente"> Tabla Fuente </Label>

                                    <Input
                                        autoFocus
                                        id="tabla_fuente"
                                        name="tabla_fuente"
                                        required
                                        value={data.tabla_fuente}
                                        placeholder="Tabla Fuente"
                                        onChange={(e) => setData('tabla_fuente', e.target.value)}
                                    />

                                    {errors.tabla_fuente && <p className="mt-1 text-sm text-red-500">{errors.tabla_fuente}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="columna_valor"> Columna valor </Label>

                                    <Input
                                        autoFocus
                                        id="columna_valor"
                                        name="columna_valor"
                                        required
                                        value={data.columna_valor}
                                        placeholder="Columna valor"
                                        onChange={(e) => setData('columna_valor', e.target.value)}
                                    />

                                    {errors.columna_valor && <p className="mt-1 text-sm text-red-500">{errors.columna_valor}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="columna_valor"> Columna texto </Label>

                                    <Input
                                        autoFocus
                                        id="columna_texto"
                                        name="columna_texto"
                                        required
                                        value={data.columna_texto}
                                        placeholder="Columna texto"
                                        onChange={(e) => setData('columna_texto', e.target.value)}
                                    />

                                    {errors.columna_texto && <p className="mt-1 text-sm text-red-500">{errors.columna_texto}</p>}
                                </div>
                            </>
                        ) : null}

                        {!data.usa_bd && data.tipo == SelectType.select ? (
                            <div>
                                <Label htmlFor="options_json"> Lista de Valores </Label>

                                <Input autoFocus id="options_json" name="options_json" required placeholder="Lista de Valores" />

                                {errors.options_json && <p className="mt-1 text-sm text-red-500">{errors.options_json}</p>}
                            </div>
                        ) : null}

                        <div>
                            <Label htmlFor="columna_valor"> Depende de </Label>

                            <Input
                                autoFocus
                                id="depende_de"
                                name="depende_de"
                                value={data.depende_de}
                                placeholder="Depende de"
                                onChange={(e) => setData('depende_de', e.target.value)}
                            />

                            {errors.depende_de && <p className="mt-1 text-sm text-red-500">{errors.depende_de}</p>}
                        </div>

                        <div>
                            <Label htmlFor="columna_valor"> Grupo </Label>

                            <Input
                                autoFocus
                                id="grupo"
                                name="grupo"
                                value={data.grupo}
                                placeholder="Grupo"
                                onChange={(e) => setData('grupo', e.target.value)}
                            />

                            {errors.grupo && <p className="mt-1 text-sm text-red-500">{errors.grupo}</p>}
                        </div>

                        <div>
                            <Label htmlFor="orden"> Orden </Label>

                            <Input
                                autoFocus
                                id="orden"
                                name="orden"
                                type="number"
                                value={data.orden}
                                placeholder="Grupo"
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
