"use client";

import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Wallet,
    TrendingUp,
    ShieldCheck,
    Users,
    ArrowUpRight,
    TrendingDown,
    Activity
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { cn } from "@/lib/utils";

const data = [
    { name: "Week 1", value: 4000 },
    { name: "Week 2", value: 4500 },
    { name: "Week 3", value: 4200 },
    { name: "Week 4", value: 5100 },
    { name: "Week 5", value: 5800 },
    { name: "Week 6", value: 6200 },
    { name: "Week 7", value: 7000 },
];

const stats = [
    {
        name: "Total Invested",
        value: "$12,450.00",
        info: "+12% from last month",
        icon: Wallet,
        trend: "up",
        color: "text-primary"
    },
    {
        name: "Estimated Earnings",
        value: "$1,240.50",
        info: "Calculated weekly",
        icon: TrendingUp,
        trend: "up",
        color: "text-emerald-500"
    },
    {
        name: "Active Investments",
        value: "4",
        info: "In 3 different indexes",
        icon: Activity,
        trend: "neutral",
        color: "text-blue-500"
    },
    {
        name: "Referral Count",
        value: "12",
        info: "3 pending verification",
        icon: Users,
        trend: "up",
        color: "text-amber-500"
    },
];

export default function OverviewPage() {
    return (
        <div className="space-y-6 lg:space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                    <p className="text-muted-foreground text-sm">Welcome back! Here's a snapshot of your account performance.</p>
                </div>
                <Badge variant="outline" className="h-8 px-4 border-emerald-200 bg-emerald-50 text-emerald-700 font-bold gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Market Live
                </Badge>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="p-5 md:p-6 rounded-[1.5rem] bg-white border border-border shadow-sm transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className={cn("w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-border", stat.color)}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            {stat.trend === "up" && <ArrowUpRight className="w-5 h-5 text-emerald-500 font-bold" />}
                            {stat.trend === "down" && <TrendingDown className="w-5 h-5 text-rose-500 font-bold" />}
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.name}</p>
                            <p className="text-2xl font-black tracking-tight">{stat.value}</p>
                            <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-tighter mt-2">{stat.info}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Section */}
            <div className="p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] bg-white border border-border shadow-sm overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-10 gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Investment Growth</h3>
                        <p className="text-xs font-medium text-muted-foreground">Historical performance of your active portfolio</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-border text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Portfolio Performance
                        </div>
                    </div>
                </div>
                <div className="h-[350px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="oklch(0.25 0.08 240)" stopOpacity={0.15} />
                                    <stop offset="95%" stopColor="oklch(0.25 0.08 240)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip
                                cursor={{ stroke: 'rgba(0,0,0,0.05)', strokeWidth: 2 }}
                                contentStyle={{
                                    borderRadius: '20px',
                                    border: 'none',
                                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    padding: '12px 16px'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="oklch(0.25 0.08 240)"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                                animationDuration={2000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pb-12">
                {/* Quick Action Info */}
                <div className="p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 -translate-y-4 translate-x-4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
                        <TrendingUp className="w-48 h-48" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <div className="inline-flex px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500">
                            Growth Opportunity
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-black tracking-tighter">Ready to scale?</h3>
                        <p className="text-slate-400 text-sm max-w-sm font-medium leading-relaxed">
                            Submit a new investment request to diversify your portfolio. Standard processing time is 2-4 business hours.
                        </p>
                        <Button className="h-14 px-8 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs uppercase tracking-widest gap-3 shadow-2xl transition-all" asChild>
                            <Link href="/dashboard/investments">
                                Start New Investment <ArrowUpRight className="w-5 h-5 text-rose-500" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Status Info */}
                <div className="p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2.5rem] bg-white border border-border flex flex-col justify-center relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-all duration-700">
                        <ShieldCheck className="w-40 h-40" />
                    </div>
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-primary/5 text-primary flex items-center justify-center border border-primary/10 shadow-inner">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Security Status</p>
                            <p className="text-xl font-bold tracking-tight">Level 1 KYC Verified</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
                            "Your account is currently active within standard liquidity limits. For withdrawals exceeding $5,000, please complete Level 2 verification."
                        </p>
                        <Link href="/dashboard/kyc" className="text-xs font-bold text-primary hover:underline uppercase tracking-widest flex items-center gap-2">
                            Complete Level 2 Transition <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
