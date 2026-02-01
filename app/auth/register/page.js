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
                        <Button variant="outline" type="button" className="w-full h-11 rounded-xl border-primary/10">
                            <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    fill="currentColor"
                                />
                            </svg>
                            Register with GitHub
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
