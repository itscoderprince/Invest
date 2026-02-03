"use client";

import {
    Activity,
    Clock,
    Zap,
    Users,
    UserPlus,
    CreditCard,
    Server,
    CheckCircle2,
    ShieldCheck
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminStatGrid } from "@/components/admin/AdminStatGrid";
import { AdminTableCard } from "@/components/admin/AdminTableCard";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ADMIN_STATS } from "@/lib/constants";

export default function AdminDashboardPage() {
    const statsWithIcons = ADMIN_STATS.map((stat, i) => ({
        ...stat,
        icon: [Users, ShieldCheck, Zap, Activity][i]
    }));

    return (
        <div className="space-y-6">
            <AdminHeader
                label="Analytics Command"
                subtitle="System-wide operational metrics and activity overview"
                actions={
                    <Badge variant="outline" className="h-8 px-3 border-emerald-200 bg-emerald-50 text-emerald-700 font-bold gap-2 text-[10px]">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        Live Monitoring
                    </Badge>
                }
            />

            <AdminStatGrid stats={statsWithIcons} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <AdminTableCard
                        title="Priority Processing Queue"
                        description="Actions requiring immediate administrative review."
                        icon={Clock}
                        headers={[
                            { label: "Entity / Type" },
                            { label: "Review State" },
                            { label: "Administrative", className: "text-right" }
                        ]}
                    >
                        {[
                            { type: "KYC", user: "John Doe", time: "2 hours ago", status: "Critical", icon: UserPlus, color: "text-rose-600" },
                            { type: "Support", user: "Alice Walker", time: "1 hour ago", status: "New", icon: Activity, color: "text-blue-600" },
                            { type: "Investment", user: "Sarah Smith", time: "5 hours ago", amount: "$5,000", icon: CreditCard, color: "text-primary" },
                            { type: "Withdrawal", user: "Mike Jones", time: "8 hours ago", amount: "$2,400", icon: Clock, color: "text-amber-600" },
                        ].map((item, i) => (
                            <tr key={i} className="border-b border-border last:border-none hover:bg-muted/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border border-border">
                                            <item.icon className={cn("w-5 h-5", item.color)} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold tracking-tight text-foreground">{item.user}</p>
                                            <p className="text-[11px] text-muted-foreground font-medium mt-0.5">{item.type} Processing {item.amount && `(${item.amount})`}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <AdminStatusBadge status={item.status || item.type} />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex flex-col items-end gap-1">
                                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight opacity-70">{item.time}</p>
                                        <Button variant="link" size="sm" className="h-auto p-0 text-xs font-bold text-primary hover:no-underline hover:text-primary/80">Review Case →</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </AdminTableCard>
                </div>

                <div className="space-y-6">
                    <Card className="border border-border shadow-none bg-card overflow-hidden flex flex-col h-full">
                        <CardHeader className="p-6 border-b border-border bg-muted/20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                                    <Server className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-sm font-bold tracking-tight">System Integrity</CardTitle>
                                    <CardDescription className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Production Environment</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground font-semibold">Core Database</span>
                                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-bold text-[9px]">OPTIMAL</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground font-semibold">Payment Gateway</span>
                                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-bold text-[9px]">OPERATIONAL</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground font-semibold">Node Latency</span>
                                    <span className="text-xs font-bold text-foreground">18ms</span>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                    <div className="space-y-0.5">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">All Systems Normal</p>
                                        <p className="text-[10px] text-muted-foreground font-medium">Uptime: 99.98% (30d)</p>
                                    </div>
                                </div>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-lg h-10 text-xs">
                                    Global Logs View
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                            <Activity className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-blue-900 leading-none">Real-time Telemetry</h4>
                            <p className="text-[11px] text-blue-700 leading-relaxed font-medium">
                                System metrics are aggregated across 12 distributed nodes and updated every 500ms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


