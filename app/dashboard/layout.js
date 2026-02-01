"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar";
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

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <SidebarProvider defaultOpen={true}>
            <Sidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background sticky top-0 z-10 w-full transition-all">
                    <SidebarTrigger className="-ml-1" />
                    <div className="h-4 w-[1px] bg-border mx-2" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dashboard/overview" className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground/60">
                                    InvestTrack
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {segments.map((segment, index) => {
                                const href = `/${segments.slice(0, index + 1).join('/')}`;
                                const isLast = index === segments.length - 1;
                                const label = segment.replace(/-/g, ' ');

                                if (segment.toLowerCase() === 'dashboard') return null;

                                return (
                                    <React.Fragment key={href}>
                                        <BreadcrumbSeparator className="opacity-20" />
                                        <BreadcrumbItem>
                                            {isLast ? (
                                                <BreadcrumbPage className="uppercase text-[10px] font-bold tracking-widest text-primary">
                                                    {label}
                                                </BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink href={href} className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground/60">
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
                <div className="p-4 md:p-8 flex-1">
                    <div className="max-w-6xl mx-auto space-y-6 lg:space-y-10 pb-20">
                        {children}
                    </div>
                </div>
            </SidebarInset>
            <Toaster position="top-right" richColors />
        </SidebarProvider>
    );
}
