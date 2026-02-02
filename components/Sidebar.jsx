"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Wallet,
    History,
    UserCheck,
    Users,
    LogOut,
    Shield,
    ChevronRight,
    Activity,
    LifeBuoy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
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

import { ROUTES } from "@/lib/routes";
import { DASHBOARD_MENU, SITE_CONFIG } from "@/lib/config";

export function AppSidebar() {
    const pathname = usePathname();
    const { setOpenMobile, state } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="h-20 flex items-center justify-center group-data-[collapsible=icon]:px-0 px-6">
                <div className="flex items-center gap-3 w-full group-data-[collapsible=icon]:justify-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
                        <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="text-xl font-bold tracking-tight text-foreground">InvestTrack</span>
                        <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none">Investor Node</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-3 group-data-[collapsible=icon]:px-0 py-4">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-4 mb-2 uppercase text-[10px] font-bold tracking-widest text-muted-foreground/50 group-data-[collapsible=icon]:hidden">
                        Core Modules
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {DASHBOARD_MENU.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            tooltip={item.name}
                                            size="lg"
                                            className={cn(
                                                "h-12 rounded-xl font-bold transition-all data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-lg data-[active=true]:shadow-primary/20 hover:bg-primary/5 hover:text-primary",
                                                state === "collapsed" && "justify-center px-0!"
                                            )}
                                        >
                                            <Link href={item.href} onClick={() => setOpenMobile(false)}>
                                                <item.icon className={cn("h-5 w-5 shrink-0 transition-colors", isActive ? "text-primary-foreground" : "text-primary/60 group-hover:text-primary")} />
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
                <div className="rounded-2xl bg-slate-50 border border-border p-4 group-data-[collapsible=icon]:hidden">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Portfolio Value</p>
                    <p className="text-xl font-black tracking-tight text-primary">$12,450.00</p>
                    <Separator className="my-3 opacity-50" />
                    <Link href="/dashboard/investments" className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1.5 uppercase tracking-tighter">
                        Manage Assets <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>

                <div className="flex items-center justify-between group-data-[collapsible=icon]:justify-center px-1">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border-2 border-primary/20 shrink-0">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                            <span className="text-sm font-bold truncate w-32 text-foreground">John Doe</span>
                            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Standard Tier</span>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-rose-500 hover:bg-rose-500/10 rounded-xl group-data-[collapsible=icon]:hidden" asChild>
                        <Link href={ROUTES.AUTH.LOGIN}>
                            <LogOut className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}

// Named export for layout compatibility
export { AppSidebar as Sidebar };
