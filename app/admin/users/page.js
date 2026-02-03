"use client";

import {
    Users,
    Search,
    Filter,
    Download,
    Mail,
    Ban,
    MoreVertical,
    UserPlus,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTableCard } from "@/components/admin/AdminTableCard";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { USERS_DATA } from "@/lib/constants";

export default function AdminUsersPage() {
    return (
        <div className="space-y-6">
            <AdminHeader
                label="Investors"
                subtitle="Manage and monitor all platform participants"
                actions={
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 gap-2">
                            <Download className="w-3.5 h-3.5" /> Export CSV
                        </Button>
                        <Button size="sm" className="h-8 gap-2">
                            <UserPlus className="w-3.5 h-3.5" /> Add Investor
                        </Button>
                    </div>
                }
            />

            <AdminTableCard
                title="Participant Registry"
                description="Global list of registered users and their current status."
                headers={[
                    { label: "Investor Name" },
                    { label: "Assets" },
                    { label: "KYC Tier" },
                    { label: "Status" },
                    { label: "Actions", className: "text-right" }
                ]}
            >
                {USERS_DATA.map((user) => (
                    <tr key={user.id} className="border-b border-border last:border-none hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9 border border-border">
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-foreground tracking-tight">{user.name}</span>
                                    <span className="text-[11px] text-muted-foreground font-medium leading-none">{user.email}</span>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-foreground">{user.balance}</td>
                        <td className="px-6 py-4">
                            <AdminStatusBadge status={user.kyc} variant="md" />
                        </td>
                        <td className="px-6 py-4">
                            <AdminStatusBadge status={user.status} />
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground"><Mail className="w-3.5 h-3.5" /></Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Ban className="w-3.5 h-3.5" /></Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><MoreVertical className="w-3.5 h-3.5" /></Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </AdminTableCard>
        </div>
    );
}
