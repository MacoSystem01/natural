// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import AppLayout from '@/layouts/app-layout';
// import { BreadcrumbItem } from '@/types';
// import { Head, useForm } from '@inertiajs/react';
// import { LoaderCircle } from 'lucide-react';
// import { FormEventHandler, useState } from 'react';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Bodega / Entrega de Material',
//         href: '/bodega/entrega',
//     },
// ];

// type ThisForm = {
//     muestra_no: string;
//     de: string;
//     usuarios_id: string;
//     cantidad: string;
//     fecha: string;
//     observacion: string;
// };

// export default function ({ id, onReload }: any) {
//     const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
//         muestra_no: '',
//         de: '',
//         usuarios_id: '',
//         cantidad: '',
//         fecha: '',
//         observacion: '',
//     });

//     const [resetKey, setResetKey] = useState(Date.now());

//     const submit: FormEventHandler = async (e) => {
//         e.preventDefault();

//         const options = {
//             onSuccess: () => {
//                 reset();
//                 onReload();
//             },
//             onError: (errors: any) => {
//                 console.log(errors);
//                 if (errors.area) {
//                     reset();
//                 }
//             },
//         };

//         if (id) {
//             put(route('areas.update', id), options);
//         } else {
//             post(route('areas.store'), options);
//         }
//     };

//     return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//             <Head title="Areas" />

//             <div className="columns-1 gap-4 space-y-4 p-8">
//                 <form onSubmit={submit}>
//                     <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
//                         <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
//                             <div>
//                                 <Label htmlFor="muestra_no"> MUESTRA No -- solo OP y muestra el formulario correspondiente </Label>

//                                 <Input
//                                     autoFocus
//                                     id="muestra_no"
//                                     name="muestra_no"
//                                     required
//                                     value={data.muestra_no}
//                                     placeholder="PROVEEDOR"
//                                     onChange={(e) => setData('muestra_no', e.target.value)}
//                                 />

//                                 {errors.muestra_no && <p className="mt-1 text-sm text-red-500">{errors.muestra_no}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="area"> DE </Label>

//                                 <Input
//                                     autoFocus
//                                     id="de"
//                                     name="de"
//                                     required
//                                     value={data.de}
//                                     placeholder="O.C"
//                                     onChange={(e) => setData('de', e.target.value)}
//                                 />

//                                 {errors.de && <p className="mt-1 text-sm text-red-500">{errors.de}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="area"> CANTIDAD MUESTRA </Label>

//                                 <Input
//                                     autoFocus
//                                     id="cantidad"
//                                     name="cantidad"
//                                     required
//                                     value={data.cantidad}
//                                     placeholder="LOTE"
//                                     onChange={(e) => setData('cantidad', e.target.value)}
//                                 />

//                                 {errors.cantidad && <p className="mt-1 text-sm text-red-500">{errors.cantidad}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="area"> FECHA </Label>

//                                 <Input
//                                     autoFocus
//                                     type='date'
//                                     id="fecha"
//                                     name="fecha"
//                                     required
//                                     value={data.fecha}
//                                     placeholder="REMISIÓN"
//                                     onChange={(e) => setData('fecha', e.target.value)}
//                                 />

//                                 {errors.fecha && <p className="mt-1 text-sm text-red-500">{errors.fecha}</p>}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
//                         <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
//                             <h6 className="mb-5 font-bold text-center">OBSERVACIÓN</h6>
//                             <div>
//                                 <Textarea
//                                     autoFocus
//                                     id="area"
//                                     rows={4}
//                                     name="area"
//                                     required
//                                     value={data.area}
//                                     placeholder="OBSERVACIONES"
//                                     onChange={(e) => setData('area', e.target.value)}
//                                 />

//                                 {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-4 flex items-center justify-end">
//                         <Button
//                             variant={'outline'}
//                             className="mx-4 ms-4"
//                             disabled={processing}
//                             type="button"
//                             onClick={() => {
//                                 reset();
//                             }}
//                         >
//                             Cancelar
//                         </Button>
//                         <Button disabled={processing}>
//                             Guardar
//                             {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </AppLayout>
//     );
// }

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bodega / Entrega de Material',
        href: '/bodega/entrega',
    },
];

type SearchForm = {
    tipo_material: string;
    op: string;
};

export default function () {
    const { data, setData, processing, errors, get, reset } = useForm<SearchForm>({
        tipo_material: '',
        op: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Reemplaza con tu llamada real: get(...) o post(...)
        console.log('Buscar con:', data);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Buscar Salida" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={submit} className="space-y-6">
                    <div className="my-4 rounded-lg bg-white p-4 shadow-md inset-shadow-sm">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="tipo_material">Tipo Material</Label>
                                <Select value={data.tipo_material} onValueChange={(val) => setData('tipo_material', val)} name="tipo_material">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecciona un tipo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="materia_prima">MATERIA PRIMA</SelectItem>
                                        <SelectItem value="material_envasado">MATERIAL DE ENVASE</SelectItem>
                                        <SelectItem value="material_empaque">MATERIAL DE EMPAQUE</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.tipo_material && <p className="mt-1 text-sm text-red-500">{errors.tipo_material}</p>}
                            </div>

                            <div>
                                <Label htmlFor="op">OP</Label>
                                <input
                                    id="op"
                                    name="op"
                                    autoComplete="off"
                                    required
                                    value={data.op}
                                    placeholder="OP"
                                    onChange={(e) => setData('op', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                />
                                {errors.op && <p className="mt-1 text-sm text-red-500">{errors.op}</p>}
                            </div>

                            <div className="flex space-x-2">
                                <div className="flex flex-col justify-end">
                                    <Button type="submit" disabled={processing} className="h-fit">
                                        {processing ? (
                                            <>
                                                Buscando <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                                            </>
                                        ) : (
                                            'Buscar'
                                        )}
                                    </Button>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={() => {
                                            reset();
                                        }}
                                        disabled={processing}
                                        className="h-fit"
                                    >
                                        Limpiar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
