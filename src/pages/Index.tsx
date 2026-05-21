import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechStackSection from '@/components/TechStackSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PortfolioSection from '@/components/PortfolioSection';
import SEOSection from '@/components/SEOSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <WhyChooseSection />
        <PortfolioSection />
        <SEOSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
