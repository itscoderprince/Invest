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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Users,
    Search,
    MoreVertical,
    ShieldCheck,
    Mail,
    Ban,
    Filter,
    Download,
    UserCircle
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const usersData = [
    { id: "USR-001", name: "John Doe", email: "john@example.com", balance: "$5,240.50", kyc: "Level 1", status: "Active" },
    { id: "USR-002", name: "Sarah Smith", email: "sarah@google.com", balance: "$12,000.00", kyc: "Level 2", status: "Active" },
    { id: "USR-003", name: "Mike Ross", email: "mike@ross.co", balance: "$0.00", kyc: "None", status: "Pending" },
    { id: "USR-004", name: "Jane Foster", email: "jane@thor.me", balance: "$450.00", kyc: "Level 1", status: "Banned" },
];

export default function AdminUsersPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Active Investors</h1>
                    <p className="text-muted-foreground text-sm">Comprehensive directory of all system participants and their portfolio statuses.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-xl border-dashed">
                        <Filter className="w-4 h-4 mr-2" /> Advanced Filters
                    </Button>
                    <Button className="rounded-xl shadow-xl shadow-primary/20 gap-2">
                        <Download className="w-4 h-4" /> Export Audit Trail
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-6 border-b border-border bg-muted/20">
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-md group">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Search by name, email or institutional ID..."
                                className="pl-11 h-12 bg-white border-primary/5 focus-visible:ring-primary/20 rounded-2xl transition-all"
                            />
                        </div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-40 hidden md:block">{usersData.length} records detected</p>
                    </div>
                </CardHeader>
                <Table>
                    <TableHeader className="bg-muted/30">
                        <TableRow className="border-border">
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Investor Identity</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Capital Assets</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">KYC Tier</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground">Account Status</TableHead>
                            <TableHead className="px-6 font-bold text-[10px] uppercase text-muted-foreground text-right">Administrative</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {usersData.map((user) => (
                            <TableRow key={user.id} className="border-border hover:bg-muted/10 transition-colors">
                                <TableCell className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-11 w-11 border-2 border-primary/5 shadow-inner">
                                            <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold tracking-tight">{user.name}</span>
                                            <span className="text-[11px] text-muted-foreground font-medium opacity-60">{user.email}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="px-6 text-sm font-bold tracking-tight text-primary">{user.balance}</TableCell>
                                <TableCell className="px-6">
                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "bg-white border-none font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 shadow-sm",
                                            user.kyc === "Level 2" ? "text-emerald-700 bg-emerald-50" :
                                                user.kyc === "Level 1" ? "text-blue-700 bg-blue-50" : "text-slate-500 bg-slate-50"
                                        )}
                                    >
                                        {user.kyc}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-6">
                                    <div className="flex items-center gap-2">
                                        <div className={cn(
                                            "w-2 h-2 rounded-full",
                                            user.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" :
                                                user.status === "Pending" ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"
                                        )} />
                                        <span className="text-xs font-bold tracking-tight">{user.status}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-6 text-right">
                                    <div className="flex items-center justify-end gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-blue-50 hover:text-blue-600"><Mail className="w-4 h-4" /></Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-rose-50 hover:text-rose-600"><Ban className="w-4 h-4" /></Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl"><MoreVertical className="w-4 h-4" /></Button>
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
