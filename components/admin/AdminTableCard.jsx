"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AdminTableCard({
    title,
    description,
    icon: Icon,
    searchPlaceholder = "Search records...",
    headers = [],
    children,
    className,
    actions
}) {
    return (
        <Card className={cn("border border-border shadow-none overflow-hidden", className)}>
            <div className="p-4 sm:p-6 border-b border-border bg-muted/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    {title && <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>}
                    {description && <p className="text-xs text-muted-foreground font-medium">{description}</p>}
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative group flex-1 sm:min-w-[240px]">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder={searchPlaceholder}
                            className="pl-9 h-9 text-xs ring-offset-background placeholder:text-muted-foreground/50 border-border bg-background transition-all focus-visible:ring-1"
                        />
                    </div>
                    {actions ? actions : (
                        <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-semibold">
                            <Filter className="w-3.5 h-3.5" /> Filter
                        </Button>
                    )}
                </div>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/30">
                        <TableRow className="hover:bg-transparent border-border">
                            {headers.map((header, i) => (
                                <TableHead
                                    key={i}
                                    className={cn(
                                        "px-6 h-10 font-bold text-[10px] uppercase tracking-wider text-muted-foreground whitespace-nowrap",
                                        header.className
                                    )}
                                >
                                    {header.label}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
