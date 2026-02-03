"use client";

import React, { useState } from "react";
import {
    Search,
    Filter,
    Settings,
    ChevronLeft,
    ChevronRight,
    Activity,
    Clock,
    ShieldCheck,
    Globe,
    Terminal,
    ArrowUpRight,
    Zap,
    Download,
    X,
    FilterX
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
    TableRow,
} from "@/components/ui/table";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";
import { cn } from "@/lib/utils";

// Mock Data
const activityData = [
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1236:123:4849:c59:cd5:8417",
        date: "2026-February-02 07:34 am",
        status: "Success",
        type: "Auth"
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1236:123:54be:ca41:f400:8600",
        date: "2026-February-02 06:48 am",
        status: "Success",
        type: "Auth"
    },
    {
        name: "prince",
        message: "Ticket Created !",
        ip: "2409:40e4:1236:123:54be:ca41:f400:8600",
        date: "2026-February-02 06:40 am",
        status: "Success",
        type: "Support"
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1236:123:54be:ca41:f400:8600",
        date: "2026-February-02 06:30 am",
        status: "Success",
        type: "Auth"
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1230:38e7:fdf3:d2c1:6e6c:f6f5",
        date: "2026-January-31 18:03 pm",
        status: "Success",
        type: "Auth"
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:46:cbbe:8000::",
        date: "2026-January-31 10:02 am",
        status: "Success",
        type: "Auth"
    },
];

export default function ActivityPage() {
    const [search, setSearch] = useState("");

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground uppercase italic pb-1">Activity Stream</h1>
                    <p className="text-sm text-muted-foreground font-medium">Real-time ledger of your node operations and transmissions.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-11 rounded-xl font-bold text-xs uppercase tracking-widest gap-2 bg-background/50 backdrop-blur-xl hover:bg-muted/50 transition-all border-border shadow-sm">
                        <Download className="w-4 h-4 text-primary" /> Export Stream
                    </Button>
                </div>
            </div>

            <Card className="border-border shadow-none bg-card/50 backdrop-blur-xl overflow-hidden">
                <CardHeader className="p-6 border-b bg-muted/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                                <Terminal className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-sm font-black uppercase tracking-widest italic">Operations Ledger</CardTitle>
                                <CardDescription className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground">Monitoring active session telemetry.</CardDescription>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <div className="relative group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <Input
                                    placeholder="Search Hash..."
                                    className="pl-9 w-full md:w-64 h-10 bg-background/50 border-border text-[11px] font-bold rounded-xl focus-visible:ring-primary/20"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="h-10 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest gap-2 bg-background/50 border-border hover:bg-muted/50">
                                        <Filter className="w-3.5 h-3.5" /> Filter Stream
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 p-0 overflow-hidden border-border bg-card/95 backdrop-blur-xl" align="end">
                                    <div className="p-4 bg-muted/10 border-b">
                                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-primary italic">Advanced Telemetry Filter</h4>
                                    </div>
                                    <div className="p-5 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Start Date</Label>
                                                <Input type="date" className="h-9 bg-background/50 border-border text-[10px] font-bold rounded-lg" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">End Date</Label>
                                                <Input type="date" className="h-9 bg-background/50 border-border text-[10px] font-bold rounded-lg" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Operation Class</Label>
                                            <Select>
                                                <SelectTrigger className="h-9 bg-background/50 border-border text-[10px] font-bold rounded-lg">
                                                    <SelectValue placeholder="All Categories" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {["Auth", "Support", "Finance", "Profile"].map(c => (
                                                        <SelectItem key={c} value={c.toLowerCase()} className="text-[10px] font-bold">{c}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex gap-2 pt-2">
                                            <Button className="flex-1 h-10 rounded-xl font-black text-[10px] uppercase tracking-widest">Submit Request</Button>
                                            <Button variant="outline" className="flex-1 h-10 rounded-xl font-black text-[10px] uppercase tracking-widest border-rose-500/20 text-rose-600 hover:bg-rose-500/5">Reset</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-muted/10">
                                <TableRow className="border-b border-border hover:bg-transparent">
                                    <TableHead className="w-[180px] h-14 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-6 italic">Identity Node</TableHead>
                                    <TableHead className="h-14 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-6 italic">Interaction Hash</TableHead>
                                    <TableHead className="h-14 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-6 italic">Protocol Type</TableHead>
                                    <TableHead className="h-14 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-6 italic">Origin IP</TableHead>
                                    <TableHead className="h-14 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground text-right px-6 italic">Timestamp</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {activityData.map((item, index) => (
                                    <TableRow key={index} className="border-b border-border hover:bg-muted/5 transition-colors group">
                                        <TableCell className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                                                    <span className="text-[10px] font-black uppercase text-primary">{item.name.substring(0, 2)}</span>
                                                </div>
                                                <span className="text-xs font-black uppercase tracking-tight italic">{item.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-6 py-5">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-xs font-bold text-foreground">{item.message}</span>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
                                                    <ShieldCheck className="w-2.5 h-2.5" /> Operations Validated
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-6 py-5">
                                            <Badge variant="outline" className="font-black text-[9px] px-2.5 h-6 rounded-lg uppercase tracking-widest border-primary/20 bg-primary/5 text-primary">
                                                {item.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="px-6 py-5">
                                            <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                                                <Globe className="w-3 h-3 opacity-50" />
                                                <span>{item.ip}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-6 py-5 text-right">
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-[11px] font-bold text-foreground">{item.date.split(' ').slice(0, 1)}</span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{item.date.split(' ').slice(1).join(' ')}</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <div className="p-6 border-t bg-muted/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Showing 1 - 10 of 25 nodes</p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-border bg-background" disabled>
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            {[1, 2, 3].map(p => (
                                <Button
                                    key={p}
                                    variant={p === 1 ? "default" : "outline"}
                                    className={cn(
                                        "h-9 w-9 rounded-xl font-black text-[10px]",
                                        p === 1 ? "shadow-lg shadow-primary/20" : "border-border bg-background"
                                    )}
                                >
                                    {p}
                                </Button>
                            ))}
                            <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-border bg-background">
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
