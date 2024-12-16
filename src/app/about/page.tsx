import { Header } from "@/components/header";
import { Resume } from "@/components/resume";
import { Footer } from "@/components/footer";
import { VendorProof } from "@/components/vendor-proof";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Resume />
      <VendorProof />
      <Footer />
    </>
  );
}