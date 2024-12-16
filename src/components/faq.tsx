import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  return (
    <section id="faq" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Faq
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
          <AccordionContent className="text-lg text-muted-foreground">
            Oramatel is a technological solutions consulting company that provides custom-built technological solutions for the SMB and SOHO Market. We specialise in Network Architecture, Design and Rollouts, Security Implementation and Infrastructure Automation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What are the "Common Use Cases" to use Oramatel?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground whitespace-pre-line">
            {`Project Acceleration:
            • Meet tight deadlines
            • Additional technical expertise
            • Peak workload management

            Skills Gap Coverage:
            • Temporary resource shortage
            • Specialized technical needs
            • Leave coverage

            Technology Implementation:
            • New system deployments
            • Infrastructure upgrades
            • Security implementations`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Do you offer customized solutions?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Every solution is custom-designed to match your specific business objectives, technological ecosystem, and growth strategies.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What are your pricing models?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            We offer flexible pricing including project-based or ad-hoc/PAYG models. All pricing options are to be used during business hours (AEST). After hours work, will be quoted separately and upon request.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How long does a typical network design process take?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Our network design process typically ranges from 1-3 weeks, depending on the complexity of your infrastructure. We conduct a comprehensive assessment, develop a tailored solution, and provide a detailed implementation roadmap.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What industries do you specialize in for network design?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            We have extensive experience across multiple sectors, including finance, healthcare, education, manufacturing, retail, and government, each with unique networking requirements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
