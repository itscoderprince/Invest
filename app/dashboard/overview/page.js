"use client";

import Link from "next/link";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
    ArrowUp,
    CreditCard,
    Zap,
    History,
    ChevronRight,
    CircleCheck
} from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { ROUTES } from "@/lib/routes";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";
import { cn } from "@/lib/utils";

export default function OverviewPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground">Account Terminal</h1>
                    <p className="text-sm text-muted-foreground font-medium">Real-time portfolio performance and capital distribution</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="h-8 px-3 border-emerald-200 bg-emerald-50 text-emerald-700 font-bold gap-2">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        Live Feed
                    </Badge>
                    <Button size="sm" className="h-8 rounded-lg font-bold">
                        <Zap className="w-3.5 h-3.5 mr-2" />
                        Quick Invest
                    </Button>
                </div>
            </div>

            {/* ROW 1: KYC Banner & Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    <Card className="overflow-hidden border-none shadow-xl bg-slate-950 text-white relative h-full">
                        <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 -z-0">
                            <ShieldCheck className="w-48 h-48 text-emerald-400" />
                        </div>
                        <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
                            <div className="shrink-0 relative">
                                <Avatar className="h-24 w-24 border-4 border-white/10 shadow-2xl">
                                    <AvatarImage src="" />
                                    <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-black">PS</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1.5 border-4 border-slate-950">
                                    <CircleCheck className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <div>
                                    <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-none font-bold text-[10px] mb-2 uppercase tracking-widest">Protocol Verified</Badge>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">Prince Sharma</h2>
                                    <p className="text-slate-400 text-sm font-medium">itscoderprince@gmail.com</p>
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Node Level</span>
                                        <span className="text-sm font-black text-slate-200">STANDARD TIER</span>
                                    </div>
                                    <Separator orientation="vertical" className="h-8 bg-white/10 hidden md:block" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Since</span>
                                        <span className="text-sm font-black text-slate-200">OCT 2025</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-4">
                    <Card className="h-full border-border shadow-sm bg-card/30 backdrop-blur-md flex flex-col justify-between p-6">
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Execution Terminal</h3>
                            <p className="text-xs text-muted-foreground font-medium leading-relaxed">Execute capital movements across distributed liquidity pools.</p>
                        </div>
                        <div className="space-y-3 mt-6">
                            <Button className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 font-black text-sm" asChild>
                                <Link href="/deposit">FUND WALLET</Link>
                            </Button>
                            <Button variant="outline" className="w-full h-11 rounded-xl border-border bg-background hover:bg-muted font-black text-sm" asChild>
                                <Link href="/withdraw">REQUEST PAYOUT</Link>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>

            {/* ROW 2: Wallets & Assets */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 px-1">
                    <Wallet className="w-4 h-4 text-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Liquidity Distribution</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { label: "Capital Balance", value: "0.00", unit: "USD", icon: DollarSign, color: "text-primary", bg: "bg-primary/5" },
                        { label: "Euro Reserve", value: "0.00", unit: "EUR", icon: Euro, color: "text-blue-500", bg: "bg-blue-500/5" },
                        { label: "Ruble Node", value: "0.00", unit: "RUB", icon: Activity, color: "text-amber-600", bg: "bg-amber-600/5" },
                        { label: "Reward Vault", value: "0.00", unit: "PTS", icon: Zap, color: "text-purple-600", bg: "bg-purple-600/5" },
                    ].map((stat, i) => (
                        <Card key={i} className="border-border shadow-none hover:shadow-md transition-all group overflow-hidden">
                            <CardContent className="p-5 flex items-center gap-4">
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-border group-hover:scale-110 transition-transform duration-500", stat.bg)}>
                                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1.5">{stat.label}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">{stat.value}</span>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">{stat.unit}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* ROW 3: Analytics & Portfolios */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-6">
                    <Card className="border-border shadow-none overflow-hidden h-full">
                        <CardHeader className="p-6 border-b bg-muted/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-black tracking-tight">Investment Telemetry</CardTitle>
                                    <CardDescription className="text-xs font-medium">Platform-wide yield aggregation and historical data</CardDescription>
                                </div>
                                <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5" asChild>
                                    <Link href="/portfolio">View All Nodes</Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <Tabs defaultValue="overview" className="w-full">
                                <TabsList className="bg-muted p-1 rounded-lg w-full md:w-auto grid grid-cols-3 mb-8 h-10">
                                    <TabsTrigger value="overview" className="rounded-md text-[10px] font-black uppercase tracking-wider h-8">CORE_VIEW</TabsTrigger>
                                    <TabsTrigger value="six-months" className="rounded-md text-[10px] font-black uppercase tracking-wider h-8">Q_ANALYTICS</TabsTrigger>
                                    <TabsTrigger value="one-year" className="rounded-md text-[10px] font-black uppercase tracking-wider h-8">HISTORICAL</TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview" className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div className="p-4 rounded-xl bg-muted/30 border border-border">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Live Active Capital</p>
                                                <div className="space-y-4">
                                                    <div className="flex items-end justify-between border-b border-border pb-4">
                                                        <div>
                                                            <p className="text-2xl font-black tracking-tighter text-foreground">0.00 <span className="text-xs text-muted-foreground font-bold uppercase ml-1">USD</span></p>
                                                            <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">Total Deployed</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="flex items-center justify-end text-emerald-600 font-bold gap-1 mb-1">
                                                                <ArrowUp className="w-3.5 h-3.5" />
                                                                <span className="text-lg font-black tracking-tighter">0.00</span>
                                                            </div>
                                                            <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">Aggregated Profit</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between pt-2">
                                                        <div>
                                                            <p className="text-lg font-black tracking-tighter text-foreground">0.00 <span className="text-[10px] text-muted-foreground font-bold uppercase ml-1">USD</span></p>
                                                            <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-0.5">Primary Entry</p>
                                                        </div>
                                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                                            <TrendingUp className="w-5 h-5 text-emerald-600" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-6 flex flex-col justify-center text-center p-8 border-2 border-dashed border-border rounded-xl bg-muted/20">
                                            <Activity className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                                            <h4 className="text-sm font-bold text-foreground">No Active Yield Nodes</h4>
                                            <p className="text-xs text-muted-foreground font-medium max-w-[200px] mx-auto leading-relaxed">System is awaiting your first deployment to begin telemetry tracking.</p>
                                            <Button variant="outline" size="sm" className="mt-6 h-9 rounded-lg font-bold border-primary/20 text-primary hover:bg-primary/5" asChild>
                                                <Link href="/portfolio">Deploy Capital →</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="six-months" className="py-20 text-center space-y-4 animate-in fade-in duration-500">
                                    <div className="w-16 h-1 bg-muted mx-auto rounded-full" />
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Awaiting Quarter Data Transmission</p>
                                </TabsContent>
                                <TabsContent value="one-year" className="py-20 text-center space-y-4 animate-in fade-in duration-500">
                                    <div className="w-16 h-1 bg-muted mx-auto rounded-full" />
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Awaiting Annual Node History</p>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <Card className="border-border shadow-none h-full flex flex-col">
                        <CardHeader className="p-6 border-b bg-muted/20">
                            <CardTitle className="text-lg font-black tracking-tight">Top Performance Plans</CardTitle>
                            <CardDescription className="text-xs font-medium">30-day index return rankings</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3 flex-1 overflow-auto">
                            {[
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/131_1743768455.png", code: "OMNI", name: "Omni Index", type: "FLEX", roi: "4.77", color: "text-emerald-500" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/506_1743768442.png", code: "FUINX", name: "NFT Fusion", type: "FIX", roi: "4.68", color: "text-emerald-500" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/818_1745502945.png", code: "QUPAI", name: "QuantumPair", type: "FLEX", roi: "4.53", color: "text-emerald-500" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/936_1760175693.png", code: "HLFX", name: "Helix Flex", type: "FIX", roi: "4.34", color: "text-emerald-500" },
                                { img: "https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/105_1760175717.png", code: "EQFX", name: "EquaFlex", type: "FLEX", roi: "4.22", color: "text-emerald-500" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all border border-transparent hover:border-border group">
                                    <div className="shrink-0 relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={item.img} alt={item.code} className="w-10 h-10 rounded-full bg-background shadow-sm border border-border group-hover:scale-110 transition-transform duration-300" />
                                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[8px] font-black text-primary-foreground flex items-center justify-center border-2 border-background">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-black text-[11px] text-foreground tracking-tight">{item.code}</div>
                                        <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter truncate">{item.name}</div>
                                    </div>
                                    <div className="shrink-0 text-right">
                                        <div className={cn("text-xs font-black tracking-tighter flex items-center justify-end gap-1", item.color)}>
                                            {item.roi}% <ArrowUp className="w-3 h-3" />
                                        </div>
                                        <Badge variant="outline" className="text-[8px] h-4 px-1 border-muted-foreground/10 text-muted-foreground font-black mt-1 uppercase tracking-widest">{item.type}</Badge>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                        <div className="p-4 border-t bg-muted/10">
                            <Button className="w-full h-10 rounded-lg font-black text-[10px] uppercase tracking-widest space-x-2" variant="outline" asChild>
                                <Link href="/portfolio">
                                    <span>EXPLORE FULL CATALOG</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
