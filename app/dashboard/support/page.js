"use client";

import React from "react";
import { Flag, Mail, Phone, Clock, Plus, Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ROUTES } from "@/lib/routes";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";

export default function SupportPage() {
    return (
        <div className="container mx-auto space-y-4 md:space-y-6 h-[calc(100vh-140px)] min-h-[600px]">
            {/* Breadcrumbs */}
            <DashboardBreadcrumbs pageName="Support" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 h-full pb-10">

                {/* LEFT COLUMN: Ticket List */}
                <div className="lg:col-span-4 h-full flex flex-col">
                    <Card className="h-full flex flex-col">
                        <CardHeader className="py-4 px-4 border-b">
                            <Tabs defaultValue="active" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="active">Active</TabsTrigger>
                                    <TabsTrigger value="closed">Closed</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto p-0">
                            {/* Active Tickets List */}
                            <div className="p-4">
                                {/* Ticket Item */}
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer border-b last:border-0 transition-colors">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                                            B
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <span className="font-semibold text-primary truncate">6029783w</span>
                                            <span className="text-xs text-muted-foreground whitespace-nowrap">02 Feb</span>
                                        </div>
                                        <div className="text-sm font-medium text-emerald-600">Buy</div>
                                        <p className="text-xs text-muted-foreground truncate">buy</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* MIDDLE COLUMN: Chat Area */}
                <div className="lg:col-span-5 h-full flex flex-col">
                    <Card className="h-full flex flex-col shadow-md">
                        {/* Chat Header */}
                        <div className="py-3 px-4 border-b flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/50 rounded-t-xl">
                            <Flag className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-sm">Buy/Sell</span>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6">
                            {/* Message Item */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-8 w-8 rounded-full bg-emerald-400 flex items-center justify-center text-white font-bold text-sm uppercase">
                                        P
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">prince sharma</span>
                                        <span className="text-[10px] text-muted-foreground">02-Feb-2026</span>
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg rounded-tl-none p-3 text-sm">
                                        <p className="font-semibold mb-1">buy</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reply Area */}
                        <div className="p-4 border-t bg-white dark:bg-slate-950 rounded-b-xl">
                            <div className="relative">
                                {/* Using a simple Textarea for now without the rich text editor complexity */}
                                <Textarea
                                    placeholder="Type your reply here..."
                                    className="min-h-[120px] resize-none pr-12 pb-10"
                                />

                                <div className="absolute bottom-2 left-2 flex gap-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                        <Paperclip className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="absolute bottom-2 right-2">
                                    <Button size="sm" className="gap-2">
                                        <Send className="h-3 w-3" /> Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* RIGHT COLUMN: Ticket Info */}
                <div className="lg:col-span-3 h-full">
                    <Card className="h-full overflow-y-auto">
                        <CardContent className="p-4 md:p-6">
                            {/* User Profile */}
                            <div className="flex flex-col items-center text-center mb-6">
                                <Avatar className="h-20 w-20 mb-3 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                                    <AvatarImage src="https://clients.xpo.ru/public/assets/images/user.png" />
                                    <AvatarFallback>PS</AvatarFallback>
                                </Avatar>
                                <h3 className="font-bold text-lg">prince sharma</h3>
                                <Button variant="outline" size="sm" className="mt-3 gap-2 text-xs h-8">
                                    <Plus className="h-3 w-3" /> Create New Ticket
                                </Button>
                            </div>

                            <div className="h-px bg-slate-100 dark:bg-slate-800 my-6" />

                            {/* Contact Info */}
                            <div className="space-y-4 mb-8">
                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Information</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <Mail className="h-4 w-4" />
                                        </div>
                                        <span className="truncate">itscoderprince@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="h-8 w-8 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <Phone className="h-4 w-4" />
                                        </div>
                                        <span>+9123246241</span>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-slate-100 dark:bg-slate-800 my-6" />

                            {/* Ticket Details */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Ticket Information</h4>

                                <div className="grid grid-cols-2 gap-y-4 text-sm">
                                    <div>
                                        <span className="block text-xs text-muted-foreground mb-1">Ticket No:</span>
                                        <span className="font-semibold">6029783w</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-muted-foreground mb-1">Status:</span>
                                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:bg-green-900/10">Open</Badge>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="block text-xs text-muted-foreground mb-1">Category:</span>
                                        <div className="font-medium bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-md inline-block">Buy/Sell</div>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="block text-xs text-muted-foreground mb-1">Last Activity:</span>
                                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                            <Clock className="h-3 w-3" />
                                            <span>02 Feb 2026 <br /> 06:40:09 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
