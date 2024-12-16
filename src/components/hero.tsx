import { ArrowRight } from "lucide-react";
import { TextShimmer } from "@/components/magicui/text-shimmer";
import { Particles } from "@/components/magicui/particles";

export function Hero() {
  return (
    <section className="relative mx-auto px-6 text-center md:px-8 pt-32 max-w-[80rem]">
      <div className="inline-flex h-7 items-center justify-between rounded-full border bg-secondary text-secondary-foreground px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in">
        <TextShimmer className="inline-flex items-center justify-center">
          <span className="text-xs text-secondary-foreground/60">
            ✨ Introducing Oramatel Solutions
          </span>
        </TextShimmer>
      </div>

      <h1 className="bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text py-6 text-center text-5xl font-medium font-heading leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-4xl lg:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Engineering Technological Solutions for the SOHO and SMB Market
      </h1>

      <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-xl mx-auto">
        Specialising in Cost-Effective networking solutions tailored to customers requirements
      </p>

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