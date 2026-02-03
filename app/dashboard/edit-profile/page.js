"use client";

import { useState } from "react";
import {
    Upload,
    User,
    Phone,
    Mail,
    Calendar,
    Home,
    MapPin,
    Globe,
    Map,
    Building,
    Building2,
    Hash,
    Link as LinkIcon,
    CreditCard,
    Wallet,
    Lock,
    Key,
    ShieldCheck,
    UserPlus,
    Heart,
    ChevronRight,
    Zap,
    ShieldAlert,
    Clock,
    Award,
    ArrowUpRight
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";
import { Badge } from "@/components/ui/badge";

// Schemas
const personalSchema = z.object({
    f_name: z.string().min(2),
    l_name: z.string().min(2),
    mob: z.string().min(10),
    email: z.string().email(),
    dob: z.string(),
    flat_no: z.string(),
    building_name: z.string(),
    address1: z.string(),
    address2: z.string().optional(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    zipcode: z.string(),
});

const financialSchema = z.object({
    bank_name: z.string().min(2),
    bank_address: z.string(),
    swift_code: z.string(),
    iban_no: z.string(),
    account_name: z.string(),
    micr_code: z.string(),
    usdt_address: z.string(),
});

const passwordSchema = z.object({
    current_password: z.string().min(8),
    new_password: z.string().min(8),
    confirm_password: z.string().min(8),
}).refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
});

const nomineeSchema = z.object({
    nominee_name: z.string().min(2),
    nominee_dob: z.string(),
    nominee_email: z.string().email(),
    nominee_relation: z.string(),
});

