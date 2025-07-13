import AppLayout from '@/layouts/app-layout';
import { confirmDialog, showAlert } from '@/plugins/sweetalert';
import { BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Cuarentena } from './Cuarentena';
import { Ingreso } from './Ingreso';
import { Recepcion } from './Recepcion';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bodega / Recepción',
        href: '/bodega/recepcion',
    },
];

export default function Index({ auth, collection }: any) {
    const {
        data: lista,
        meta: { current_page, links },
    } = collection;

    console.log(collection);

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

            <div className="columns-1 md:columns-2 gap-4 space-y-4 p-4">
                <div className="break-inside-avoid rounded-md bg-white p-4 shadow-md">
                    <h2 className="mb-4 text-xl font-bold">REPORTE DE RECEPCION DE MATERIALES</h2>
                    <Recepcion onReload={onReload} />
                </div>

                <div className="break-inside-avoid rounded-md bg-white p-4 shadow-md">
                    <h2 className="mb-4 text-xl font-bold">INGRESO A BODEGA</h2>
                    <Ingreso onReload={onReload} />
                </div>

                <div className="break-inside-avoid rounded-md bg-white p-4 shadow-md">
                    <h2 className="mb-4 text-xl font-bold">CUARENTENA</h2>
                    <Cuarentena onReload={onReload} />
                </div>
            </div>
        </AppLayout>
    );
}
