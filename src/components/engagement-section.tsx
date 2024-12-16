import { Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Our journey begins with an introductory call, whereby we assess the suitability of our solutions and services with your existing requirements."
  },
  {
    number: "02",
    title: "Receive Customized Proposal",
    description: "Presentation of detailed design document with Work Breakdown Structure (WBS) for project work or Professional services hours for ad-hoc requests."
  },
  {
    number: "03",
    title: "Confirm Engagement Terms",
    description: "Agreement between parties and acceptance of detailed design document."
  },
  {
    number: "04",
    title: "Implementation Phase",
    description: "Project delivery and Professional Services hours execution."
  }
];

export function Engagement() {
  return (
    <section id="engagement" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Engagement Steps
        </span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center font-heading">
          How To Engage With Us
        </h2>
      </div>

      <ol className="relative border-l border-border">
        {steps.map((step) => (
          <li key={step.number} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
              <Calendar className="w-3 h-3 text-primary-foreground" />
            </span>
            <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
              {step.number}
            </time>
            <h3 className="text-lg font-semibold text-foreground mt-2 font-heading">
              {step.title}
            </h3>
            <p className="mb-4 text-base font-normal text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
