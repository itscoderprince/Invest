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
import {
    ShieldCheck,
    Upload,
    CheckCircle2,
    AlertCircle,
    FileText,
    CreditCard,
    MapPin,
    Info
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { DashboardBreadcrumbs } from "@/components/DashboardBreadcrumbs";

export default function KYCPage() {
    const [status, setStatus] = useState("pending");

    const handleUpload = () => {
        toast.success("Documents submitted for review!");
    };

    return (
        <div className="space-y-4 md:space-y-8 max-w-5xl">
            <DashboardBreadcrumbs pageName="KYC" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="hidden md:block">
                    <h1 className="text-3xl font-bold tracking-tight">KYC Verification</h1>
                    <p className="text-muted-foreground text-sm">Secure your account by verifying your identity documents.</p>
                </div>
                <Badge
                    variant={status === "approved" ? "secondary" : "outline"}
                    className={cn(
                        "h-8 px-4 font-bold uppercase tracking-widest text-[10px]",
                        status === "approved" && "bg-emerald-50 text-emerald-700 border-none",
                        status === "pending" && "bg-amber-50 text-amber-700 border-none",
                        status === "rejected" && "bg-rose-50 text-rose-700 border-none"
                    )}
                >
                    Status: {status}
                </Badge>
            </div>

            {/* Status Banner */}
            <Card className={cn(
                "border-none shadow-sm relative overflow-hidden",
                status === "approved" && "bg-emerald-50",
                status === "pending" && "bg-amber-50",
                status === "rejected" && "bg-rose-50"
            )}>
                <CardContent className="p-4 md:p-8 flex items-center gap-4 md:gap-6">
                    <div className={cn(
                        "w-16 h-16 rounded-[2rem] flex items-center justify-center shrink-0 shadow-lg",
                        status === "approved" && "bg-emerald-500 text-white",
                        status === "pending" && "bg-amber-500 text-white",
                        status === "rejected" && "bg-rose-500 text-white"
                    )}>
                        {status === "approved" && <ShieldCheck className="w-8 h-8" />}
                        {status === "pending" && <AlertCircle className="w-8 h-8" />}
                        {status === "rejected" && <AlertCircle className="w-8 h-8" />}
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold tracking-tight capitalize">{status} Verification</h3>
                        <p className="text-sm opacity-80 leading-relaxed max-w-2xl">
                            {status === "approved" && "Your identity is fully verified. You can now make unlimited withdrawals and access premium features."}
                            {status === "pending" && "Your documents are currently being reviewed by our compliance team. This usually takes 24-48 hours."}
                            {status === "rejected" && "Your verification failed. Reason: Address proof mismatch. Please re-upload a clear document."}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                    { name: "Aadhaar Card", icon: CreditCard, desc: "Front & back of your ID" },
                    { name: "PAN Card", icon: FileText, desc: "Personal tax identifier" },
                    { name: "Address Proof", icon: MapPin, desc: "Utility bill or statement" },
                ].map((doc, i) => (
                    <Card key={i} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow group">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                <doc.icon className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-lg font-bold tracking-tight">{doc.name}</CardTitle>
                            <CardDescription className="text-xs">{doc.desc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="relative group/upload overflow-hidden rounded-2xl border-2 border-dashed border-muted p-6 transition-all hover:border-primary/50 hover:bg-primary/5 cursor-pointer">
                                <div className="flex flex-col items-center gap-2">
                                    <Upload className="w-5 h-5 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Upload File</span>
                                </div>
                                <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer h-full" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 max-w-2xl">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                        <strong>Security Note:</strong> All documents are encrypted and stored securely. We never share your personal information with third parties.
                        Please ensure the file size is below 5MB and format is PDF, PNG, or JPG.
                    </p>
                </div>
                <Button onClick={handleUpload} className="h-14 px-10 rounded-2xl shadow-xl shadow-primary/20 font-bold uppercase tracking-widest text-sm w-full md:w-auto">
                    Submit All Documents
                </Button>
            </div>
        </div>
    );
}


