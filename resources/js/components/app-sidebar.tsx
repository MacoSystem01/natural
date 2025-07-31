import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowRightCircle, Check, Cog, CornerDownLeft, Factory, FileText, Folders, FormInput, History, House, Inbox, Package, ShieldCheck, Upload, User, ClipboardList, Tags, FileLock, Clock, Recycle, ClipboardCheck, Tag, Bookmark, ListOrdered } from 'lucide-react';
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
                        href: '/planeacion/',
                        children: [
                            {
                                title: 'Registro de Lote',
                                icon: FileText,
                                href: '/planeacion/RegistroLote',
                            },
                            {
                                title: 'Orden de Producción',
                                icon: ClipboardCheck,
                                href: '/planeacion/OrdenProduccion',
                            },
                            {
                                title: 'Orden de Trabajo Bodega MP',
                                icon: ClipboardList,
                                href: '/planeacion/FPr09BodegaMP',
                            },
                            {
                                title: 'Orden de Trabajo Bodega ME',
                                icon: ClipboardList,
                                href: 'areas/planeacion/',
                            },
                            {
                                title: 'Orden de Trabajo Bodega MEE',
                                icon: ClipboardList,
                                href: 'areas/planeacion/',
                            },
                            {
                                title: 'Etiqueta de Identificación Material de Envase y Empaque Dispensado',
                                icon: Tag,
                                href: 'areas/planeacion/',
                            },
                            {
                                title: 'Etiqueta de Identificación Materias Primas',
                                icon: Bookmark,
                                href: 'areas/planeacion/',
                            }, 
                            { 
                                title: 'Orden de Trabajo Codificado',
                                icon: ListOrdered,
                                href: 'areas/planeacion/',
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
