"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Activity,
    Landmark,
    CreditCard,
    ShieldAlert,
    BadgeCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 px-4 md:px-6">
            {/* Main Hero Section */}
            <div className="relative min-h-[90dvh] lg:min-h-screen flex flex-col justify-center pt-20 lg:pt-16">
                {/* Background Texture */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                <div className="container relative z-10 mx-auto max-w-7xl grid lg:grid-cols-12 gap-6 lg:gap-8 items-center py-8">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary rounded-full py-1 px-4">
                                <Activity className="w-3 h-3 mr-2 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-nowrap">Institutional Integrity Protocol</span>
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4 md:mb-6"
                        >
                            Private Wealth Tracking <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Audited & Immutable.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-sm md:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
                        >
                            The premium terminal for professional investors to log bank-to-bank settlements and monitor offline asset growth without intermediaries.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6"
                        >
                            <Button size="lg" className="rounded-full bg-primary text-primary-foreground px-8 h-12 shadow-lg shadow-primary/20 hover:scale-105 transition-all" asChild>
                                <Link href={ROUTES.AUTH.REGISTER}>Initialize Access</Link>
                            </Button>
                            <Button variant="ghost" className="rounded-full px-8 h-12 font-bold group border border-slate-200 dark:border-white/10" asChild>
                                <Link href="#indexes" className="flex items-center gap-2">
                                    Explore Markets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* SOCIAL PROOF */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6 md:mb-8"
                        >
                            <div className="flex -space-x-2">
                                {[
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuANfHZ9kfHovDbV-rTulCmCSYhb44szCCWRgGC8dR0uuhgHEIr8mTu4b9Fk_D9YoVgKsUt9-noL8es7i_E5EPWC27sj8TF-6w_zGELbFZxYF3-eYuTeQrvJrLfNIKilAic6eQMwrYi2IQwF5mku6jICU3lYjVYsgUaPllGY3zHWNSu9K1sdcHZ7afEu8JG0zUlEjKHIc9EgVZbkAlXzw8P_VSV1tdk3FqQaY4t8Ni2rzsLNRnJ7Q-suZojDhBlf5_T0rz6LcXEXlg",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCREjsOhMM88MICjdKze3c-2zFAJ4yH0plfjZgY1IAh3pXrFUsOcjaRD-86anGe9OEBphQCUwrEyZk9K9GE1uCom0OzrGDALqbzP64k2fb0JqVq5Wj1NzDJf5vSqhcw8TWeth2xB8Ak0mFDEcayTYFuH54Ox8B_0MAtsdFuZa6rPY6Jgqd5iIL16bncJlBdBvm3Xp-2_blMg4O6CMMDEL1OB0MnNmiKhX9qqC4xHs64R6x6GqwfWyb0rFyxQcH7r-8qJhQFXYS6Tg",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3U7Pt6t4BsudgMfjjcW5Sd2y8MewRJai5Ul1O40uNvx9BS6EUaWVUJ-RIfV94oVrY2Hd6NDgwQf5sIKvHJ_SR_AMnj87Yn_-psFZYjvf4xxCC0etuJS1xQ7aF6ZXt3Mt5iOKdFC2kWNZM-Ys-TM_05SthSnJoItFkfJLpkBAEqm07mUvixaqqJa4HMiSMYbdGiFROzR-Ik-3lFcqxFkrcrc8885THsfmO9zB4TqsIHz1m2b5WXTL5LW6hu5l5Q8jMaIUjBH87Q"
                                ].map((url, i) => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden relative shadow-sm">
                                        <Image src={url} alt="User Avatar" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p className="font-medium text-slate-600 dark:text-slate-400">
                                Trusted by <span className="font-bold text-slate-900 dark:text-white">120k+</span> private investors
                            </p>
                        </motion.div>

                        {/* COMPACT STATS */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="grid grid-cols-3 gap-8 border-t border-slate-200 dark:border-white/5 pt-4 opacity-50 max-w-md mx-auto lg:mx-0 mb-12"
                        >
                            <div>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">$12.5M+</p>
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Capital</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">4.8k</p>
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Active Nodes</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">99.9%</p>
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Audit Rate</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="lg:col-span-5 xl:col-span-6 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: 40, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-xl p-4 shadow-2xl h-[400px] flex items-center justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/hero_vector_art.png"
                                        alt="Fintech Data Architecture"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Visual Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 h-24 w-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-xl z-20 hidden xl:block backdrop-blur-md"
                            >
                                <div className="flex items-center gap-2 text-emerald-500 mb-2">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Secure Sync</span>
                                </div>
                                <div className="h-1.5 w-full bg-emerald-500/10 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: ["20%", "90%", "60%"] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="h-full bg-emerald-500"
                                    />
                                </div>
                                <p className="text-[9px] text-slate-500 mt-2 font-mono">ID: SEC-NODE-88</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* LOGO STRIP SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-8 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm py-8 lg:py-10"
                >
                    <div className="container mx-auto max-w-7xl text-center">
                        <p className="mb-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
                            Powering the next generation of fintech
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-700 dark:text-slate-300">
                                <Landmark className="w-5 h-5 text-blue-500" /> BankCore
                            </div>
                            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-700 dark:text-slate-300">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" /> SecureTrust
                            </div>
                            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-700 dark:text-slate-300">
                                <CreditCard className="w-5 h-5 text-indigo-500" /> PayFlow
                            </div>
                            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-700 dark:text-slate-300">
                                <TrendingUp className="w-5 h-5 text-rose-500" /> AlphaInc
                            </div>
                            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-700 dark:text-slate-300">
                                <BadgeCheck className="w-5 h-5 text-amber-500" /> Certify
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}