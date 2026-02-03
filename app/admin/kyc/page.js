"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AdminBreadcrumbs } from "@/components/AdminBreadcrumbs";
import {
    ScanFace,
    Clock,
    Search,
    Eye,
    CheckCircle2,
    XCircle,
    FileText,
    ShieldCheck,
    AlertCircle,
    ShieldAlert,
    ZoomIn,
    XSquare
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const pendingKYC = [
    { id: "KYC-882", user: "John Doe", date: "2024-01-28", type: "Full Verification" },
    { id: "KYC-883", user: "Alice Walker", date: "2024-01-29", type: "Level 2" },
    { id: "KYC-884", user: "Bob Marley", date: "2024-01-30", type: "Full Verification" },
];

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
        <div className="space-y-4">
            <AdminBreadcrumbs />
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Badge className="bg-amber-500/20 text-amber-600 border-amber-500/20 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">COMPLIANCE</Badge>
                    <p className="text-[11px] text-slate-500 font-medium opacity-60">Legal document review node</p>
                </div>
                <div className="relative flex-1 max-w-xs group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search ref..."
                        className="pl-9 h-9 bg-white/5 border-white/10 focus-visible:ring-primary/20 rounded-xl text-xs text-slate-200 transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingKYC.map((kyc) => (
                    <Card key={kyc.id} className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all rounded-xl">
                        <CardHeader className="p-4 pb-2">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <ScanFace className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-tight text-foreground leading-tight">{kyc.user}</h4>
                                        <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest opacity-40">{kyc.id}</p>
                                    </div>
                                </div>
                                <Badge variant="outline" className="bg-amber-50 text-amber-600 border-none font-bold text-[8px] uppercase tracking-widest px-1.5 py-0.5 animate-pulse">
                                    Pending
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="px-4 py-2 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">Submission</span>
                                <span className="text-[11px] font-bold text-foreground flex items-center gap-1"><Clock className="w-2.5 h-2.5 opacity-40" /> {kyc.date}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">Tier</span>
                                <span className="text-[11px] font-bold text-primary">{kyc.type}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-2">
                            <Button size="sm" className="w-full rounded-lg h-9 bg-slate-950 hover:bg-slate-900 font-bold text-[10px] gap-2" onClick={() => setSelectedKyc(kyc)}>
                                <Eye className="w-3.5 h-3.5" /> Initialize Review
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Review Dialog */}
            <Dialog open={!!selectedKyc} onOpenChange={() => setSelectedKyc(null)}>
                <DialogContent className="max-w-4xl p-0 border-none rounded-[2.5rem] overflow-hidden bg-white shadow-2xl">
                    <DialogHeader className="p-8 pb-4 bg-muted/20 border-b border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                                <ShieldAlert className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <DialogTitle className="text-2xl font-bold tracking-tight">Compliance Audit: {selectedKyc?.user}</DialogTitle>
                                <DialogDescription className="text-xs font-medium">Verify structural integrity of the submitted legal documentation.</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase text-muted-foreground tracking-[0.2em] mb-4 opacity-40">Submitted Assets</h4>
                                <div className="grid grid-cols-2 gap-5">
                                    {[1, 2, 3].map((doc) => (
                                        <div key={doc} className="aspect-[4/3] bg-muted/30 rounded-[1.5rem] border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 group relative cursor-zoom-in group transition-all hover:bg-primary/5 hover:border-primary/20">
                                            <FileText className="w-10 h-10 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                                            <span className="text-[9px] font-bold text-muted-foreground uppercase opacity-40">DOC_00{doc}_PROOFS</span>
                                            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all rounded-[1.5rem] flex items-center justify-center translate-y-2 group-hover:translate-y-0">
                                                <ZoomIn className="w-10 h-10 text-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Card className="border-none shadow-sm bg-muted/20 rounded-[1.5rem]">
                                <CardContent className="p-5">
                                    <h4 className="text-[10px] font-extrabold mb-4 uppercase text-primary tracking-widest leading-none">AI Identity Synthesis</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs font-bold leading-none">
                                            <span className="text-muted-foreground">Biometric Alignment</span>
                                            <span className="text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">98.4% Match</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-bold leading-none">
                                            <span className="text-muted-foreground">Document Source Validity</span>
                                            <span className="text-emerald-500 uppercase tracking-tighter">Verified Institutional</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8 flex flex-col">
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Internal Feedback Protocol</label>
                                <Textarea
                                    placeholder="Document any discrepancies or specific findings during manual audit..."
                                    className="h-48 rounded-[1.5rem] bg-muted/20 border-none outline-none focus-visible:ring-primary/20 text-sm p-5 resize-none shadow-inner leading-relaxed"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                <Button variant="outline" className="h-14 rounded-2xl border-rose-100 text-rose-600 hover:bg-rose-50 hover:text-rose-700 font-bold transition-all" onClick={handleReject}>
                                    <XSquare className="w-5 h-5 mr-3" /> Terminate
                                </Button>
                                <Button className="h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-600/20 font-bold transition-all" onClick={handleApprove}>
                                    <CheckCircle2 className="w-5 h-5 mr-3" /> Authorize
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
