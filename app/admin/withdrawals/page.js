"use client";

import {
    ArrowDownToLine,
    Clock,
    TrendingDown,
    ShieldCheck,
    Wallet,
    Banknote,
    Eye,
    ShieldAlert,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminStatGrid } from "@/components/admin/AdminStatGrid";
import { AdminTableCard } from "@/components/admin/AdminTableCard";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { WITHDRAWALS_DATA } from "@/lib/constants";

export default function AdminWithdrawalsPage() {
    const handleApprove = (id) => toast.success(`Payout ${id} authorized. Transaction broadcasted.`);
    const handleReject = (id) => toast.error(`Payout ${id} rejected. Funds returned to balance.`);

    const withdrawalStats = [
        { name: "Pending Payouts", value: "24", icon: Clock, color: "text-amber-600" },
        { name: "Volume (24h)", value: "$6,420", icon: ArrowDownToLine, color: "text-primary" },
        { name: "Avg. Latency", value: "4.2h", icon: TrendingDown, color: "text-blue-600" },
        { name: "Integrity Score", value: "99.9%", icon: ShieldCheck, color: "text-emerald-600" },
    ];

    return (
        <div className="space-y-6">
            <AdminHeader
                label="Withdrawals"
                subtitle="Review and authorize outbound capital distributions"
                actions={
                    <Badge variant="outline" className="h-8 px-3 border-emerald-200 bg-emerald-50 text-emerald-700 font-bold gap-2 text-[10px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Payout Engine Active
                    </Badge>
                }
            />

            <AdminStatGrid stats={withdrawalStats} />

            <AdminTableCard
                title="Payout Requests"
                description="Transaction queue requiring administrative authorization."
                headers={[
                    { label: "ID" },
                    { label: "Investor" },
                    { label: "Protocol" },
                    { label: "Amount" },
                    { label: "Timestamp" },
                    { label: "Actions", className: "text-right" }
                ]}
            >
                {WITHDRAWALS_DATA.map((item) => (
                    <tr key={item.id} className="border-b border-border last:border-none hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                            <span className="text-sm font-bold tracking-tight text-foreground">{item.id}</span>
                        </td>
                        <td className="px-6 py-4">
                            <span className="text-xs font-semibold text-muted-foreground">{item.user}</span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    {item.method.includes("USDT") ? <Wallet className="w-3.5 h-3.5 text-emerald-600" /> : <Banknote className="w-3.5 h-3.5 text-blue-600" />}
                                    <span className="text-xs font-bold text-foreground">{item.method}</span>
                                </div>
                                <span className="text-[10px] font-mono text-muted-foreground mt-0.5 truncate max-w-[120px]">{item.destination}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className="text-sm font-bold text-rose-600 tracking-tight">{item.amount}</span>
                        </td>
                        <td className="px-6 py-4 text-[11px] font-medium text-muted-foreground">
                            {item.date}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <Button
                                    onClick={() => handleApprove(item.id)}
                                    size="sm"
                                    className="h-8 px-4 bg-emerald-600 hover:bg-emerald-700 font-bold text-[11px]"
                                >
                                    Authorize
                                </Button>
                                <Button
                                    onClick={() => handleReject(item.id)}
                                    size="sm"
                                    variant="ghost"
                                    className="h-8 px-3 text-rose-600 hover:bg-rose-50 font-bold text-[11px]"
                                >
                                    Reject
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                    <Eye className="w-4 h-4" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </AdminTableCard>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-amber-600" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-bold text-amber-900 leading-none">Authorization Protocol</h4>
                    <p className="text-[11px] text-amber-700 leading-relaxed font-medium">
                        Capital distributions are irreversible once broadcasted to the provider nodes. Please ensure destination details are cross-referenced with internal audit logs before final authorization.
                    </p>
                </div>
            </div>
        </div>
    );
}
