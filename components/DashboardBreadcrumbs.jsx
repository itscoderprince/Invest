"use client";

import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function DashboardBreadcrumbs({ pageName }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/overview" className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground/60 hover:text-primary transition-colors">
                        InvestTrack
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="opacity-20" />
                <BreadcrumbItem>
                    <BreadcrumbPage className="uppercase text-[10px] font-bold tracking-widest text-primary">
                        {pageName}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
