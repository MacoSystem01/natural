import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { Check, LoaderCircle, X } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bodega / Recepción',
        href: '/bodega/recepcion',
    },
];

type ThisForm = {
    tipo_material: string;
    materiales_id: string;
    proveedor: string;
    fabricante: string;
    direccion: string;
    orden_compra: string;
    factura: string;
    lote: string;
    fecha_vencimiento: string;
    lote_nmd: string;
    cantidad_total: string;
    cantidad_contenedor: string;
    n_contenedor: string;
    unidades_id: string;
    material: string;
    descripcion: string;
    t_c: string;
    certificado_analisis: boolean;
    almacenar_especial: boolean;
    observaciones: string;

    contenedor_identificado: boolean;
    contenedor_identificado_obs: string;
    contendor_sucio: boolean;
    contendor_sucio_obs: string;
    contenedor_humedo: boolean;
    contenedor_humedo_obs: string;
    olor_extrano: boolean;
    olor_extrano_obs: string;
    contenedor_derrame: boolean;
    contenedor_derrame_obs: string;
    contenedor_golpeado: boolean;
    contenedor_golpeado_obs: string;
    contenedor_roto: boolean;
    contenedor_roto_obs: string;
    material_menor_cantidad: boolean;
    material_menor_cantidad_obs: string;
    material_mayor_cantidad: boolean;
    material_mayor_cantidad_obs: string;
    fecha_vigente: boolean;
    fecha_vigente_obs: string;
    material_factura: boolean;
    material_factura_obs: string;
    descripcion_corresponde: boolean;
    descripcion_corresponde_obs: string;
    material_certificado: boolean;
    material_certificado_obs: string;

    estado: string;
};

