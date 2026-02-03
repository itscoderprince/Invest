"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import React from "react";

export function AdminHeader({ label, subtitle, actions, className }) {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <div className={cn("space-y-4", className)}>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/admin/dashboard" className="text-[10px] uppercase tracking-wider font-semibold">Admin</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {segments.slice(1).map((segment, index) => {
                        const href = `/${segments.slice(0, index + 2).join('/')}`;
                        const isLast = index === segments.length - 2;
                        const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);

                        return (
                            <React.Fragment key={href}>
                                <BreadcrumbSeparator className="scale-75 opacity-50" />
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage className="text-[10px] uppercase tracking-wider font-bold text-foreground">{formattedSegment}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={href} className="text-[10px] uppercase tracking-wider font-semibold">{formattedSegment}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">{label}</h2>
                    {subtitle && <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>}
                </div>
                {actions && <div className="flex items-center gap-2">{actions}</div>}
            </div>
        </div>
    );
}
