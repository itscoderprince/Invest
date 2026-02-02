import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function StatCard({
    label,
    value,
    unit,
    icon: Icon,
    accentColor = "primary",
    trend,
    className
}) {
    const colorMap = {
        primary: "group-hover:text-primary group-hover:border-primary/20",
        blue: "group-hover:text-blue-500 group-hover:border-blue-500/20",
        emerald: "group-hover:text-emerald-500 group-hover:border-emerald-500/20",
        amber: "group-hover:text-amber-500 group-hover:border-amber-500/20",
        purple: "group-hover:text-purple-500 group-hover:border-purple-500/20",
    };

    const iconColorMap = {
        primary: "group-hover:text-primary",
        blue: "group-hover:text-blue-500",
        emerald: "group-hover:text-emerald-500",
        amber: "group-hover:text-amber-500",
        purple: "group-hover:text-purple-500",
    };

    return (
        <div className={cn(
            "p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md group",
            colorMap[accentColor],
            className
        )}>
            <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest block mb-1">{label}</span>
            <div className="flex items-center gap-1 text-xl font-black text-slate-900 dark:text-white transition-colors">
                {Icon && <Icon className={cn("w-5 h-5 text-slate-400 transition-colors", iconColorMap[accentColor])} />}
                {value} {unit && <span className="text-xs text-muted-foreground font-normal ml-0.5">{unit}</span>}
            </div>
            {trend && (
                <div className={cn(
                    "text-[10px] font-bold flex items-center gap-0.5 mt-1",
                    trend.positive ? "text-emerald-500" : "text-rose-500"
                )}>
                    {trend.value}
                </div>
            )}
        </div>
    );
}
