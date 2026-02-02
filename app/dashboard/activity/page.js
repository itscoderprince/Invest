"use client";

import React from "react";
import { Search, Filter, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { DashboardBreadcrumbs } from "@/components/DashboardBreadcrumbs";

// Mock Data
const activityData = [
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1236:123:4849:c59:cd5:8417",
        date: "2026-February-02 07:34 am",
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1236:123:54be:ca41:f400:8600",
        date: "2026-February-02 06:48 am",
    },
    {
        name: "prince",
        message: "Ticket Created !",
        ip: "2409:40e4:1236:123:54be:ca41:f400:8600",
        date: "2026-February-02 06:40 am",
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1236:123:54be:ca41:f400:8600",
        date: "2026-February-02 06:30 am",
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:1230:38e7:fdf3:d2c1:6e6c:f6f5",
        date: "2026-January-31 18:03 pm",
    },
    {
        name: "prince",
        message: "You have logged in !",
        ip: "2409:40e4:46:cbbe:8000::",
        date: "2026-January-31 10:02 am",
    },
];

export default function ActivityPage() {
    return (
        <div className="container mx-auto space-y-4 md:space-y-6">
            {/* Breadcrumbs */}
            <DashboardBreadcrumbs pageName="Activity" />
            <Card>
                <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        {/* Title */}
                        <div className="card-amount">
                            <span className="text-xl font-bold text-primary">All Activity</span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {/* Search */}
                            <div className="relative w-full md:w-64">
                                <Input
                                    type="search"
                                    placeholder="Quick search by activity"
                                    className="pr-10"
                                />
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="absolute right-0 top-0 h-full hover:bg-transparent"
                                >
                                    <Search className="h-4 w-4 text-muted-foreground" />
                                </Button>
                            </div>

                            {/* Filter Dropdown */}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
                                        <Filter className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 p-4" align="end">
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-sm text-muted-foreground border-b pb-2">Advance Filter</h4>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label className="text-xs uppercase text-muted-foreground font-semibold">Start Date</Label>
                                                <Input type="date" className="h-8 text-sm" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs uppercase text-muted-foreground font-semibold">End Date</Label>
                                                <Input type="date" className="h-8 text-sm" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-xs uppercase text-muted-foreground font-semibold">Status</Label>
                                            <Select>
                                                <SelectTrigger className="h-8 text-sm">
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="0">Pending</SelectItem>
                                                    <SelectItem value="1">Success</SelectItem>
                                                    <SelectItem value="2">Rejected</SelectItem>
                                                    <SelectItem value="3">Process</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-xs uppercase text-muted-foreground font-semibold">Reference</Label>
                                            <Select>
                                                <SelectTrigger className="h-8 text-sm">
                                                    <SelectValue placeholder="Select Reference" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">Deposit</SelectItem>
                                                    <SelectItem value="2">Withdraw</SelectItem>
                                                    <SelectItem value="3">Buy</SelectItem>
                                                    <SelectItem value="4">Weekly Bonus</SelectItem>
                                                    {/* Add other options as needed from HTML */}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-xs uppercase text-muted-foreground font-semibold">Type</Label>
                                            <Select>
                                                <SelectTrigger className="h-8 text-sm">
                                                    <SelectValue placeholder="Select Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">Credit</SelectItem>
                                                    <SelectItem value="2">Debit</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex gap-2 pt-2">
                                            <Button className="flex-1 h-8 text-xs">Submit</Button>
                                            <Button variant="outline" className="flex-1 h-8 text-xs text-red-500 hover:text-red-600 hover:bg-red-50">Reset</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>

                            <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0">
                                <Settings className="h-4 w-4 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>

                    <div className="border-t pt-4 overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Message</TableHead>
                                    <TableHead>IP Address</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {activityData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium text-primary">{item.name}</TableCell>
                                        <TableCell>{item.message}</TableCell>
                                        <TableCell className="font-mono text-xs">{item.ip}</TableCell>
                                        <TableCell className="text-muted-foreground">{item.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center mt-6 gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-primary text-primary-foreground border-primary">1</Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
