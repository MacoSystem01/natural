import { Button } from '@/components/ui/button';
import { Modal } from '@/Components/ui/Modal';
import { Pagination } from '@/components/ui/Table/Pagination';
import { Table } from '@/components/ui/Table/Table';
import AppLayout from '@/layouts/app-layout';
import { confirmDialog, showAlert } from '@/plugins/sweetalert';
import { BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { Edit3, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Form } from './Form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Areas',
        href: '/areas',
    },
];

export default function Index({ auth, collection }: any) {
    const {
        data: lista,
        meta: { current_page, links },
    } = collection;

    console.log( collection )

    const currentUrl = usePage().url;
    const { flash }: any = usePage().props;
    const [id, setId] = useState<number | null>(null);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const onEdit = (id: number) => {
        setId(id);
        setShow(true);
    };

    const onTrash = async (id: number) => {
        const result = await confirmDialog({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
        });

        if (result.isConfirmed) {
            router.delete(route('areas.destroy', id), {
                preserveScroll: true,
                onSuccess: async () => {
                    await showAlert('success', 'Registro eliminado');

                    const remainingItems = lista.length - 1;

                    if (remainingItems === 0 && current_page > 1) {
                        router.visit(`/areas?page=${current_page - 1}`);
                    } else {
                        router.visit(`areas?page=${current_page}`);
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
                    id: item.id,
                    area: item.area,
                };
            });
            setData(data);
        };

        onSetData();
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Areas" />

            <div className="flex w-full items-center justify-end px-4 pt-4">
                <Button onClick={() => setShow(true)}> Agregar </Button>
            </div>

            <div className="overflow-x-auto px-4">
                <Table
                    user={auth.user}
                    data={data}
                    titles={['Area']}
                    actions={[
                        { icon: Edit3, action: onEdit, title: 'Editar' },
                        { icon: Trash2, action: onTrash, title: 'Eliminar' },
                    ]}
                    onRow={() => {}}
                />

                <Pagination links={links} />

                <Modal show={show} closeable={true} title="Gestionar Areas">
                    <Form
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
