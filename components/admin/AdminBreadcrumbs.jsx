"use client";

import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export function AdminBreadcrumbs() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <Breadcrumb className="mb-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/admin/dashboard" className="uppercase text-[9px] font-bold tracking-[0.2em] text-slate-500 hover:text-primary transition-colors">
                        CORE TERMINAL
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join('/')}`;
                    const isLast = index === segments.length - 1;
                    const label = segment.replace(/-/g, ' ');

                    if (segment.toLowerCase() === 'admin') return null;

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbSeparator className="opacity-10 text-slate-500" />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="uppercase text-[9px] font-bold tracking-[0.2em] text-slate-400">
                                        {label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href} className="uppercase text-[9px] font-bold tracking-[0.2em] text-slate-500 hover:text-primary transition-colors">
                                        {label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
