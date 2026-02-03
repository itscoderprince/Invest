"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Mail, Lock, User, Ticket, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
    FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    referral: z.string().optional(),
});

export default function RegisterPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            referral: "",
        },
    });

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <FieldGroup>
                    <div className="flex flex-col items-center gap-1 text-center mb-4">
                        <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            Start your investment tracking journey today.
                        </p>
                    </div>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field: fieldProps }) => (
                            <Field>
                                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                <FieldContent>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                        <FormControl>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                className="pl-10 h-11 bg-muted/30 border-primary/10 rounded-xl"
                                                required
                                                {...fieldProps}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage className="text-xs" />
                                </FieldContent>
                            </Field>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field: fieldProps }) => (
                            <Field>
                                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                                <FieldContent>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                        <FormControl>
                                            <Input
                                                id="email"
                                                placeholder="m@example.com"
                                                type="email"
                                                className="pl-10 h-11 bg-muted/30 border-primary/10 rounded-xl"
                                                required
                                                {...fieldProps}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage className="text-xs" />
                                </FieldContent>
                            </Field>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field: fieldProps }) => (
                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <FieldContent>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                            <FormControl>
                                                <Input
                                                    id="password"
                                                    type="password"
                                                    placeholder="••••••••"
                                                    className="pl-10 h-11 bg-muted/30 border-primary/10 rounded-xl"
                                                    required
                                                    {...fieldProps}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage className="text-xs" />
                                    </FieldContent>
                                </Field>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="referral"
                            render={({ field: fieldProps }) => (
                                <Field>
                                    <FieldLabel htmlFor="referral">Referral Code</FieldLabel>
                                    <FieldContent>
                                        <div className="relative">
                                            <Ticket className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                            <FormControl>
                                                <Input
                                                    id="referral"
                                                    placeholder="REF-123"
                                                    className="pl-10 h-11 bg-muted/30 border-primary/10 rounded-xl"
                                                    {...fieldProps}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage className="text-xs" />
                                    </FieldContent>
                                </Field>
                            )}
                        />
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-primary/5">
                        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                            I agree to the <span className="text-primary font-bold cursor-pointer hover:underline">Terms of Service</span> and acknowledge the financial risk disclosure.
                        </p>
                    </div>

                    <Field>
                        <Button type="submit" className="w-full h-11 rounded-xl shadow-lg shadow-primary/20 font-bold">
                            Create Account <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Field>

                    <FieldSeparator>Or sign up with</FieldSeparator>

                    <Field>
                        <Button variant="outline" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                    fill="currentColor"
                                />
                            </svg>
                            Login with Google
                        </Button>
                        <FieldDescription className="text-center mt-4">
                            Already have an account?{" "}
                            <Link href="/auth/login" className="underline underline-offset-4 font-bold text-primary">
                                Sign In
                            </Link>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </form>
        </Form>
    );
}
