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
import { Input } from "@/components/ui/input";
import { AdminBreadcrumbs } from "@/components/AdminBreadcrumbs";
import {
    CreditCard,
    Search,
    Filter,
    CheckCircle2,
    XCircle,
    Clock,
    ArrowUpRight,
    Receipt,
    ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const allInvestments = [
    { id: "INV-001", user: "John Doe", index: "Moscow", amount: "$5,000", date: "2024-01-25", status: "Approved" },
    { id: "INV-005", user: "Alice Walker", index: "Ural", amount: "$1,200", date: "2024-01-29", status: "Pending" },
    { id: "INV-006", user: "Bob Marley", index: "Volga", amount: "$4,500", date: "2024-01-30", status: "Pending" },
];

export default function AdminInvestmentsPage() {
    const handleApprove = (id) => toast.success(`Investment ${id} approved and portfolio updated.`);
    const handleReject = (id) => toast.error(`Investment ${id} rejected. Refund protocol initiated.`);

    return (
        <div className="space-y-4">
            <AdminBreadcrumbs />
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/20 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">Capitals</Badge>
                    <p className="text-[11px] text-slate-500 font-medium opacity-60">Transaction registry node</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-lg border-dashed h-8 px-3 text-[10px] font-bold uppercase tracking-widest bg-white/5 border-white/10 hover:bg-white/10 text-slate-400">
                        <Filter className="w-3.5 h-3.5 mr-1.5" /> Sort
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-sm bg-white/5 border-white/5 overflow-hidden rounded-xl">
                <CardHeader className="p-4 border-b border-white/5 bg-white/5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-sm group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Search ref..."
                                className="pl-9 h-9 bg-slate-900 border-white/5 focus-visible:ring-primary/20 rounded-xl text-xs text-slate-200 transition-all"
                            />
                        </div>
                    </div>
                </CardHeader>
                <Table>
                    <TableHeader className="bg-muted/30">
                        <TableRow className="border-border">
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Reference / Investor</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Index Allocation</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Total Assets</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Entry Date</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">State</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground text-right">Approval Workflow</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allInvestments.map((inv) => (
                            <TableRow key={inv.id} className="border-border hover:bg-muted/10 transition-colors group">
                                <TableCell className="px-5 py-3">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-tight text-foreground">{inv.id}</span>
                                        <span className="text-[10px] text-muted-foreground font-medium opacity-60 leading-none mt-0.5">{inv.user}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        <span className="text-xs font-bold text-slate-700">{inv.index}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-5 text-xs font-bold text-primary group-hover:scale-103 transition-transform origin-left">{inv.amount}</TableCell>
                                <TableCell className="px-5 text-[10px] text-muted-foreground font-bold uppercase tracking-tighter opacity-50">{inv.date}</TableCell>
                                <TableCell className="px-5">
                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "bg-white border-none font-bold text-[8px] uppercase tracking-widest px-1.5 py-0.5 shadow-sm",
                                            inv.status === "Approved" ? "text-emerald-700 bg-emerald-50" :
                                                inv.status === "Pending" ? "text-amber-700 bg-amber-50" : "text-rose-700 bg-rose-50"
                                        )}
                                    >
                                        {inv.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-5 text-right">
                                    <div className="flex items-center justify-end gap-1.5">
                                        <Button variant="outline" size="sm" className="h-8 px-3 rounded-lg text-[9px] font-bold uppercase tracking-widest border-primary/5 hover:bg-primary/5 transition-all">
                                            <Receipt className="w-3 h-3 mr-1 opacity-60" /> Audit
                                        </Button>
                                        {inv.status === "Pending" && (
                                            <div className="flex gap-1.5">
                                                <Button
                                                    onClick={() => handleApprove(inv.id)}
                                                    className="h-8 px-3 bg-emerald-600 hover:bg-emerald-700 text-white border-none text-[9px] font-bold uppercase tracking-widest rounded-lg"
                                                >
                                                    Authorize
                                                </Button>
                                                <Button
                                                    onClick={() => handleReject(inv.id)}
                                                    variant="ghost"
                                                    className="h-8 px-3 text-rose-600 hover:bg-rose-50 text-[9px] font-bold uppercase tracking-widest rounded-lg"
                                                >
                                                    Discard
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
