"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminBreadcrumbs } from "@/components/AdminBreadcrumbs";
import {
    ArrowDownToLine,
    Search,
    Filter,
    CheckCircle2,
    XCircle,
    Clock,
    TrendingDown,
    ShieldCheck,
    Wallet,
    Banknote,
    Eye,
    ArrowUpRight
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const pendingWithdrawals = [
    { id: "WID-882", user: "John Doe", method: "USDT (TRC20)", destination: "TRC20...x92p", amount: "$1,240.00", date: "2024-02-01", status: "Pending" },
    { id: "WID-883", user: "Sarah Smith", method: "Bank Transfer", destination: "Chase ****442", amount: "$5,000.00", date: "2024-02-02", status: "Pending" },
    { id: "WID-884", user: "Mike Jones", method: "USDT (TRC20)", destination: "TRC20...z11k", amount: "$250.00", date: "2024-02-03", status: "Pending" },
];

export default function AdminWithdrawalsPage() {
    const handleApprove = (id) => toast.success(`Payout ${id} authorized. Transaction broadcasted.`);
    const handleReject = (id) => toast.error(`Payout ${id} rejected. Funds returned to balance.`);

    return (
        <div className="space-y-4">
            <AdminBreadcrumbs />
            {/* Header Section */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">Payouts</Badge>
                    <p className="text-[11px] text-slate-500 font-medium opacity-60">Outbound capital audit node</p>
                </div>
                <div className="flex items-center gap-3">
                    <Badge variant="outline" className="h-7 px-3 border-emerald-500/20 bg-emerald-500/5 text-emerald-500 font-bold gap-2 text-[10px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Payouts
                    </Badge>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { name: "Global Pending", value: "24", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
                    { name: "Volume (24h)", value: "$6.4k", icon: ArrowDownToLine, color: "text-primary", bg: "bg-primary/5" },
                    { name: "Avg. Latency", value: "4.2h", icon: TrendingDown, color: "text-blue-500", bg: "bg-blue-50" },
                    { name: "Integrity Score", value: "99.9%", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50" },
                ].map((stat, i) => (
                    <Card key={i} className="border-none shadow-sm bg-white group hover:shadow-md transition-all rounded-xl">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className={cn("p-1.5 rounded-lg", stat.bg)}>
                                    <stat.icon className={cn("w-4 h-4", stat.color)} />
                                </div>
                                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-30 italic">Live</span>
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1">{stat.name}</p>
                                <p className="text-xl font-bold tracking-tight">{stat.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Registry */}
            <Card className="border-none shadow-sm bg-white overflow-hidden rounded-xl">
                <CardHeader className="p-4 border-b border-border bg-muted/10">
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-sm group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Search ref or investor..."
                                className="pl-9 h-9 bg-white border-primary/5 focus-visible:ring-primary/20 rounded-xl text-xs transition-all"
                            />
                        </div>
                    </div>
                </CardHeader>
                <Table>
                    <TableHeader className="bg-muted/10">
                        <TableRow className="border-border">
                            <TableHead className="px-5 font-bold text-[9px] uppercase text-muted-foreground tracking-widest">Identity</TableHead>
                            <TableHead className="px-5 font-bold text-[9px] uppercase text-muted-foreground tracking-widest">Origin</TableHead>
                            <TableHead className="px-5 font-bold text-[9px] uppercase text-muted-foreground tracking-widest">Protocol</TableHead>
                            <TableHead className="px-5 font-bold text-[9px] uppercase text-muted-foreground tracking-widest">Amount</TableHead>
                            <TableHead className="px-5 font-bold text-[9px] uppercase text-muted-foreground tracking-widest">Time</TableHead>
                            <TableHead className="px-5 font-bold text-[9px] uppercase text-muted-foreground tracking-widest text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pendingWithdrawals.map((item) => (
                            <TableRow key={item.id} className="border-border hover:bg-muted/5 transition-colors group">
                                <TableCell className="px-5 py-3">
                                    <span className="text-xs font-bold tracking-tight text-foreground">{item.id}</span>
                                </TableCell>
                                <TableCell className="px-5 py-3">
                                    <span className="text-xs font-bold text-slate-600 leading-none">{item.user}</span>
                                </TableCell>
                                <TableCell className="px-5 py-3">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1.5">
                                            {item.method.includes("USDT") ? <Wallet className="w-3 h-3 text-emerald-500" /> : <Banknote className="w-3 h-3 text-blue-500" />}
                                            <span className="text-[10px] font-bold text-foreground">{item.method}</span>
                                        </div>
                                        <span className="text-[9px] font-mono text-muted-foreground opacity-40 leading-none uppercase">{item.destination}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-5 py-3">
                                    <span className="text-sm font-black text-rose-600 tracking-tight">{item.amount}</span>
                                </TableCell>
                                <TableCell className="px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase opacity-40">
                                    {item.date}
                                </TableCell>
                                <TableCell className="px-5 py-3 text-right">
                                    <div className="flex items-center justify-end gap-1.5">
                                        <Button
                                            onClick={() => handleApprove(item.id)}
                                            size="sm"
                                            className="h-8 px-3 bg-emerald-600 hover:bg-emerald-700 text-white border-none text-[9px] font-bold uppercase tracking-widest rounded-lg"
                                        >
                                            Authorize
                                        </Button>
                                        <Button
                                            onClick={() => handleReject(item.id)}
                                            size="sm"
                                            variant="ghost"
                                            className="h-8 px-3 text-rose-600 hover:bg-rose-50 text-[9px] font-bold uppercase tracking-widest rounded-lg"
                                        >
                                            Discard
                                        </Button>
                                        <Button variant="outline" size="icon" className="h-8 w-8 border-none bg-muted/20 hover:bg-muted text-muted-foreground rounded-lg">
                                            <Eye className="w-3.5 h-3.5" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* Bottom Alert Section */}
            <div className="p-5 rounded-[1.5rem] bg-slate-950 border border-white/5 flex items-start gap-4 h-24 overflow-hidden group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-rose-500" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-black text-white tracking-tight leading-none mt-1">Audit Protocol Active</h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium italic opacity-60">
                        Irreversible capital broadcast. Verify node coordinates before authorization.
                    </p>
                </div>
            </div>
        </div>
    );
}
