import { ArrowRight } from 'lucide-react';
import './VolunteerCTA.css';

export default function VolunteerCTA() {
  const scrollToGetInvolved = () => {
    document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta section section--dark" aria-labelledby="cta-heading">
      <div className="cta__bg-pattern" aria-hidden="true" />
      <div className="container cta__inner">
        <div className="cta__content reveal">
          <span className="eyebrow eyebrow--white">Get Involved</span>
          <div className="divider" />
          <h2 id="cta-heading" className="cta__heading">
            Your Experience Can Become<br />
            Someone Else's Opportunity.
          </h2>
          <p className="cta__body">
            Whether you are an alumnus, professional, mentor or someone who believes
            in giving young people access to opportunity, there is a meaningful way
            to contribute to the Ajogbo Future Leaders Initiative.
          </p>
          <div className="cta__actions">
            <button
              id="cta-volunteer-btn"
              className="btn btn--gold"
              onClick={scrollToGetInvolved}
            >
              Join the Volunteer Team <ArrowRight size={18} />
            </button>
            <button
              className="btn btn--outline-white"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
