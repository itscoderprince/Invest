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
import { AdminBreadcrumbs } from "@/components/AdminBreadcrumbs";
import {
    Users,
    Search,
    Filter,
    Download,
    Mail,
    Ban,
    MoreVertical,
    UserPlus,
    ShieldCheck,
    ShieldAlert,
    Activity
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
        <div className="space-y-4">
            <AdminBreadcrumbs />
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/20 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">INVESTORS</Badge>
                    <p className="text-[11px] text-slate-500 font-medium opacity-60">Global participant registry</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="rounded-lg border-dashed h-8 text-[10px] font-bold uppercase tracking-widest bg-white/5 border-white/10 hover:bg-white/10 text-slate-400">
                        <Filter className="w-3 h-3 mr-1.5" /> Filtering
                    </Button>
                    <Button size="sm" className="rounded-lg h-8 text-[10px] font-bold uppercase tracking-widest bg-slate-900 border border-white/10 hover:bg-slate-800 text-white shadow-lg shadow-black/20">
                        <Download className="w-3 h-3 mr-1.5" /> Export
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-sm bg-white overflow-hidden rounded-xl">
                <CardHeader className="p-4 border-b border-border bg-muted/10">
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-sm group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Search records..."
                                className="pl-9 h-9 bg-white border-primary/5 focus-visible:ring-primary/20 rounded-xl text-xs transition-all"
                            />
                        </div>
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
                                <TableCell className="px-5 py-3">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 border border-primary/5 shadow-inner">
                                            <AvatarFallback className="bg-primary/10 text-primary font-bold text-[10px]">{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold tracking-tight">{user.name}</span>
                                            <span className="text-[10px] text-muted-foreground font-medium opacity-60 leading-none">{user.email}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="px-5 text-xs font-bold tracking-tight text-primary">{user.balance}</TableCell>
                                <TableCell className="px-5">
                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "bg-white border-none font-bold text-[8px] uppercase tracking-widest px-1.5 py-0.5 shadow-sm",
                                            user.kyc === "Level 2" ? "text-emerald-700 bg-emerald-50" :
                                                user.kyc === "Level 1" ? "text-blue-700 bg-blue-50" : "text-slate-500 bg-slate-50"
                                        )}
                                    >
                                        {user.kyc}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-5">
                                    <div className="flex items-center gap-1.5">
                                        <div className={cn(
                                            "w-1.5 h-1.5 rounded-full",
                                            user.status === "Active" ? "bg-emerald-500" :
                                                user.status === "Pending" ? "bg-amber-500" : "bg-rose-500"
                                        )} />
                                        <span className="text-[10px] font-bold tracking-tight">{user.status}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-5 text-right">
                                    <div className="flex items-center justify-end gap-1 opacity-60 hover:opacity-100 transition-opacity">
                                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg hover:bg-blue-50 hover:text-blue-600"><Mail className="w-3.5 h-3.5" /></Button>
                                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg hover:bg-rose-50 hover:text-rose-600"><Ban className="w-3.5 h-3.5" /></Button>
                                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg"><MoreVertical className="w-3.5 h-3.5" /></Button>
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
