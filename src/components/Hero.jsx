import { ArrowRight, ChevronDown } from 'lucide-react';
import { images } from '../data/images';
import './Hero.css';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGetInvolved = () => {
    document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="Hero — Ajogbo Future Leaders Initiative">
      {/* Background image */}
      <div className="hero__bg">
        <img
          src={images.students}
          alt="Ajogbo Grammar School students"
          className="hero__bg-img"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        {/* Left — text content */}
        <div className="hero__content">
          <span className="eyebrow eyebrow--white hero__eyebrow">
            Ajogbo Future Leaders Initiative
          </span>

          <h1 className="hero__headline">
            Helping Young People<br />
            <span className="hero__headline-accent">See What Is Possible.</span>
          </h1>

          <p className="hero__subheadline">
            Mentorship, career development and educational support for the next
            generation of Ajogbo students.
          </p>

          <p className="hero__body">
            We are building an ongoing alumni-led volunteer programme that connects
            students with mentors, career professionals, practical guidance and
            educational support.
          </p>

          <div className="hero__actions">
            <button
              id="hero-cta-primary"
              className="btn btn--gold"
              onClick={scrollToGetInvolved}
            >
              Join the Volunteer Team <ArrowRight size={18} />
            </button>
            <button
              id="hero-cta-secondary"
              className="btn btn--outline-white"
              onClick={scrollToAbout}
            >
              Learn About the Initiative
            </button>
          </div>

          {/* Badge strip */}
          <div className="hero__badges">
            <div className="hero__badge">
              <span className="hero__badge-label">Alumni-led</span>
            </div>
            <div className="hero__badge-divider" aria-hidden="true" />
            <div className="hero__badge">
              <span className="hero__badge-label">Community Initiative</span>
            </div>
            <div className="hero__badge-divider" aria-hidden="true" />
            <div className="hero__badge">
              <span className="hero__badge-label">Ajogbo Grammar School</span>
            </div>
          </div>
        </div>

        {/* Right — poster image */}
        <div className="hero__image-col">
          <div className="hero__poster-wrap">
            <img
              src={images.poster}
              alt="Ajogbo Future Leaders Initiative — official programme poster"
              className="hero__poster"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        className="hero__scroll-cue"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
