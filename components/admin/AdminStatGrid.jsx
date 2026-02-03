"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminStatCard({ name, value, icon: Icon, change, isPositive = true, color = "text-primary" }) {
    return (
        <Card className="border border-border shadow-none bg-card hover:bg-accent/5 transition-colors">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{name}</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-2xl font-bold tracking-tight text-foreground">{value}</h3>
                            {change && (
                                <span className={cn(
                                    "flex items-center text-[10px] font-bold",
                                    isPositive ? "text-emerald-600" : "text-rose-600"
                                )}>
                                    {isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                                    {change}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={cn("p-2 rounded-lg bg-muted border border-border", color.replace('text-', 'bg-').replace('600', '100').replace('500', '100'))}>
                        <Icon className={cn("w-4 h-4", color)} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function AdminStatGrid({ stats, columns = 4 }) {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <div className={cn("grid gap-4", gridCols[columns] || gridCols[4])}>
            {stats.map((stat, i) => (
                <AdminStatCard key={i} {...stat} />
            ))}
        </div>
    );
}
