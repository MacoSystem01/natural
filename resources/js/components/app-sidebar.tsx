import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowRightCircle, Bookmark, Check, ClipboardCheck, ClipboardList, Clock, Cog, CornerDownLeft, Factory, FileLock, FileText, Folders, FormInput, History, House, Inbox, ListOrdered, Package, Recycle, ShieldCheck, Tag, Tags, Upload, User } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Inicio',
        href: '/dashboard',
        icon: House,
    },{
        title: 'Usuario',
        href: '/usuarios',
        icon: User,
    },{
        title: 'Areas',
        href: '/areas',
        icon: Folders,
    },
    {
        title: 'Procesos',
        icon: Cog,
        href: '',
        children: [
            {
                title: 'Bodega',
                icon: Package,
                href: '',
                children: [
                    {
                        title: 'Recepción',
                        icon: Inbox,
                        href: '/bodega/recepcion',
                    },
                    {
                        title: 'Entrega de Material',
                        icon: Upload,
                        href: '/bodega/entrega',
                    },
                    {
                        title: 'Salida de Bodega por Adición',
                        icon: ArrowRightCircle,
                        href: '/bodega/salida',
                    },
                    {
                        title: 'Ingreso a Bodega por Devolución',
                        icon: CornerDownLeft,
                        href: '/bodega/devolucion',
                    },
                ]
            },
            {
                title: 'Planeación',
                icon: ClipboardList,
                href: '',
                children: [
                    {
                        title: 'Emisión de batch record',
                        icon: Tags,
                        href: '',
                        children: [
                            {
                                title: 'Control de Emisión Lotes de Producción',
                                icon: FileText,
                                href: 'planeacion/registrolote/registrolote',
                            },
                            {
                                title: 'Anulación de Lote',
                                icon: FileText,
                                href: '/planeacion/conciliacion-orden-produccion',
                            },
                            {
                                title: 'Orden de Producción',
                                icon: ClipboardCheck,
                                href: '/planeacion/OrdenProduccion',
                            },
                            {
                                title: 'Orden de Trabajo Bodega MP',
                                icon: ClipboardList,
                                href: '/planeacion/orden-trabajo-bodega/MP',
                            },
                            {
                                title: 'Orden de Trabajo Bodega ME',
                                icon: ClipboardList,
                                href: '/planeacion/orden-trabajo-bodega/ME',
                            },
                            {
                                title: 'Orden de Trabajo Bodega MEE',
                                icon: ClipboardList,
                                href: '/planeacion/orden-trabajo-bodega/MEE',
                            },
                            {
                                title: 'Etiqueta de Identificación Material de Envase y Empaque Dispensado',
                                icon: Tag,
                                href: '/planeacion/material-dispensado/ME',
                            },
                            {
                                title: 'Etiqueta de Identificación Materias Primas',
                                icon: Bookmark,
                                href: '/planeacion/material-dispensado/MP',
                            }, 
                            { 
                                title: 'Orden de Trabajo Codificado',
                                icon: ListOrdered,
                                href: '/planeacion/orden-trabajo-codificado',
                            },
                        ]
                        
                    },
                    {
                        title: 'Cierre De Batch Record',
                        icon: FileLock,
                        href: '',
                        children: [
                            {
                                title: 'Tiempo Improductivo',
                                icon: Clock,
                                href: 'areas/planeacion/TiempoImproductivo',
                            },
                            {
                                title: 'Desperdicio',
                                icon: Recycle,
                                href: '/planeacion/',
                            },
                        ]
                    },
                ]
            },
            {
                title: 'Producción',
                icon: Factory,
                href: '',
                children: [
                    {
                        title: 'subproceso 1',
                        icon: Check,
                        href: '/produccion/1/subproceso-1',
                    }
                ]
            },
            {
                title: 'Calidad',
                icon: ShieldCheck,
                href: '',
                children: [
                    {
                        title: 'subproceso 1',
                        icon: Check,
                        href: '/calidad/1/subproceso-1',
                    }
                ]
            },
        ]
    },
    {
        title: 'Documentos',
        icon: FileText,
        href: '',
        children: [
            {
                title: 'Consulta O.P.',
                icon: FormInput,
                href: '/formularios',
            },
            {
                title: 'Consulta por Num. Lote',
                icon: History,
                href: '/versiones',
            },
        ]
    },
];
 
const footerNavItems: NavItem[] = [];
export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
