"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTableCard } from "@/components/admin/AdminTableCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    TrendingUp,
    RefreshCw,
    Calculator,
    Save,
    Clock,
    Zap,
    Percent,
    ShieldCheck,
    LineChart
} from "lucide-react";
import { toast } from "sonner";

const userHoldings = [
    { id: "USR-001", user: "John Doe", index: "Moscow", invested: "$5,000", earnings: "$240", lastUpdate: "7 days ago" },
    { id: "USR-002", user: "Sarah Smith", index: "Volga", invested: "$12,000", earnings: "$1,450", lastUpdate: "3 days ago" },
    { id: "USR-003", user: "Mike Ross", index: "Siberia", invested: "$3,500", earnings: "$95", lastUpdate: "12 days ago" },
];

export default function ReturnsManagerPage() {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleBulkUpdate = () => {
        setIsUpdating(true);
        setTimeout(() => {
            setIsUpdating(false);
            toast.success("Yield algorithms recalculated and distributed.");
        }, 2000);
    };

    return (
        <div className="space-y-6">
            <AdminHeader
                label="Return Distributions"
                subtitle="Calibrate index performance and yield trajectories"
                actions={
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 gap-2 font-semibold">
                            <Calculator className="w-3.5 h-3.5" /> Recalculate Projections
                        </Button>
                        <Button
                            size="sm"
                            className="h-8 gap-2 font-bold"
                            onClick={handleBulkUpdate}
                            disabled={isUpdating}
                        >
                            {isUpdating ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                                <Zap className="w-3.5 h-3.5" />
                            )}
                            {isUpdating ? "Processing..." : "Execute Bulk Return"}
                        </Button>
                    </div>
                }
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Moscow", "Siberia", "Volga", "Ural"].map((name) => (
                    <Card key={name} className="border border-border shadow-none bg-card overflow-hidden">
                        <CardHeader className="p-5 pb-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{name} Index</span>
                                <div className="bg-emerald-50 text-emerald-700 font-bold text-[9px] px-2 py-0.5 rounded-full border border-emerald-100">LIVE</div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-5 pt-3 space-y-4">
                            <div className="relative">
                                <Percent className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                                <Input
                                    placeholder="0.00"
                                    className="h-12 text-xl font-bold border-border bg-background focus-visible:ring-1"
                                />
                            </div>
                            <Button variant="secondary" className="w-full h-9 font-bold text-[11px]">
                                Update Trajectory
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <AdminTableCard
                title="Yield Adjustments"
                description="Manual calibration of individual investor earnings."
                headers={[
                    { label: "Investor / Target" },
                    { label: "Principal" },
                    { label: "Earnings" },
                    { label: "Injection ($)" },
                    { label: "Distribution" },
                    { label: "Commit", className: "text-right" }
                ]}
            >
                {userHoldings.map((hold) => (
                    <tr key={hold.id} className="border-b border-border last:border-none hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-foreground">{hold.user}</span>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <Badge variant="outline" className="text-[9px] font-bold h-4 px-1">{hold.index}</Badge>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-semibold text-muted-foreground">{hold.invested}</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-sm font-bold text-emerald-700">+{hold.earnings}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <Input
                                placeholder="0.00"
                                className="w-24 h-8 text-xs font-bold border-border"
                            />
                        </td>
                        <td className="px-6 py-4 text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" /> {hold.lastUpdate}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                                <Save className="w-4 h-4" />
                            </Button>
                        </td>
                    </tr>
                ))}
            </AdminTableCard>

            <div className="p-4 rounded-xl border border-border bg-muted/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground leading-none">Yield Reliability Standards</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
                        Return algorithms are cryptographically verified against pool liquidity on a weekly cycle. Once distributed, yields are immediate and irreversible. Standardized audit protocols apply to all manual adjustments.
                    </p>
                </div>
            </div>
        </div>
    );
}
