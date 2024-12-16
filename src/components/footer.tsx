import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

const navigation = {
  company: [
    { name: "Our Services", href: "/#services" },
    { name: "How To Engage", href: "/#engagement" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://x.com/Oramatel",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/davidoramasnetworkengineer3000/",
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold">
              Oramatel
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              Engineering Technological Solutions for the SOHO and SMB Market
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 xl:mt-0 xl:text-right">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Oramatel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}