export default function EditProfilePage() {
    const personalForm = useForm({
        resolver: zodResolver(personalSchema),
        defaultValues: {
            f_name: "prince",
            l_name: "sharma",
            mob: "9123246241",
            email: "itscoderprince@gmail.com",
            dob: "",
            flat_no: "",
            building_name: "",
            address1: "",
            address2: "",
            country: "in",
            state: "dl",
            city: "",
            zipcode: "",
        }
    });

    const financialForm = useForm({
        resolver: zodResolver(financialSchema),
        defaultValues: {
            bank_name: "",
            bank_address: "",
            swift_code: "",
            iban_no: "",
            account_name: "",
            micr_code: "",
            usdt_address: "",
        }
    });

    const passwordForm = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            current_password: "",
            new_password: "",
            confirm_password: "",
        }
    });

    const nomineeForm = useForm({
        resolver: zodResolver(nomineeSchema),
        defaultValues: {
            nominee_name: "",
            nominee_dob: "",
            nominee_email: "",
            nominee_relation: "",
        }
    });

    const onSubmit = (data) => {
        toast.success("Account node configurations updated successfully.");
        console.log("Form Data:", data);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-foreground uppercase italic pb-1">Account Configurations</h1>
                    <p className="text-sm text-muted-foreground font-medium">Manage your personal node metadata and security protocols.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="xl:col-span-8">
                    <Card className="border-border shadow-none bg-card/50 backdrop-blur-xl overflow-hidden">
                        <CardHeader className="p-0 border-b bg-muted/20">
                            <Tabs defaultValue="personal" className="w-full">
                                <TabsList className="flex w-full h-14 bg-transparent rounded-none p-0 border-none justify-start px-6 gap-8">
                                    {["personal", "financial", "security", "nominee"].map((tab) => (
                                        <TabsTrigger
                                            key={tab}
                                            value={tab}
                                            className="h-14 rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none transition-all px-0"
                                        >
                                            {tab}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                <div className="p-8">
                                    <TabsContent value="personal" className="mt-0 space-y-8">
                                        <Form {...personalForm}>
                                            <form onSubmit={personalForm.handleSubmit(onSubmit)} className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {[
                                                        { name: "f_name", label: "First Name", icon: User },
                                                        { name: "l_name", label: "Last Name", icon: User },
                                                        { name: "mob", label: "Mobile Node", icon: Phone },
                                                        { name: "dob", label: "Date of Birth", icon: Calendar, type: "date" },
                                                    ].map((f) => (
                                                        <FormField
                                                            key={f.name}
                                                            control={personalForm.control}
                                                            name={f.name}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                                        <f.icon className="w-3 h-3 text-primary" /> {f.label}
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input type={f.type || "text"} className="h-12 bg-background/50 border-border text-xs font-bold rounded-xl" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage className="text-[9px] font-bold" />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ))}
                                                </div>

                                                <FormField
                                                    control={personalForm.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                                <Mail className="w-3 h-3 text-primary" /> Primary Transmission Email
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="email" readOnly className="h-12 bg-muted/50 border-border text-xs font-bold rounded-xl opacity-70" {...field} />
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />

                                                <Separator className="opacity-50" />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {[
                                                        { name: "flat_no", label: "Node No.", icon: Home },
                                                        { name: "building_name", label: "Street / Building", icon: MapPin },
                                                        { name: "address1", label: "Address Line 1", icon: MapPin },
                                                        { name: "address2", label: "Address Line 2", icon: MapPin },
                                                        { name: "city", label: "City / District", icon: Building },
                                                        { name: "zipcode", label: "Postal Index", icon: Hash },
                                                    ].map((f) => (
                                                        <FormField
                                                            key={f.name}
                                                            control={personalForm.control}
                                                            name={f.name}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                                        <f.icon className="w-3 h-3 text-primary" /> {f.label}
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input className="h-12 bg-background/50 border-border text-xs font-bold rounded-xl" {...field} />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ))}
                                                </div>

                                                <div className="flex justify-end pt-4">
                                                    <Button className="h-14 px-12 rounded-2xl shadow-xl shadow-primary/20 font-black uppercase tracking-widest text-xs gap-3">
                                                        Update Metadata <Zap className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    </TabsContent>

                                    <TabsContent value="financial" className="mt-0">
                                        <Form {...financialForm}>
                                            <form onSubmit={financialForm.handleSubmit(onSubmit)} className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {[
                                                        { name: "bank_name", label: "Bank Institution", icon: Building2 },
                                                        { name: "account_name", label: "Holder Identity", icon: User },
                                                        { name: "iban_no", label: "IBAN Identifier", icon: CreditCard },
                                                        { name: "swift_code", label: "SWIFT/BIC Protocol", icon: Globe },
                                                        { name: "micr_code", label: "MICR Signature", icon: Hash },
                                                        { name: "bank_address", label: "Branch Physical Node", icon: MapPin },
                                                    ].map((f) => (
                                                        <FormField
                                                            key={f.name}
                                                            control={financialForm.control}
                                                            name={f.name}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                                        <f.icon className="w-3 h-3 text-primary" /> {f.label}
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input className="h-12 bg-background/50 border-border text-xs font-bold rounded-xl" {...field} />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ))}
                                                </div>

                                                <Separator className="opacity-50" />

                                                <FormField
                                                    control={financialForm.control}
                                                    name="usdt_address"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <div className="flex items-center justify-between mb-2">
                                                                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                                    <Wallet className="w-3 h-3 text-primary" /> USDT Liquidity Address (TRC20)
                                                                </FormLabel>
                                                                <Badge className="bg-amber-500/10 text-amber-600 border-none text-[8px] font-black px-2 h-5 rounded-md">OTP REQUIRED</Badge>
                                                            </div>
                                                            <FormControl>
                                                                <Input className="h-12 bg-background/50 border-border text-xs font-bold rounded-xl font-mono text-primary" {...field} />
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />

                                                <div className="flex justify-end pt-4">
                                                    <Button className="h-14 px-12 rounded-2xl shadow-xl shadow-primary/20 font-black uppercase tracking-widest text-xs gap-3">
                                                        Synchronize Financials <Zap className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    </TabsContent>

                                    <TabsContent value="security" className="mt-0">
                                        <Form {...passwordForm}>
                                            <form onSubmit={passwordForm.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
                                                <div className="text-center space-y-2 mb-8">
                                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                                                        <Lock className="w-8 h-8 text-primary" />
                                                    </div>
                                                    <h3 className="font-black text-lg uppercase tracking-tight italic">Access Protocol Update</h3>
                                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Update your biometric-replacement password string.</p>
                                                </div>

                                                <div className="space-y-6">
                                                    {[
                                                        { name: "current_password", label: "Existing Key", icon: Key },
                                                        { name: "new_password", label: "New Encryption Key", icon: ShieldCheck },
                                                        { name: "confirm_password", label: "Validate Key", icon: ShieldCheck },
                                                    ].map((f) => (
                                                        <FormField
                                                            key={f.name}
                                                            control={passwordForm.control}
                                                            name={f.name}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                                        <f.icon className="w-3 h-3 text-primary" /> {f.label}
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input type="password" placeholder="••••••••" className="h-12 bg-background/50 border-border text-xs font-bold rounded-xl" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage className="text-[9px] font-bold" />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ))}
                                                </div>

                                                <Button className="w-full h-14 rounded-2xl shadow-xl shadow-primary/20 font-black uppercase tracking-widest text-xs gap-3 mt-8">
                                                    Seal Access Protocol <ShieldCheck className="w-4 h-4" />
                                                </Button>
                                            </form>
                                        </Form>
                                    </TabsContent>

                                    <TabsContent value="nominee" className="mt-0">
                                        <Form {...nomineeForm}>
                                            <form onSubmit={nomineeForm.handleSubmit(onSubmit)} className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {[
                                                        { name: "nominee_name", label: "Nominee Full Identity", icon: UserPlus },
                                                        { name: "nominee_dob", label: "Nominee Birthdate", icon: Calendar, type: "date" },
                                                        { name: "nominee_email", label: "Nominee Transmission Email", icon: Mail },
                                                        { name: "nominee_relation", label: "Relational Affinity", icon: Heart },
                                                    ].map((f) => (
                                                        <FormField
                                                            key={f.name}
                                                            control={nomineeForm.control}
                                                            name={f.name}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                                        <f.icon className="w-3 h-3 text-primary" /> {f.label}
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input type={f.type || "text"} className="h-12 bg-background/50 border-border text-xs font-bold rounded-xl" {...field} />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ))}
                                                </div>

                                                <div className="flex justify-end pt-4">
                                                    <Button className="h-14 px-12 rounded-2xl shadow-xl shadow-primary/20 font-black uppercase tracking-widest text-xs gap-3">
                                                        Register Nominee <Zap className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </CardHeader>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="xl:col-span-4 space-y-8">
                    {/* Visual Profile */}
                    <Card className="border-border shadow-none bg-slate-950 text-white overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                            <User className="w-32 h-32 text-primary" />
                        </div>
                        <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                            <div className="relative mb-6 group/avatar">
                                <Avatar className="h-32 w-32 border-4 border-slate-900 shadow-2xl transition-transform duration-500 hover:scale-105">
                                    <AvatarImage src="https://clients.xpo.ru/public/assets/images/user.png" />
                                    <AvatarFallback className="bg-primary text-primary-foreground font-black text-3xl">PS</AvatarFallback>
                                </Avatar>
                                <Label htmlFor="avatar-upload" className="absolute bottom-1 right-1 w-10 h-10 bg-primary rounded-xl border-4 border-slate-950 flex items-center justify-center cursor-pointer hover:bg-primary/90 shadow-xl transition-all">
                                    <Upload className="w-4 h-4 text-white" />
                                    <Input id="avatar-upload" type="file" className="hidden" />
                                </Label>
                            </div>
                            <h3 className="text-xl font-black uppercase italic tracking-tighter">prince sharma</h3>
                            <p className="text-[10px] font-black text-primary/80 uppercase tracking-[0.2em] mb-6">Master Node Active</p>

                            <div className="grid grid-cols-2 gap-3 w-full">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <p className="text-[9px] font-black uppercase text-slate-500 mb-1">Affiliation</p>
                                    <p className="text-xs font-black tracking-tighter uppercase italic text-emerald-400">Standard</p>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <p className="text-[9px] font-black uppercase text-slate-500 mb-1">Loyalty</p>
                                    <p className="text-xs font-black tracking-tighter uppercase italic text-primary">Prestige</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Status Console */}
                    <Card className="border-border shadow-none bg-card/50">
                        <CardHeader className="p-6 border-b bg-muted/20">
                            <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 italic">
                                <ShieldAlert className="w-4 h-4 text-primary" /> Integrity Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            {[
                                { label: "Identity Core (KYC)", status: "Unverified", alert: true },
                                { label: "Primary Transmission", status: "Verified", alert: false },
                                { label: "Financial Nodes", status: "Pending", alert: true },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-tight text-muted-foreground">{s.label}</span>
                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "font-black text-[9px] px-2 h-5 rounded-md uppercase tracking-widest border-none",
                                            s.alert ? "bg-rose-500/10 text-rose-600" : "bg-emerald-500/10 text-emerald-600"
                                        )}
                                    >
                                        {s.status}
                                    </Badge>
                                </div>
                            ))}

                            <Separator className="bg-border" />

                            <div className="space-y-4">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic mb-2">Network Metadata</p>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tight">
                                        <span className="opacity-50">Node Uptime</span>
                                        <span className="text-foreground">99.9%</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tight">
                                        <span className="opacity-50">Last Login</span>
                                        <span className="text-foreground">03 FEB 2026</span>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={() => window.location.href = "/dashboard/kyc"} className="w-full h-12 rounded-xl border-dashed border-2 border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary font-black text-[10px] uppercase tracking-[0.2em] gap-2 transition-all group">
                                Standardize Identity <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
