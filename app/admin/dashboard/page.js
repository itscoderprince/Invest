"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Users,
    UserPlus,
    CreditCard,
    ArrowUpRight,
    TrendingUp,
    AlertCircle,
    Clock,
    CheckCircle2,
    Activity,
    ShieldAlert,
    Server
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function AdminDashboardPage() {
    const adminStats = [
        { name: "Total Users", value: "1,240", icon: Users, change: "+12%", color: "text-primary", bg: "bg-primary/5" },
        { name: "Pending KYC", value: "48", icon: ShieldAlert, change: "8 High", color: "text-amber-500", bg: "bg-amber-50" },
        { name: "Pending Investments", value: "24", icon: CreditCard, change: "$12.4k", color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Pending Withdrawals", value: "15", icon: Clock, change: "$5.2k", color: "text-rose-500", bg: "bg-rose-50" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Admin Terminal</h1>
                    <p className="text-muted-foreground text-sm">System-wide performance metrics and priority action items.</p>
                </div>
                <div className="flex gap-2">
                    <Badge variant="outline" className="h-8 px-4 border-primary/20 bg-primary/5 text-primary font-bold gap-2">
                        <Activity className="w-3 h-3 animate-pulse" />
                        Live Monitoring
                    </Badge>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {adminStats.map((stat, i) => (
                    <Card key={i} className="border-none shadow-sm bg-white group hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className={cn("p-2.5 rounded-2xl transition-colors", stat.bg)}>
                                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                                </div>
                                <Badge variant="secondary" className="bg-muted/50 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">{stat.change}</Badge>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">{stat.name}</p>
                                <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Active Notifications */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="p-6 bg-muted/20 border-b border-border">
                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" /> Priority Processing Queue
                            </CardTitle>
                            <CardDescription>Actions requiring immediate administrative review.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-border">
                                {[
                                    { type: "KYC", user: "John Doe", time: "2 hours ago", status: "Critical", variant: "destructive" },
                                    { type: "Investment", user: "Sarah Smith", time: "5 hours ago", amount: "$5,000", variant: "secondary" },
                                    { type: "Withdrawal", user: "Mike Jones", time: "8 hours ago", amount: "$2,400", variant: "outline" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 hover:bg-muted/10 transition-colors">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-[1rem] bg-slate-50 flex items-center justify-center border border-border shadow-inner group transition-colors hover:bg-primary/5">
                                                <UserPlus className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm font-bold tracking-tight">{item.user}</p>
                                                    <Badge variant={item.variant} className="text-[8px] font-extrabold uppercase px-1.5 h-4 tracking-tighter">
                                                        {item.status || item.type}
                                                    </Badge>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-0.5">{item.type} Processing {item.amount && `(${item.amount})`}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest opacity-60">{item.time}</p>
                                            <Button variant="link" size="sm" className="h-auto p-0 text-xs font-bold text-primary mt-1 hover:underline">Review Account →</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* System Health */}
                <Card className="bg-slate-950 text-white border-none shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                        <Server className="w-48 h-48" />
                    </div>
                    <CardHeader className="relative z-10 pb-2">
                        <CardTitle className="text-xl font-bold tracking-tight">System Status</CardTitle>
                        <CardDescription className="text-slate-500 text-xs">Environment: Production (Standard)</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-6 pt-6">
                        <div className="space-y-5">
                            <div className="flex items-center justify-between group">
                                <span className="text-sm text-slate-400 font-medium">Core Database</span>
                                <Badge className="bg-emerald-500/10 text-emerald-400 border-none font-bold text-[9px] animate-pulse">OPTIMAL</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400 font-medium">Payment Gateway</span>
                                <Badge className="bg-emerald-500/10 text-emerald-400 border-none font-bold text-[9px]">OPERATIONAL</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400 font-medium">Node Latency</span>
                                <span className="text-xs font-mono font-bold text-slate-200">18ms</span>
                            </div>
                        </div>

                        <Separator className="bg-white/5" />

                        <div className="pt-2">
                            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 mb-4 shadow-inner">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">All Nodes Online</p>
                                    <p className="text-[9px] text-slate-500 italic">No incidents recorded in 48h</p>
                                </div>
                            </div>
                            <Button className="w-full bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-xl h-11 text-xs">
                                Global Logs View
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


