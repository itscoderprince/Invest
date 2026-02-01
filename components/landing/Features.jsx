"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wallet, LineChart, LockKeyhole } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
    {
        title: "Triple-Blind Verification",
        desc: "Every transaction undergoes a strict, three-step human-led audit cycle to eliminate digital discrepancies.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        shadow: "shadow-emerald-500/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "Sovereign-Grade Ledger",
        desc: "We bypass vulnerable online gateways. Your assets are mapped directly against immutable bank-to-bank proofs.",
        icon: Wallet,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        shadow: "shadow-blue-500/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "High-Fidelity Analytics",
        desc: "Institutional-level reporting with granular weekly performance logs and predictive growth modeling.",
        icon: LineChart,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        shadow: "shadow-amber-500/10",
        border: "group-hover:border-amber-500/50"
    },
    {
        title: "Zero-Trust Architecture",
        desc: "A gated investor community protected by multi-vector identity validation and tiered access controls.",
        icon: LockKeyhole,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        shadow: "shadow-rose-500/10",
        border: "group-hover:border-rose-500/50"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export function Features() {
    return (
        <section className="py-12 lg:py-24 px-4 md:px-6 bg-white dark:bg-slate-950">
            <div className="container mx-auto max-w-7xl">
                {/* Standardized Header Section */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-2 md:mb-4">
                            Precision Tracking for <span className="text-primary italic">Professional Wealth</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                            Our platform bridges the gap between offline investments and digital forensic tracking, ensuring absolute auditing rigor for high-value portfolios.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Card className={cn(
                                "group relative h-full rounded-[2rem] border-primary/5 bg-[#fafafa] dark:bg-slate-900/50 transition-all duration-300",
                                "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
                            )}>
                                <CardHeader className="p-5 lg:p-6 pb-2 lg:pb-3">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg",
                                        feature.bg,
                                        feature.color,
                                        feature.shadow,
                                        "group-hover:scale-110"
                                    )}>
                                        <feature.icon className="w-7 h-7" strokeWidth={2} />
                                    </div>
                                    <CardTitle className="text-xl font-bold tracking-tight">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-5 lg:p-6 pb-5 lg:pb-6 pt-0">
                                    <CardDescription className="text-muted-foreground text-sm font-medium leading-relaxed">
                                        {feature.desc}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}