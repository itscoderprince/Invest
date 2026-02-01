"use client";

import React from "react";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

/**
 * Footer Component
 * Optimized for mobile responsiveness and high content density.
 * Fixed structural syntax to resolve Turbopack parsing errors.
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 md:py-24 px-4 md:px-6 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-20">

                    {/* Brand and Description */}
                    <div className="col-span-2 md:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">InvestTrack</span>
                        </Link>
                        <p className="text-lg leading-relaxed max-w-sm">
                            The definitive administrative portal for professional offline investment tracking and portfolio management.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Platform Navigation */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Platform</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#indexes" className="hover:text-white transition-colors">Indexes</Link></li>
                            <li><Link href="#features" className="hover:text-white transition-colors">Performance</Link></li>
                            <li><Link href="#steps" className="hover:text-white transition-colors">Verification</Link></li>
                        </ul>
                    </div>

                    {/* Compliance and Legal */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</Link></li>
                        </ul>
                    </div>

                    {/* Security Footer Advisory */}
                    <div className="col-span-2 md:col-span-3 space-y-6">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Security</h4>
                        <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
                            <Badge variant="outline" className="border-rose-500/50 text-rose-500 font-bold px-2 uppercase text-[9px]">Strict Protocol</Badge>
                            <p className="text-[11px] leading-relaxed text-slate-500 italic">
                                All investment confirmations require manual bank document verification. Never share sensitive credentials.
                            </p>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/5 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-600 text-center md:text-left">
                    <p>© {currentYear} InvestTrack Global Ledger.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-white transition-colors">Twitter (X)</Link>
                        <Link href="#" className="hover:text-white transition-colors">Crunchbase</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
