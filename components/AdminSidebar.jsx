"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    Users,
    UserCheck,
    CreditCard,
    LineChart,
    ClipboardList,
    LogOut,
    ShieldAlert,
    ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar";

const adminMenuItems = [
    { name: "Terminal", icon: BarChart3, href: "/admin/dashboard" },
    { name: "Active Investors", icon: Users, href: "/admin/users" },
    { name: "Compliance Desk", icon: UserCheck, href: "/admin/kyc" },
    { name: "Capital Ledger", icon: CreditCard, href: "/admin/investments" },
    { name: "Yield Adjuster", icon: LineChart, href: "/admin/returns" },
    { name: "Audit Vault", icon: ClipboardList, href: "/admin/logs" },
];

export function AdminAppSidebar() {
    const pathname = usePathname();
    const { setOpenMobile, state } = useSidebar();

    return (
        <Sidebar className="text-slate-400" collapsible="icon">
            <SidebarHeader className="h-20 flex items-center justify-center group-data-[collapsible=icon]:px-0 px-6">
                <div className="flex items-center gap-3 w-full group-data-[collapsible=icon]:justify-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500 shadow-lg shadow-rose-500/20">
                        <ShieldAlert className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="text-xl font-bold tracking-tight text-white uppercase italic">AdminPanel</span>
                        <p className="text-[10px] font-bold text-rose-500/60 uppercase tracking-widest leading-none">Security Node</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-3 group-data-[collapsible=icon]:px-0 py-6">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-4 mb-2 uppercase text-[10px] font-bold tracking-widest text-slate-500 group-data-[collapsible=icon]:hidden">
                        Infrastructure
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {adminMenuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            tooltip={item.name}
                                            size="lg"
                                            className={cn(
                                                "h-12 rounded-xl font-bold transition-all data-[active=true]:bg-rose-500 data-[active=true]:text-white data-[active=true]:shadow-lg data-[active=true]:shadow-rose-500/20 hover:bg-white/5 hover:text-slate-200",
                                                state === "collapsed" && "justify-center px-0!"
                                            )}
                                        >
                                            <Link href={item.href} onClick={() => setOpenMobile(false)}>
                                                <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "opacity-40")} />
                                                <span className="ml-3 group-data-[collapsible=icon]:hidden">{item.name}</span>
                                                {isActive && <ChevronRight className="ml-auto w-4 h-4 opacity-50 group-data-[collapsible=icon]:hidden" />}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 group-data-[collapsible=icon]:p-2 gap-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 group-data-[collapsible=icon]:hidden">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">Global Server Active</span>
                    </div>
                    <div className="space-y-2">
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-[45%] bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                        </div>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Load: 45% Cluster Usage</p>
                    </div>
                </div>

                <div className="flex items-center justify-between group-data-[collapsible=icon]:justify-center px-1">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border-2 border-rose-500/20 shrink-0">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-rose-500/10 text-rose-500">A</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                            <span className="text-sm font-bold text-white truncate w-32">Admin Alpha</span>
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">Root Authority</span>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-white/5 rounded-xl group group-data-[collapsible=icon]:hidden" asChild>
                        <Link href="/">
                            <LogOut className="h-5 w-5 group-hover:text-rose-500 transition-colors" />
                        </Link>
                    </Button>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}

// Named export for layout compatibility
export { AdminAppSidebar as AdminSidebar };
