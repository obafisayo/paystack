import CustomPayment from "@/components/Pages/LandingPage/CustomPayment";
import HeroSection from "@/components/Pages/LandingPage/HeroSection";
import SimplePayment from "@/components/Pages/LandingPage/SimplePayement";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SimplePayment />
      <CustomPayment />
    </div>
  );
}
