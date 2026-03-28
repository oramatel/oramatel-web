import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  return (
    <section id="faq" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          FAQ
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Frequently Asked Questions
        </h2>
      </div>

      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        For any other questions, please feel free to contact us.
      </p>

      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What is Oramatel?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            Oramatel is a Melbourne-based network consulting firm founded by David Oramas — a Senior Network Engineer with 20+ years of experience across enterprise and SMB environments. We design, deploy, manage, and troubleshoot network infrastructure for small and mid-size businesses across Australia. We work with the vendors that fit your requirements and budget: Cisco, Fortinet, Aruba, Ubiquiti, MikroTik, HPE, and Juniper.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What are the common use cases for Oramatel?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            Common engagements include: new office or branch network rollouts, replacing or upgrading aging network hardware, resolving persistent connectivity or performance issues, network security reviews and firewall configuration, moving from expensive enterprise licensing to cost-effective alternatives (e.g. Cisco → Ubiquiti), and setting up ongoing remote network management for businesses without internal IT staff.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Do you offer customised solutions?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            Yes — every engagement is scoped to your specific environment, requirements, and budget. We don&apos;t sell packages off a price list. After an initial consultation we provide a detailed design document or scope of work so you know exactly what you&apos;re getting before any work begins.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What are your pricing models?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            We offer four engagement models: hourly support (minimum 4 hours, from $200–280 AUD/hr), daily engagements (from $1,400–1,800 AUD/day), weekly project blocks (from $6,500–8,500 AUD/week), and monthly retainers for ongoing management (price on application based on scope). After-hours and weekend support is available at a surcharge of 35–50% on the standard rate — contact us for details.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How long does a typical network design process take?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            It depends on the scope. A small office network design and implementation typically takes 1–3 days. A full branch rollout with SD-WAN, wireless, and security is usually 1–2 weeks from design sign-off to completion. We provide a Work Breakdown Structure (WBS) with every proposal so you have a clear timeline before work begins.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What industries do you specialise in for network design?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            We work across industries — professional services, retail, hospitality, property, healthcare, and logistics are common sectors. Our focus is on business size rather than vertical: if you&apos;re a business with 5–200 users and either no internal IT team or a team that needs specialist network expertise, we&apos;re the right fit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
