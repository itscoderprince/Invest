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
    Wallet
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const history = [
    { id: "WID-102", amount: "$1,200.00", date: "2024-01-18", status: "Approved" },
    { id: "WID-101", amount: "$500.00", date: "2023-12-25", status: "Approved" },
];

export default function WithdrawalPage() {
    const [amount, setAmount] = useState("");

    const handleWithdraw = (e) => {
        e.preventDefault();
        if (parseFloat(amount) > 12450) {
            toast.error("Insufficient balance!");
            return;
        }
        toast.success("Withdrawal request submitted for review!");
        setAmount("");
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Withdrawals</h1>
                <p className="text-muted-foreground text-sm">Request manual payouts to your bank account.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Withdrawal Form */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="pb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                                    <Wallet className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Available Balance</p>
                                    <p className="text-3xl font-bold tracking-tight text-primary">$12,450.00</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleWithdraw} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="amount" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Withdrawal Amount ($)</Label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-xl text-primary/40 group-focus-within:text-primary transition-colors">$</div>
                                        <Input
                                            id="amount"
                                            type="number"
                                            placeholder="0.00"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            required
                                            className="h-16 pl-10 pr-4 rounded-2xl bg-muted/30 border-primary/5 focus-visible:ring-primary/20 text-2xl font-bold transition-all"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center px-1">
                                        <p className="text-[10px] text-muted-foreground font-medium uppercase">Daily Limit: $10,000.00</p>
                                        <p className="text-[10px] text-primary font-bold cursor-pointer hover:underline" onClick={() => setAmount("12450")}>Withdraw Max</p>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4">
                                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                                        Manual withdrawals are audited by compliance. Payouts take <strong>3-5 business days</strong> to reach your bank.
                                    </p>
                                </div>

                                <Button type="submit" className="w-full h-14 rounded-2xl shadow-xl shadow-primary/20 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-[0.99]">
                                    Request Payout <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="bg-destructive/5 border-destructive/10 border-none shadow-sm">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-destructive text-destructive-foreground flex items-center justify-center shrink-0 shadow-lg shadow-destructive/20 mt-1">
                                <Lock className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-destructive uppercase tracking-widest">Security Protocol</h4>
                                <p className="text-[11px] text-foreground/70 leading-relaxed italic">
                                    "Anti-fraud measure: Withdrawals are temporarily locked for 24 hours after a significant profile or KYC update.
                                    Unauthorized access attempts are logged and reported."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent History */}
                <div className="space-y-6">
                    <Card className="border-none shadow-sm bg-white overflow-hidden h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-6">
                            <CardTitle className="text-base font-bold flex items-center gap-2 tracking-tight">
                                <History className="w-4 h-4 text-primary" /> Recent Activity
                            </CardTitle>
                            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest h-7 px-2">History</Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {history.map((item) => (
                                <div key={item.id} className="p-5 rounded-2xl bg-muted/30 border border-primary/5 group hover:bg-white hover:border-primary/20 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-lg font-bold tracking-tight">{item.amount}</p>
                                        <Badge
                                            variant="secondary"
                                            className="bg-emerald-50 text-emerald-700 border-none font-bold text-[9px] uppercase tracking-widest px-2 py-0.5"
                                        >
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-[9px] text-muted-foreground uppercase font-bold tracking-tighter opacity-60">
                                        <span className="flex items-center gap-1"><Info className="w-2.5 h-2.5" /> {item.id}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            ))}

                            {history.length === 0 && (
                                <div className="text-center py-12 space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-muted mx-auto flex items-center justify-center text-muted-foreground/30">
                                        <History className="w-6 h-6" />
                                    </div>
                                    <p className="text-xs text-muted-foreground italic">No transaction history detected.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}


