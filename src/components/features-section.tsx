"use client";

import { Globe, Gauge, Network, ShieldCheck, Building2, Workflow } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Network Design",
    description: "We design your network from the ground up — architecture, hardware selection, and implementation — built to your business requirements and budget. No over-engineering, no unnecessary licensing fees."
  },
  {
    icon: Gauge,
    title: "Network Management & Support",
    description: "Ongoing remote oversight for your network — covering Moves, Adds, and Changes (MAC), firmware updates, and proactive monitoring. We catch problems before they become outages."
  },
  {
    icon: Network,
    title: "Network Troubleshooting",
    description: "When something breaks, you need it fixed fast. We diagnose and resolve network faults promptly, with clear communication throughout — no jargon, no runaround, no finger-pointing between vendors."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Practical security for SMBs — firewall configuration and review, vulnerability assessments, and ASD Essential Eight alignment. We protect what matters without overcomplicated tooling or enterprise-priced contracts."
  },
  {
    icon: Building2,
    title: "New Rollouts",
    description: "Opening a new office, warehouse, or retail site? We handle end-to-end network rollouts — from cabling and hardware procurement to configuration and handover — so you open on time, connected, and ready."
  },
  {
    icon: Workflow,
    title: "Operations Automation",
    description: "Automate repetitive network tasks, streamline monitoring, and reduce human error. We've built custom automation solutions that have eliminated expensive outsourced monitoring contracts for our clients — saving thousands per month."
  }
];

export function Features() {
  return (
    <section id="services" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Services</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          What We Do
        </h2>
      </div>

      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        Practical network solutions for businesses that need things to work — designed, deployed, and supported by a senior engineer with 20+ years of hands-on experience across Cisco, Fortinet, Ubiquiti, and MikroTik.
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
