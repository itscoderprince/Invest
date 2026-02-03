"use client";

import {
    Filter,
    Receipt,
    CheckCircle,
    XCircle,
    FileSearch,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTableCard } from "@/components/admin/AdminTableCard";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { INVESTMENTS_DATA } from "@/lib/constants";

export default function AdminInvestmentsPage() {
    const handleApprove = (id) => toast.success(`Investment ${id} approved and portfolio updated.`);
    const handleReject = (id) => toast.error(`Investment ${id} rejected. Refund protocol initiated.`);

    return (
        <div className="space-y-6">
            <AdminHeader
                label="Investments"
                subtitle="Journal of all capital contributions and asset allocations"
                actions={
                    <Button variant="outline" size="sm" className="h-8 gap-2 font-semibold">
                        <Filter className="w-3.5 h-3.5" /> Filter Ledger
                    </Button>
                }
            />

            <AdminTableCard
                title="Capital Ledger"
                description="Comprehensive list of incoming investment transactions."
                headers={[
                    { label: "Reference / Investor" },
                    { label: "Allocation" },
                    { label: "Amount" },
                    { label: "Date" },
                    { label: "Status" },
                    { label: "Actions", className: "text-right" }
                ]}
            >
                {INVESTMENTS_DATA.map((inv) => (
                    <tr key={inv.id} className="border-b border-border last:border-none hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold tracking-tight text-foreground">{inv.id}</span>
                                <span className="text-[11px] text-muted-foreground font-medium">{inv.user}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary/20 border border-primary/40" />
                                <span className="text-xs font-semibold text-muted-foreground">{inv.index}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-foreground">{inv.amount}</td>
                        <td className="px-6 py-4 text-[11px] text-muted-foreground font-medium">{inv.date}</td>
                        <td className="px-6 py-4">
                            <AdminStatusBadge status={inv.status} />
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" title="Audit Details">
                                    <FileSearch className="w-4 h-4" />
                                </Button>
                                {inv.status === "Pending" && (
                                    <>
                                        <Button
                                            size="sm"
                                            onClick={() => handleApprove(inv.id)}
                                            className="h-8 px-3 bg-emerald-600 hover:bg-emerald-700 font-bold text-[11px]"
                                        >
                                            Approve
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleReject(inv.id)}
                                            className="h-8 px-3 text-rose-600 hover:bg-rose-50 font-bold text-[11px]"
                                        >
                                            Reject
                                        </Button>
                                    </>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
            </AdminTableCard>
        </div>
    );
}
