import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  return (
    <section id="pricing" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Pricing
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Simple Pricing
        </h2>
      </div>

      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        Rates are indicative and may vary based on engagement complexity. All prices are in AUD. Contact us for a tailored quote.
      </p>

      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-4">
        {/* Hourly Support Card */}
        <Card className="relative shadow-lg">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">
              Hourly Support
            </h4>
            <p className="mt-2 text-muted-foreground">
              Expert technical resource from:
            </p>
            <div className="mt-5">
              <span className="font-heading text-4xl font-semibold">
                $200–280
              </span>
              <span className="text-sm"> AUD/hour</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Minimum 4-hour engagement
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Remote or on-site support
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Same-day availability
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  After-hours surcharge applies (+35–50%)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Business hours: M–F, 8am–5pm AEST
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Daily Engagement Card */}
        <Card className="relative shadow-lg border-2 border-primary">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">
              Daily Engagement
            </h4>
            <p className="mt-2 text-muted-foreground">
              Dedicated technical resource from:
            </p>
            <div className="mt-5">
              <span className="font-heading text-4xl font-semibold">
                $1,400–1,800
              </span>
              <span className="text-sm"> AUD/day</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  8 business hours working day
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Project-specific expertise
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Flexible scheduling
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  After-hours surcharge applies (+35–50%)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Business hours: M–F, 8am–5pm AEST
                </span>
              </li>
            </ul>
          </CardContent>
          <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
            Most popular
          </span>
        </Card>

        {/* Weekly Projects Card */}
        <Card className="relative shadow-lg">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">
              Weekly Projects
            </h4>
            <p className="mt-2 text-muted-foreground">
              Full-time technical resource from:
            </p>
            <div className="mt-5">
              <span className="font-heading text-4xl font-semibold">
                $6,500–8,500
              </span>
              <span className="text-sm"> AUD/week</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Project continuity
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Regular progress reporting
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Knowledge transfer included
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  After-hours surcharge applies (+35–50%)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Business hours: M–F, 8am–5pm AEST
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Retainer / Ongoing Support Card */}
        <Card className="relative shadow-lg">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">
              Retainer Support
            </h4>
            <p className="mt-2 text-muted-foreground">
              Ongoing monthly network management from:
            </p>
            <div className="mt-5">
              <span className="font-heading text-4xl font-semibold">
                POA
              </span>
              <span className="text-sm"> /month</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Dedicated monthly hours block
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Priority response times
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Proactive monitoring &amp; reporting
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  MAC changes included
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Monthly network health review
                </span>
              </li>
            </ul>
            <Link
              href="https://tally.so/r/wA6Nxy"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors w-full"
            >
              Get a Quote
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
