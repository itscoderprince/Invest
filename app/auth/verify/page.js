"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function VerifyPage() {
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    return (
        <div className="space-y-8">
            <div className="space-y-2 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Verify identity</h1>
                <p className="text-muted-foreground text-sm">
                    We've sent a 6-digit code to your email.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex justify-between gap-3 max-w-xs mx-auto md:mx-0">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="w-12 h-14 text-center text-2xl font-bold rounded-xl bg-muted/30 border-primary/10 focus-visible:ring-primary/20 p-0"
                            autoFocus={i === 1}
                        />
                    ))}
                </div>

                <div className="space-y-6">
                    <Button className="w-full h-12 rounded-xl shadow-xl shadow-primary/20 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98]" asChild>
                        <Link href="/dashboard/overview">
                            Verify & Complete <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>

                    <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground font-medium">
                            {timer > 0 ? (
                                <Badge variant="secondary" className="bg-muted text-muted-foreground border-none font-bold py-1">
                                    <Clock className="w-3.5 h-3.5 mr-2" /> Resend in {timer}s
                                </Badge>
                            ) : (
                                "Didn't receive code?"
                            )}
                        </div>
                        {timer === 0 && (
                            <button
                                onClick={() => setTimer(60)}
                                className="text-primary font-bold hover:underline flex items-center gap-1.5"
                            >
                                <RotateCcw className="w-3.5 h-3.5" /> Resend Code
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 text-[11px] text-muted-foreground leading-relaxed italic relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                    <Mail className="w-8 h-8" />
                </div>
                <p className="relative z-10">
                    <strong>Tip:</strong> Check your spam folder if you don't see the email within a few minutes.
                    Security codes expire after 10 minutes.
                </p>
            </div>
        </div>
    );
}
