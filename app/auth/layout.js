"use client";

import Link from "next/link";
import { Shield } from "lucide-react";

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side: Illustration & Branding */}
            <div className="hidden md:flex md:w-1/2 bg-primary items-center justify-center p-12 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
                <div className="max-w-md relative z-10">
                    <Link href="/" className="flex items-center gap-2 mb-12">
                        <Shield className="w-10 h-10 text-white" />
                        <span className="text-2xl font-bold tracking-tight">InvestTrack</span>
                    </Link>
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        The most transparent way to track dollar investments.
                    </h2>
                    <p className="text-primary-foreground/80 leading-relaxed mb-8">
                        Join thousands of investors who trust our manual verification process for secure, offline investments.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-sm font-medium">Manual Verification</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-sm font-medium">No Online Payment Gateways</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-sm font-medium">Secure KYC Process</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Auth Forms */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 bg-background">
                <div className="w-full max-w-sm space-y-8">
                    <div className="md:hidden flex justify-center mb-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Shield className="w-8 h-8 text-primary" />
                            <span className="text-xl font-bold tracking-tight text-primary">InvestTrack</span>
                        </Link>
                    </div>
                    {children}
                </div>
                <p className="mt-8 text-center text-xs text-muted-foreground max-w-xs leading-relaxed">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                    Investment involves risk. No guaranteed returns.
                </p>
            </div>
        </div>
    );
}
