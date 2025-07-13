import { Button } from '@/components/ui/button';
import { Modal } from '@/Components/ui/Modal';
import { Pagination } from '@/components/ui/Table/Pagination';
import { Table } from '@/components/ui/Table/Table';
import AppLayout from '@/layouts/app-layout';
import { confirmDialog, showAlert } from '@/plugins/sweetalert';
import { BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Form } from './Form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Formularios',
        href: '/formularios',
    },
];

export default function Index({ auth, formulario, collection }: any) {
    const { data: form } = formulario;
    const {
        data: lista,
        meta: { current_page, links },
    } = collection;

    const currentUrl = usePage().url;
    const { flash }: any = usePage().props;
    const [id, setId] = useState<number | null>(null);
    const [data, setData] = useState([]);
    const [show, setShow] = useState<string | null>(null);

    const onTrash = async (id: number) => {
        const result = await confirmDialog({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
        });

        if (result.isConfirmed) {
            router.delete(route('formularios_areas.destroy', id), {
                preserveScroll: true,
                onSuccess: async () => {
                    await showAlert('success', 'Registro eliminado');

                    const remainingItems = lista.length - 1;

                    if (remainingItems === 0 && current_page > 1) {
                        router.visit(`/formularios/${form.id}/areas?page=${current_page - 1}`);
                    } else {
                        router.visit(`formularios/${formulario.id}/areas?page=${current_page}`);
                    }
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

    const goBack = () => {
        router.visit('/formularios');
    }

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
        const onSetData = () => {
            const data = lista.map((item: any) => {
                return {
                    id: item.pivot?.id || 0,
                    proceso: form.proceso?.proceso ?? '',
                    formulario: form.formulario,
                    area: item.area || '',
                };
            });

            setData(data);
        };

        onSetData();
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Formularios" />

            <div className="flex w-full items-center justify-end px-4 pt-4">
                <Button variant={'outline'} onClick={() => goBack()} className='me-3'> Regresar </Button>
                <Button onClick={() => setShow('form')}> Agregar </Button>
            </div>

            <div className="overflow-x-auto px-4">
                <Table
                    user={auth.user}
                    data={data}
                    titles={['Proceso', 'Formulario', 'Area']}
                    actions={[{ icon: Trash2, action: onTrash, title: 'Eliminar' }]}
                    onRow={() => {}}
                />

                <Pagination links={links} />

                <Modal show={show == 'form'} closeable={true} title="Gestionar Formularios">
                    <Form
                        formulario={form}
                        onReload={onReload}
                        onClose={() => {
                            setShow(null);
                            setId(null);
                        }}
                    />
                </Modal>
            </div>
        </AppLayout>
    );
}
