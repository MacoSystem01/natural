import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { useForm } from '@inertiajs/react';
import { Check, LoaderCircle, X } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

type ThisForm = {
    area: string;
};

export const Recepcion: React.FC<any> = ({ id, onReload }) => {
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
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <Label htmlFor="area"> FECHA INGRESO MATERIAL </Label>

                    <Input
                        autoFocus
                        type="date"
                        id="area"
                        name="area"
                        required
                        value={data.area}
                        placeholder="FECHA INGRESO MATERIAL"
                        onChange={(e) => setData('area', e.target.value)}
                    />

                    {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                </div>
            </div>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md">
                <h6 className="mb-2 font-bold">DESCRIPCION</h6>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
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
                        <Label htmlFor="area"> NOMBRE </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="NOMBRE"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                </div>
            </div>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md">
                <h6 className="mb-2 font-bold">DATOS DE COMPRA</h6>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                    <div>
                        <Label htmlFor="area"> PROVEEDOR </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="PROVEEDOR"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> FABRICANTE </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="FABRICANTE"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> DIRECCION PROVEEDOR </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="DIRECCION PROVEEDOR"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> ORDEN DE COMPRA </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="ORDEN DE COMPRA"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> FACTURA / REMISION </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="FACTURA / REMISION"
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
                        <Label htmlFor="area"> FECHA VENCIMIENTO </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="FECHA VENCIMIENTO"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                </div>
            </div>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md">
                <h6 className="mb-2 font-bold">INFORMACION MATERIAL</h6>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                    <div>
                        <Label htmlFor="area"> LOTE NMD </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="LOTE NMD"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> CANTIDAD TOTAL </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="CANTIDAD TOTAL"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> CANTIDAD POR CONTENEDOR </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="CANTIDAD POR CONTENEDOR"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> N.º CONTENEDORES </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="N.º CONTENEDORES"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> UNIDAD DE MEDIDA </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="UNIDAD DE MEDIDA"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> VALOR DE CONVERSION </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="VALOR DE CONVERSION"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                </div>
            </div>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md">
                <h6 className="mb-2 font-bold">CONTENEDOR</h6>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                    <div>
                        <Label htmlFor="area"> MATERIAL </Label>
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
                                <SelectItem value="PAPEL"> PAPEL </SelectItem>
                                <SelectItem value="POLIETILENO"> POLIETILENO </SelectItem>
                                <SelectItem value="CARTON"> CARTON </SelectItem>
                                <SelectItem value="OTRO"> OTRO </SelectItem>
                            </SelectContent>
                        </Select>

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> DESCRIPCION </Label>
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
                                <SelectItem value="SACO"> SACO </SelectItem>
                                <SelectItem value="CAJA"> CAJA </SelectItem>
                                <SelectItem value="TAMBOR"> TAMBOR </SelectItem>
                                <SelectItem value="BULTO"> BULTO </SelectItem>
                                <SelectItem value="BOLSA"> BOLSA </SelectItem>
                                <SelectItem value="OTRO"> OTRO </SelectItem>
                            </SelectContent>
                        </Select>

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> T (ºC) = </Label>

                        <Input
                            autoFocus
                            id="area"
                            name="area"
                            required
                            value={data.area}
                            placeholder="T (ºC) ="
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Checkbox checked={false} onCheckedChange={(checked) => setData('usa_bd', checked as boolean)} />
                        <Label className="ms-1" htmlFor="usa_bd">
                            {' '}
                            CERTIFICADO DE ANALISIS?{' '}
                        </Label>

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Checkbox checked={false} onCheckedChange={(checked) => setData('usa_bd', checked as boolean)} />
                        <Label className="ms-1" htmlFor="usa_bd">
                            {' '}
                            ¿ALMACENAR EN CONDICIONES ESPECIALES?{' '}
                        </Label>

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                    <div>
                        <Label htmlFor="area"> OBSERVACIONES </Label>

                        <Textarea
                            autoFocus
                            id="area"
                            name="area"
                            rows={3}
                            required
                            value={data.area}
                            placeholder="OBSERVACIONES"
                            onChange={(e) => setData('area', e.target.value)}
                        />

                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
                    </div>
                </div>
            </div>

            <div className="my-4 rounded-lg bg-white p-4 shadow-md">
                <h6 className="mb-2 font-bold">LISTA DE VERIFICACION</h6>
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
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {true ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL CONTENEDOR PRESENTA SUCIEDAD?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {true ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL CONTENEDOR PRESENTA SIGNOS DE HUMEDAD?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {true ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL MATERIAL PRESENTA OLOR EXTRAÑO?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {false ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL CONTENEDOR PRESENTA DERRAME POR RASGADURA O PERFORACIÓN?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {false ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL CONTENEDOR ESTA GOLPEADO?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {true ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL CONTENEDOR ESTA ROTO, PERFORADO O RASGADO?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {false ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL MATERIAL PRESENTA MENOR CANTIDAD DE LA DECLARADA EN LA ORDEN DE COMPRA? (FALTANTE){' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {true ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL MATERIAL PRESENTA MAYOR CANTIDAD DE LA DECLARADA EN LA ORDEN DE COMPRA? (EXCESO){' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {false ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿LA FECHA DE VENCIMIENTO ESTA VIGENTE? (NO MENOR A 12 MESES){' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {true ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL MATERIAL VIENE ACOMPAÑADO DE FACTURA Y/O REMISION?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {false ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿LA DESCRIPCION Y LA CANTIDAD DEL MATERIAL CORRESPONDE A LA ORDEN DE COMPRA?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {true ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="focus-within:bg-gray-100 hover:bg-gray-100">
                            <td className="w-1/2 border-t text-wrap break-words">
                                {' '}
                                ¿EL MATERIAL VIENE CON SU CERTIFICADO DE ANALISIS?{' '}
                            </td>
                            <td className="w-1/6 border-t break-words">
                                <Toggle pressed={false} onPressedChange={(value) => setData('activo', value)} variant="outline" aria-label="Estado">
                                    {false ? <Check /> : <X />}
                                </Toggle>
                            </td>
                            <td className="w-1/4 border-t break-words">
                                <Textarea
                                    autoFocus
                                    id="area"
                                    name="area"
                                    rows={3}
                                    required
                                    value={data.area}
                                    placeholder="OBSERVACIONES"
                                    onChange={(e) => setData('area', e.target.value)}
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
