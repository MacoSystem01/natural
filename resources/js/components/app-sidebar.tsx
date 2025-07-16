import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowRightCircle, Check, CornerDownLeft, Factory, FileText, Folders, FormInput, History, House, Inbox, Package, ShieldCheck, Upload, User } from 'lucide-react';
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
    },
    {
        title: 'Areas',
        icon: Folders,
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
                        href: '/bodega/recepcion',
                    },
                    {
                        title: 'Salida de Bodega por Adisión',
                        icon: ArrowRightCircle,
                        href: '/bodega/recepcion',
                    },
                    {
                        title: 'Ingreso a Bodega por Devolusión',
                        icon: CornerDownLeft,
                        href: '/bodega/recepcion',
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
