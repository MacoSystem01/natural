import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Building2, ClipboardList, FileText, Folder, Gauge, Users, Workflow } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Gauge,
    },{
        title: 'Areas',
        href: '/areas',
        icon: Building2,
    },{
        title: 'Usuarios',
        href: '/usuarios',
        icon: Users,
    },{
        title: 'Procesos',
        href: '/procesos',
        icon: Workflow,
    },{
        title: 'Formatos',
        icon: FileText,
        href: '',
        children: [
            {
                title: 'Formularios',
                href: '/formularios',
            },
            {
                title: 'Versiones',
                href: '/versiones',
            },
            {
                title: 'Campos',
                href: '/campos',
            }
        ]
    },
    {
        title: 'Producción',
        href: '/produccion',
        icon: ClipboardList
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repositorio',
        href: '',
        icon: Folder,
    },
];

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
