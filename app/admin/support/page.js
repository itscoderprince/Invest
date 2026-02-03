"use client";

import {
    MessageSquare,
    Clock,
    User,
    Mail,
    Reply,
    Headset,
    ShieldCheck,
    MessageCircle,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminStatGrid } from "@/components/admin/AdminStatGrid";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SUPPORT_TICKETS } from "@/lib/constants";

export default function SupportCenterPage() {
    const supportStats = [
        { name: "Pending Tickets", value: "12", icon: MessageSquare, color: "text-primary" },
        { name: "Avg. Wait Time", value: "24m", icon: Clock, color: "text-amber-600" },
        { name: "Resolution Rate", value: "94.2%", icon: ShieldCheck, color: "text-emerald-600" },
    ];

    return (
        <div className="space-y-6">
            <AdminHeader
                label="Support Center"
                subtitle="Manage and resolve investor inquiries"
                actions={
                    <Badge variant="outline" className="h-8 px-3 border-primary/20 bg-primary/5 text-primary font-bold gap-2 text-[10px]">
                        <Headset className="w-3.5 h-3.5" />
                        Staff Online
                    </Badge>
                }
            />

            <AdminStatGrid stats={supportStats} />

            <div className="space-y-4">
                <Card className="border border-border shadow-none bg-card overflow-hidden">
                    <div className="divide-y divide-border">
                        {SUPPORT_TICKETS.map((msg) => (
                            <div key={msg.id} className="p-5 hover:bg-muted/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 border border-border">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-bold tracking-tight text-foreground">{msg.subject}</h4>
                                                <AdminStatusBadge status={msg.priority} size="xs" />
                                            </div>
                                            <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                                                <User className="w-3 h-3" /> {msg.user}
                                                <span className="opacity-40">•</span>
                                                <span className="truncate max-w-[150px]">{msg.email}</span>
                                            </div>
                                            <p className="text-[13px] text-foreground/80 leading-relaxed max-w-2xl line-clamp-2">
                                                "{msg.message}"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0 self-end md:self-start">
                                        <div className="text-right flex flex-col items-end gap-1 mb-1">
                                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                                <Clock className="w-3 h-3" /> {msg.date}
                                            </div>
                                            <AdminStatusBadge status={msg.status} size="xs" />
                                        </div>
                                        <Button size="sm" className="h-8 font-bold text-[11px] gap-2">
                                            <Reply className="w-3.5 h-3.5" /> Resolve
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <div className="p-4 rounded-xl border border-border bg-muted/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground leading-none">Internal Support Ethics</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
                        Communication channels are monitored for quality assurance and compliance. Ensure all responses follow the established institutional templates for disclosure and risk education.
                    </p>
                </div>
            </div>
        </div>
    );
}
