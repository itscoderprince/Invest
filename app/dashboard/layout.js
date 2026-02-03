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
import { Bell, Mail, Search, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { ROUTES } from "@/lib/routes";
import { MobileDashboardNav } from "@/components/dashboard/MobileDashboardNav";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    return (
        <SidebarProvider defaultOpen={true}>
            <Sidebar />
            <SidebarInset className="bg-background">
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 bg-background/60 backdrop-blur-xl sticky top-0 z-20 w-full transition-all duration-300 border-border">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1 h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="hidden md:flex relative group w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Search platform..."
                                className="pl-9 h-9 text-xs bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary/20 transition-all rounded-lg"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-border bg-background text-[10px] font-bold text-muted-foreground/50">
                                <Command className="w-2.5 h-2.5" /> K
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-tight">System Optimal</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                                <Bell className="h-4 w-4" />
                                <span className="sr-only">Notifications</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Messages</span>
                            </Button>
                        </div>
                    </div>
                </header>

                <main className="p-4 md:p-8 flex-1">
                    <div className="max-w-6xl mx-auto space-y-8 pb-24 md:pb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {children}
                    </div>
                </main>

                <MobileDashboardNav />
            </SidebarInset>
            <Toaster position="top-right" richColors />
        </SidebarProvider>
    );
}
