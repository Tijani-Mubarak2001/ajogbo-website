import { useEffect } from 'react';
import Hero from '../components/Hero';
import IntroHighlights from '../components/IntroHighlights';
import AboutSection from '../components/AboutSection';
import PurposeSection from '../components/PurposeSection';
import FounderSection from '../components/FounderSection';
import ProgrammeGrid from '../components/ProgrammeGrid';
import AlumniNetwork from '../components/AlumniNetwork';
import ProgrammeTimeline from '../components/ProgrammeTimeline';
import EducationalSupport from '../components/EducationalSupport';
import ImpactSection from '../components/ImpactSection';
import ImpactTracking from '../components/ImpactTracking';
import DocumentationSection from '../components/DocumentationSection';
import TeamSection from '../components/TeamSection';
import Gallery from '../components/Gallery';
import VolunteerCTA from '../components/VolunteerCTA';
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
      <IntroHighlights />
      <AboutSection />
      <PurposeSection />
      <FounderSection />
      <ProgrammeGrid />
      <AlumniNetwork />
      <ProgrammeTimeline />
      <EducationalSupport />
      <ImpactSection />
      <ImpactTracking />
      <DocumentationSection />
      <TeamSection />
      <Gallery />
      <VolunteerCTA />
      <GetInvolved />
    </main>
  );
}
