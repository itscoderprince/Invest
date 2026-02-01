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
import {
    Users,
    Copy,
    Share2,
    TrendingUp,
    UserPlus,
    Gift,
    Award
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ReferralsPage() {
    const referralCode = "INVEST-772-XYZ";

    const copyCode = () => {
        navigator.clipboard.writeText(referralCode);
        toast.success("Referral code copied to clipboard!");
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Referrals</h1>
                <p className="text-muted-foreground text-sm">Invite your network and track your collective account growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Referral Card */}
                <Card className="rounded-[2.5rem] bg-primary text-primary-foreground border-none shadow-xl overflow-hidden group relative">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-700">
                        <Gift className="w-56 h-56" />
                    </div>
                    <CardContent className="p-10 relative z-10 space-y-8">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <UserPlus className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold tracking-tight">Expand your network</h3>
                            <p className="text-primary-foreground/70 text-sm max-w-[280px] leading-relaxed italic">
                                "Share your unique institutional code and earn weekly index returns on all successful referrals."
                            </p>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/50 ml-1">Referral Code</label>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-white/10 backdrop-blur-md h-16 rounded-2xl flex items-center px-6 font-mono text-2xl font-bold tracking-[0.1em] border border-white/10 shadow-inner">
                                    {referralCode}
                                </div>
                                <Button
                                    onClick={copyCode}
                                    className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center shadow-2xl hover:bg-slate-50 transition-all hover:scale-[1.05] active:scale-[0.95]"
                                >
                                    <Copy className="w-7 h-7" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Referral Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { label: "Total Referrals", value: "12", icon: Users, color: "text-primary", bg: "bg-primary/5" },
                        { label: "Referral Earnings", value: "$1,450.00", icon: Award, color: "text-emerald-500", bg: "bg-emerald-50" },
                        { label: "Pending KYC", value: "3", icon: UserPlus, color: "text-amber-500", bg: "bg-amber-50" },
                        { label: "Growth Boost", value: "+4.2%", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-50" },
                    ].map((stat, i) => (
                        <Card key={i} className="border-none shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-inner", stat.bg, stat.color)}>
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <div className="sm:col-span-2">
                        <Button variant="outline" className="w-full h-12 rounded-xl border-dashed border-2 hover:bg-muted font-bold tracking-widest uppercase text-[10px] gap-2">
                            <Share2 className="w-4 h-4" /> Generate Invitation Link
                        </Button>
                    </div>
                </div>
            </div>

            {/* Table of Referrals */}
            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="border-b border-border p-6 bg-muted/20">
                    <CardTitle className="text-base font-bold flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" /> Network Directory
                    </CardTitle>
                    <CardDescription>Real-time status of your referred investors.</CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader className="bg-muted/30">
                        <TableRow className="border-border">
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">User Investor</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Onboarding Date</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Compliance</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground text-right">Yield Earned</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-border hover:bg-muted/10 transition-colors">
                            <TableCell className="px-6 font-bold text-sm">Alex Rivera</TableCell>
                            <TableCell className="px-6 text-xs text-muted-foreground">Jan 12, 2024</TableCell>
                            <TableCell className="px-6">
                                <Badge className="bg-emerald-50 text-emerald-700 border-none font-bold text-[9px] uppercase tracking-widest">Active Investor</Badge>
                            </TableCell>
                            <TableCell className="px-6 text-right font-bold text-primary">$120.00</TableCell>
                        </TableRow>
                        <TableRow className="border-border hover:bg-muted/10 transition-colors">
                            <TableCell className="px-6 font-bold text-sm">Sarah Chen</TableCell>
                            <TableCell className="px-6 text-xs text-muted-foreground">Jan 10, 2024</TableCell>
                            <TableCell className="px-6">
                                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-none font-bold text-[9px] uppercase tracking-widest">Pending KYC</Badge>
                            </TableCell>
                            <TableCell className="px-6 text-right font-bold text-muted-foreground/40">$0.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
