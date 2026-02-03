"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    ScanFace,
    Clock,
    Search,
    Eye,
    CheckCircle2,
    FileText,
    ShieldAlert,
    ZoomIn,
    XCircle,
    CheckCircle
} from "lucide-react";
import { toast } from "sonner";
import { KYC_PENDING } from "@/lib/constants";

export default function AdminKYCManger() {
    const [selectedKyc, setSelectedKyc] = useState(null);

    const handleApprove = () => {
        toast.success("Investor credentials verified and upgraded.");
        setSelectedKyc(null);
    };

    const handleReject = () => {
        toast.error("Compliance rejected. Report filed.");
        setSelectedKyc(null);
    };

    return (
        <div className="space-y-6">
            <AdminHeader
                label="Compliance"
                subtitle="Review and verify investor identity documentation"
                actions={
                    <div className="relative group sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Search by ID or Name..."
                            className="pl-9 h-9 text-xs border-border bg-background focus-visible:ring-1"
                        />
                    </div>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {KYC_PENDING.map((kyc) => (
                    <Card key={kyc.id} className="border border-border shadow-none bg-card hover:bg-accent/5 transition-colors overflow-hidden">
                        <CardHeader className="p-5 pb-3">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border border-border">
                                        <ScanFace className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-tight text-foreground">{kyc.user}</h4>
                                        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{kyc.id}</p>
                                    </div>
                                </div>
                                <AdminStatusBadge status="Pending" />
                            </div>
                        </CardHeader>
                        <CardContent className="px-5 py-3 space-y-3">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground font-medium">Submission Date</span>
                                <span className="text-foreground font-bold flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-muted-foreground/60" /> {kyc.date}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground font-medium">Tier Requested</span>
                                <Badge variant="secondary" className="text-[10px] font-bold">{kyc.type}</Badge>
                            </div>
                        </CardContent>
                        <CardFooter className="p-5 pt-3">
                            <Button variant="outline" size="sm" className="w-full h-9 gap-2 font-bold text-xs" onClick={() => setSelectedKyc(kyc)}>
                                <Eye className="w-3.5 h-3.5" /> Start Verification
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Dialog open={!!selectedKyc} onOpenChange={() => setSelectedKyc(null)}>
                <DialogContent className="max-w-4xl p-0 border border-border sm:rounded-2xl overflow-hidden bg-background shadow-2xl">
                    <DialogHeader className="p-6 pb-4 bg-muted/30 border-b border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <div>
                                <DialogTitle className="text-xl font-bold tracking-tight">Compliance Audit: {selectedKyc?.user}</DialogTitle>
                                <DialogDescription className="text-xs font-medium">Review submitted legal documentation for accuracy and integrity.</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest px-1">Proof Documentation</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3].map((doc) => (
                                        <div key={doc} className="aspect-[4/3] bg-muted/20 rounded-xl border border-dashed border-border flex flex-col items-center justify-center gap-2 group relative cursor-zoom-in transition-all hover:bg-muted/40 hover:border-muted-foreground/30">
                                            <FileText className="w-8 h-8 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                                            <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tighter">Document_{doc}_Scan</span>
                                            <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all rounded-xl flex items-center justify-center">
                                                <Button size="icon" variant="ghost" className="rounded-full bg-background/80 shadow-md">
                                                    <ZoomIn className="w-5 h-5 text-primary" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border border-border bg-muted/20">
                                <h4 className="text-[10px] font-bold mb-3 uppercase text-primary tracking-widest">Verification Analysis</h4>
                                <div className="space-y-2.5">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground font-medium">Biometric Confidence</span>
                                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">98.4% Match</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground font-medium">Data Consistency</span>
                                        <span className="text-emerald-700 font-bold uppercase tracking-tight">Verified Source</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col h-full gap-6">
                            <div className="space-y-2.5">
                                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Audit Findings & Notes</label>
                                <Textarea
                                    placeholder="Enter detailed audit notes or specify missing information..."
                                    className="min-h-[220px] rounded-xl bg-background border border-border focus-visible:ring-1 text-sm p-4 resize-none leading-relaxed"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-auto">
                                <Button variant="outline" className="h-11 rounded-lg border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700 font-bold" onClick={handleReject}>
                                    <XCircle className="w-4 h-4 mr-2" /> Reject Submission
                                </Button>
                                <Button className="h-11 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-bold shadow-md shadow-emerald-600/10" onClick={handleApprove}>
                                    <CheckCircle className="w-4 h-4 mr-2" /> Approve Tier
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
