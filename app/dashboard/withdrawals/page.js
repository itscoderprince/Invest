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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
    ArrowDownCircle,
    History,
    Lock,
    Info,
    ArrowRight,
    TrendingUp,
    Clock,
    CheckCircle2,
    XCircle,
    Wallet,
    ArrowUpRight,
    ShieldAlert,
    Banknote,
    Zap,
    ChevronRight,
    Activity
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";

const history = [
    { id: "WID-102", amount: "1,200.00", date: "2024-01-18", status: "Approved" },
    { id: "WID-101", amount: "500.00", date: "2023-12-25", status: "Approved" },
];

export default function WithdrawalPage() {
    const [amount, setAmount] = useState("");

    const handleWithdraw = (e) => {
        e.preventDefault();
        if (parseFloat(amount) > 12450) {
            toast.error("Insufficient liquidity depth for this transaction!");
            return;
        }
        toast.success("Payout request initiated. Awaiting node audit.");
        setAmount("");
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground uppercase italic text-rose-500">Capital Payout</h1>
                    <p className="text-sm text-muted-foreground font-medium">Request manual liquidity transfers to authenticated bank portals.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 rounded-lg font-bold border-border bg-background">
                        <History className="w-3.5 h-3.5 mr-2" />
                        Audit Ledger
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Withdrawal Terminal */}
                <div className="lg:col-span-8 space-y-6">
                    <Card className="border-border shadow-none overflow-hidden bg-card/50 backdrop-blur-xl">
                        <CardHeader className="p-8 border-b bg-muted/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-5 -z-0">
                                <Banknote className="w-48 h-48 text-primary" />
                            </div>
                            <div className="relative z-10 flex items-center justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Authenticated Balance
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black tracking-tighter text-foreground">$12,450.00</span>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">USD</span>
                                    </div>
                                </div>
                                <div className="hidden sm:block p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                    <Wallet className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form onSubmit={handleWithdraw} className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between px-1">
                                        <Label htmlFor="amount" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Request Quantum</Label>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Daily Threshold: $10k</p>
                                            <Separator orientation="vertical" className="h-2" />
                                            <button type="button" className="text-[10px] text-primary font-black uppercase tracking-widest hover:underline" onClick={() => setAmount("12450")}>MAX_PEAK</button>
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-3xl text-muted-foreground/30 group-focus-within:text-primary transition-colors">$</div>
                                        <Input
                                            id="amount"
                                            type="number"
                                            placeholder="0.00"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            required
                                            className="h-20 pl-14 pr-6 rounded-2xl bg-muted/20 border-border focus-visible:ring-primary/20 text-3xl font-black tracking-tighter transition-all placeholder:text-muted-foreground/20"
                                        />
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/10 flex gap-4">
                                    <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                                    <p className="text-[10px] text-orange-800 font-bold leading-relaxed uppercase tracking-tight">
                                        All manual payout requests undergo a 36-bit verification process within the audit vault. Settlement standard is 3-5 platform cycles.
                                    </p>
                                </div>

                                <Button type="submit" className="w-full h-14 rounded-2xl shadow-2xl shadow-primary/20 text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-[0.99] gap-3">
                                    Authorize Transfer <Zap className="w-5 h-5 fill-primary-foreground" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border-border shadow-none overflow-hidden hover:bg-muted/40 transition-colors">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 shadow-lg mt-1">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-xs font-black text-foreground uppercase tracking-widest italic">Security Protocol Lock</h4>
                                <p className="text-[10px] text-muted-foreground/80 leading-relaxed font-medium">
                                    Anti-tamper measure: Withdrawals are cached for 24 cycles post profile structural updates.
                                    Any unauthorized protocol breaches are logged into the global audit node.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Payouts */}
                <div className="lg:col-span-4 space-y-6">
                    <Card className="border-border shadow-none bg-card/50 backdrop-blur-xl h-full flex flex-col">
                        <CardHeader className="p-6 border-b bg-muted/20">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2 tracking-tight">
                                    <History className="w-4 h-4 text-primary" /> Payout Stream
                                </CardTitle>
                                <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5">Ledger</Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-1 space-y-4">
                            {history.map((item) => (
                                <div key={item.id} className="p-5 rounded-2xl bg-card border border-border group hover:border-primary/20 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-10 transition-opacity">
                                        <ArrowUpRight className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex flex-col gap-3 relative z-10">
                                        <div className="flex items-center justify-between">
                                            <p className="text-xl font-black tracking-tighter text-foreground">${item.amount}</p>
                                            <Badge
                                                variant="outline"
                                                className="bg-emerald-500/10 text-emerald-600 border-none font-black text-[8px] uppercase tracking-widest px-2 h-5 rounded-md"
                                            >
                                                {item.status}
                                            </Badge>
                                        </div>
                                        <Separator className="opacity-50" />
                                        <div className="flex items-center justify-between text-[8px] text-muted-foreground font-black uppercase tracking-widest">
                                            <span className="flex items-center gap-1 opacity-60"><Activity className="w-2.5 h-2.5" /> {item.id}</span>
                                            <span className="opacity-60">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {history.length === 0 && (
                                <div className="text-center py-20 space-y-4">
                                    <div className="w-16 h-1 bg-muted mx-auto rounded-full" />
                                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-40">No Payout Signals Detected</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}


