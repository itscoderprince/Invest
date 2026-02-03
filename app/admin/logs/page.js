"use client";

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
import { AdminBreadcrumbs } from "@/components/AdminBreadcrumbs";
import {
    Terminal,
    Search,
    Filter,
    Clock,
    ShieldCheck,
    Shield,
    History,
    ArrowUpRight,
    Database,
    Lock,
    ShieldAlert,
    Activity,
    Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const logs = [
    { time: "2024-01-30 14:22:15", user: "Admin", action: "Approved KYC", target: "USR-004", level: "info" },
    { time: "2024-01-30 12:05:01", user: "System", action: "Weekly Returns Distributed", target: "All Users", level: "success" },
    { time: "2024-01-30 09:44:22", user: "System", action: "Failed Login Attempt", target: "192.168.1.45", level: "warning" },
    { time: "2024-01-29 18:30:10", user: "Admin", action: "Rejected Investment", target: "INV-088", level: "info" },
    { time: "2024-01-29 15:10:00", user: "Security", action: "Critical Update Applied", target: "Server-Alpha", level: "warning" },
];

export default function AdminLogsPage() {
    return (
        <div className="space-y-4">
            <AdminBreadcrumbs />
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Badge className="bg-rose-500/20 text-rose-500 border-rose-500/20 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">Audit</Badge>
                    <p className="text-[11px] text-slate-500 font-medium opacity-60">Immutable system activity log</p>
                </div>
                <Badge variant="outline" className="h-7 px-3 border-rose-500/20 bg-rose-500/5 text-rose-500 font-bold gap-2 text-[10px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    Secure Audit Active
                </Badge>
            </div>

            <Card className="border-none shadow-2xl bg-slate-950 text-slate-300 overflow-hidden rounded-xl">
                <CardHeader className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                            <Terminal className="w-5 h-5 text-rose-500" />
                        </div>
                        <div>
                            <CardTitle className="text-base font-bold text-white tracking-tight">Active Stream</CardTitle>
                        </div>
                    </div>
                    <div className="relative flex-1 max-w-sm group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-rose-500 transition-colors" />
                        <Input
                            placeholder="Filter logs by keyword or session ID..."
                            className="bg-white/5 border-white/5 h-12 pl-12 rounded-2xl text-xs font-mono text-slate-300 focus-visible:ring-rose-500/20"
                        />
                    </div>
                </CardHeader>
                <Table className="font-mono">
                    <TableHeader className="bg-white/5">
                        <TableRow className="border-white/5 hover:bg-transparent">
                            <TableHead className="px-6 py-4 text-[9px] font-bold uppercase text-slate-500 tracking-widest">Timestamp</TableHead>
                            <TableHead className="px-6 text-[9px] font-bold uppercase text-slate-500 tracking-widest">Actor</TableHead>
                            <TableHead className="px-6 text-[9px] font-bold uppercase text-slate-500 tracking-widest">Operation</TableHead>
                            <TableHead className="px-6 text-[9px] font-bold uppercase text-slate-500 tracking-widest">Entity</TableHead>
                            <TableHead className="px-6 text-[9px] font-bold uppercase text-slate-500 tracking-widest text-right">State</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {logs.map((log, i) => (
                            <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors group">
                                <TableCell className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold">
                                        <Clock className="w-3 h-3 opacity-30" />
                                        {log.time}
                                    </div>
                                </TableCell>
                                <TableCell className="px-8">
                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "border-none text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-lg",
                                            log.user === "Admin" ? "bg-rose-500/20 text-rose-400" :
                                                log.user === "System" ? "bg-blue-500/20 text-blue-400" : "bg-white/10 text-slate-400"
                                        )}
                                    >
                                        {log.user}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-8">
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                                        <div className={cn(
                                            "w-1.5 h-1.5 rounded-full",
                                            log.level === "success" ? "bg-emerald-500" :
                                                log.level === "warning" ? "bg-amber-500" : "bg-blue-500"
                                        )} />
                                        {log.action}
                                    </div>
                                </TableCell>
                                <TableCell className="px-8 text-xs text-slate-500 font-bold group-hover:text-slate-300 transition-colors">{log.target}</TableCell>
                                <TableCell className="px-8 text-right">
                                    <Shield className="w-4 h-4 text-emerald-500/40 inline-block" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="p-8 bg-white/5 border-t border-white/5 flex items-center justify-center">
                    <Button variant="ghost" className="text-[10px] items-center font-bold text-slate-500 hover:text-white hover:bg-white/5 uppercase tracking-widest gap-2">
                        <History className="w-4 h-4" /> Synchronize Previous Sequence
                    </Button>
                </div>
            </Card>
        </div >
    );
}
