"use client";

import React from "react";
import {
    Flag,
    Mail,
    Phone,
    Clock,
    Plus,
    Send,
    Paperclip,
    MessageSquare,
    ShieldCheck,
    HelpCircle,
    ChevronRight,
    ArrowUpRight,
    Search,
    Filter,
    Activity,
    Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";
import { cn } from "@/lib/utils";

export default function SupportPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700 h-[calc(100vh-140px)] min-h-[700px] flex flex-col">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground uppercase italic pb-1">Assistance Terminal</h1>
                    <p className="text-sm text-muted-foreground font-medium">Coordinate with compliance nodes and support engineers.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button className="h-9 rounded-lg shadow-lg shadow-primary/20 font-black px-4 text-xs uppercase tracking-widest gap-2">
                        <Plus className="w-3.5 h-3.5" /> Initialize Ticket
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 overflow-hidden pb-10">
                {/* LEFT: Stream List */}
                <div className="lg:col-span-4 flex flex-col min-h-0">
                    <Card className="border-border shadow-none flex-1 overflow-hidden flex flex-col bg-card/50 backdrop-blur-xl">
                        <CardHeader className="p-4 border-b bg-muted/20">
                            <Tabs defaultValue="active" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 h-9 bg-background/50 border border-border">
                                    <TabsTrigger value="active" className="text-[10px] font-black uppercase tracking-widest">Active Stream</TabsTrigger>
                                    <TabsTrigger value="closed" className="text-[10px] font-black uppercase tracking-widest">Archived</TabsTrigger>
                                </TabsList>
                            </Tabs>
                            <div className="relative mt-3">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                                <Input placeholder="Search logs..." className="h-8 pl-9 bg-background/50 border-border text-[10px] font-bold" />
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto p-2">
                            <div className="space-y-1">
                                {[
                                    { id: "6029783w", cat: "Capital Node", sub: "Buy/Sell delay audit", date: "02 Feb", active: true },
                                    { id: "7128491x", cat: "Identity Vault", sub: "KYC Telemetry Mismatch", date: "28 Jan", active: false },
                                ].map((ticket, i) => (
                                    <div key={i} className={cn(
                                        "flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border border-transparent hover:border-border",
                                        ticket.active ? "bg-primary/5 border-primary/10" : "hover:bg-muted/30"
                                    )}>
                                        <div className={cn(
                                            "w-10 h-10 rounded-lg flex items-center justify-center font-black text-xs border",
                                            ticket.active ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground border-border"
                                        )}>
                                            {ticket.cat[0]}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-0.5">
                                                <span className="font-black text-[10px] text-foreground tracking-tighter uppercase">{ticket.id}</span>
                                                <span className="text-[9px] font-bold text-muted-foreground uppercase">{ticket.date}</span>
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-0.5">{ticket.cat}</p>
                                            <p className="text-[10px] text-muted-foreground font-medium truncate">{ticket.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* MIDDLE: Conversation */}
                <div className="lg:col-span-5 h-full flex flex-col min-h-0">
                    <Card className="border-border shadow-none flex-1 overflow-hidden flex flex-col bg-card/10 backdrop-blur-xl">
                        <div className="p-4 border-b bg-muted/20 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                                        Active Transmission
                                    </h2>
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase opacity-60 italic">Node Connection: Stable</p>
                                </div>
                            </div>
                            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-none font-black text-[8px] uppercase tracking-widest px-2 h-5 rounded-md">LIVE</Badge>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {[
                                { user: "prince sharma", role: "Investor", time: "02-Feb-2026", msg: "Capital deployment audit required for node 'Moscow Tier 1'.", initial: "P" },
                                { user: "Admin", role: "Compliance Node", time: "02-Feb-2026", msg: "Synchronizing with the capital vault. Please standby for validation.", initial: "A", admin: true },
                            ].map((msg, i) => (
                                <div key={i} className={cn("flex gap-4 max-w-[85%]", msg.admin && "ml-auto flex-row-reverse text-right")}>
                                    <div className="shrink-0">
                                        <div className={cn(
                                            "w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black",
                                            msg.admin ? "bg-slate-950 text-white shadow-xl" : "bg-primary text-primary-foreground"
                                        )}>
                                            {msg.initial}
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className={cn("flex items-center gap-2", msg.admin && "flex-row-reverse")}>
                                            <span className="text-[10px] font-black uppercase tracking-tight text-foreground">{msg.user}</span>
                                            <span className="text-[9px] font-bold text-muted-foreground opacity-50">{msg.time}</span>
                                        </div>
                                        <div className={cn(
                                            "p-4 rounded-2xl text-[11px] font-medium leading-relaxed shadow-sm",
                                            msg.admin ? "bg-slate-900 text-slate-100 rounded-tr-none" : "bg-muted/50 text-foreground rounded-tl-none border border-border"
                                        )}>
                                            {msg.msg}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t bg-card">
                            <div className="relative group">
                                <Textarea
                                    placeholder="Enter transmission..."
                                    className="min-h-[100px] bg-muted/30 border-border rounded-xl resize-none pr-12 pb-10 text-xs font-bold focus-visible:ring-primary/20"
                                />
                                <div className="absolute bottom-3 left-3 flex gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                                        <Paperclip className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <Button size="sm" className="h-8 rounded-lg font-black uppercase text-[10px] tracking-widest gap-2 shadow-lg shadow-primary/20">
                                        <Send className="h-3 w-3" /> Transmit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* RIGHT: Status Board */}
                <div className="lg:col-span-3 h-full overflow-y-auto">
                    <div className="space-y-6">
                        <Card className="border-border shadow-none bg-card/50 overflow-hidden">
                            <CardContent className="p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <Avatar className="h-24 w-24 border-4 border-background shadow-2xl">
                                            <AvatarImage src="https://clients.xpo.ru/public/assets/images/user.png" />
                                            <AvatarFallback className="bg-primary text-primary-foreground font-black text-2xl">PS</AvatarFallback>
                                        </Avatar>
                                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-background" />
                                    </div>
                                    <h3 className="font-black text-lg text-foreground tracking-tighter uppercase italic">prince sharma</h3>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6 opacity-60">Verified Investor Node</p>

                                    <div className="grid grid-cols-2 gap-3 w-full">
                                        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-center">
                                            <p className="text-[10px] font-black uppercase text-primary">Priority</p>
                                            <p className="text-sm font-black tracking-tighter">GOLD</p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                                            <p className="text-[10px] font-black uppercase text-emerald-600">Response</p>
                                            <p className="text-sm font-black tracking-tighter">~2H</p>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-8" />

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-1 italic">Node Metadata</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 border border-border/50">
                                                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-muted-foreground">
                                                    <Mail className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[11px] font-bold text-foreground truncate">itscoderprince@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 border border-border/50">
                                                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-muted-foreground">
                                                    <Phone className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[11px] font-bold text-foreground truncate">+9123246241</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-1 italic">Transmission Details</h4>
                                        <div className="space-y-4 px-1">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-black text-muted-foreground/60 uppercase">SIGNAL_REF</span>
                                                <span className="text-[10px] font-black text-foreground">6029783W</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-black text-muted-foreground/60 uppercase">INTEGRITY</span>
                                                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-none font-black text-[8px] uppercase tracking-widest px-2 h-5 rounded-md">AUTHENTIC</Badge>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-black text-muted-foreground/60 uppercase">NODE_GROUP</span>
                                                <span className="text-[10px] font-black text-foreground uppercase italic tracking-tighter">CAPITAL_AUDIT</span>
                                            </div>
                                            <div className="pt-2">
                                                <span className="text-[10px] font-black text-muted-foreground/60 uppercase block mb-2">LAST_SYNCHRONIZATION</span>
                                                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border">
                                                    <Clock className="w-3 h-3 text-primary" />
                                                    <span className="text-[9px] font-black text-foreground uppercase tracking-tight">02 Feb 2026 06:40:09</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
