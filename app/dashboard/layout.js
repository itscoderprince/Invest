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
import { Bell, Mail, Activity, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ROUTES } from "@/lib/routes";
import { MobileDashboardNav } from "@/components/dashboard/MobileDashboardNav";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <SidebarProvider defaultOpen={true}>
            <Sidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/80 backdrop-blur-md sticky top-0 z-20 w-full transition-all border-slate-200 dark:border-white/5">
                    <SidebarTrigger className="-ml-1" />
                    <div className="h-4 w-[1px] bg-border mx-2" />
                    <div className="ml-auto flex items-center gap-2 md:gap-3">
                        <Link href={ROUTES.DASHBOARD.ACTIVITY}>
                            <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-full text-slate-500 hover:text-primary hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20">
                                <Bell className="h-5 w-5" />
                                <span className="sr-only">Notifications</span>
                            </Button>
                        </Link>
                        <Link href={ROUTES.DASHBOARD.SUPPORT}>
                            <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-full text-slate-500 hover:text-primary hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Messages</span>
                            </Button>
                        </Link>
                    </div>
                </header>
                <div className="p-3 md:p-8 flex-1">
                    <div className="max-w-6xl mx-auto space-y-4 lg:space-y-10 pb-20 md:pb-8">
                        {children}
                    </div>
                </div>
                <MobileDashboardNav />
            </SidebarInset>
            <Toaster position="top-right" richColors />
        </SidebarProvider>
    );
}
