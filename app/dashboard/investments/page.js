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
    Activity
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const investments = [
    { id: "INV-001", index: "Moscow Index", amount: "$5,000.00", date: "2024-01-15", status: "Approved" },
    { id: "INV-002", index: "Volga Index", amount: "$2,500.00", date: "2024-01-20", status: "Pending" },
    { id: "INV-003", index: "Siberia Index", amount: "$3,000.00", date: "2023-12-10", status: "Approved" },
    { id: "INV-004", index: "Ural Index", amount: "$1,950.00", date: "2023-11-28", status: "Rejected" },
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
        <div className="space-y-6 lg:space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Investments</h1>
                    <p className="text-muted-foreground text-sm">Manage and track your index investment requests.</p>
                </div>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <Button className="rounded-xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 font-bold px-6">
                            <Plus className="w-4 h-4 mr-2" /> Submit New Investment
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[500px] w-[95vw] gap-6 rounded-[2rem] p-6 lg:p-8 border-none shadow-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold tracking-tight">New Investment</DialogTitle>
                            <DialogDescription className="text-sm">
                                Enter the details of your manual payment for verification.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="index" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Select Index</Label>
                                    <Select value={selectedIndex} onValueChange={setSelectedIndex} required>
                                        <SelectTrigger id="index" className="h-12 bg-muted/30 border-primary/5 rounded-xl focus:ring-primary/20">
                                            <SelectValue placeholder="Choose an index" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl">
                                            <SelectItem value="moscow">Moscow Index (Low Risk)</SelectItem>
                                            <SelectItem value="siberia">Siberia Index (Medium Risk)</SelectItem>
                                            <SelectItem value="volga">Volga Index (High Risk)</SelectItem>
                                            <SelectItem value="ural">Ural Index (Medium Risk)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="amount" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Investment Amount ($)</Label>
                                    <Input
                                        id="amount"
                                        type="number"
                                        placeholder="Enter amount in USD"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        required
                                        className="h-12 bg-muted/30 border-primary/5 rounded-xl focus-visible:ring-primary/20"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Payment Proof</Label>
                                    <div className="group relative border-2 border-dashed border-primary/10 rounded-2xl p-5 lg:p-8 transition-all hover:border-primary/50 hover:bg-primary/5 flex flex-col items-center justify-center gap-2 lg:gap-3 cursor-pointer">
                                        <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Upload className="w-6 h-6" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-bold">Click to upload or drag & drop</p>
                                            <p className="text-[10px] text-muted-foreground mt-1">PNG, JPG or PDF (max 5MB)</p>
                                        </div>
                                        <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer h-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-50 rounded-xl p-4 flex gap-3 border border-amber-100">
                                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-[10px] text-amber-800 leading-relaxed italic">
                                    Verification usually takes 24-48 hours. Ensure your payment proof clearly matches the amount above.
                                </p>
                            </div>

                            <DialogFooter>
                                <Button type="button" variant="ghost" className="rounded-xl font-bold h-12" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="flex-1 rounded-xl font-bold h-12 shadow-xl shadow-primary/20">Submit Request</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-none shadow-sm bg-white overflow-hidden group">
                    <CardContent className="p-5 lg:p-6">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Active Capital</p>
                        <div className="flex items-end justify-between">
                            <p className="text-3xl font-bold tracking-tight text-primary">$10,500.00</p>
                            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-white overflow-hidden group">
                    <CardContent className="p-5 lg:p-6">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Pending Requests</p>
                        <div className="flex items-end justify-between">
                            <p className="text-3xl font-bold tracking-tight text-amber-500">$2,500.00</p>
                            <div className="p-2 rounded-lg bg-amber-50 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <Clock className="w-4 h-4" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-white overflow-hidden group">
                    <CardContent className="p-5 lg:p-6">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Total Earned</p>
                        <div className="flex items-end justify-between">
                            <p className="text-3xl font-bold tracking-tight text-emerald-500">+$1,240.50</p>
                            <div className="p-2 rounded-lg bg-emerald-50 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <Activity className="w-4 h-4" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Table Section */}
            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <div className="p-4 lg:p-6 border-b border-border flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by ID or Index..."
                            className="bg-muted/30 border-none pl-10 h-10 rounded-xl text-sm"
                        />
                    </div>
                </div>
                <Table>
                    <TableHeader className="bg-muted/30">
                        <TableRow className="border-border">
                            <TableHead className="px-4 lg:px-6 font-bold text-[10px] uppercase tracking-widest text-muted-foreground">ID</TableHead>
                            <TableHead className="px-4 lg:px-6 font-bold text-[10px] uppercase tracking-widest text-muted-foreground">Index</TableHead>
                            <TableHead className="px-4 lg:px-6 font-bold text-[10px] uppercase tracking-widest text-muted-foreground">Amount</TableHead>
                            <TableHead className="px-4 lg:px-6 font-bold text-[10px] uppercase tracking-widest text-muted-foreground">Date</TableHead>
                            <TableHead className="px-4 lg:px-6 font-bold text-[10px] uppercase tracking-widest text-muted-foreground">Status</TableHead>
                            <TableHead className="px-4 lg:px-6 font-bold text-[10px] uppercase tracking-widest text-muted-foreground text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {investments.map((inv) => (
                            <TableRow key={inv.id} className="hover:bg-muted/30 transition-colors border-border">
                                <TableCell className="px-4 lg:px-6 font-bold text-sm tracking-tight">{inv.id}</TableCell>
                                <TableCell className="px-4 lg:px-6 text-sm">{inv.index}</TableCell>
                                <TableCell className="px-4 lg:px-6 font-bold text-sm">{inv.amount}</TableCell>
                                <TableCell className="px-4 lg:px-6 text-xs text-muted-foreground">{inv.date}</TableCell>
                                <TableCell className="px-4 lg:px-6">
                                    <Badge
                                        variant={inv.status === "Approved" ? "secondary" : "outline"}
                                        className={cn(
                                            "font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase",
                                            inv.status === "Approved" && "bg-emerald-50 text-emerald-700 border-none",
                                            inv.status === "Pending" && "bg-amber-50 text-amber-700 border-none",
                                            inv.status === "Rejected" && "bg-rose-50 text-rose-700 border-none"
                                        )}
                                    >
                                        {inv.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-4 lg:px-6 text-right">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
