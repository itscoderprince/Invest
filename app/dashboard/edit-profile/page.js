"use client";

import React from "react";
import { Upload, AlertCircle } from "lucide-react";
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
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardBreadcrumbs } from "@/components/DashboardBreadcrumbs";

export default function EditProfilePage() {
    return (
        <div className="container mx-auto space-y-4 md:space-y-6">
            {/* Breadcrumbs */}
            <DashboardBreadcrumbs pageName="Edit Profile" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
                {/* Main Content - Left Column */}
                <div className="lg:col-span-8">
                    <Card>
                        <CardContent className="p-6">
                            <Tabs defaultValue="personal-data" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 md:mb-8 h-auto gap-2 p-1">
                                    <TabsTrigger value="personal-data">Personal Data</TabsTrigger>
                                    <TabsTrigger value="financial-data">Financial Data</TabsTrigger>
                                    <TabsTrigger value="password">Password</TabsTrigger>
                                    <TabsTrigger value="nominee">Nominee</TabsTrigger>
                                </TabsList>

                                {/* Personal Data Tab */}
                                <TabsContent value="personal-data">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="f_name">
                                                    First Name <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="f_name"
                                                    defaultValue="prince"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="l_name">
                                                    Last Name <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="l_name"
                                                    defaultValue="sharma"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="mob">
                                                    Mobile Number <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="mob"
                                                    defaultValue="9123246241"
                                                    placeholder="Mobile Number"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">
                                                    Email Address <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    defaultValue="itscoderprince@gmail.com"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                            <div className="space-y-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                                                {/* Adjusted grid for DOB/Flat/Building per prompt usually implies 3 cols but shadcn grid is cleaner with 2 or 3 */}
                                                {/* Original HTML had col-md-4 for these 3. Let's try grid-cols-3 for this row specifically if we want match exact */}
                                            </div>
                                        </div>

                                        {/* The 3-column row for address details */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="dob">Date of Birth <span className="text-red-500">*</span></Label>
                                                <Input id="dob" type="date" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="flat_no">Flat/House No. <span className="text-red-500">*</span></Label>
                                                <Input id="flat_no" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="building_name">Building/Street <span className="text-red-500">*</span></Label>
                                                <Input id="building_name" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="address1">Address 1 <span className="text-red-500">*</span></Label>
                                                <Input id="address1" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="address2">Address 2</Label>
                                                <Input id="address2" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="--Select Country--" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="in">India</SelectItem>
                                                        <SelectItem value="us">United States</SelectItem>
                                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                                        <SelectItem value="ca">Canada</SelectItem>
                                                        {/* Add more countries as needed */}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="--Select State--" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="dl">Delhi</SelectItem>
                                                        <SelectItem value="mh">Maharashtra</SelectItem>
                                                        {/* Add states */}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                                                <Input id="city" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="zipcode">Zipcode <span className="text-red-500">*</span></Label>
                                                <Input id="zipcode" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Avatar</Label>
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <Input type="file" id="avatar" className="hidden" />
                                                    <Label htmlFor="avatar" className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-accent">
                                                        <Upload className="w-4 h-4" />
                                                        Choose a file
                                                    </Label>
                                                </div>
                                                <Avatar className="w-24 h-24 rounded-none border p-1">
                                                    <AvatarImage src="https://clients.xpo.ru/public/assets/images/user.png" />
                                                    <AvatarFallback>U</AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </div>

                                        <div className="flex justify-start pt-4">
                                            <Button type="submit">Update Profile</Button>
                                        </div>
                                    </form>
                                </TabsContent>

                                {/* Financial Data Tab */}
                                <TabsContent value="financial-data">
                                    <div className="space-y-8">
                                        {/* Bank Details */}
                                        <form className="space-y-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-lg font-semibold text-primary">Bank Details</span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="bank_name">Bank Name <span className="text-red-500">*</span></Label>
                                                    <Input id="bank_name" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="bank_address">Bank Address <span className="text-red-500">*</span></Label>
                                                    <Input id="bank_address" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="swift_code">Swift Code <span className="text-red-500">*</span></Label>
                                                    <Input id="swift_code" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="iban_no">IBAN No. <span className="text-red-500">*</span></Label>
                                                    <Input id="iban_no" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="account_name">Account Holder Name <span className="text-red-500">*</span></Label>
                                                    <Input id="account_name" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="account_number">MICR Code <span className="text-red-500">*</span></Label>
                                                    <Input id="account_number" />
                                                </div>
                                            </div>
                                            <Button type="submit">Update Bank Details</Button>
                                        </form>

                                        {/* USDT Address */}
                                        <form className="space-y-6 border-t pt-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-lg font-semibold text-primary">USDT Address</span>
                                            </div>
                                            <div className="text-sm text-muted-foreground mb-4">
                                                If you wish to change your USDT address, please generate OTP via
                                                <div className="flex gap-2 mt-2">
                                                    <Button size="sm" variant="outline" className="text-green-600 border-green-200 bg-green-50 hover:bg-green-100">
                                                        Whatsapp
                                                    </Button>
                                                    <span className="self-center">or</span>
                                                    <Button size="sm" variant="outline">
                                                        Message
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="usdt_address">USDT Address (TRC20 only) <span className="text-red-500">*</span></Label>
                                                <Input id="usdt_address" required />
                                            </div>
                                            <Button type="submit">Update USDT Address</Button>
                                        </form>
                                    </div>
                                </TabsContent>

                                {/* Password Tab */}
                                <TabsContent value="password">
                                    <form className="space-y-6">
                                        <div className="space-y-2 md:w-1/2">
                                            <Label htmlFor="current_password">Old Password <span className="text-red-500">*</span></Label>
                                            <Input id="current_password" type="password" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="new_password">New Password <span className="text-red-500">*</span></Label>
                                                <Input id="new_password" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="confirm_password">Confirm New Password <span className="text-red-500">*</span></Label>
                                                <Input id="confirm_password" type="password" />
                                            </div>
                                        </div>
                                        <Button type="submit">Update</Button>
                                    </form>
                                </TabsContent>

                                {/* Nominee Tab */}
                                <TabsContent value="nominee">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="nominee_name">Nominee Name <span className="text-red-500">*</span></Label>
                                                <Input id="nominee_name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="nominee_dob">Nominee DOB <span className="text-red-500">*</span></Label>
                                                <Input id="nominee_dob" type="date" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="nominee_email">Nominee Email <span className="text-red-500">*</span></Label>
                                                <Input id="nominee_email" type="email" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="nominee_relation">Nominee Relation <span className="text-red-500">*</span></Label>
                                                <Input id="nominee_relation" />
                                            </div>
                                        </div>
                                        <Button type="submit">Update</Button>
                                    </form>
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
                    </Card>

                    {/* Earn Rewards Card */}
                    <Card>
                        <CardContent className="p-4 md:p-6">
                            <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Earn with Referral</h3>
                            <p className="text-sm text-muted-foreground">Earn something extra each month for every friend you bring to platform</p>
                        </CardContent>
                    </Card>

                    {/* KYC Card */}
                    <Card className="bg-primary text-primary-foreground">
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
