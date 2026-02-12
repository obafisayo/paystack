import CustomPayment from "@/components/Pages/LandingPage/CustomPayment";
import HeroSection from "@/components/Pages/LandingPage/HeroSection";
import ProtectYourSelf from "@/components/Pages/LandingPage/ProtectYourSelf";
import SimplePayment from "@/components/Pages/LandingPage/SimplePayement";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SimplePayment />
      <CustomPayment />
      <ProtectYourSelf />
    </div>
  );
}
