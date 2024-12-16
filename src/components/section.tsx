import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, Shield, Clock } from "lucide-react";
import { Calendar } from "lucide-react"

export function Section() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Enterprise-Grade Solutions
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Delivering professional IT solutions scaled for small business success
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
        <Card className="flex flex-col items-center justify-center p-8 text-center">
          <Server className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold">Infrastructure</h3>
          <p className="text-muted-foreground mt-2">
            Robust networking and server solutions
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-8 text-center">
          <Shield className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold">Security</h3>
          <p className="text-muted-foreground mt-2">
            Comprehensive protection for your business
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-8 text-center">
          <Clock className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold">Support</h3>
          <p className="text-muted-foreground mt-2">
            24/7 expert technical assistance
          </p>
        </Card>
      </div>
    </section>
  );
}

export function EngagementSection() {
  return (
    <section className="container flex flex-col py-24 sm:gap-7 gap-6">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Engagement Steps
        </span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center font-heading">
          How To Engage With Us
        </h2>
      </div>

      <ol className="relative border-l border-border">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
            <Calendar className="w-3 h-3 text-primary-foreground" />
          </span>
          <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
            01
          </time>
          <h3 className="text-lg font-semibold text-foreground mt-2 font-heading">
            Initial Consultation
          </h3>
          <p className="mb-4 text-base font-normal text-muted-foreground">
            Our journey begins with an introductory call, whereby we assess the suitability of our solutions and services with your existing requirements.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
            <Calendar className="w-3 h-3 text-primary-foreground" />
          </span>
          <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
            02
          </time>
          <h3 className="text-lg font-semibold text-foreground mt-2 font-heading">
            Receive Customized Proposal
          </h3>
          <p className="mb-4 text-base font-normal text-muted-foreground">
            Presentation of detailed design document with Work Breakdown Structure (WBS) for project work or Professional services hours for ad-hoc requests.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
            <Calendar className="w-3 h-3 text-primary-foreground" />
          </span>
          <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
            03
          </time>
          <h3 className="text-lg font-semibold text-foreground mt-2 font-heading">
            Confirm Engagement Terms
          </h3>
          <p className="mb-4 text-base font-normal text-muted-foreground">
            Agreement between parties and acceptance of detailed design document.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
            <Calendar className="w-3 h-3 text-primary-foreground" />
          </span>
          <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
            04
          </time>
          <h3 className="text-lg font-semibold text-foreground mt-2 font-heading">
            Implementation Phase
          </h3>
          <p className="mb-4 text-base font-normal text-muted-foreground">
            Project delivery and Professional Services hours execution.
          </p>
        </li>
      </ol>
    </section>
  )
}