export default function ({ id, constants, materiales, unidades }: any) {
    const { data, setData, post, put, errors, reset } = useForm<Required<ThisForm>>({
        tipo_material: '',
        materiales_id: '',
        proveedor: '',
        fabricante: '',
        direccion: '',
        orden_compra: '',
        factura: '',
        lote: '',
        fecha_vencimiento: '',
        lote_nmd: '',
        cantidad_total: '',
        cantidad_contenedor: '',
        n_contenedor: '',
        unidades_id: '',
        material: '',
        descripcion: '',
        t_c: '',
        certificado_analisis: false,
        almacenar_especial: false,
        observaciones: '',
        contenedor_identificado: false,
        contenedor_identificado_obs: '',
        contendor_sucio: false,
        contendor_sucio_obs: '',
        contenedor_humedo: false,
        contenedor_humedo_obs: '',
        olor_extrano: false,
        olor_extrano_obs: '',
        contenedor_derrame: false,
        contenedor_derrame_obs: '',
        contenedor_golpeado: false,
        contenedor_golpeado_obs: '',
        contenedor_roto: false,
        contenedor_roto_obs: '',
        material_menor_cantidad: false,
        material_menor_cantidad_obs: '',
        material_mayor_cantidad: false,
        material_mayor_cantidad_obs: '',
        fecha_vigente: false,
        fecha_vigente_obs: '',
        material_factura: false,
        material_factura_obs: '',
        descripcion_corresponde: false,
        descripcion_corresponde_obs: '',
        material_certificado: false,
        material_certificado_obs: '',
        estado: 'B',
    });

    const [materialesFilter, setMaterialesFilter] = useState<any[]>([]);
    const [resetKey, setResetKey] = useState(Date.now());
    const [processing, setProcessing] = useState(false);
    const [material, setMaterial] = useState<any>({});
    const [submit, setSubmit] = useState(false);

    const onSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        setData('estado', 'P');
        setSubmit(true);
    };

    const onSend: any = async () => {
        setProcessing(true);
        try {
            let response = null;
            if (id) {
                response = await axios.put(route('bodega.recepcion.update', id), {
                    ...data,
                });
            } else {
                response = await axios.post(route('bodega.recepcion.store'), {
                    ...data,
                });
            }

            setProcessing(false);
            return response;
        } catch (error) {
            console.log(errors);
            setProcessing(false);
            reset();
        }
    };

    const onDownload = (id: number) => {
        window.open('/bodega/recepcion/pdf/' + id, '_blank');
    };

    const onFilterMateriales = (search: string) => {
        setMaterial({
            codigo: search,
            descripcion: '',
        });

        if (search) {
            const filter = materiales.filter((m: any) => {
                return m.codigo.toLowerCase().includes(search) || m.descripcion.toLowerCase().includes(search);
            });
            setMaterialesFilter(filter);
        } else {
            setMaterialesFilter([]);
        }
    };

    const onSelectMaterial = (item: any) => {
        setData('materiales_id', item.id);
        setMaterial(item);
        setMaterialesFilter([]);
    };

    useEffect(() => {
        const onDoSend = async () => {
            if (!submit) return;

            try {
                const {
                    data: { recepcion },
                } = await onSend();
                onDownload(recepcion.id);
            } catch (error) {
                console.log(error);
            }
        };

        onDoSend();
    }, [submit]);

    useEffect(() => {
        const onNext = async (tipo_material: string) => {
            if (!tipo_material || id) return;

            const {
                data: { next },
            } = await axios.post(route(`bodega.recepcion.next`, { tipo_material }));
            if (next) {
                setData('lote_nmd', next);
            }
        };

        onNext(data.tipo_material);
    }, [data.tipo_material]);

    useEffect(() => {
        const onGetItem = async (id: number) => {
            if (!id) return;

            const {
                data: { recepcion },
            } = await axios.get(route(`bodega.recepcion.show`, { recepcion: id }));
            if (recepcion) {
                const data: ThisForm = {
                    ...recepcion,
                    materiales_id: recepcion.materiales_id.toString(),
                    unidades_id: recepcion.unidades_id.toString(),
                    certificado_analisis: recepcion.certificado_analisis == 1 ? true : false,
                    almacenar_especial: recepcion.almacenar_especial == 1 ? true : false,
                    contenedor_identificado_obs: recepcion.contenedor_identificado_obs ?? '',
                    contendor_sucio_obs: recepcion.contendor_sucio_obs ?? '',
                    contenedor_humedo_obs: recepcion.contenedor_humedo_obs ?? '',
                    olor_extrano_obs: recepcion.olor_extrano_obs ?? '',
                    contenedor_derrame_obs: recepcion.contenedor_derrame_obs ?? '',
                    contenedor_golpeado_obs: recepcion.contenedor_golpeado_obs ?? '',
                    contenedor_roto_obs: recepcion.contenedor_roto_obs ?? '',
                    material_menor_cantidad_obs: recepcion.material_menor_cantidad_obs ?? '',
                    material_mayor_cantidad_obs: recepcion.material_mayor_cantidad_obs ?? '',
                    fecha_vigente_obs: recepcion.fecha_vigente_obs ?? '',
                    material_factura_obs: recepcion.material_factura_obs ?? '',
                    descripcion_corresponde_obs: recepcion.descripcion_corresponde_obs ?? '',
                    material_certificado_obs: recepcion.material_certificado_obs ?? '',

                    contenedor_identificado: recepcion.contenedor_identificado == 1 ? true : false,
                    contendor_sucio: recepcion.contendor_sucio == 1 ? true : false,
                    contenedor_humedo: recepcion.contenedor_humedo == 1 ? true : false,
                    olor_extrano: recepcion.olor_extrano == 1 ? true : false,
                    contenedor_derrame: recepcion.contenedor_derrame == 1 ? true : false,
                    contenedor_golpeado: recepcion.contenedor_golpeado == 1 ? true : false,
                    contenedor_roto: recepcion.contenedor_roto == 1 ? true : false,
                    material_menor_cantidad: recepcion.material_menor_cantidad == 1 ? true : false,
                    material_mayor_cantidad: recepcion.material_mayor_cantidad == 1 ? true : false,
                    fecha_vigente: recepcion.fecha_vigente == 1 ? true : false,
                    material_factura: recepcion.material_factura == 1 ? true : false,
                    descripcion_corresponde: recepcion.descripcion_corresponde == 1 ? true : false,
                    material_certificado: recepcion.material_certificado == 1 ? true : false,
                };
                setData(data);
                setResetKey(Date.now());
            }
        };

        onGetItem(id);
    }, [id]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Areas" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={onSubmit}>
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 text-center font-bold">DATOS INICIALES</h6>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="tipo_material"> TIPO DE MATERIAL </Label>

                                <Select
                                    key={`tipos_id-${resetKey}`}
                                    defaultValue={data.tipo_material}
                                    onValueChange={(value) => setData('tipo_material', value)}
                                >
                                    <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                        <SelectValue placeholder="Selecciona un Valor" />
                                    </SelectTrigger>
                                    <SelectContent
                                        position="popper"
                                        align="start"
                                        side="bottom"
                                        sideOffset={3}
                                        className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                    >
                                        {constants.tipo_material.map((item: any, idx: number) => {
                                            return (
                                                <SelectItem key={idx} value={item.codigo}>
                                                    {' '}
                                                    {item.descripcion}{' '}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>

                                {errors.tipo_material && <p className="mt-1 text-sm text-red-500">{errors.tipo_material}</p>}
                            </div>

                            <div className="relative">
                                <Label htmlFor="materiales_id"> CODIGO MATERIAL </Label>

                                <Input
                                    autoFocus
                                    id="materiales_id"
                                    name="materiales_id"
                                    required
                                    value={material.codigo}
                                    placeholder="CODIGO MATERIAL"
                                    onChange={(e) => onFilterMateriales(e.target.value)}
                                />

                                {materialesFilter.length > 0 && (
                                    <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto border bg-white">
                                        {materialesFilter.map((item: any) => (
                                            <li key={item.id} className="cursor-pointer p-2 hover:bg-gray-100" onClick={() => onSelectMaterial(item)}>
                                                {item.codigo} - {item.descripcion}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {errors.materiales_id && <p className="mt-1 text-sm text-red-500">{errors.materiales_id}</p>}
                            </div>

                            <div>
                                <Label htmlFor="materiales_id"> MATERIAL </Label>

                                <Input
                                    readOnly
                                    autoFocus
                                    id="material"
                                    name="material"
                                    required
                                    value={material.descripcion}
                                    placeholder="MATERIAL"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 text-center font-bold">DATOS DE COMPRA</h6>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="proveedor"> PROVEEDOR </Label>

                                <Input
                                    autoFocus
                                    id="proveedor"
                                    name="proveedor"
                                    required
                                    value={data.proveedor}
                                    placeholder="PROVEEDOR"
                                    onChange={(e) => setData('proveedor', e.target.value)}
                                />

                                {errors.proveedor && <p className="mt-1 text-sm text-red-500">{errors.proveedor}</p>}
                            </div>
                            <div>
                                <Label htmlFor="fabricante"> FABRICANTE </Label>

                                <Input
                                    autoFocus
                                    id="fabricante"
                                    name="fabricante"
                                    required
                                    value={data.fabricante}
                                    placeholder="FABRICANTE"
                                    onChange={(e) => setData('fabricante', e.target.value)}
                                />

                                {errors.fabricante && <p className="mt-1 text-sm text-red-500">{errors.fabricante}</p>}
                            </div>
                            <div>
                                <Label htmlFor="direccion"> DIRECCION PROVEEDOR </Label>

                                <Input
                                    autoFocus
                                    id="direccion"
                                    name="direccion"
                                    required
                                    value={data.direccion}
                                    placeholder="DIRECCION PROVEEDOR"
                                    onChange={(e) => setData('direccion', e.target.value)}
                                />

                                {errors.direccion && <p className="mt-1 text-sm text-red-500">{errors.direccion}</p>}
                            </div>
                            <div>
                                <Label htmlFor="orden_compra"> ORDEN DE COMPRA </Label>

                                <Input
                                    autoFocus
                                    id="orden_compra"
                                    name="orden_compra"
                                    required
                                    value={data.orden_compra}
                                    placeholder="ORDEN DE COMPRA"
                                    onChange={(e) => setData('orden_compra', e.target.value)}
                                />

                                {errors.orden_compra && <p className="mt-1 text-sm text-red-500">{errors.orden_compra}</p>}
                            </div>
                            <div>
                                <Label htmlFor="factura"> FACTURA / REMISION </Label>

                                <Input
                                    autoFocus
                                    id="factura"
                                    name="factura"
                                    required
                                    value={data.factura}
                                    placeholder="FACTURA / REMISION"
                                    onChange={(e) => setData('factura', e.target.value)}
                                />

                                {errors.factura && <p className="mt-1 text-sm text-red-500">{errors.factura}</p>}
                            </div>
                            <div>
                                <Label htmlFor="lote"> LOTE PROVEEDOR </Label>

                                <Input
                                    autoFocus
                                    id="lote"
                                    name="lote"
                                    required
                                    value={data.lote}
                                    placeholder="LOTE PROVEEDOR"
                                    onChange={(e) => setData('lote', e.target.value)}
                                />

                                {errors.lote && <p className="mt-1 text-sm text-red-500">{errors.lote}</p>}
                            </div>
                            <div>
                                <Label htmlFor="fecha_vencimiento"> FECHA VENCIMIENTO </Label>

                                <Input
                                    type="date"
                                    autoFocus
                                    id="fecha_vencimiento"
                                    name="fecha_vencimiento"
                                    required
                                    value={data.fecha_vencimiento}
                                    placeholder="FECHA VENCIMIENTO"
                                    onChange={(e) => setData('fecha_vencimiento', e.target.value)}
                                />

                                {errors.fecha_vencimiento && <p className="mt-1 text-sm text-red-500">{errors.fecha_vencimiento}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 text-center font-bold">INFORMACION MATERIAL</h6>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="lote_nmd"> LOTE NMD </Label>

                                <Input
                                    readOnly
                                    autoFocus
                                    id="lote_nmd"
                                    name="lote_nmd"
                                    required
                                    value={data.tipo_material + '-' + data.lote_nmd}
                                    placeholder="LOTE NMD"
                                    onChange={(e) => setData('lote_nmd', e.target.value)}
                                />

                                {errors.lote_nmd && <p className="mt-1 text-sm text-red-500">{errors.lote_nmd}</p>}
                            </div>
                            <div>
                                <Label htmlFor="cantidad_total"> CANTIDAD TOTAL </Label>

                                <Input
                                    autoFocus
                                    id="cantidad_total"
                                    name="cantidad_total"
                                    required
                                    value={data.cantidad_total}
                                    placeholder="CANTIDAD TOTAL"
                                    onChange={(e) => setData('cantidad_total', e.target.value)}
                                />

                                {errors.cantidad_total && <p className="mt-1 text-sm text-red-500">{errors.cantidad_total}</p>}
                            </div>
                            <div>
                                <Label htmlFor="cantidad_contenedor"> CANTIDAD POR CONTENEDOR </Label>

                                <Input
                                    autoFocus
                                    id="cantidad_contenedor"
                                    name="cantidad_contenedor"
                                    required
                                    value={data.cantidad_contenedor}
                                    placeholder="CANTIDAD POR CONTENEDOR"
                                    onChange={(e) => setData('cantidad_contenedor', e.target.value)}
                                />

                                {errors.cantidad_contenedor && <p className="mt-1 text-sm text-red-500">{errors.cantidad_contenedor}</p>}
                            </div>
                            <div>
                                <Label htmlFor="n_contenedor"> N.º CONTENEDORES </Label>

                                <Input
                                    autoFocus
                                    id="n_contenedor"
                                    name="n_contenedor"
                                    required
                                    value={data.n_contenedor}
                                    placeholder="N.º CONTENEDORES"
                                    onChange={(e) => setData('n_contenedor', e.target.value)}
                                />

                                {errors.n_contenedor && <p className="mt-1 text-sm text-red-500">{errors.n_contenedor}</p>}
                            </div>
                            <div>
                                <Label htmlFor="unidad_medida"> UNIDAD DE MEDIDA </Label>

                                <Select
                                    key={`tipos_id-${resetKey}`}
                                    defaultValue={data.unidades_id}
                                    onValueChange={(value) => setData('unidades_id', value)}
                                >
                                    <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                        <SelectValue placeholder="Selecciona un Valor" />
                                    </SelectTrigger>
                                    <SelectContent
                                        position="popper"
                                        align="start"
                                        side="bottom"
                                        sideOffset={3}
                                        className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                    >
                                        {unidades.map((unidad: any, idx: number) => {
                                            return (
                                                <SelectItem key={idx} value={unidad.id.toString()}>
                                                    {' '}
                                                    {unidad.descripcion}{' '}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 text-center font-bold">CONTENEDOR</h6>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="material"> MATERIAL </Label>
                                <Select
                                    key={`tipos_id-${resetKey}`}
                                    defaultValue={data.material}
                                    onValueChange={(value) => setData('material', value)}
                                >
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
                                        <SelectItem value="PAPEL"> PAPEL </SelectItem>
                                        <SelectItem value="POLIETILENO"> POLIETILENO </SelectItem>
                                        <SelectItem value="CARTON"> CARTON </SelectItem>
                                        <SelectItem value="OTRO"> OTRO </SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.material && <p className="mt-1 text-sm text-red-500">{errors.material}</p>}
                            </div>

                            <div>
                                <Label htmlFor="descripcion"> DESCRIPCION </Label>
                                <Select
                                    key={`tipos_id-${resetKey}`}
                                    defaultValue={data.descripcion}
                                    onValueChange={(value) => setData('descripcion', value)}
                                >
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
                                        <SelectItem value="SACO"> SACO </SelectItem>
                                        <SelectItem value="CAJA"> CAJA </SelectItem>
                                        <SelectItem value="TAMBOR"> TAMBOR </SelectItem>
                                        <SelectItem value="BULTO"> BULTO </SelectItem>
                                        <SelectItem value="BOLSA"> BOLSA </SelectItem>
                                        <SelectItem value="OTRO"> OTRO </SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.descripcion && <p className="mt-1 text-sm text-red-500">{errors.descripcion}</p>}
                            </div>
                            <div>
                                <Label htmlFor="t_c"> T (ºC) = </Label>

                                <Input
                                    autoFocus
                                    id="t_c"
                                    name="t_c"
                                    required
                                    value={data.t_c}
                                    placeholder="T (ºC) ="
                                    onChange={(e) => setData('t_c', e.target.value)}
                                />

                                {errors.t_c && <p className="mt-1 text-sm text-red-500">{errors.t_c}</p>}
                            </div>
                            <div>
                                <Checkbox
                                    checked={data.certificado_analisis}
                                    onCheckedChange={(checked) => setData('certificado_analisis', checked as boolean)}
                                />
                                <Label className="ms-1" htmlFor="usa_bd">
                                    {' '}
                                    CERTIFICADO DE ANALISIS?{' '}
                                </Label>

                                {errors.certificado_analisis && <p className="mt-1 text-sm text-red-500">{errors.certificado_analisis}</p>}
                            </div>
                            <div>
                                <Checkbox
                                    checked={data.almacenar_especial}
                                    onCheckedChange={(checked) => setData('almacenar_especial', checked as boolean)}
                                />
                                <Label className="ms-1" htmlFor="usa_bd">
                                    {' '}
                                    ¿ALMACENAR EN CONDICIONES ESPECIALES?{' '}
                                </Label>

                                {errors.almacenar_especial && <p className="mt-1 text-sm text-red-500">{errors.almacenar_especial}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 text-center font-bold">OBSERVACIONES</h6>
                        <div>
                            <Textarea
                                autoFocus
                                id="observaciones"
                                name="observaciones"
                                rows={3}
                                required
                                value={data.observaciones}
                                placeholder="OBSERVACIONES"
                                onChange={(e) => setData('observaciones', e.target.value)}
                            />

                            {errors.observaciones && <p className="mt-1 text-sm text-red-500">{errors.observaciones}</p>}
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 text-center font-bold">LISTA DE VERIFICACION</h6>
                        <table className="w-full table-fixed whitespace-nowrap">
                            <thead>
                                <tr className="text-left font-bold">
                                    <th className="w-1/2"> ESTADO DE LOS COTENEDORES Y MATERIALES </th>
                                    <th className="w-1/6"> SI / NO </th>
                                    <th className="w-1/4"> OBSERVACIONES </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words">
                                        {' '}
                                        ¿EL CONTENEDOR ESTA DEBIDAMENTE IDENTIFICADO, SELLADO Y ETIQUETADO?{' '}
                                    </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.contenedor_identificado}
                                            onPressedChange={(value) => setData('contenedor_identificado', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.contenedor_identificado ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.contenedor_identificado_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('contenedor_identificado_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words"> ¿EL CONTENEDOR PRESENTA SUCIEDAD? </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.contendor_sucio}
                                            onPressedChange={(value) => setData('contendor_sucio', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.contendor_sucio ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.contendor_sucio_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('contendor_sucio_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words"> ¿EL CONTENEDOR PRESENTA SIGNOS DE HUMEDAD? </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.contenedor_humedo}
                                            onPressedChange={(value) => setData('contenedor_humedo', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.contenedor_humedo ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.contenedor_humedo_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('contenedor_humedo_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words"> ¿EL MATERIAL PRESENTA OLOR EXTRAÑO? </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.olor_extrano}
                                            onPressedChange={(value) => setData('olor_extrano', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.olor_extrano ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.olor_extrano_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('olor_extrano_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words">
                                        {' '}
                                        ¿EL CONTENEDOR PRESENTA DERRAME POR RASGADURA O PERFORACIÓN?{' '}
                                    </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.contenedor_derrame}
                                            onPressedChange={(value) => setData('contenedor_derrame', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.contenedor_derrame ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.contenedor_derrame_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('contenedor_derrame_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words"> ¿EL CONTENEDOR ESTA GOLPEADO? </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.contenedor_golpeado}
                                            onPressedChange={(value) => setData('contenedor_golpeado', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.contenedor_golpeado ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.contenedor_golpeado_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('contenedor_golpeado_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words"> ¿EL CONTENEDOR ESTA ROTO, PERFORADO O RASGADO? </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.contenedor_roto}
                                            onPressedChange={(value) => setData('contenedor_roto', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.contenedor_roto ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.contenedor_roto_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('contenedor_roto_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words">
                                        {' '}
                                        ¿EL MATERIAL PRESENTA MENOR CANTIDAD DE LA DECLARADA EN LA ORDEN DE COMPRA? (FALTANTE){' '}
                                    </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.material_menor_cantidad}
                                            onPressedChange={(value) => setData('material_menor_cantidad', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.material_menor_cantidad ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.material_menor_cantidad_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('material_menor_cantidad_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words">
                                        {' '}
                                        ¿EL MATERIAL PRESENTA MAYOR CANTIDAD DE LA DECLARADA EN LA ORDEN DE COMPRA? (EXCESO){' '}
                                    </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.material_mayor_cantidad}
                                            onPressedChange={(value) => setData('material_mayor_cantidad', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.material_mayor_cantidad ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.material_mayor_cantidad_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('material_mayor_cantidad_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words">
                                        {' '}
                                        ¿LA FECHA DE VENCIMIENTO ESTA VIGENTE? (NO MENOR A 12 MESES){' '}
                                    </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.fecha_vigente}
                                            onPressedChange={(value) => setData('fecha_vigente', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.fecha_vigente ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.fecha_vigente_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('fecha_vigente_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words"> ¿EL MATERIAL VIENE ACOMPAÑADO DE FACTURA Y/O REMISION? </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.material_factura}
                                            onPressedChange={(value) => setData('material_factura', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.material_factura ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.material_factura_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('material_factura_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words">
                                        {' '}
                                        ¿LA DESCRIPCION Y LA CANTIDAD DEL MATERIAL CORRESPONDE A LA ORDEN DE COMPRA?{' '}
                                    </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.descripcion_corresponde}
                                            onPressedChange={(value) => setData('descripcion_corresponde', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.descripcion_corresponde ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="descripcion_corresponde_obs"
                                            name="descripcion_corresponde_obs"
                                            rows={3}
                                            value={data.descripcion_corresponde_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('descripcion_corresponde_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                                    <td className="w-1/2 border-t text-wrap break-words"> ¿EL MATERIAL VIENE CON SU CERTIFICADO DE ANALISIS? </td>
                                    <td className="w-1/6 border-t break-words">
                                        <Toggle
                                            pressed={data.material_certificado}
                                            onPressedChange={(value) => setData('material_certificado', value)}
                                            variant="outline"
                                            aria-label="Estado"
                                        >
                                            {data.material_certificado ? <Check /> : <X />}
                                        </Toggle>
                                    </td>
                                    <td className="w-1/4 border-t break-words">
                                        <Textarea
                                            autoFocus
                                            id="area"
                                            name="area"
                                            rows={3}
                                            value={data.material_certificado_obs}
                                            placeholder="OBSERVACIONES"
                                            onChange={(e) => setData('material_certificado_obs', e.target.value)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <Button
                            variant={'outline'}
                            className="mx-4 ms-4"
                            disabled={processing}
                            type="button"
                            onClick={() => {
                                onSend();
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
                </form>
                aprobar y cerrar formato, o devovler con observación
            </div>
        </AppLayout>
    );
}
