import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import WhySwitchSection from '../components/WhySwitchSection';
import ProcessSection from '../components/ProcessSection';
import WhyBusinessSwitch from '../components/WhyBusinessSwitch';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import TrustBadgesSection from '../components/Trustbadgessection';
import MarqueeSection from '../components/Marqueesection';
import OnboardingProcess from '../components/OnBoardingProcess';
import Testimonials from '../components/Testimonials';


function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <TrustBadgesSection />
        <MarqueeSection />
        <ProblemsSection />
        <ServicesSection />
        <IndustriesSection />
        <WhySwitchSection />
        <ProcessSection />
        <WhyBusinessSwitch />
        <OnboardingProcess />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
