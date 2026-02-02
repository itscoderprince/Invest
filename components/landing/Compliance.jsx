"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Compliance() {
    return (
        <section className="py-12 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-rose-500/5 border border-rose-500/20 rounded-[2rem] p-8 md:p-12"
                >
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl lg:rounded-[2rem] bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-[0_15px_30px_-5px_rgba(244,63,94,0.4)] rotate-3">
                            <AlertTriangle className="w-8 h-8 lg:w-12 lg:h-12" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-black text-rose-600 mb-3 tracking-tight uppercase">Investor Protection Node</h3>
                            <div className="space-y-4 text-muted-foreground font-medium text-sm md:text-base leading-relaxed">
                                <p>Capital at risk. All returns shown are estimated performance metrics based on historical manual data logs. This platform acts as an administrative ledger for private, offline transactions only.</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                                    <Badge variant="outline" className="border-rose-500/20 text-rose-500 font-bold px-2 py-0.5 text-[10px]">NO ONLINE PAYMENTS</Badge>
                                    <Badge variant="outline" className="border-rose-500/20 text-rose-500 font-bold px-2 py-0.5 text-[10px]">KYC MANDATORY</Badge>
                                    <Badge variant="outline" className="border-rose-500/20 text-rose-500 font-bold px-2 py-0.5 text-[10px]">PRIVATE LEDGER</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
