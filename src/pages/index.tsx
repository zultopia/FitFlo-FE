import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/LandingPages/HeroSection";
import FeaturesSection from "@/components/LandingPages/FeaturesSection";
import ImpactSection from "@/components/LandingPages/ImpactSection";
import TestimonialsSection from "@/components/LandingPages/TestimonialSection";
import CTASection from "@/components/LandingPages/CTASection";
import FaQ from "@/components/LandingPages/FaQ";
import Footer from "@/components/LandingPages/Footer";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <FeaturesSection />
      <ImpactSection />
      <TestimonialsSection />
      <FaQ />
      <CTASection />
      <Footer />
    </DefaultLayout>
  );
}
