"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Toaster } from "sonner";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <SidebarProvider defaultOpen={true}>
            <AdminSidebar />
            <SidebarInset className="bg-slate-950">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b border-white/5 px-4 bg-slate-950 sticky top-0 z-10 w-full transition-all">
                    <SidebarTrigger className="-ml-1 text-slate-400" />
                    <div className="h-4 w-[1px] bg-white/10 mx-2" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/dashboard" className="uppercase text-[10px] font-bold tracking-widest text-slate-500">
                                    CORE TERMINAL
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {segments.map((segment, index) => {
                                const href = `/${segments.slice(0, index + 1).join('/')}`;
                                const isLast = index === segments.length - 1;
                                const label = segment.replace(/-/g, ' ');

                                if (segment.toLowerCase() === 'admin') return null;

                                return (
                                    <React.Fragment key={href}>
                                        <BreadcrumbSeparator className="opacity-10 text-slate-500" />
                                        <BreadcrumbItem>
                                            {isLast ? (
                                                <BreadcrumbPage className="uppercase text-[10px] font-bold tracking-widest text-white">
                                                    {label}
                                                </BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink href={href} className="uppercase text-[10px] font-bold tracking-widest text-slate-500">
                                                    {label}
                                                </BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                    </React.Fragment>
                                );
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="p-6 md:p-8 flex-1">
                    <div className="max-w-6xl mx-auto space-y-10 pb-20 text-slate-200">
                        {children}
                    </div>
                </div>
            </SidebarInset>
            <Toaster position="top-right" richColors />
        </SidebarProvider>
    );
}
