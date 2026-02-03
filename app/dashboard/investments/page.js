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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
    Plus,
    Search,
    FileText,
    ExternalLink,
    Upload,
    Clock,
    CheckCircle2,
    XCircle,
    Info,
    Activity,
    ArrowUpRight,
    Filter,
    ArrowDownToLine,
    Shield
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";

const investments = [
    { id: "INV-001", index: "Moscow Index", amount: "5,000.00", date: "2024-01-15", status: "Approved" },
    { id: "INV-002", index: "Volga Index", amount: "2,500.00", date: "2024-01-20", status: "Pending" },
    { id: "INV-003", index: "Siberia Index", amount: "3,000.00", date: "2023-12-10", status: "Approved" },
    { id: "INV-004", index: "Ural Index", amount: "1,950.00", date: "2023-11-28", status: "Rejected" },
];

export default function InvestmentsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState("");
    const [selectedIndex, setSelectedIndex] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Investment request submitted successfully!");
        setIsModalOpen(false);
        setAmount("");
        setSelectedIndex("");
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground uppercase italic">Capital Deployment</h1>
                    <p className="text-sm text-muted-foreground font-medium">Manage and track your distributed liquidity nodes.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 rounded-lg font-bold border-border bg-background">
                        <ArrowDownToLine className="w-3.5 h-3.5 mr-2" />
                        Export Ledger
                    </Button>
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                            <Button className="h-9 rounded-lg shadow-lg shadow-primary/20 font-bold px-4">
                                <Plus className="w-3.5 h-3.5 mr-2" /> Deploy Capital
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[500px] w-[95vw] gap-0 rounded-2xl p-0 border-none shadow-2xl overflow-hidden">
                            <div className="bg-slate-950 p-6 text-white relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Shield className="w-24 h-24" />
                                </div>
                                <DialogHeader>
                                    <DialogTitle className="text-xl font-black tracking-tighter uppercase italic">Manual Node Funding</DialogTitle>
                                    <DialogDescription className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                                        Layer-2 Capital Authentication
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-card">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="index" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Liquidity Pool</Label>
                                        <Select value={selectedIndex} onValueChange={setSelectedIndex} required>
                                            <SelectTrigger id="index" className="h-11 bg-muted/30 border-border rounded-xl focus:ring-primary/20 font-bold">
                                                <SelectValue placeholder="Choose an allocation node" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-border">
                                                <SelectItem value="moscow" className="font-bold">Moscow Index (Low Risk)</SelectItem>
                                                <SelectItem value="siberia" className="font-bold">Siberia Index (Med Risk)</SelectItem>
                                                <SelectItem value="volga" className="font-bold">Volga Index (High Risk)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="amount" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Capital Amount (USD)</Label>
                                        <div className="relative">
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                                <Activity className="w-3.5 h-3.5" />
                                            </div>
                                            <Input
                                                id="amount"
                                                type="number"
                                                placeholder="0.00"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                required
                                                className="h-11 bg-muted/30 border-border pl-9 rounded-xl focus-visible:ring-primary/20 font-black text-lg tracking-tight"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Proof of Transfer</Label>
                                        <div className="group relative border-2 border-dashed border-border rounded-xl p-6 transition-all hover:border-primary/50 hover:bg-primary/5 flex flex-col items-center justify-center gap-3 cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Upload className="w-5 h-5" />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-xs font-black uppercase tracking-tight">Upload Telemetry Data</p>
                                                <p className="text-[9px] text-muted-foreground font-bold mt-1 uppercase tracking-widest opacity-60">PNG, PDF (MAX 5MB)</p>
                                            </div>
                                            <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer h-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex gap-3">
                                    <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <p className="text-[10px] text-emerald-800 font-bold leading-relaxed uppercase tracking-tight">
                                        Global validation typically settles within 24-48 business hours via the audit vault.
                                    </p>
                                </div>

                                <DialogFooter className="flex items-center gap-3 pt-2">
                                    <Button type="button" variant="ghost" className="rounded-xl font-bold h-11 text-xs uppercase tracking-widest" onClick={() => setIsModalOpen(false)}>Abort</Button>
                                    <Button type="submit" className="flex-1 rounded-xl font-black h-11 text-sm uppercase tracking-widest shadow-xl shadow-primary/20">Authorize Injection</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { label: "Active Capital", value: "$10,500.00", icon: CheckCircle2, color: "text-primary", bg: "bg-primary/5" },
                    { label: "Pending Audit", value: "$2,500.00", icon: Clock, color: "text-amber-500", bg: "bg-amber-500/5" },
                    { label: "Aggregate Yield", value: "+$1,240.50", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/5" },
                ].map((stat, i) => (
                    <Card key={i} className="border-border shadow-none hover:shadow-md transition-all group overflow-hidden">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5">{stat.label}</p>
                                <p className={cn("text-2xl font-black tracking-tighter", stat.color)}>{stat.value}</p>
                            </div>
                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-500", stat.bg)}>
                                <stat.icon className={cn("w-5 h-5", stat.color)} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Table Section */}
            <Card className="border-border shadow-none overflow-hidden">
                <CardHeader className="p-6 border-b bg-muted/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <CardTitle className="text-lg font-black tracking-tight uppercase italic">Ledger Node Status</CardTitle>
                            <CardDescription className="text-xs font-medium">Platform-wide capital allocation history</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative w-full md:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                                <Input
                                    placeholder="Filter by HEX / Node..."
                                    className="h-9 bg-background border-border pl-9 rounded-lg text-xs font-bold"
                                />
                            </div>
                            <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-border shrink-0">
                                <Filter className="w-3.5 h-3.5 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/30">
                            <TableRow className="border-border hover:bg-transparent">
                                <TableHead className="px-6 h-10 font-black text-[10px] uppercase tracking-widest text-muted-foreground">HEX_ID</TableHead>
                                <TableHead className="px-6 h-10 font-black text-[10px] uppercase tracking-widest text-muted-foreground">Allocation Node</TableHead>
                                <TableHead className="px-6 h-10 font-black text-[10px] uppercase tracking-widest text-muted-foreground">Equity (USD)</TableHead>
                                <TableHead className="px-6 h-10 font-black text-[10px] uppercase tracking-widest text-muted-foreground">Timestamp</TableHead>
                                <TableHead className="px-6 h-10 font-black text-[10px] uppercase tracking-widest text-muted-foreground">Integrity</TableHead>
                                <TableHead className="px-6 h-10 text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {investments.map((inv) => (
                                <TableRow key={inv.id} className="hover:bg-muted/30 border-border group transition-colors">
                                    <TableCell className="px-6 py-4 font-black text-xs tracking-tighter text-foreground">{inv.id}</TableCell>
                                    <TableCell className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-tight">{inv.index}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-6 py-4 font-black text-xs tracking-tight text-foreground">${inv.amount}</TableCell>
                                    <TableCell className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{inv.date}</TableCell>
                                    <TableCell className="px-6 py-4">
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                "font-black text-[9px] px-2 h-5 rounded-md uppercase tracking-widest border-none shadow-none",
                                                inv.status === "Approved" && "bg-emerald-500/10 text-emerald-600",
                                                inv.status === "Pending" && "bg-amber-500/10 text-amber-600",
                                                inv.status === "Rejected" && "bg-rose-500/10 text-rose-600"
                                            )}
                                        >
                                            {inv.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-muted-foreground opacity-0 group-hover:opacity-100 transition-all">
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Button>
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
