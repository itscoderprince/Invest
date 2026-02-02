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
import { Activity, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
                    <div className="ml-auto flex items-center gap-2">
                        <Link href="/dashboard/activity">
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                                <Activity className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/dashboard/support">
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                                <LifeBuoy className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </header>
                <div className="p-3 md:p-8 flex-1">
                    <div className="max-w-6xl mx-auto space-y-4 lg:space-y-10 pb-20">
                        {children}
                    </div>
                </div>
            </SidebarInset>
            <Toaster position="top-right" richColors />
        </SidebarProvider>
    );
}
