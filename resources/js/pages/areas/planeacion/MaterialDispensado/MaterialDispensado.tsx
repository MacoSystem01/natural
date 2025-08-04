import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { MateriaPrima } from './material/MateriaPrima';
import { MaterialEmpaqueyEnvase } from './material/MaterialEmpaqueyEnvase';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Planeación / Material Dispensado',
        href: '/planeacion/material-dispensado',
    },
];

type Material = {
    material: string;
    lote: string;
    cantidad: string;
    unidades_id: string;
};

type ThisForm = {
    tipo_material: string;
    op: string;
};

export default function ({ tipo_material }: any) {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<ThisForm>>({
        tipo_material: tipo_material,
        op: '',
    });

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();
    };

    const renderComponente = () => {
        switch (data.tipo_material) {
            case 'MP':
                return <MateriaPrima />;
            case 'ME':
                return <MaterialEmpaqueyEnvase />;
            case 'MEE':
                return <MaterialEmpaqueyEnvase />;
            default:
                return <></>;
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Material Dispensado" />

            <div className="columns-1 gap-4 space-y-4 p-8">
                <form onSubmit={submit} className="space-y-6">
                    {renderComponente()}
                </form>
            </div>
        </AppLayout>
    );
}
