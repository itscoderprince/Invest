"use client";

import * as React from "react";
import Link from "next/link";
import { Shield, Menu, ArrowRight, ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Protocol", href: "#features" },
  { name: "Live Indexes", href: "#indexes" },
  { name: "Verification", href: "#steps" },
  { name: "Governance", href: "/trust" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Detect scroll for styling changes
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-2 left-0 right-0 z-50 flex justify-center">
      <nav
        className={cn(
          "relative w-full transition-all duration-300 ease-in-out flex items-center justify-between",
          // The "Island" effect when scrolled
          isScrolled
            ? "max-w-5xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-xl shadow-black/5 rounded-full py-2 px-4 md:px-6 mt-2 mx-2 md:mx-4"
            : "max-w-7xl bg-transparent border-transparent py-2"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-blue-600 text-white shadow-lg transition-transform group-hover:scale-105">
            <Shield className="h-5 w-5 fill-current" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </div>
          <span className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
            Invest<span className="text-slate-500 dark:text-slate-400">Track</span>
          </span>
        </Link>

        {/* Desktop Navigation (Center) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent h-9 px-4 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5 data-[active]:bg-slate-100/50 dark:data-[active]:bg-white/5 rounded-full transition-colors"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="rounded-full px-5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium">
                Log in
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" className="rounded-full px-5 bg-primary text-primary-foreground hover:opacity-90 font-medium shadow-lg shadow-primary/20 transition-all hover:scale-105">
                Get Access
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] md:w-[300px] border-l border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl p-0">
                <SheetHeader className="p-5 lg:p-6 border-b border-slate-100 dark:border-white/5 text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">
                      <Shield className="h-4 w-4 fill-current" />
                    </div>
                    <span className="font-bold">InvestTrack</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full py-4 lg:py-6">
                  <div className="px-3 md:px-4 space-y-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                        >
                          <span className="font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{link.name}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="mt-auto px-6 pb-8 space-y-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 mb-4">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Encrypted Session</span>
                      </div>
                      <p className="text-xs text-slate-500">Your connection to the protocol is secure.</p>
                    </div>

                    <SheetClose asChild>
                      <Link href="/auth/login" className="w-full">
                        <Button variant="outline" className="w-full rounded-full h-11 font-semibold border-slate-200 dark:border-white/10">Log in</Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/auth/register" className="w-full">
                        <Button className="w-full rounded-full h-11 bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105">
                          Initialize Access
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}