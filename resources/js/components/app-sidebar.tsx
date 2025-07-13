import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { House, Users, LayoutGrid, Workflow, ClipboardList, FileText, Folder,  Package, Check, History, Square, FormInput, Factory, ShieldCheck } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Inicio',
        href: '/dashboard',
        icon: House,
    },{
        title: 'Usuarios',
        href: '/usuarios',
        icon: Users,
    },{
        title: 'Areas',
        icon: LayoutGrid,
        href: '',
        children: [
            {
                title: 'Bodega',
                icon: Package,
                href: '',
                children: [
                    {
                        title: 'Recepción',
                        icon: Check,
                        href: '/bodega/recepcion',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/bodega/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/bodega/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'Salida de Bodega por Adicciones',
                        icon: Check,
                        href: '/campos',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/bodega/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/bodega/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'Entrega de Materiales',
                        icon: Check,
                        href: '/versiones', 
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/bodega/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/bodega/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'Devolución',
                        icon: Check,
                        href: '/campos',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/bodega/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/bodega/1/subproceso-2',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Producción',
                icon: Factory,
                href: '',
                children: [
                    {
                        title: 'proceso 1',
                        icon: Check,
                        href: '/produccion/1',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/produccion/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/produccion/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'proceso 2',
                        icon: Check,
                        href: '/produccion/2',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/produccion/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/produccion/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'proceso 3',
                        icon: Check,
                        href: '/produccion/3',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/produccion/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/produccion/1/subproceso-2',
                            }
                        ] 
                    },
                    {
                        title: 'proceso 4',
                        icon: Check,
                        href: '/produccion/4',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/produccion/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/produccion/1/subproceso-2',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Calidad',
                icon: ShieldCheck,
                href: '',
                children: [
                    {
                        title: 'proceso 1',
                        icon: Check,
                        href: '/calidad/1',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/calidad/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/calidad/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'proceso 2',
                        icon: Check,
                        href: '/calidad/2',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/calidad/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/calidad/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'proceso 3',
                        icon: Check,
                        href: '/calidad/3',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/calidad/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/calidad/1/subproceso-2',
                            }
                        ]
                    },
                    {
                        title: 'proceso 4',
                        icon: Check,
                        href: '/calidad/4',
                        children: [
                            {
                                title: 'subproceso 1',
                                icon: Check,
                                href: '/calidad/1/subproceso-1',
                            },
                            {
                                title: 'subproceso 2',
                                icon: Check,
                                href: '/calidad/1/subproceso-2',
                            }
                        ]
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

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repositorio',
    //     href: '',
    //     icon: Folder,
    // },
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
