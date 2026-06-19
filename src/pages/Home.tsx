import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import TrustedSection from '../sections/TrustedSection';
import PlatformFeatures from '../sections/PlatformFeatures';
import HowItWorks from '../sections/HowItWorks';
import NGOPartners from '../sections/NGOPartners';
import GetCertified from '../sections/GetCertified';
import GetFeatured from '../sections/GetFeatured';
import JoinNetwork from '../sections/JoinNetwork';
import AnimationSection from '../components/ AnimationSection';
import Animation from '../sections/Animation';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <Animation />
      <PlatformFeatures />
      <HowItWorks />
      <AnimationSection />
      <NGOPartners />
      <GetCertified />
      <GetFeatured />
      <JoinNetwork />
      <Footer />
    </div>
  );
}
