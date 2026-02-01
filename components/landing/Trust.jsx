"use client";

import React from "react";
import { motion } from "framer-motion";
import { Percent, Lock, Activity, ShieldCheck, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const trustFeatures = [
    {
        title: "Zero Management Fees",
        desc: "No management fees on Stable Yield accounts. Keep 100% of your generated performance.",
        icon: Percent,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Bank-Level Security",
        desc: "AES-256 encryption, cold storage for 98% of assets, and multi-factor biometric authentication.",
        icon: Lock,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Real-time Analytics",
        desc: "Track portfolio performance second-by-second via our verified institutional terminal.",
        icon: Activity,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    }
];

export function Trust() {
    return (
        <section className="py-24 px-6 bg-white dark:bg-slate-900/30 relative border-y border-slate-200 dark:border-white/5">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="outline" className="mb-4 px-3 py-1 border-slate-200 dark:border-white/10 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Verification Node
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            Why Investors <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Trust the Protocol</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 font-medium max-w-xl">
                            We've stripped away the complexity of traditional finance and the opacity of centralized exchanges. What's left is pure, audited performance.
                        </p>

                        <div className="flex flex-col gap-8">
                            {trustFeatures.map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-5 group"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                                        feature.bg, feature.color
                                    )}>
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-1">{feature.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual: Security Vault */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[450px] w-full rounded-[2rem] overflow-hidden p-1 bg-gradient-to-tr from-slate-200 to-white dark:from-white/10 dark:to-transparent shadow-2xl"
                    >
                        <div
                            className="w-full h-full rounded-[1.9rem] bg-cover bg-center relative"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIsHQSSF9NnBzG5f3u3D4O9QoNOsEkh03mKmGscHbwqC42D3bwwFSGn5nFWus620wC2HKDex3NdymvTN3CQP2AsYWlm5V1UH8BEIoOP3RQCrqMUV1nwKcrR2AhnAMme99-IZAwKEcCsvhbUT-dLoAyJVj8tBdoxRIVyetUOvlTiyPJjWRSnGQIrgx1b9NEXpxwK9Ppdmsun4jszvLYfLl3qy7I42X2eCzyawI1V3urB_0zz2TpM3l4Qf7m8rwGfkNi_5MMgtny8A')" }}
                        >
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                            {/* Floating Metadata */}
                            <div className="absolute bottom-10 left-10 text-left">
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/50 backdrop-blur-md mb-4"
                                >
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest">Protocol Integrity Verified</span>
                                </motion.div>
                                <h3 className="text-3xl font-bold text-white mb-2">Audited & Immutable</h3>
                                <p className="text-slate-400 text-sm font-medium">Last cycle check: 12ms ago via node-7429</p>
                            </div>

                            {/* Verification Badge */}
                            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg transform rotate-12">
                                <BadgeCheck className="w-8 h-8 text-white opacity-80" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />
        </section>
    );
}

// Helper to make cn available within the file if needed, though it should be imported from @/lib/utils
import { cn } from "@/lib/utils";
