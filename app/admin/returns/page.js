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
    LineChart,
    TrendingUp,
    Search,
    RefreshCw,
    ArrowUpRight,
    Calculator,
    Save,
    Clock,
    Zap,
    Percent,
    Coins,
    ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const userHoldings = [
    { id: "USR-001", user: "John Doe", index: "Moscow", invested: "$5,000", earnings: "$240", lastUpdate: "7 days ago" },
    { id: "USR-002", user: "Sarah Smith", index: "Volga", invested: "$12,000", earnings: "$1,450", lastUpdate: "3 days ago" },
    { id: "USR-003", user: "Mike Ross", index: "Siberia", invested: "$3,500", earnings: "$95", lastUpdate: "12 days ago" },
];

export default function ReturnsManagerPage() {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleBulkUpdate = () => {
        setIsUpdating(true);
        setTimeout(() => {
            setIsUpdating(false);
            toast.success("Yield algorithms recalculated and distributed.");
        }, 2000);
    };

    return (
        <div className="space-y-4">
            <AdminBreadcrumbs />
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/20 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">Returns</Badge>
                    <p className="text-[11px] text-slate-500 font-medium opacity-60">Index performance calibration node</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="rounded-2xl border-dashed h-12 px-6 font-bold text-xs uppercase tracking-widest text-slate-500">
                        <Calculator className="w-4 h-4 mr-2" /> Recalculate Projections
                    </Button>
                    <Button onClick={handleBulkUpdate} disabled={isUpdating} className="rounded-2xl h-12 px-8 bg-slate-950 text-white shadow-2xl shadow-slate-950/20 group relative overflow-hidden">
                        <div className="flex items-center gap-3 relative z-10 font-bold text-xs uppercase tracking-widest">
                            {isUpdating ? (
                                <RefreshCw className="w-4 h-4 animate-spin text-rose-500" />
                            ) : (
                                <Zap className="w-4 h-4 text-rose-500 group-hover:animate-pulse" />
                            )}
                            {isUpdating ? "Distributing..." : "Execute Bulk Return"}
                        </div>
                    </Button>
                </div>
            </div>

            {/* Index Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Moscow", "Siberia", "Volga", "Ural"].map((name) => (
                    <Card key={name} className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <CardHeader className="p-6 pb-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60">{name} Index</span>
                                <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 border-none font-bold text-[8px] px-1.5 py-0">LIVE</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 pt-4 space-y-6">
                            <div className="relative group/input">
                                <Percent className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30 group-focus-within/input:text-primary transition-colors" />
                                <Input
                                    placeholder="0.00"
                                    className="h-16 rounded-[1.25rem] bg-muted/20 border-none text-2xl font-black text-center pr-12 focus-visible:ring-primary/20 shadow-inner"
                                />
                            </div>
                            <Button className="w-full rounded-xl h-12 bg-primary/5 text-primary hover:bg-primary hover:text-white border-none font-bold text-[10px] uppercase tracking-widest transition-all">
                                Update Trajectory
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Table Section */}
            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 border-b border-border bg-muted/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center">
                                <Coins className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-bold tracking-tight">Manual Adjustments</CardTitle>
                                <CardDescription className="text-xs font-medium">Edit individual account yields for custom bonus allocations.</CardDescription>
                            </div>
                        </div>
                        <div className="relative flex-1 max-w-sm group">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Universal find by ID or name..."
                                className="pl-11 h-12 bg-white border-primary/5 focus-visible:ring-primary/20 rounded-2xl transition-all"
                            />
                        </div>
                    </div>
                </CardHeader>
                <Table>
                    <TableHeader className="bg-muted/10">
                        <TableRow className="border-border">
                            <TableHead className="px-8 py-5 font-bold text-[10px] uppercase text-muted-foreground">Investment Target</TableHead>
                            <TableHead className="px-8 font-bold text-[10px] uppercase text-muted-foreground">Committed Assets</TableHead>
                            <TableHead className="px-8 font-bold text-[10px] uppercase text-muted-foreground">Historical Yield</TableHead>
                            <TableHead className="px-8 font-bold text-[10px] uppercase text-muted-foreground">Injection Value ($)</TableHead>
                            <TableHead className="px-8 font-bold text-[10px] uppercase text-muted-foreground">Last Distribution</TableHead>
                            <TableHead className="px-8 font-bold text-[10px] uppercase text-muted-foreground text-right">Commit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {userHoldings.map((hold) => (
                            <TableRow key={hold.id} className="border-border hover:bg-muted/5 transition-colors group">
                                <TableCell className="px-8 py-6 font-bold">
                                    <div className="flex flex-col">
                                        <span className="text-sm tracking-tight">{hold.user}</span>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <div className="w-1 h-3 bg-primary rounded-full" />
                                            <span className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none">{hold.index} Index</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="px-8 text-sm font-bold text-slate-500 opacity-60">{hold.invested}</TableCell>
                                <TableCell className="px-8">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                                        <span className="text-sm font-black text-emerald-600">+{hold.earnings}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-8">
                                    <Input
                                        placeholder="+ 0.00"
                                        className="w-32 h-11 rounded-xl bg-muted/30 border-none font-bold text-xs text-center focus-visible:ring-primary/20"
                                    />
                                </TableCell>
                                <TableCell className="px-8">
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground uppercase tracking-tight opacity-40">
                                        <Clock className="w-3 h-3" /> {hold.lastUpdate}
                                    </div>
                                </TableCell>
                                <TableCell className="px-8 text-right">
                                    <Button size="icon" className="h-10 w-10 rounded-xl bg-slate-950 hover:bg-primary hover:text-white transition-all shadow-xl shadow-slate-950/10">
                                        <Save className="w-4 h-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            <div className="p-8 rounded-[2rem] bg-slate-950 border border-white/10 flex items-start gap-6 relative overflow-hidden transition-all hover:border-rose-500/20 group">
                <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
                    <Zap className="w-40 h-40 text-white" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                    <ShieldCheck className="w-7 h-7 text-rose-500" />
                </div>
                <div>
                    <h4 className="text-lg font-black text-white mb-2 tracking-tight">System Reliability Protocol</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium max-w-2xl">
                        Performance metrics are cryptographically verified and finalized every Sunday at 00:00 UTC. Distributed yields are immediate and irreversible upon execution of the Bulk Return node.
                    </p>
                </div>
            </div>
        </div>
    );
}
