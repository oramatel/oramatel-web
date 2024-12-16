import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Engagement } from "@/components/engagement-section";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { VendorProof } from "@/components/vendor-proof";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <VendorProof />
      <Engagement />
      <Pricing />
      <Faq />
      <CtaSection />
      <Footer />
    </>
  );
}
