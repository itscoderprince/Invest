"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Wallet,
    Bell,
    Mail,
    User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";

export function MobileDashboardNav() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            icon: LayoutDashboard,
            href: ROUTES.DASHBOARD.OVERVIEW,
            color: "text-blue-500",
            bg: "bg-blue-500"
        },
        {
            name: "Wallet",
            icon: Wallet,
            href: ROUTES.DASHBOARD.INVESTMENTS,
            color: "text-emerald-500",
            bg: "bg-emerald-500"
        },
        {
            name: "Alerts",
            icon: Bell,
            href: ROUTES.DASHBOARD.ACTIVITY,
            color: "text-amber-500",
            bg: "bg-amber-500",
            hasBadge: true
        },
        {
            name: "Inbox",
            icon: Mail,
            href: ROUTES.DASHBOARD.SUPPORT,
            color: "text-purple-500",
            bg: "bg-purple-500",
            hasBadge: true
        },
        {
            name: "Account",
            icon: User,
            href: ROUTES.DASHBOARD.EDIT_PROFILE,
            color: "text-rose-500",
            bg: "bg-rose-500"
        }
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
            <div className="w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-t border-slate-200/50 dark:border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pointer-events-auto flex items-center justify-around px-2 pb-5 pt-1.5">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative flex flex-col items-center justify-center p-2 group flex-1"
                        >
                            <div className={cn(
                                "flex flex-col items-center justify-center transition-all duration-500",
                                isActive ? "scale-110" : "scale-100 opacity-60"
                            )}>
                                <div className={cn(
                                    "p-2.5 rounded-2xl relative transition-all duration-300 mb-0.5",
                                    isActive ? "bg-slate-100 dark:bg-slate-800" : "bg-transparent",
                                    item.color
                                )}>
                                    <item.icon className={cn("w-5 h-5", isActive ? "stroke-[2.5]" : "stroke-2")} />
                                    {/* Notification Ball */}
                                    {item.hasBadge && (
                                        <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-800" />
                                    )}
                                </div>
                                <span className={cn(
                                    "text-[9px] font-black uppercase tracking-widest mt-1 transition-all duration-300",
                                    isActive ? "opacity-100" : "opacity-0 h-0"
                                )}>
                                    {isActive ? item.name : ""}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
