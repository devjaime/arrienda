import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import RegionsSection from "@/components/RegionsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedProperties />
        <Services />
        <TrustSection />
        <RegionsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
