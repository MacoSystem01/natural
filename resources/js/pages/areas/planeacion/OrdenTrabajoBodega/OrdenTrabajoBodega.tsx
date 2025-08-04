import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { MateriaPrima } from './material/MateriaPrima';
import { MaterialEmpaque } from './material/MaterialEmpaque';
import { MaterialEnvase } from './material/MaterialEnvase';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Planeación / Orden de Trabajo Bodega',
        href: '/planeacion/orden-trabajo-bodega',
    },
];

type SearchForm = {
    tipo_material: string;
    op: string;
};

export default function ({ tipo_material }: any) {
    const { data, setData, processing, errors, get, reset } = useForm<SearchForm>({
        tipo_material: tipo_material,
        op: '',
    });

    const [resetKey, setResetKey] = useState(Date.now());

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Reemplaza con tu llamada real: get(...) o post(...)
        console.log('Buscar con:', data);
    };

    const renderComponente = () => {
        switch (data.tipo_material) {
            case 'MP':
                return <MateriaPrima />;
            case 'ME':
                return <MaterialEnvase />;
            case 'MEE':
                return <MaterialEmpaque />;
            default:
                return <></>;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Orden de Trabajo" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={submit} className="space-y-6">
                    { renderComponente() }
                </form>
            </div>
        </AppLayout>
    );
}
