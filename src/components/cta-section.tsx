import { ArrowRight, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-14">
      <div className="container z-10">
        <div className="mx-auto size-24 rounded-[2rem] border p-3 shadow-2xl backdrop-blur-md bg-background/10 lg:size-32">
          <Handshake className="mx-auto size-16 lg:size-24" />
        </div>

        <div className="z-10 mt-4 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold lg:text-4xl font-heading">
            Ready to Elevate Your Technology Stack?
          </h2>
          <p className="mt-2 mb-12">
            Contact Oramatel - Your Strategic IT Partner
          </p>

          <Button 
            className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms]"
            asChild
          >
            <Link 
              href="https://tally.so/r/wA6Nxy" 
              className="cursor-pointer"
            >
              Request Consultation
              <ArrowRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
