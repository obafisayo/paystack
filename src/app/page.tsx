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
      <div data-nav-color="#EBF8F2">
        <HeroSection />
      </div>
      <div data-nav-color="#FFFFFF">
        <SimplePayment />
      </div>
      <div data-nav-color="#FFFFFF">
        <CustomPayment />
      </div>
      <div data-nav-color="#FFFFFF">
        <ProtectYourSelf />
      </div>
      <div data-nav-color="#eaf6fc">
        <TrustedBy />
      </div>
      <div data-nav-color="#FFFFFF">
        <PoweringGrowth />
      </div>
      <div data-nav-color="#f9fbfc">
        <BackedBy />
      </div>
      <div data-nav-color="#FFFFFF">
        <AcceptingPayment />
      </div>
    </div>
  );
}
