import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Modal } from '@/Components/ui/Modal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table } from '@/components/ui/Table/Table';
import AppLayout from '@/layouts/app-layout';
import { confirmDialog, showAlert } from '@/plugins/sweetalert';
import { BreadcrumbItem } from '@/types';
import { SelectOptions } from '@/types/SelectOptions';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { Edit3, LoaderCircle, Trash2 } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';
import { Form } from './Form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Campos del Formato',
        href: '/campos',
    },
];

type ThisForm = {
    procesos_id: string;
    formularios_id: string;
    versiones_id: string;
};

export default function Index({ auth, collection }: any) {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        procesos_id: '',
        formularios_id: '',
        versiones_id: '',
    });

    const { data: procesos } = collection;

    const currentUrl = usePage().url;
    const { flash }: any = usePage().props;
    const [id, setId] = useState<number | null>(null);
    const [show, setShow] = useState(false);
    const [formatos, setFormatos] = useState([]);
    const [versiones, setVersiones] = useState([]);
    const [campos, setCampos] = useState([]);
    const [tabla, setTabla] = useState([]);
    const [resetKey, setResetKey] = useState(Date.now());

    const onEdit = (id: number) => {
        setId(id);
        setShow(true);
    };

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();
        const onGetForms = async () => {
            const {
                data: { data: response },
            } = await axios.get(route('campos.version', { id: data.versiones_id }));

            const tabla = response.map((item: any) => {
                return {
                    id: item.id,
                    nombre: item.nombre || '',
                    tipo: SelectOptions.find( tipo => tipo.key == item.tipo )?.value  || '',
                    orden: item.orden || '0',
                };
            });
            setTabla(tabla);
        };

        data.procesos_id && onGetForms();
    };

    const onTrash = async (id: number) => {
        const result = await confirmDialog({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
        });

        if (result.isConfirmed) {
            router.delete(route('campos.destroy', id), {
                preserveScroll: true,
                onSuccess: async () => {
                    await showAlert('success', 'Registro eliminado');
                    router.visit(`/campos`);
                },
                onError: () => showAlert('error', 'Error al eliminar'),
            });
        }
    };

    const onReload = () => {
        router.visit(currentUrl, {
            preserveScroll: true,
        });
    };

    useEffect(() => {
        if (flash?.success) {
            showAlert('success', flash.success);
        }
        if (flash?.error) {
            showAlert('error', flash.error);
        }
        if (flash?.warning) {
            showAlert('warning', flash.warning);
        }
    }, [flash]);

    useEffect(() => {
        const onGetForms = async () => {
            const {
                data: { data: lista },
            } = await axios.get(route('formularios.proceso', { id: data.procesos_id }));
            setFormatos(lista);
        };

        data.procesos_id && onGetForms();
    }, [data.procesos_id]);

    useEffect(() => {
        const onGetVersiones = async () => {
            const {
                data: { data: lista },
            } = await axios.get(route('versiones.formulario', { id: data.formularios_id }));
            setVersiones(lista);
        };

        data.formularios_id && onGetVersiones();
    }, [data.formularios_id]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Campos de Formulario" />

            <div className="sm:px-4 lg:px-4">
                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="procesos_id"> Proceso </Label>
                            <Select
                                key={`procesos_id-${resetKey}`}
                                defaultValue={data.procesos_id}
                                onValueChange={(value) => setData('procesos_id', value)}
                            >
                                <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                    <SelectValue placeholder="Selecciona un Proceso" />
                                </SelectTrigger>
                                <SelectContent
                                    position="popper"
                                    align="start"
                                    side="bottom"
                                    sideOffset={3}
                                    className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                >
                                    {procesos.map((item: any, idx: number) => {
                                        return (
                                            <SelectItem key={idx} value={`${item.id}`}>
                                                {' '}
                                                {item.proceso}{' '}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>

                            {errors.procesos_id && <p className="mt-1 text-sm text-red-500">{errors.procesos_id}</p>}
                        </div>

                        <div>
                            <Label htmlFor="formularios_id"> Formato </Label>
                            <Select
                                key={`formularios_id-${resetKey}`}
                                defaultValue={data.procesos_id}
                                onValueChange={(value) => setData('formularios_id', value)}
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
                                    {formatos.map((item: any, idx: number) => {
                                        return (
                                            <SelectItem key={idx} value={`${item.id}`}>
                                                {' '}
                                                {item.formulario}{' '}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>

                            {errors.formularios_id && <p className="mt-1 text-sm text-red-500">{errors.formularios_id}</p>}
                        </div>

                        <div>
                            <Label htmlFor="versiones_id"> Versión </Label>
                            <Select
                                key={`versiones_id-${resetKey}`}
                                defaultValue={data.procesos_id}
                                onValueChange={(value) => setData('versiones_id', value)}
                            >
                                <SelectTrigger className="flex w-full justify-start rounded-md border border-gray-300 px-3 py-2 text-sm">
                                    <SelectValue placeholder="Selecciona una Versión" />
                                </SelectTrigger>
                                <SelectContent
                                    position="popper"
                                    align="start"
                                    side="bottom"
                                    sideOffset={3}
                                    className="rounded-md border border-gray-300 bg-white p-1 shadow-md"
                                >
                                    {versiones.map((item: any, idx: number) => {
                                        return (
                                            <SelectItem key={idx} value={`${item.id}`}>
                                                {' '}
                                                {item.version}{' '}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>

                            {errors.versiones_id && <p className="mt-1 text-sm text-red-500">{errors.versiones_id}</p>}
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <Button variant={'outline'} className="mx-4 ms-4" disabled={processing}>
                            Consultar
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        </Button>
                        <Button disabled={!data.formularios_id} onClick={() => setShow(true)} type="button">
                            {' '}
                            Agregar{' '}
                        </Button>
                    </div>
                </form>
            </div>

            <div className="overflow-x-auto px-4">
                <Table
                    user={auth.user}
                    data={tabla}
                    titles={['Nombre', 'Tipo', 'Orden']}
                    actions={[
                        { icon: Edit3, action: onEdit, title: 'Editar' },
                        { icon: Trash2, action: onTrash, title: 'Eliminar' },
                    ]}
                    onRow={() => {}}
                />

                <Modal show={show} closeable={true} title="Gestionar Campos">
                    <Form
                        version={versiones.find((f) => f.id == data.versiones_id)}
                        id={id}
                        onReload={onReload}
                        onClose={() => {
                            setShow(false);
                            setId(null);
                        }}
                    />
                </Modal>
            </div>
        </AppLayout>
    );
}
