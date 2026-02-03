"use client";

import {
    Activity,
    Clock,
    Shield,
    History,
    Search,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTableCard } from "@/components/admin/AdminTableCard";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LOGS_DATA } from "@/lib/constants";

export default function AdminLogsPage() {
    return (
        <div className="space-y-6">
            <AdminHeader
                label="System Logs"
                subtitle="Immutable ledger of platform activities and security events"
                actions={
                    <Badge variant="outline" className="h-8 px-3 border-rose-200 bg-rose-50 text-rose-700 font-bold gap-2 text-[10px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        Audit Active
                    </Badge>
                }
            />

            <AdminTableCard
                title="Activity Stream"
                description="Real-time sequence of administrative and system-level operations."
                headers={[
                    { label: "Timestamp" },
                    { label: "Principal" },
                    { label: "Operation" },
                    { label: "Target Entity" },
                    { label: "Security", className: "text-right" }
                ]}
                searchPlaceholder="Search by actor or operation..."
            >
                {LOGS_DATA.map((log, i) => (
                    <tr key={i} className="border-b border-border last:border-none hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-semibold">
                                <Clock className="w-3.5 h-3.5 opacity-50" />
                                {log.time}
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <AdminStatusBadge status={log.user} size="xs" />
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${log.level === "success" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" :
                                        log.level === "warning" ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]" :
                                            "bg-primary shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                                    }`} />
                                <span className="text-[13px] font-bold text-foreground">{log.action}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className="text-[11px] font-mono font-bold text-muted-foreground bg-muted px-1.5 py-0.5 rounded uppercase tracking-tighter">
                                {log.target}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <Shield className="w-4 h-4 text-emerald-600/30 inline-block" />
                        </td>
                    </tr>
                ))}
            </AdminTableCard>

            <div className="flex items-center justify-center p-8">
                <Button variant="ghost" className="h-9 gap-2 text-xs font-bold text-muted-foreground hover:text-foreground">
                    <History className="w-4 h-4" /> Load Previous Audit Sequence
                </Button>
            </div>
        </div>
    );
}
