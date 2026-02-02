"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/landing/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950 text-foreground selection:bg-primary selection:text-white pt-16">
            <Navbar />

            <main>
                {/* Simple Header for dedicated page */}
                <div className="container mx-auto max-w-7xl px-4 md:px-6 pt-6 pb-2">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                            Direct <span className="text-primary">Inquiry Portal</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            Submit your protocol requirements or partnership inquiries. Our administrative team will verify and respond to your request through encrypted channels.
                        </p>
                    </motion.div>
                </div>

                <Contact />
            </main>

            <Footer />
        </div>
    );
}
