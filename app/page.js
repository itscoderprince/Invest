"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/landing/Hero";
import { Ticker } from "@/components/landing/Ticker";
import { Features } from "@/components/landing/Features";
import { Journey } from "@/components/landing/Journey";
import { Compliance } from "@/components/landing/Compliance";
import { Trust } from "@/components/landing/Trust";
import IndexList from "@/components/landing/IndexList";
import { Contact } from "@/components/landing/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950 text-foreground selection:bg-primary selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Ticker />
        <Features />
        <IndexList />
        <Journey />
        <Trust />
        <Compliance />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
