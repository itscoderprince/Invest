"use client";

import Link from "next/link";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Wallet,
    TrendingUp,
    ShieldCheck,
    Users,
    ArrowUpRight,
    TrendingDown,
    Activity,
    DollarSign,
    Euro,
    Edit,
    User,
    ArrowUp
} from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { ROUTES } from "@/lib/routes";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";
import { StatCard } from "@/components/dashboard/StatCard";

export default function OverviewPage() {
    return (
        <div className="space-y-4 md:space-y-8">
            {/* Breadcrumbs */}
            <DashboardBreadcrumbs pageName="Overview" />

            {/* ROW 1: Welcome & Banner */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center">
                <div className="md:col-span-12">
                    <div className="rounded-2xl overflow-hidden bg-[#e1fff4] border border-emerald-100 dark:border-emerald-900/30 dark:bg-emerald-950/20 p-1">
                        <a href="https://clients.xpo.ru/user/kyc/document" target="_blank" rel="noopener noreferrer" className="block relative group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://clients.xpo.ru/public/img1/kyc_top_banner.jpg"
                                alt="KYC Banner"
                                className="w-full h-auto rounded-xl shadow-sm transition-transform group-hover:scale-[1.02]"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* ROW 2: Profile & Wallets */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-6">
                {/* Profile Card */}
                <div className="lg:col-span-4">
                    <Card className="h-full border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden">
                        <CardContent className="p-4 md:p-6">
                            <div className="flex items-start gap-4 mb-6">
                                <Avatar className="h-[73px] w-[73px] border-4 border-white shadow-md">
                                    <AvatarImage src="https://clients.xpo.ru/public/assets/images/user.png" />
                                    <AvatarFallback className="bg-slate-100 text-slate-500 text-2xl">P</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 pt-1">
                                    <h6 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Welcome</h6>
                                    <div className="font-bold text-lg text-slate-900 dark:text-white">prince sharma</div>
                                    <a href="https://clients.xpo.ru/editprofile" className="inline-flex items-center text-xs font-medium text-primary hover:underline">
                                        itscoderprince@gmail.com <Edit className="w-3 h-3 ml-1" />
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <Button className="w-full shadow-lg shadow-primary/20 rounded-xl" asChild>
                                    <Link href="/deposit">Deposit</Link>
                                </Button>
                                <Button variant="outline" className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950/30 rounded-xl" asChild>
                                    <Link href="/withdraw">Withdraw</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Wallet Details */}
                <div className="lg:col-span-8">
                    <Card className="h-full border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl">
                        <CardHeader className="pb-2">
                            <div className="flex flex-col space-y-1">
                                <h6 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Wallet details</h6>
                                <span className="text-lg font-bold text-slate-900 dark:text-white">Your wallet</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 md:p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-2">
                                <StatCard label="USD" value="0.00" icon={DollarSign} accentColor="primary" />
                                <StatCard label="EURO" value="0.00" icon={Euro} accentColor="blue" />
                                <StatCard label="RUBLE" value="0.00" icon={() => <span className="text-xl font-bold w-5 h-5 flex items-center justify-center">₽</span>} accentColor="amber" />
                                <StatCard label="REWARD" value="0.00" icon={DollarSign} accentColor="purple" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ROW 3: Investment Overview, My Investment, Top Portfolio */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">

                {/* Investment Overview */}
                <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl flex flex-col">
                    <CardContent className="p-4 md:p-6 flex-1">
                        <div className="mb-4">
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">Investment Overview</div>
                            <h6 className="text-xs text-muted-foreground leading-relaxed">
                                The investment overview of your platform. <br />
                                <Link href="/portfolio" className="text-primary hover:underline font-medium">All Investment</Link>
                            </h6>
                        </div>

                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="bg-slate-100 dark:bg-slate-900 p-1 rounded-xl w-full grid grid-cols-3 mb-4">
                                <TabsTrigger value="overview" className="rounded-lg text-xs font-semibold">Overview</TabsTrigger>
                                <TabsTrigger value="six-months" className="rounded-lg text-xs font-semibold">6 Months</TabsTrigger>
                                <TabsTrigger value="one-year" className="rounded-lg text-xs font-semibold">1 Year</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="space-y-5 animate-in fade-in-50 duration-300">
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Currently Active Investment</div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                                        <div>
                                            <div className="text-lg font-bold text-slate-900 dark:text-white">0.00 <span className="text-xs text-muted-foreground font-normal">USD</span></div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Total Amount</div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-slate-900 dark:text-white">0.00</div>
                                            <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                                                <ArrowUp className="w-3 h-3" /> 0.00%
                                            </div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Profit</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div>
                                            <div className="text-lg font-bold text-slate-900 dark:text-white">0.00 <span className="text-xs text-muted-foreground font-normal">USD</span></div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Index Buy Amount</div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Investment in this Month</div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-lg font-bold text-slate-900 dark:text-white">0.00 <span className="text-xs text-muted-foreground font-normal">USD</span></div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Index Buy Amount</div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-slate-900 dark:text-white">0.00</div>
                                            <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                                                <ArrowUp className="w-3 h-3" /> 0.00%
                                            </div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Profit</div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="six-months" className="text-center py-10 text-sm text-muted-foreground">No data for 6 months</TabsContent>
                            <TabsContent value="one-year" className="text-center py-10 text-sm text-muted-foreground">No data for 1 year</TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* My Investment */}
                <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl flex flex-col">
                    <CardContent className="p-4 md:p-6 flex flex-col h-full">
                        <div className="mb-4">
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">My Investment</div>
                            <h6 className="text-xs text-muted-foreground leading-relaxed">Your recent 5 purchased portfolio returns.</h6>
                        </div>

                        <div className="flex-1 flex items-center justify-center min-h-[200px] border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/50">
                            <div className="text-center">
                                <Activity className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                                <span className="text-sm font-medium text-slate-500">No record Found.</span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                                <Link href="/portfolio">All Portfolio</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Top Portfolio */}
                <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl md:col-span-2 lg:col-span-1">
                    <CardContent className="p-4 md:p-6">
                        <div className="mb-6">
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">Top Portfolio</div>
                            <h6 className="text-xs text-muted-foreground leading-relaxed">In last 30 days top portfolio plans.</h6>
                        </div>

                        <div className="space-y-4">
                            {[
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/131_1743768455.png", code: "OMNI", name: "Omni Index", type: "fix-flex", roi: "4.77", link: "#" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/506_1743768442.png", code: "FUINX", name: "NFT Fusion Index", type: "fix-flex", roi: "4.68", link: "#" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/818_1745502945.png", code: "QUPAI", name: "QuantumPair Index", type: "fix-flex", roi: "4.53", link: "#" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/936_1760175693.png", code: "HLFX", name: "Helix Flex Index", type: "fix-flex", roi: "4.34", link: "#" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/105_1760175717.png", code: "EQFX", name: "EquaFlex Index", type: "fix-flex", roi: "4.22", link: "#" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                                    <div className="shrink-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={item.img} alt={item.code} className="w-10 h-10 rounded-full bg-white shadow-sm" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-bold text-xs text-slate-900 dark:text-white truncate">{item.code}</div>
                                        <div className="text-[10px] text-muted-foreground truncate">{item.name}</div>
                                    </div>
                                    <div className="shrink-0">
                                        <Badge variant="outline" className="text-[9px] px-1.5 h-5 border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-500 uppercase tracking-wider">{item.type}</Badge>
                                    </div>
                                    <div className="shrink-0 text-right">
                                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-500 flex items-center justify-end gap-1">
                                            {item.roi}% <ArrowUp className="w-3 h-3" />
                                        </div>
                                        <a href={item.link} className="text-[10px] font-medium text-primary hover:underline block mt-0.5">View</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center flex justify-center gap-2">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-xl px-4 text-xs font-bold" asChild>
                                <Link href="/strategy/crypto">Crypto Index</Link>
                            </Button>
                            <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-xs font-bold rounded-xl px-4" asChild>
                                <Link href="/strategy/forex">Derivative Index</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
