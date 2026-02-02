"use client";

import {
    Upload,
    AlertCircle,
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
    Heart
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
import { ROUTES } from "@/lib/routes";
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadcrumbs";

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

    const onSubmitPersonal = (data) => console.log("Personal:", data);
    const onSubmitFinancial = (data) => console.log("Financial:", data);
    const onSubmitPassword = (data) => console.log("Password:", data);
    const onSubmitNominee = (data) => console.log("Nominee:", data);

    return (
        <div className="container mx-auto space-y-4 md:space-y-6 px-0 sm:px-4">
            {/* Breadcrumbs */}
            <div className="px-4 sm:px-0">
                <DashboardBreadcrumbs pageName="Edit Profile" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                {/* Main Content - Left Column */}
                <div className="lg:col-span-8">
                    <Card className="border-none sm:border shadow-none sm:shadow-sm">
                        <CardContent className="p-0 sm:p-6">
                            <Tabs defaultValue="personal-data" className="w-full">
                                <div className="px-4 sm:px-0 pt-2 sm:pt-0">
                                    <TabsList className="grid w-full grid-cols-4 mb-6 md:mb-10 h-auto gap-1 p-1 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl">
                                        <TabsTrigger value="personal-data" className="py-3 px-0.5 rounded-lg font-bold text-[10px] sm:text-xs md:text-sm tracking-wide data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all text-slate-500 data-[state=active]:text-primary leading-none">
                                            Personal
                                        </TabsTrigger>
                                        <TabsTrigger value="financial-data" className="py-3 px-0.5 rounded-lg font-bold text-[10px] sm:text-xs md:text-sm tracking-wide data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all text-slate-500 data-[state=active]:text-primary leading-none">
                                            Financial
                                        </TabsTrigger>
                                        <TabsTrigger value="password" className="py-3 px-0.5 rounded-lg font-bold text-[10px] sm:text-xs md:text-sm tracking-wide data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all text-slate-500 data-[state=active]:text-primary leading-none">
                                            Security
                                        </TabsTrigger>
                                        <TabsTrigger value="nominee" className="py-3 px-0.5 rounded-lg font-bold text-[10px] sm:text-xs md:text-sm tracking-wide data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all text-slate-500 data-[state=active]:text-primary leading-none">
                                            Nominee
                                        </TabsTrigger>
                                    </TabsList>
                                </div>

                                {/* Personal Data Tab */}
                                <TabsContent value="personal-data" className="px-1.5 pb-8 sm:px-0 sm:pb-0">
                                    <Form {...personalForm}>
                                        <form onSubmit={personalForm.handleSubmit(onSubmitPersonal)} className="space-y-4 md:space-y-6">
                                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
                                                <FormField
                                                    control={personalForm.control}
                                                    name="f_name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <User className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                First Name
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="First" className="h-10 text-xs md:text-sm px-2.5" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalForm.control}
                                                    name="l_name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <User className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                Last Name
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Last" className="h-10 text-xs md:text-sm px-2.5" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
                                                <FormField
                                                    control={personalForm.control}
                                                    name="mob"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                Mobile No
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Mobile" className="h-10 text-xs md:text-sm px-2.5" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalForm.control}
                                                    name="dob"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                DOB
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="date" className="h-10 text-xs md:text-sm px-2" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                                <FormField
                                                    control={personalForm.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <Mail className="w-4 h-4 text-primary" />
                                                                Email Address
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="email" placeholder="Enter email address" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
                                                <FormField
                                                    control={personalForm.control}
                                                    name="flat_no"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <Home className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                Flat/House No.
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="e.g. 101" className="h-10 text-xs md:text-sm px-2.5" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalForm.control}
                                                    name="building_name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                Building
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Street" className="h-10 text-xs md:text-sm px-2.5" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                                <FormField
                                                    control={personalForm.control}
                                                    name="address1"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <MapPin className="w-4 h-4 text-primary" />
                                                                Address 1
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Street address" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalForm.control}
                                                    name="address2"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <MapPin className="w-4 h-4 text-primary" />
                                                                Address 2
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Apartment, suite, etc." {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
                                                <FormField
                                                    control={personalForm.control}
                                                    name="country"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                Country
                                                            </FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="w-full h-10 text-xs px-2">
                                                                        <SelectValue placeholder="Country" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="in">India</SelectItem>
                                                                    <SelectItem value="us">United States</SelectItem>
                                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                                    <SelectItem value="ca">Canada</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalForm.control}
                                                    name="state"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <Map className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                State
                                                            </FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="w-full h-10 text-xs px-2">
                                                                        <SelectValue placeholder="State" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="dl">Delhi</SelectItem>
                                                                    <SelectItem value="mh">Maharashtra</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
                                                <FormField
                                                    control={personalForm.control}
                                                    name="city"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <Building className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                City
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="City" className="h-10 text-xs md:text-sm px-2.5" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalForm.control}
                                                    name="zipcode"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-1.5 text-[11px] md:text-sm font-semibold truncate">
                                                                <Hash className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                Zipcode
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Zip" className="h-10 text-xs md:text-sm px-2.5" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-[10px]" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="space-y-4">
                                                <Label className="flex items-center gap-2 text-xs md:text-sm font-semibold px-1">
                                                    <Upload className="w-4 h-4 text-primary" />
                                                    Avatar
                                                </Label>
                                                <div className="flex items-center gap-4 px-1">
                                                    <div className="relative">
                                                        <Input type="file" id="avatar" className="hidden" />
                                                        <Label htmlFor="avatar" className="flex items-center gap-2 px-4 py-2.5 border rounded-xl cursor-pointer hover:bg-accent text-sm font-medium transition-colors">
                                                            <Upload className="w-4 h-4 text-primary" />
                                                            Choose a file
                                                        </Label>
                                                    </div>
                                                    <Avatar className="w-16 h-16 rounded-xl border-2 border-primary/20 p-1 shadow-sm">
                                                        <AvatarImage src="https://clients.xpo.ru/public/assets/images/user.png" />
                                                        <AvatarFallback>U</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                            </div>

                                            <div className="flex justify-start pt-2 px-1">
                                                <Button type="submit" className="w-full sm:w-auto h-12 px-10 font-bold text-sm tracking-wide rounded-xl">
                                                    Update Profile
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                </TabsContent>

                                {/* Financial Data Tab */}
                                <TabsContent value="financial-data" className="px-4 pb-8 sm:px-0 sm:pb-0">
                                    <div className="space-y-8">
                                        {/* Bank Details */}
                                        <Form {...financialForm}>
                                            <form onSubmit={financialForm.handleSubmit(onSubmitFinancial)} className="space-y-5 md:space-y-6">
                                                {/* <div className="flex items-center gap-2 mb-2">
                                                    <Building2 className="w-5 h-5 text-primary" />
                                                    <span className="text-lg font-bold text-primary">Bank Details</span>
                                                </div> */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    <FormField
                                                        control={financialForm.control}
                                                        name="bank_name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                    <Building2 className="w-4 h-4 text-primary" />
                                                                    Bank Name
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter bank name" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={financialForm.control}
                                                        name="bank_address"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                    <MapPin className="w-4 h-4 text-primary" />
                                                                    Bank Address
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter bank location" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={financialForm.control}
                                                        name="swift_code"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                    <LinkIcon className="w-4 h-4 text-primary" />
                                                                    Swift Code
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter SWIFT/BIC code" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={financialForm.control}
                                                        name="iban_no"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                    <CreditCard className="w-4 h-4 text-primary" />
                                                                    IBAN No.
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter IBAN number" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={financialForm.control}
                                                        name="account_name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                    <User className="w-4 h-4 text-primary" />
                                                                    Account Holder Name
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter holder's name" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={financialForm.control}
                                                        name="micr_code"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                    <Hash className="w-4 h-4 text-primary" />
                                                                    MICR Code
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter MICR code" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <Button type="submit" className="w-full sm:w-auto h-11 px-8 font-bold text-sm tracking-wide rounded-xl">
                                                    Update Bank Details
                                                </Button>
                                            </form>
                                        </Form>

                                        {/* USDT Address */}
                                        <div className="space-y-6 border-t border-slate-200 dark:border-slate-800 pt-8">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Wallet className="w-5 h-5 text-primary" />
                                                <span className="text-lg font-bold text-primary">USDT Address</span>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-sm text-muted-foreground">
                                                If you wish to change your USDT address, please generate OTP via
                                                <div className="flex gap-2 mt-4">
                                                    <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 rounded-lg px-4 font-bold">
                                                        Whatsapp
                                                    </Button>
                                                    <span className="self-center font-medium opacity-50">or</span>
                                                    <Button size="sm" variant="outline" className="rounded-lg px-4 font-bold">
                                                        Message
                                                    </Button>
                                                </div>
                                            </div>
                                            <Form {...financialForm}>
                                                <form onSubmit={financialForm.handleSubmit(onSubmitFinancial)} className="space-y-4">
                                                    <FormField
                                                        control={financialForm.control}
                                                        name="usdt_address"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                    <Wallet className="w-4 h-4 text-primary" />
                                                                    USDT Address (TRC20 only)
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter TRC20 address" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <Button type="submit" className="w-full sm:w-auto h-11 px-8 font-bold text-sm tracking-wide rounded-xl">
                                                        Update USDT Address
                                                    </Button>
                                                </form>
                                            </Form>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* Password Tab */}
                                <TabsContent value="password" className="px-4 pb-8 sm:px-0 sm:pb-0">
                                    <Form {...passwordForm}>
                                        <form onSubmit={passwordForm.handleSubmit(onSubmitPassword)} className="space-y-5 md:space-y-6">
                                            <div className="md:w-1/2">
                                                <FormField
                                                    control={passwordForm.control}
                                                    name="current_password"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <Lock className="w-4 h-4 text-primary" />
                                                                Old Password
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="password" placeholder="Enter current password" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <FormField
                                                    control={passwordForm.control}
                                                    name="new_password"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <Key className="w-4 h-4 text-primary" />
                                                                New Password
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="password" placeholder="Min 8 characters" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={passwordForm.control}
                                                    name="confirm_password"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <ShieldCheck className="w-4 h-4 text-primary" />
                                                                Confirm New Password
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="password" placeholder="Repeat new password" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <Button type="submit" className="w-full sm:w-auto h-11 px-10 font-bold text-sm tracking-wide rounded-xl">
                                                Update Security
                                            </Button>
                                        </form>
                                    </Form>
                                </TabsContent>

                                {/* Nominee Tab */}
                                <TabsContent value="nominee" className="px-4 pb-8 sm:px-0 sm:pb-0">
                                    <Form {...nomineeForm}>
                                        <form onSubmit={nomineeForm.handleSubmit(onSubmitNominee)} className="space-y-5 md:space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <FormField
                                                    control={nomineeForm.control}
                                                    name="nominee_name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <UserPlus className="w-4 h-4 text-primary" />
                                                                Nominee Name
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter nominee fullname" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={nomineeForm.control}
                                                    name="nominee_dob"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <Calendar className="w-4 h-4 text-primary" />
                                                                Nominee DOB
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="date" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={nomineeForm.control}
                                                    name="nominee_email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <Mail className="w-4 h-4 text-primary" />
                                                                Nominee Email
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input type="email" placeholder="Enter nominee email" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={nomineeForm.control}
                                                    name="nominee_relation"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                                                                <Heart className="w-4 h-4 text-primary" />
                                                                Nominee Relation
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="e.g. Spouse, Child" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <Button type="submit" className="w-full sm:w-auto h-11 px-10 font-bold text-sm tracking-wide rounded-xl">
                                                Update Nominee
                                            </Button>
                                        </form>
                                    </Form>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Account Status Card */}
                    <Card>
                        <CardContent className="p-4 md:p-6 space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Your Account Status</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">Email Unverified</span>
                                    <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">KYC Pending</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Bank Account Details</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="grid grid-cols-5 gap-2">
                                        <span className="col-span-2 font-semibold">Bank Name:</span>
                                        <span className="col-span-3 text-muted-foreground">N/A</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <span className="col-span-2 font-semibold">Holder Name:</span>
                                        <span className="col-span-3 text-muted-foreground">N/A</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <span className="col-span-2 font-semibold">Account No.:</span>
                                        <span className="col-span-3 text-muted-foreground">N/A</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <span className="col-span-2 font-semibold">Address:</span>
                                        <span className="col-span-3 text-muted-foreground">N/A</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <span className="col-span-2 font-semibold">Swift Code:</span>
                                        <span className="col-span-3 text-muted-foreground">N/A</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <span className="col-span-2 font-semibold">IBAN No.:</span>
                                        <span className="col-span-3 text-muted-foreground">N/A</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">USDT Address</h3>
                                <p className="text-muted-foreground">N/A</p>
                            </div>
                        </CardContent>
                    </Card >

                    {/* Earn Rewards Card */}
                    < Card >
                        <CardContent className="p-4 md:p-6">
                            <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Earn with Referral</h3>
                            <p className="text-sm text-muted-foreground">Earn something extra each month for every friend you bring to platform</p>
                        </CardContent>
                    </Card >

                    {/* KYC Card */}
                    < Card className="bg-primary text-primary-foreground" >
                        <CardContent className="p-4 md:p-6 space-y-4">
                            <h3 className="font-semibold">Identity Verification - KYC</h3>
                            <p className="text-xs opacity-90">To comply with regulation, participant will have to go through indentity verification.</p>
                            <p className="text-sm font-medium">You have not submitted your KYC application to verify your indentity.</p>

                            <Button variant="secondary" className="w-full text-primary bg-white hover:bg-gray-100">
                                Click to Proceed
                            </Button>

                            <div className="flex items-start gap-2 text-xs text-red-200 mt-2">
                                <span>*</span>
                                <span>KYC verification required for purchase token</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
