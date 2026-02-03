"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    ShieldCheck,
    Upload,
    CheckCircle2,
    AlertCircle,
    FileText,
    CreditCard,
    MapPin,
    Info,
    ArrowRight,
    Lock,
    ShieldAlert,
    ChevronRight,
    Fingerprint,
    Zap
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";

export default function KYCPage() {
    const [status, setStatus] = useState("pending");

    const handleUpload = () => {
        toast.success("Identity telemetry submitted for node validation.");
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700 max-w-5xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground uppercase italic pb-1">Identity Terminal</h1>
                    <p className="text-sm text-muted-foreground font-medium">Verify your credentials to unlock global liquidity access.</p>
                </div>
                <Badge
                    variant="outline"
                    className={cn(
                        "h-8 px-4 font-black uppercase tracking-widest text-[9px] rounded-md border-none shadow-none",
                        status === "approved" && "bg-emerald-500/10 text-emerald-600",
                        status === "pending" && "bg-amber-500/10 text-amber-600",
                        status === "rejected" && "bg-rose-500/10 text-rose-600"
                    )}
                >
                    System Status: {status}
                </Badge>
            </div>

            {/* Status Banner */}
            <Card className={cn(
                "border-border shadow-none relative overflow-hidden group",
                status === "approved" && "bg-emerald-500/5",
                status === "pending" && "bg-amber-500/5",
                status === "rejected" && "bg-rose-500/5"
            )}>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <Fingerprint className="w-32 h-32" />
                </div>
                <CardContent className="p-8 flex items-center gap-6 relative z-10">
                    <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-2xl",
                        status === "approved" && "bg-emerald-500 text-white",
                        status === "pending" && "bg-amber-500 text-white",
                        status === "rejected" && "bg-rose-500 text-white"
                    )}>
                        {status === "approved" && <ShieldCheck className="w-8 h-8" />}
                        {status === "pending" && <AlertCircle className="w-8 h-8" />}
                        {status === "rejected" && <AlertCircle className="w-8 h-8" />}
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-black tracking-tighter uppercase italic text-foreground">
                            {status === "approved" ? "Identity Authenticated" : `${status} Verification`}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed max-w-xl font-bold uppercase tracking-tight">
                            {status === "approved" && "Your identity node is fully verified. You have unrestricted access to the core liquidity vaults and payout gateways."}
                            {status === "pending" && "Your credentials are currently undergoing a 36-bit manual audit by the compliance node. Estimated settlement: 24-48 cycles."}
                            {status === "rejected" && "Identity mismatch detected in the proof-of-habitation module. Please re-upload verified telemetry data."}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { name: "National ID", icon: CreditCard, desc: "Bilateral ID scan (Front/Back)", color: "text-blue-500" },
                    { name: "Tax Identifier", icon: FileText, desc: "Personal PAN / SSN data", color: "text-purple-500" },
                    { name: "Habitation Proof", icon: MapPin, desc: "Utility / Node statement", color: "text-emerald-500" },
                ].map((doc, i) => (
                    <Card key={i} className="border-border shadow-none bg-card hover:bg-muted/30 transition-all group overflow-hidden">
                        <CardHeader className="p-6">
                            <div className={cn("w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-4 border border-border group-hover:bg-primary group-hover:text-white transition-all duration-500")}>
                                <doc.icon className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-sm font-black tracking-tight uppercase italic text-foreground">{doc.name}</CardTitle>
                            <CardDescription className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{doc.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                            <div className="relative group/upload overflow-hidden rounded-xl border-2 border-dashed border-border p-8 transition-all hover:border-primary/50 hover:bg-primary/5 cursor-pointer flex flex-col items-center justify-center gap-3">
                                <Upload className="w-5 h-5 text-primary group-hover/upload:scale-110 transition-transform" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Authorize Scan</span>
                                <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer h-full" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <Card className="border-border bg-muted/20 shadow-none max-w-2xl overflow-hidden">
                    <CardContent className="p-5 flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-slate-950 text-white">
                            <ShieldAlert className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                                Data Integrity Protocol
                            </p>
                            <p className="text-[10px] text-muted-foreground font-medium leading-relaxed uppercase tracking-tight">
                                Document telemetry is encrypted via AES-256 and stored in isolation. No third-party node access is permitted.
                                Max payload: 5MB (PDF/PNG standard).
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Button onClick={handleUpload} className="h-14 px-12 rounded-2xl shadow-2xl shadow-primary/20 font-black uppercase tracking-widest text-sm w-full md:w-auto gap-3 group">
                    Encrypt & Submit <Zap className="w-4 h-4 group-hover:fill-primary-foreground transition-all" />
                </Button>
            </div>
        </div>
    );
}


