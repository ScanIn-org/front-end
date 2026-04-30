import TopAppBar from "@/components/TopAppBar";
import HeroSection from "@/components/HeroSection";
import LiveOrderMonitoringSection from "@/components/LiveOrderMonitoringSection";
import BentoGridBenefits from "@/components/BentoGridBenefits";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main className="pt-16">
        <HeroSection />
        <LiveOrderMonitoringSection />
        <BentoGridBenefits />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
