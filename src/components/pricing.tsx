import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

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
        Pricing that fits your needs and helps you scale. Pricing subject to change without notice.
      </p>

      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        {/* Hourly Support Card */}
        <Card className="relative shadow-lg">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">
              Hourly Support
            </h4>
            <p className="mt-2 text-muted-foreground">
              Expert technical resources from:
            </p>
            <div className="mt-5">
              <span className="font-heading text-4xl font-semibold">
                $180-250
              </span>
              <span className="text-sm">/hour</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Minimum 4-hour engagement
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Remote or on-site support
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Same-day availability
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  After hours availability, upon request
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Business hours only. M-F, 8am-5pm
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
                $1,200-1,500
              </span>
              <span className="text-sm">/day</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  8 business hours working day
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Project-specific expertise
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Flexible scheduling
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  After hours availability, upon request
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Business hours only. M-F, 8am-5pm
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
                $5,000-6,000
              </span>
              <span className="text-sm">/week</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Project continuity
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Regular progress reporting
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Knowledge transfer included
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  After hours availability, upon request
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Business hours only. M-F, 8am-5pm
                </span>
              </li>
            </ul>

          </CardContent>
        </Card>
      </div>
    </section>
  )
}