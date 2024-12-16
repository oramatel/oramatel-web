"use client";

import { Icon } from "@/components/ui/icon";
import { Globe, Gauge, Network, SearchCode, LayoutDashboard, Workflow } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Network Design",
    description: "Transform your digital infrastructure with Oramatel's precision-engineered network solutions. Our Network Design service goes beyond mere connectivity—we create intelligent, scalable network architectures that adapt to your business's evolving needs."
  },
  {
    icon: Gauge,
    title: "Network Management and Support",
    description: "Oramatel's Network Management and Support service provides comprehensive remote network oversight, handling critical Moves, Adds, and Changes (MAC) with surgical precision. We don't just maintain your network—we optimize it, proactively identifying potential issues before they disrupt your operations."
  },
  {
    icon: Network,
    title: "Network Troubleshooting",
    description: "When network challenges emerge, Oramatel transforms technical obstacles into swift solutions. Our Network Troubleshooting service is your rapid-response lifeline, combining cutting-edge diagnostic tools with deep technical expertise to identify, analyze, and resolve complex network issues promptly."
  },
  {
    icon: SearchCode,
    title: "Cybersecurity",
    description: "Fortify your digital infrastructure with our ASD and NIST CSF-aligned cybersecurity services. We deliver comprehensive threat detection, vulnerability assessments, and customized security strategies that protect your critical assets against evolving cyber risks and ensure regulatory compliance."
  },
  {
    icon: LayoutDashboard,
    title: "New Rollouts",
    description: "Expanding your business or modernizing your technological landscape? Oramatel specializes from designing comprehensive branch networks to architecting enterprise-wide connectivity solutions, we turn technological expansion into a strategic advantage."
  },
  {
    icon: Workflow,
    title: "Operations Automation",
    description: "Streamline your technological processes with intelligent automation solutions. Oramatel helps organizations reduce operational costs, minimize human error, and accelerate innovation through strategic workflow optimization and advanced automation technologies."
  }
];

export function Features() {
  return (
    <section id="services" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Services</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Architecting Tomorrow&apos;s Connectivity, Today
        </h2>
      </div>

      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        Transform your digital infrastructure with Oramatel&apos;s precision-engineered network and technological solutions on a Project work or Professional services ad-hoc basis.
      </p>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="group/feature relative flex flex-col py-10 lg:border-r lg:border-l lg:border-b">
            <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
            
            <div className="relative z-10 mb-4 px-10">
              <feature.icon className="text-primary h-6 w-6" />
            </div>

            <div className="relative z-10 mb-2 px-10 text-lg font-bold">
              <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
              <span className="inline-block">{feature.title}</span>
            </div>

            <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
