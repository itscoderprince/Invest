"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    UserCheck,
    CreditCard,
    TrendingUp,
    FileText,
    LogOut,
    Shield,
    ChevronRight,
    ArrowDownToLine,
    MessageSquare,
    Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const adminMenuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { name: "Investors", icon: Users, href: "/admin/users" },
    { name: "Compliance", icon: UserCheck, href: "/admin/kyc" },
    { name: "Investments", icon: CreditCard, href: "/admin/investments" },
    { name: "Withdrawals", icon: ArrowDownToLine, href: "/admin/withdrawals" },
    { name: "Returns", icon: TrendingUp, href: "/admin/returns" },
    { name: "Support", icon: MessageSquare, href: "/admin/support" },
    { name: "System Logs", icon: FileText, href: "/admin/logs" },
];

export function AdminAppSidebar() {
    const pathname = usePathname();
    const { setOpenMobile, state } = useSidebar();

    return (
        <Sidebar className="border-r border-border bg-card" collapsible="icon">
            <SidebarHeader className="h-16 flex items-center px-6 group-data-[collapsible=icon]:px-0">
                <div className="flex items-center gap-3 w-full group-data-[collapsible=icon]:justify-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                        <Shield className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden">
                        <span className="text-sm font-bold tracking-tight text-foreground truncate">Invest Admin</span>
                        <p className="text-[10px] text-muted-foreground font-medium truncate">Management Portal</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-3 group-data-[collapsible=icon]:px-0 py-4">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-4 mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70 group-data-[collapsible=icon]:hidden">
                        Main Menu
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
                                            className={cn(
                                                "h-10 rounded-md transition-colors",
                                                isActive
                                                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                            )}
                                        >
                                            <Link href={item.href} onClick={() => setOpenMobile(false)}>
                                                <item.icon className={cn("h-4 w-4 shrink-0", isActive ? "text-primary-foreground" : "")} />
                                                <span className="ml-3 font-medium text-sm group-data-[collapsible=icon]:hidden">{item.name}</span>
                                                {isActive && <ChevronRight className="ml-auto h-3 w-3 opacity-50 group-data-[collapsible=icon]:hidden" />}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-border bg-muted/30 group-data-[collapsible=icon]:p-2">
                <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
                    <Avatar className="h-9 w-9 border border-border shrink-0">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">AD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden min-w-0">
                        <span className="text-xs font-semibold text-foreground truncate">Administrator</span>
                        <span className="text-[10px] text-muted-foreground truncate">admin@example.com</span>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 text-muted-foreground hover:text-foreground group-data-[collapsible=icon]:hidden" asChild>
                        <Link href="/">
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
export { AdminAppSidebar as AdminSidebar };
