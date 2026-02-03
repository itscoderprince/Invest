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
                <header className="flex h-12 shrink-0 items-center gap-2 border-b border-white/5 px-4 bg-slate-950 sticky top-0 z-10 w-full transition-all">
                    <SidebarTrigger className="-ml-1 text-slate-400" />
                    <div className="h-4 w-[1px] bg-white/10 mx-2" />
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Online</span>
                    </div>
                </header>
                <div className="p-4 md:p-5 flex-1">
                    <div className="max-w-6xl mx-auto space-y-4 pb-10 text-slate-200">
                        {children}
                    </div>
                </div>
            </SidebarInset>
            <Toaster position="top-right" richColors />
        </SidebarProvider>
    );
}
