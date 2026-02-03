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
    Bell,
    Mail,
    ArrowUpRight,
    TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
        <Sidebar collapsible="icon" className="border-r border-border bg-card/50 backdrop-blur-xl">
            <SidebarHeader className="h-16 flex items-center px-4 group-data-[collapsible=icon]:px-0">
                <div className="flex items-center gap-3 w-full group-data-[collapsible=icon]:justify-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 duration-300">
                        <Shield className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden transition-all duration-300">
                        <span className="text-sm font-bold tracking-tight text-foreground">{SITE_CONFIG.name}</span>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Investor Node</p>
                        </div>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2 group-data-[collapsible=icon]:px-0 py-2">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 group-data-[collapsible=icon]:hidden">
                        Platform Navigation
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {DASHBOARD_MENU.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            tooltip={item.name}
                                            className={cn(
                                                "h-10 rounded-lg transition-all duration-300 font-bold",
                                                isActive
                                                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25 translate-x-1"
                                                    : "text-muted-foreground hover:bg-muted hover:text-foreground hover:translate-x-0.5"
                                            )}
                                        >
                                            <Link href={item.href} onClick={() => setOpenMobile(false)}>
                                                <item.icon className={cn("h-4 w-4 shrink-0 transition-colors", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                                                <span className="ml-3 group-data-[collapsible=icon]:hidden">{item.name}</span>
                                                {isActive && <ChevronRight className="ml-auto w-3 h-3 opacity-50 group-data-[collapsible=icon]:hidden" />}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-4 group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                        Live Analytics
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="px-3 space-y-4">
                            <div className="p-3 rounded-xl bg-muted/30 border border-border group-data-[collapsible=icon]:hidden transition-all hover:bg-muted/50">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Portfolio Growth</p>
                                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-lg font-black tracking-tight text-foreground">$12,450</p>
                                    <Badge variant="outline" className="text-[8px] h-4 px-1 border-emerald-200 bg-emerald-50 text-emerald-600 font-bold">+12.4%</Badge>
                                </div>
                                <div className="w-full bg-border h-1 rounded-full mt-3 overflow-hidden">
                                    <div className="bg-primary h-full rounded-full w-[65%] animate-in slide-in-from-left duration-1000" />
                                </div>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-2 border-t border-border group-data-[collapsible=icon]:p-0">
                <div className="flex items-center gap-3 p-2 rounded-xl group-data-[collapsible=icon]:justify-center hover:bg-muted/50 transition-colors duration-300">
                    <Avatar className="h-9 w-9 border border-border shrink-0 shadow-sm">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">PS</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden min-w-0">
                        <span className="text-xs font-bold text-foreground truncate">Prince Sharma</span>
                        <div className="flex items-center gap-1">
                            <Badge variant="outline" className="text-[8px] h-3 px-1 border-primary/20 text-primary font-bold bg-primary/5">TIER_2</Badge>
                            <span className="text-[9px] text-muted-foreground font-medium truncate uppercase tracking-tighter">Verified</span>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 text-muted-foreground hover:text-destructive group-data-[collapsible=icon]:hidden transition-colors" asChild>
                        <Link href={ROUTES.AUTH.LOGIN}>
                            <LogOut className="h-4 w-4" />
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
