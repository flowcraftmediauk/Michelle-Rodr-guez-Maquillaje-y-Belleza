import {MotionConfig} from 'motion/react';
import {AboutSection} from './components/AboutSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {PortfolioSection} from './components/PortfolioSection';
import {ServicesSection} from './components/ServicesSection';
import {SocialAndContactSection} from './components/SocialAndContactSection';
import {VideosSection} from './components/VideosSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FFFBF7] text-[#2B1F1E]">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <VideosSection />
          <SocialAndContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
