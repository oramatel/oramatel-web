"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MobileNavbar } from "@/components/mobile-navbar";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3 flex-1">
        <Image
          src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/Avatar_50599fdb-15fc-422e-8698-7949d6ab3a0a.png"
          alt="Oramatel Logo"
          width={32}
          height={32}
          className="size-8"
        />
        <span className="font-heading text-xl font-bold">Oramatel</span>
      </Link>

      <nav className="hidden items-center gap-6 md:flex flex-1 justify-center">
        <Link
          href="/"
          className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        {isHomePage ? (
          <>
            <button
              onClick={() => scrollToSection("services")}
              className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("engagement")}
              className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Engagement
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </button>
          </>
        ) : (
          <Link
            href="/about"
            className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        )}
      </nav>

      <div className="hidden items-center gap-2 md:flex flex-1 justify-end">
        <Button asChild>
          <Link href="https://tally.so/r/wA6Nxy">
            Request Consultation
          </Link>
        </Button>
      </div>
      <MobileNavbar>
               <Link href="/" className="block p-2">Home</Link>
               <Link href="/about" className="block p-2">About</Link>
               <Link href="#services" className="block p-2">Services</Link>
               <Link href="#engagement" className="block p-2">Engagement</Link>
               <Link href="#pricing" className="block p-2">Pricing</Link>
               <Link href="#faq" className="block p-2">FAQ</Link>
        </MobileNavbar>
    </header>
  );
}