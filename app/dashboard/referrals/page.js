"use client";

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
import { Separator } from "@/components/ui/separator";
import {
    Users,
    Copy,
    Share2,
    TrendingUp,
    UserPlus,
    Gift,
    Award,
    ChevronRight,
    ArrowUpRight,
    Zap,
    Network,
    Link as LinkIcon,
    ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";

export default function ReferralsPage() {
    const referralCode = "INVEST-772-XYZ";

    const copyCode = () => {
        navigator.clipboard.writeText(referralCode);
        toast.success("Referral node code cached to clipboard.");
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground uppercase italic pb-1">Network Expansion</h1>
                    <p className="text-sm text-muted-foreground font-medium">Engineer your collective liquidity growth via peer nodes.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 rounded-lg font-bold border-border bg-background">
                        <Network className="w-3.5 h-3.5 mr-2" />
                        Network Graph
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Referral Card */}
                <div className="lg:col-span-12 xl:col-span-7">
                    <Card className="rounded-[2rem] bg-slate-950 text-white border-none shadow-2xl overflow-hidden group relative min-h-[400px] flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                            <Network className="w-64 h-64 text-primary" />
                        </div>
                        <CardContent className="p-8 md:p-12 relative z-10 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center backdrop-blur-3xl border border-primary/30">
                                    <UserPlus className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <Badge className="bg-primary/20 text-primary border-none font-black text-[9px] uppercase tracking-widest px-2 h-5 rounded-md mb-2">Institutional Tier</Badge>
                                    <h3 className="text-3xl font-black tracking-tighter uppercase italic">Distribute Capital Access</h3>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm max-w-md font-bold uppercase tracking-tight leading-relaxed">
                                Share your unique node identifier to authenticate new participants.
                                Earn aggregate yield overrides on all verified secondary injections.
                            </p>

                            <div className="space-y-4 pt-4 max-w-lg">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Universal Referral Code</label>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 bg-white/5 backdrop-blur-xl h-16 md:h-20 rounded-2xl flex items-center px-6 md:px-8 font-mono text-xl md:text-3xl font-black tracking-[0.1em] border border-white/10 shadow-2xl text-primary">
                                        {referralCode}
                                    </div>
                                    <Button
                                        onClick={copyCode}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <Copy className="w-6 h-6 md:w-8 md:h-8" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sub Stats Grid */}
                <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { label: "Active Nodes", value: "12", icon: Users, color: "text-primary", bg: "bg-primary/5" },
                        { label: "Override Yield", value: "$1,450.00", icon: Award, color: "text-emerald-500", bg: "bg-emerald-500/5" },
                        { label: "Pending Audit", value: "3", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/5" },
                        { label: "Network Depth", value: "+4.2%", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-500/5" },
                    ].map((stat, i) => (
                        <Card key={i} className="border-border shadow-none hover:shadow-lg transition-all group overflow-hidden bg-card/50">
                            <CardContent className="p-6 flex flex-col justify-between h-full min-h-[140px]">
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-500", stat.bg)}>
                                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                                </div>
                                <div className="mt-4">
                                    <p className={cn("text-2xl font-black tracking-tighter text-foreground")}>{stat.value}</p>
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <div className="sm:col-span-2">
                        <Button className="w-full h-14 rounded-2xl shadow-xl shadow-primary/20 font-black tracking-widest uppercase text-xs gap-3 group">
                            <LinkIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            Authenticate Global Invitation Link
                        </Button>
                    </div>
                </div>
            </div>

            {/* Network Ledger */}
            <Card className="border-border shadow-none overflow-hidden bg-card/50">
                <CardHeader className="p-6 border-b bg-muted/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-lg font-black tracking-tight uppercase italic flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" /> Node Directory
                            </CardTitle>
                            <CardDescription className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Real-time status of referred liquidity nodes.</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5">Audit All</Button>
                    </div>
                </CardHeader>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/30">
                            <TableRow className="border-border hover:bg-transparent">
                                <TableHead className="px-8 h-12 font-black text-[10px] uppercase tracking-widest text-muted-foreground">Node Principal</TableHead>
                                <TableHead className="px-8 h-12 font-black text-[10px] uppercase tracking-widest text-muted-foreground">Deployment</TableHead>
                                <TableHead className="px-8 h-12 font-black text-[10px] uppercase tracking-widest text-muted-foreground">Integrity</TableHead>
                                <TableHead className="px-8 h-12 font-black text-[10px] uppercase tracking-widest text-muted-foreground text-right">Yield Override</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { name: "Alex Rivera", date: "Jan 12, 2024", status: "Active", yield: "120.00" },
                                { name: "Sarah Chen", date: "Jan 10, 2024", status: "Audit", yield: "0.00" },
                                { name: "Marcus Thorne", date: "Jan 05, 2024", status: "Active", yield: "85.50" },
                            ].map((node, i) => (
                                <TableRow key={i} className="border-border hover:bg-muted/10 transition-colors group">
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary font-black text-xs border border-primary/10">
                                                {node.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="font-black text-xs tracking-tight text-foreground uppercase italic">{node.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{node.date}</TableCell>
                                    <TableCell className="px-8 py-5">
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                "font-black text-[9px] px-2 h-5 rounded-md uppercase tracking-widest border-none",
                                                node.status === "Active" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"
                                            )}
                                        >
                                            {node.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-8 py-5 text-right font-black text-xs tracking-tighter text-primary group-hover:scale-105 transition-transform">
                                        +${node.yield}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}
