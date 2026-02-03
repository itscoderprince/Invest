"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Mail, Lock } from "lucide-react";

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
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(1, {
        message: "Password is required.",
    }),
});

export default function LoginPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
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
                        <h1 className="text-3xl font-bold tracking-tight">Login to your account</h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            Enter your email below to login to your account
                        </p>
                    </div>

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

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field: fieldProps }) => (
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Link
                                        href="/auth/forgot"
                                        className="ml-auto text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
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

                    <Field>
                        <Button type="submit" className="w-full h-11 rounded-xl shadow-lg shadow-primary/20 font-bold">
                            Login <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Field>

                    <FieldSeparator>Or continue with</FieldSeparator>

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
                            Don't have an account?{" "}
                            <Link href="/auth/register" className="underline underline-offset-4 font-bold text-primary">
                                Sign up
                            </Link>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </form>
        </Form>
    );
}
