"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageCircle, Tag } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values) {
        console.log(values);
        // Handle form submission
    }

    return (
        <section id="contact" className="py-12 px-4 md:px-6 bg-white dark:bg-slate-950">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:pt-2"
                    >
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                            Get in <span className="text-primary">Touch</span>
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
                            Have questions? Our team is here to help you navigate the protocol.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">Email</p>
                                    <p className="text-sm text-slate-500 underline">support@investtrack.co</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">Phone</p>
                                    <p className="text-sm text-slate-500">+1 (555) 000-1234</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">Office</p>
                                    <p className="text-sm text-slate-500">Financial District, New York</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Clean Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10"
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                    <User className="w-3.5 h-3.5" />
                                                    Full Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="John Doe"
                                                        className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 rounded-xl h-10"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                    <Mail className="w-3.5 h-3.5" />
                                                    Email Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 rounded-xl h-10"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                <Tag className="w-3.5 h-3.5" />
                                                Subject
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="How can we help?"
                                                    className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 rounded-xl h-10"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[10px]" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                <MessageCircle className="w-3.5 h-3.5" />
                                                Message
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Type your message here..."
                                                    className="min-h-[80px] bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 rounded-xl resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[10px]" />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full h-11 bg-primary hover:opacity-90 text-white font-bold rounded-xl transition-all shadow-md shadow-primary/10">
                                    Send Message
                                </Button>
                            </form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
