import { ArrowRight } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto px-6 text-center md:px-8 pt-32 max-w-[80rem]">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6 animate-fade-in opacity-0 [--animation-delay:100ms]">
        20+ Years of Network Engineering Expertise
      </p>

      <h1 className="bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text py-6 text-center text-5xl font-medium font-heading leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-4xl lg:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Enterprise-Grade Networks. SMB-Friendly Cost.
      </h1>

      <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-2xl mx-auto">
        Oramatel designs, deploys, and manages network infrastructure for small and mid-size businesses across Melbourne and Australia — using the right technology for your budget, not the most expensive option on the shelf.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Link
          href="https://tally.so/r/wA6Nxy"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Request Consultation
          <ArrowRight className="ml-2 size-4" />
        </Link>
        <Link
          href="#services"
          className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
        >
          See Our Services ↓
        </Link>
      </div>

      <Particles
        className="absolute inset-0 -z-10 h-full"
        quantity={100}
        staticity={40}
        ease={70}
        color="#ffffff"
        size={0.05}
      />
    </section>
  );
}
