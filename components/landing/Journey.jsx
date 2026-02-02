"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fingerprint, Wallet, Settings2, Activity, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const sequenceSteps = [
    {
        id: "01",
        title: "Identity Verification",
        description: "Submit corporate entity documents via secure vault for automated KYC/KYB processing.",
        timestamp: "00:00",
        tag: "STEP 01",
        icon: Fingerprint,
        status: "Instant",
    },
    {
        id: "02",
        title: "Capital Deposit",
        description: "Seamless multi-chain bridging or fiat on-ramp. Assets are segregated in smart contract vaults.",
        timestamp: "INSTANT",
        tag: "STEP 02",
        icon: Wallet,
        status: "Secured",
    },
    {
        id: "03",
        title: "Strategy Allocation",
        description: "Select from pre-audited high-yield strategies or configure custom algorithmic parameters.",
        timestamp: "AUTOMATED",
        tag: "STEP 03",
        icon: Settings2,
        status: "Locked",
    },
    {
        id: "04",
        title: "Real-time Yield",
        description: "Monitor performance via dashboard. Interest compounds every block. Withdraw anytime.",
        timestamp: "LIVE",
        tag: "STEP 04",
        icon: Activity,
        status: "Streaming",
    }
];

export function Journey() {
    return (
        <section className="min-h-screen flex items-center py-12 lg:py-24 px-4 md:px-6 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                    >
                        <Shield className="w-3 h-3" />
                        Onboarding Protocol
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 md:mb-6"
                    >
                        Protocol Integration <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Sequence</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                    />
                </div>

                <div className="relative">
                    {/* The Center Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-white/10 -ml-[0.5px] md:transform md:-translate-x-1/2" />

                    {/* The Glowing Progress Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '70%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-6 md:left-1/2 top-0 w-[1px] bg-gradient-to-b from-blue-600 via-emerald-500 to-transparent -ml-[0.5px] md:transform md:-translate-x-1/2 opacity-50 shadow-[0_0_15px_#2563eb]"
                    />

                    <div className="space-y-12">
                        {sequenceSteps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group"
                            >
                                {/* Left Content Area (Right-aligned on Desktop for Odd steps) */}
                                <div className={cn(
                                    "md:w-1/2 order-2 pl-14 md:pl-0",
                                    i % 2 === 0 ? "md:text-right md:order-1 md:pr-16" : "md:order-3 md:pl-16 md:text-left"
                                )}>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base mt-3 leading-relaxed max-w-md ml-0 md:ml-auto">
                                        {step.description}
                                    </p>

                                    {/* Mobile Only: Step Index */}
                                    <div className="md:hidden mt-4">
                                        <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                                            {step.tag} // {step.timestamp}
                                        </span>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center order-1 md:order-2 z-20">
                                    <div className={cn(
                                        "w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-slate-900 border flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                                        i === 0
                                            ? "border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                                            : "border-slate-200 dark:border-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                                    )}>
                                        <step.icon className={cn(
                                            "w-5 h-5 md:w-7 md:h-7 transition-colors duration-300",
                                            i === 0 && "text-blue-600 dark:text-blue-400",
                                            i === 1 && "text-emerald-600 dark:text-emerald-400",
                                            i === 2 && "text-amber-600 dark:text-amber-400",
                                            i === 3 && "text-indigo-600 dark:text-indigo-400"
                                        )} />
                                    </div>

                                    {/* Step status pulse (First item) */}
                                    {i === 0 && (
                                        <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping -z-10" />
                                    )}
                                </div>

                                {/* Right Content Area (Desktop Only, Index Tags) */}
                                <div className={cn(
                                    "hidden md:block md:w-1/2",
                                    i % 2 === 0 ? "md:order-3 md:pl-16" : "md:order-1 md:pr-16 md:text-right"
                                )}>
                                    <div className="inline-flex flex-col gap-1">
                                        <span className="font-mono text-[10px] text-blue-600/60 dark:text-blue-400/60 uppercase tracking-widest">{step.status} Node</span>
                                        <span className="font-mono text-xs text-slate-500 dark:text-white/40 bg-slate-50 dark:bg-white/5 px-2 py-1 rounded border border-slate-200 dark:border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                                            {step.tag} // {step.timestamp}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fine Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </section>
    );
}
