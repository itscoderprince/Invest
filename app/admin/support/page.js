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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminBreadcrumbs } from "@/components/AdminBreadcrumbs";
import {
    MessageSquare,
    Search,
    Filter,
    Clock,
    User,
    Mail,
    Reply,
    Trash2,
    Headset,
    CheckCircle2,
    ArrowUpRight,
    ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const adminMessages = [
    { id: "TKT-102", user: "Alice Walker", email: "alice@example.com", subject: "KYC Document Rejected", message: "My passport photo was rejected twice. Please clarify what's wrong with the current submission.", date: "1 hour ago", priority: "High", status: "New" },
    { id: "TKT-101", user: "Mike Ross", email: "mike@ross.co", subject: "Investment Delay", message: "My USDT deposit is still not showing in my dashboard after 4 hours.", date: "4 hours ago", priority: "Medium", status: "In Progress" },
    { id: "TKT-099", user: "Jane Foster", email: "jane@thor.me", subject: "Account Access", message: "Can I use two-factor authentication on this platform?", date: "1 day ago", priority: "Low", status: "Resolved" },
];

export default function SupportCenterPage() {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleAction = (action) => {
        toast.success(`Message marked as ${action}.`);
    };

    return (
        <div className="space-y-4">
            <AdminBreadcrumbs />
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/20 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">Support</Badge>
                    <p className="text-[11px] text-slate-500 font-medium opacity-60">Communication hub node</p>
                </div>
                <div className="flex items-center gap-3">
                    <Badge variant="outline" className="h-7 px-3 border-blue-500/20 bg-blue-500/5 text-blue-500 font-bold gap-2 text-[10px]">
                        <Headset className="w-3 h-3" />
                        Live Channels
                    </Badge>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Active Tickets", value: "12", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" },
                    { name: "Avg. Response", value: "24m", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
                    { name: "Resolution Rate", value: "94.2%", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
                ].map((stat, i) => (
                    <Card key={i} className="border-none shadow-sm bg-white group hover:shadow-md transition-all rounded-xl">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className={cn("p-1.5 rounded-lg", stat.bg)}>
                                    <stat.icon className={cn("w-4 h-4", stat.color)} />
                                </div>
                                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-20 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-[9px] font-bold text-muted-foreground uppercase opacity-60 leading-none mb-1">{stat.name}</p>
                                <p className="text-xl font-bold tracking-tight">{stat.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Conversations List */}
                <div className="lg:col-span-12 space-y-4">
                    <Card className="border-none shadow-sm bg-white overflow-hidden rounded-xl">
                        <CardHeader className="p-4 border-b border-border bg-muted/10">
                            <div className="flex items-center justify-between gap-4">
                                <div className="relative flex-1 max-w-sm group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <Input
                                        placeholder="Filter tickets..."
                                        className="pl-9 h-9 bg-white border-primary/5 focus-visible:ring-primary/20 rounded-xl text-xs transition-all"
                                    />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-border">
                                {adminMessages.map((msg) => (
                                    <div key={msg.id} className="p-5 hover:bg-muted/5 transition-colors group">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="text-sm font-bold tracking-tight text-foreground">{msg.subject}</h4>
                                                        <Badge
                                                            variant="outline"
                                                            className={cn(
                                                                "h-4 text-[7px] font-black uppercase tracking-widest px-1 border-none shadow-sm",
                                                                msg.priority === "High" ? "bg-rose-50 text-rose-600" :
                                                                    msg.priority === "Medium" ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-500"
                                                            )}
                                                        >
                                                            {msg.priority}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase opacity-40">
                                                        <User className="w-2.5 h-2.5" /> {msg.user} • {msg.email}
                                                    </div>
                                                    <p className="text-xs text-slate-600 leading-tight max-w-xl line-clamp-1 italic">
                                                        "{msg.message}"
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 shrink-0 self-end md:self-start">
                                                <div className="text-right flex flex-col items-end gap-1">
                                                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-muted-foreground uppercase opacity-30">
                                                        <Clock className="w-2.5 h-2.5" /> {msg.date}
                                                    </div>
                                                    <Badge
                                                        variant="secondary"
                                                        className={cn(
                                                            "h-4 text-[8px] font-black uppercase tracking-tighter px-1.5 px-1.5",
                                                            msg.status === "New" ? "bg-primary text-white" :
                                                                msg.status === "In Progress" ? "bg-blue-500 text-white" : "bg-emerald-500 text-white"
                                                        )}
                                                    >
                                                        {msg.status}
                                                    </Badge>
                                                </div>
                                                <Button size="sm" className="h-8 rounded-lg px-3 bg-slate-950 hover:bg-slate-900 font-bold text-[9px] uppercase tracking-widest">
                                                    <Reply className="w-3 h-3 mr-1.5" /> Respond
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 bg-muted/5 border-t border-border flex justify-center">
                            <Button variant="ghost" className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-40 hover:opacity-100 transition-all gap-2 h-8">
                                <Separator className="w-8 h-[1px] bg-muted-foreground/20" />
                                Legacy Data
                                <Separator className="w-8 h-[1px] bg-muted-foreground/20" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* Bottom Alert Section */}
            <div className="p-5 rounded-[1.5rem] bg-slate-950 border border-white/5 flex items-start gap-4 h-24 overflow-hidden group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-black text-white tracking-tight leading-none mt-1">Trust Protocol Active</h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium italic opacity-60">
                        Encrypted communication node. Standardized templates enforced for legal compliance.
                    </p>
                </div>
            </div>
        </div>
    );
}
