"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const tickerItems = [
    { label: "BTC/USD", value: "$64,231.40", change: "4.2%", up: true },
    { label: "ETH/USD", value: "$3,452.12", change: "2.1%", up: true },
    { label: "SOL/USD", value: "$145.80", change: "5.6%", up: true },
    { label: "S&P 500", value: "5,234.10", change: "0.8%", up: true },
    { label: "NASDAQ", value: "18,342.50", change: "1.2%", up: true },
    { label: "GOLD", value: "$2,340.00", change: "0.2%", up: false },
    // Platform specific indexes
    { label: "SOVEREIGN CORE", value: "+4.25%", change: "STABLE", up: true },
    { label: "ALPHA VENTURE", value: "+14.80%", change: "HIGH", up: true },
    { label: "TACTICAL COMMODITY", value: "+7.12%", change: "HEDGE", up: true },
    { label: "YIELD OPTIMIZER", value: "+6.40%", change: "BALANCED", up: true },
];

export function Ticker() {
    return (
        <section className="w-full bg-[#030806] border-y border-[#1a3327] relative z-20 overflow-hidden select-none">
            <div className="ticker-wrap h-10 md:h-14 flex items-center">
                <motion.div
                    className="flex whitespace-nowrap items-center py-2"
                    animate={{
                        x: [0, "-50%"]
                    }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {/* Batch 1 */}
                    <div className="flex items-center gap-8 md:gap-16 px-6 md:px-8">
                        {tickerItems.map((item, i) => (
                            <div key={`batch1-${i}`} className="flex items-center gap-3">
                                <span className="text-emerald-500/50 font-bold text-[10px] md:text-xs uppercase tracking-widest">{item.label}</span>
                                <span className="text-white font-mono text-xs md:text-sm font-medium">{item.value}</span>
                                <div className={cn(
                                    "flex items-center gap-1 text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded",
                                    item.up ? "text-emerald-400 bg-emerald-500/10" : "text-rose-400 bg-rose-500/10"
                                )}>
                                    {item.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                    {item.change}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Batch 2 (Seamless loop duplicate) */}
                    <div className="flex items-center gap-8 md:gap-16 px-6 md:px-8">
                        {tickerItems.map((item, i) => (
                            <div key={`batch2-${i}`} className="flex items-center gap-3">
                                <span className="text-emerald-500/50 font-bold text-[10px] md:text-xs uppercase tracking-widest">{item.label}</span>
                                <span className="text-white font-mono text-xs md:text-sm font-medium">{item.value}</span>
                                <div className={cn(
                                    "flex items-center gap-1 text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded",
                                    item.up ? "text-emerald-400 bg-emerald-500/10" : "text-rose-400 bg-rose-500/10"
                                )}>
                                    {item.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                    {item.change}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
