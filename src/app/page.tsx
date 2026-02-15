import AcceptingPayment from "@/components/Pages/LandingPage/AcceptingPayment";
import BackedBy from "@/components/Pages/LandingPage/BackedBy";
import CustomPayment from "@/components/Pages/LandingPage/CustomPayment";
import HeroSection from "@/components/Pages/LandingPage/HeroSection";
import PoweringGrowth from "@/components/Pages/LandingPage/PoweringGrowth";
import ProtectYourSelf from "@/components/Pages/LandingPage/ProtectYourSelf";
import SimplePayment from "@/components/Pages/LandingPage/SimplePayement";
import TrustedBy from "@/components/Pages/LandingPage/TrustedBy";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SimplePayment />
      <CustomPayment />
      <ProtectYourSelf />
      <TrustedBy />
      <PoweringGrowth />
      <BackedBy />
      <AcceptingPayment />
    </div>
  );
}
