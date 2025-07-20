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
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bodega / Recepción',
        href: '/bodega/recepcion',
    },
];

type ThisForm = {
    tipo_material: string;
    codigo: string;
    nombre: string;
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
    n_contendor: string;
    unidad_medida: string;
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

};

export default function ({ id }: any) {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        tipo_material: '',
        codigo: '',
        nombre: '',
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
        n_contendor: '',
        unidad_medida: '',
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
    });

    const [resetKey, setResetKey] = useState(Date.now());

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();

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

            reset();
            onDownload(response.data.id);

        } catch (error) {
            console.log(errors);
            reset();
        }


    };

    const onDownload = (id: number) => {
        window.open('/bodega/recepcion/pdf/' + id, '_blank');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Areas" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={submit}>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 font-bold text-center">DATOS INICIALES</h6>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="tipo_material"> TIPO DE MATERIAL </Label>

                                <Select key={`tipos_id-${resetKey}`} defaultValue={data.tipo_material} onValueChange={(value) => setData('tipo_material', value)}>
                                    <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                        <SelectValue placeholder="Selecciona un Tipo" />
                                    </SelectTrigger>
                                    <SelectContent
                                        position="popper"
                                        align="start"
                                        side="bottom"
                                        sideOffset={3}
                                        className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                    >
                                        <SelectItem value="PRIMA"> MATERIA PRIMA </SelectItem>
                                        <SelectItem value="ENVASE"> MATERIAL DE ENVASE </SelectItem>
                                        <SelectItem value="EMPAQUE"> MATERIAL DE EMPAQUE </SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.tipo_material && <p className="mt-1 text-sm text-red-500">{errors.tipo_material}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 font-bold text-center">DESCRIPCION lista de materiales</h6>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="codigo"> CODIGO </Label>

                                <Input
                                    autoFocus
                                    id="codigo"
                                    name="codigo"
                                    required
                                    value={data.codigo}
                                    placeholder="CODIGO"
                                    onChange={(e) => setData('codigo', e.target.value)}
                                />

                                {errors.codigo && <p className="mt-1 text-sm text-red-500">{errors.codigo}</p>}
                            </div>
                            <div>
                                <Label htmlFor="nombre"> NOMBRE </Label>

                                <Input
                                    autoFocus
                                    id="nombre"
                                    name="nombre"
                                    required
                                    value={data.nombre}
                                    placeholder="NOMBRE"
                                    onChange={(e) => setData('nombre', e.target.value)}
                                />

                                {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 font-bold text-center">DATOS DE COMPRA</h6>
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
                                    type='date'
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
                        <h6 className="mb-5 font-bold text-center">INFORMACION MATERIAL</h6>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="lote_nmd"> LOTE NMD consecutivo </Label>

                                <Input
                                    autoFocus
                                    id="lote_nmd"
                                    name="lote_nmd"
                                    required
                                    value={data.lote_nmd}
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
                                <Label htmlFor="n_contendor"> N.º CONTENEDORES </Label>

                                <Input
                                    autoFocus
                                    id="n_contendor"
                                    name="n_contendor"
                                    required
                                    value={data.n_contendor}
                                    placeholder="N.º CONTENEDORES"
                                    onChange={(e) => setData('n_contendor', e.target.value)}
                                />

                                {errors.n_contendor && <p className="mt-1 text-sm text-red-500">{errors.n_contendor}</p>}
                            </div>
                            <div>
                                <Label htmlFor="unidad_medida"> UNIDAD DE MEDIDA - lista </Label>

                                <Input
                                    autoFocus
                                    id="unidad_medida"
                                    name="unidad_medida"
                                    required
                                    value={data.unidad_medida}
                                    placeholder="UNIDAD DE MEDIDA"
                                    onChange={(e) => setData('unidad_medida', e.target.value)}
                                />

                                {errors.unidad_medida && <p className="mt-1 text-sm text-red-500">{errors.unidad_medida}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 font-bold text-center">CONTENEDOR</h6>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                            <div>
                                <Label htmlFor="material"> MATERIAL </Label>
                                <Select key={`tipos_id-${resetKey}`} defaultValue={data.material} onValueChange={(value) => setData('material', value)}>
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
                                <Select key={`tipos_id-${resetKey}`} defaultValue={data.descripcion} onValueChange={(value) => setData('descripcion', value)}>
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
                                <Checkbox checked={data.certificado_analisis} onCheckedChange={(checked) => setData('certificado_analisis', checked as boolean)} />
                                <Label className="ms-1" htmlFor="usa_bd">
                                    {' '}
                                    CERTIFICADO DE ANALISIS?{' '}
                                </Label>

                                {errors.certificado_analisis && <p className="mt-1 text-sm text-red-500">{errors.certificado_analisis}</p>}
                            </div>
                            <div>
                                <Checkbox checked={data.almacenar_especial} onCheckedChange={(checked) => setData('almacenar_especial', checked as boolean)} />
                                <Label className="ms-1" htmlFor="usa_bd">
                                    {' '}
                                    ¿ALMACENAR EN CONDICIONES ESPECIALES?{' '}
                                </Label>

                                {errors.almacenar_especial && <p className="mt-1 text-sm text-red-500">{errors.almacenar_especial}</p>}
                            </div>

                        </div>
                    </div>

                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <h6 className="mb-5 font-bold text-center">OBSERVACIONES</h6>
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
                        <h6 className="mb-5 font-bold text-center">LISTA DE VERIFICACION</h6>
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            id="area"
                                            name="area"
                                            rows={3}
                                            required
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
                                            required
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
                                onDownload(1);
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

                aprobar y cerrar formato, o devovler con observación
            </div>
        </AppLayout>
    );
}
