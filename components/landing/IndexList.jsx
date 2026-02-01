"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BarChart4, ChevronRight, PieChart, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// High-integrity financial data
const indexes = [
    {
        name: "Sovereign Core Equity",
        risk: "Low",
        strategy: "Capital Preservation",
        description: "Focuses on top-tier global equities and stable debt instruments with a 5-year track record.",
        performance: "+4.25%",
        volatility: "2.1%",
        sharpe: "3.2",
        color: "emerald",
        trend: [5, 6, 5, 8, 7, 9, 8],
        icon: ShieldCheck
    },
    {
        name: "Alpha Venture Blend",
        risk: "High",
        strategy: "Aggressive Growth",
        description: "Exposure to high-growth tech sectors and early-stage disruptive markets with audited entries.",
        performance: "+14.80%",
        volatility: "8.4%",
        sharpe: "1.9",
        color: "rose",
        trend: [2, 4, 8, 5, 12, 10, 15],
        icon: Zap
    },
    {
        name: "Tactical Commodity",
        risk: "Medium",
        strategy: "Inflation Hedge",
        description: "Dynamic allocation across gold, rare minerals, and energy markets to hedge against fiat volatility.",
        performance: "+7.12%",
        volatility: "4.5%",
        sharpe: "2.4",
        color: "amber",
        trend: [4, 5, 7, 6, 9, 10, 12],
        icon: BarChart4
    },
    {
        name: "Yield Optimizer v4",
        risk: "Medium",
        strategy: "Balanced Income",
        description: "Automated rebalancing across dividend-yielding blue chips and high-grade corporate bonds.",
        performance: "+6.40%",
        volatility: "3.2%",
        sharpe: "2.8",
        color: "indigo",
        trend: [6, 7, 6, 8, 9, 8, 10],
        icon: PieChart
    },
];

const riskStyles = {
    Low: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    High: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

// Professional SVG Sparkline Component
function Sparkline({ points, color }) {
    const width = 120;
    const height = 40;
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min || 1;
    const step = width / (points.length - 1);

    const d = points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step},${height - ((p - min) / range) * height}`)
        .join(" ");

    const colors = {
        emerald: "#10b981",
        amber: "#f59e0b",
        rose: "#f43f5e",
        indigo: "#6366f1"
    };

    return (
        <svg width={width} height={height} className="overflow-visible">
            <path
                d={d}
                fill="none"
                stroke={colors[color] || "#cbd5e1"}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function IndexList() {
    return (
        <section id="indexes" className="py-12 lg:py-24 px-4 md:px-6 bg-white dark:bg-slate-950">
            <div className="container mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16 gap-4 md:gap-6">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 px-3 py-1 border-slate-200 dark:border-white/10 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Market Terminal
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4">
                            Investment <span className="text-blue-600">Archetypes</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-normal md:leading-relaxed">
                            Risk-weighted models designed for institutional capital deployment. Verified performance logs.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Auditor Status</p>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Next Sync: 4h 12m</p>
                        </div>
                    </div>
                </div>

                {/* Index Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {indexes.map((idx, i) => (
                        <motion.div
                            key={idx.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                        >
                            <Card className="group relative bg-white dark:bg-slate-900 border-slate-100 dark:border-white/5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20 overflow-hidden rounded-[2rem]">
                                <CardHeader className="p-4 lg:p-6 pb-2 lg:pb-2">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className={cn(
                                            "h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                                            idx.color === "emerald" && "bg-emerald-500/10 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-emerald-500/20",
                                            idx.color === "rose" && "bg-rose-500/10 text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.1)] group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-rose-500/20",
                                            idx.color === "amber" && "bg-amber-500/10 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-500/20",
                                            idx.color === "indigo" && "bg-indigo-500/10 text-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-indigo-500/20"
                                        )}>
                                            <idx.icon className="w-6 h-6" strokeWidth={2} />
                                        </div>
                                        <Badge className={cn("px-2.5 py-1 text-[9px] font-black uppercase tracking-widest border-transparent", riskStyles[idx.risk])}>
                                            {idx.risk}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        {idx.name}
                                    </CardTitle>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1.5">
                                        {idx.strategy}
                                    </p>
                                </CardHeader>

                                <CardContent className="p-4 lg:p-6 pt-1 lg:pt-2">
                                    <div className="mt-2 flex items-end justify-between">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Performance</p>
                                            <p className="text-3xl font-mono font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {idx.performance}
                                            </p>
                                        </div>
                                        <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100 origin-right">
                                            <Sparkline points={idx.trend} color={idx.color} />
                                        </div>
                                    </div>

                                    <div className="mt-4 lg:mt-6">
                                        <Button className="w-full rounded-xl h-11 lg:h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-lg group-hover:shadow-blue-500/25" asChild>
                                            <Link href="/auth/register" className="flex items-center justify-center gap-2">
                                                Invest Now
                                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}