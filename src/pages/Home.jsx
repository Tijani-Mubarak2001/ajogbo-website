import { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProgrammeGrid from '../components/ProgrammeGrid';
import ImpactSection from '../components/ImpactSection';
import ImpactTracking from '../components/ImpactTracking';
import TeamSection from '../components/TeamSection';
import Gallery from '../components/Gallery';
import GetInvolved from '../components/GetInvolved';

export default function Home() {
  // Global scroll reveal observer
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main-content" role="main">
      <Hero />
      <AboutSection />
      <ProgrammeGrid />
      <ImpactSection />
      <ImpactTracking />
      <Gallery />
      <TeamSection />
      <GetInvolved />
    </main>
  );
}
