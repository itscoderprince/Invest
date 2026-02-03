"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AdminStatusBadge({ status, variant = "pill", size = "sm" }) {
    const statusLower = status?.toLowerCase();

    const getVariant = (status) => {
        switch (status) {
            case 'active':
            case 'approved':
            case 'success':
            case 'resolved':
                return 'outline'; // We'll style these manually for better professional look
            case 'pending':
            case 'warning':
                return 'secondary';
            case 'banned':
            case 'rejected':
            case 'failed':
            case 'critical':
                return 'destructive';
            case 'new':
            case 'in progress':
            case 'info':
            default:
                return 'default';
        }
    };

    const getCustomStyles = (status) => {
        switch (status) {
            case 'active':
            case 'approved':
            case 'success':
            case 'resolved':
                return 'bg-emerald-50 text-emerald-700 border-emerald-200';
            case 'pending':
            case 'warning':
                return 'bg-amber-50 text-amber-700 border-amber-200';
            case 'new':
            case 'blue':
            case 'info':
                return 'bg-blue-50 text-blue-700 border-blue-200';
            default:
                return '';
        }
    };

    const badgeVariant = getVariant(statusLower);
    const customStyles = getCustomStyles(statusLower);

    return (
        <Badge
            variant={badgeVariant}
            className={cn(
                "font-bold uppercase tracking-wider whitespace-nowrap",
                size === "xs" ? "text-[8px] px-1.5 py-0" : "text-[9px] px-2 py-0.5",
                variant === "pill" ? "rounded-full" : "rounded-md",
                customStyles
            )}
        >
            {status}
        </Badge>
    );
}
