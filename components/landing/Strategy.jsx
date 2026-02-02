"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Wallet, PieChart, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const strategies = [
    {
        name: "Alpha Union",
        risk: "High Risk / High Reward",
        riskColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
        dotColor: "bg-rose-500",
        value: "25%",
        suffix: "APY",
        icon: TrendingUp,
        features: [
            "Algorithmic Trading & Arbitrage",
            "Exclusive to Neon Tier members",
            "Dynamic rebalancing daily"
        ],
        cta: "View Strategy",
        featured: false
    },
    {
        name: "Stable Yield",
        risk: "Low Risk / Stable",
        riskColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        dotColor: "bg-emerald-500",
        value: "8%",
        suffix: "APY",
        icon: Wallet,
        features: [
            "Stablecoin Backed (USDC/USDT)",
            "Daily interest payouts",
            "No lock-up period"
        ],
        cta: "Invest Now",
        featured: true
    },
    {
        name: "Xeno Index",
        risk: "Market Risk",
        riskColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        dotColor: "bg-amber-500",
        value: "Market",
        suffix: "Return",
        icon: PieChart,
        features: [
            "Top 10 Crypto Assets Cap-Weighted",
            "Auto-rebalancing monthly",
            "Diversified instant exposure"
        ],
        cta: "View Strategy",
        featured: false
    }
];

export function Strategy() {
    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {strategies.map((strat, i) => (
                        <motion.div
                            key={strat.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={cn(
                                "group relative p-8 rounded-3xl flex flex-col transition-all duration-500 h-full overflow-hidden",
                                strat.featured
                                    ? "bg-white dark:bg-slate-900 border-2 border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.1)] ring-1 ring-emerald-500/20"
                                    : "bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 shadow-sm hover:shadow-2xl"
                            )}
                        >
                            {/* Featured Ribbon */}
                            {strat.featured && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
                            )}

                            {/* Background Icon Watermark */}
                            <div className="absolute -top-6 -right-6 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                                <strat.icon className="w-40 h-40 text-slate-900 dark:text-white" />
                            </div>

                            <div className="relative mb-8">
                                <div className={cn(
                                    "inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest",
                                    strat.riskColor
                                )}>
                                    <div className={cn("w-1.5 h-1.5 rounded-full", strat.dotColor)} />
                                    {strat.risk}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{strat.name}</h3>

                                <div className="flex items-baseline gap-1 mt-6">
                                    <span className={cn(
                                        "text-5xl font-black transition-colors duration-300",
                                        strat.featured ? "text-emerald-500" : "text-slate-900 dark:text-white group-hover:text-blue-500"
                                    )}>
                                        {strat.value}
                                    </span>
                                    <span className="text-lg font-bold text-slate-400 uppercase tracking-tighter">{strat.suffix}</span>
                                </div>
                            </div>

                            <ul className="flex-1 space-y-4 mb-10 relative z-10">
                                {strat.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
                                        <CheckCircle2 className={cn(
                                            "w-4 h-4 shrink-0 mt-0.5",
                                            strat.featured ? "text-emerald-500" : "text-blue-500"
                                        )} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={cn(
                                    "w-full h-12 rounded-xl font-bold transition-all duration-300",
                                    strat.featured
                                        ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                                        : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.02]"
                                )}
                                asChild
                            >
                                <Link href={ROUTES.AUTH.REGISTER} className="flex items-center justify-center gap-2">
                                    {strat.cta}
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
