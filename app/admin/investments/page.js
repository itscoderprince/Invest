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
import {
    CreditCard,
    Search,
    CheckCircle2,
    XCircle,
    Clock,
    ExternalLink,
    Eye,
    Receipt,
    Filter,
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
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Transaction Registry</h1>
                    <p className="text-muted-foreground text-sm">Review incoming capital allocations and verify institutional proof of payment.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-dashed h-11 px-6">
                        <Filter className="w-4 h-4 mr-2" /> Sorting Options
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-6 border-b border-border bg-muted/20">
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-md group">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Locate transaction by ID or investor name..."
                                className="pl-11 h-12 bg-white border-primary/5 focus-visible:ring-primary/20 rounded-2xl transition-all"
                            />
                        </div>
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10 font-bold text-[9px] uppercase tracking-widest px-3 py-1.5 h-auto">
                            <ShieldCheck className="w-3 h-3 mr-1.5" /> Compliance Verification Active
                        </Badge>
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
                                <TableCell className="px-6 py-5">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold tracking-tight text-foreground">{inv.id}</span>
                                        <span className="text-[11px] text-muted-foreground font-medium opacity-60 leading-none mt-0.5">{inv.user}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        <span className="text-sm font-bold text-slate-700">{inv.index}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-6 text-sm font-bold text-primary group-hover:scale-105 transition-transform origin-left">{inv.amount}</TableCell>
                                <TableCell className="px-6 text-[11px] text-muted-foreground font-bold uppercase tracking-tighter opacity-50">{inv.date}</TableCell>
                                <TableCell className="px-6">
                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "bg-white border-none font-bold text-[8px] uppercase tracking-widest px-2 py-0.5 shadow-sm",
                                            inv.status === "Approved" ? "text-emerald-700 bg-emerald-50" :
                                                inv.status === "Pending" ? "text-amber-700 bg-amber-50" : "text-rose-700 bg-rose-50"
                                        )}
                                    >
                                        {inv.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest border-primary/5 hover:bg-primary/5 transition-all">
                                            <Receipt className="w-3 h-3 mr-2 opacity-60" /> Audit Proof
                                        </Button>
                                        {inv.status === "Pending" && (
                                            <div className="flex gap-2">
                                                <Button
                                                    onClick={() => handleApprove(inv.id)}
                                                    className="h-9 px-4 bg-emerald-600 hover:bg-emerald-700 text-white border-none text-[10px] font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-500/20"
                                                >
                                                    Authorize
                                                </Button>
                                                <Button
                                                    onClick={() => handleReject(inv.id)}
                                                    variant="ghost"
                                                    className="h-9 px-4 text-rose-600 hover:bg-rose-50 text-[10px] font-bold uppercase tracking-widest rounded-xl"
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
