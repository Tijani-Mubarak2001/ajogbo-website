import { images } from '../data/images';
import './FounderSection.css';

const techAreas = [
  'Software Engineering',
  'Artificial Intelligence',
  'Digital Skills',
  'Career Guidance',
  'Technology Opportunities',
];

const lifeSkills = [
  'Discipline & Confidence',
  'Leadership',
  'Responsible Decision-Making',
  'Peer Pressure',
  'Financial Responsibility',
  'Goal Setting',
  'Life After Secondary School',
];

export default function FounderSection() {
  return (
    <section className="founder section section--green" aria-labelledby="founder-heading">
      <div className="container founder__inner">
        {/* Text */}
        <div className="founder__content reveal-left">
          <span className="eyebrow">Alumni Volunteer · Technology &amp; Mentorship</span>
          <div className="divider" />
          <h2 id="founder-heading" className="founder__heading">
            Technology Is One of the Pathways We Want Students to See
          </h2>

          <p className="founder__lead">
            Among the alumni volunteering their expertise is Tijani Mubarak, a Backend
            Engineer with a background in Computer Science. He will share his professional
            experience to help students understand technology and the real opportunities
            available within the industry.
          </p>

          <p className="founder__body">
            His sessions will cover software engineering, artificial intelligence,
            digital skills and how students can begin preparing for technology careers
            from secondary school — making the future feel tangible, not distant. He
            represents the kind of alumni volunteer at the heart of this initiative.
          </p>

          <div className="founder__tags-section">
            <h4 className="founder__tags-label">Technology Focus Areas</h4>
            <div className="founder__tags">
              {techAreas.map((area) => (
                <span key={area} className="founder__tag founder__tag--tech">{area}</span>
              ))}
            </div>
          </div>

          <p className="founder__body" style={{ marginTop: 'var(--space-8)' }}>
            Alumni volunteers also contribute to broader conversations on personal
            development — helping students build the mindset and habits that lead to
            a responsible, purposeful life after secondary school.
          </p>

          <div className="founder__tags-section">
            <h4 className="founder__tags-label">Personal Development</h4>
            <div className="founder__tags">
              {lifeSkills.map((skill) => (
                <span key={skill} className="founder__tag founder__tag--life">{skill}</span>
              ))}
            </div>
          </div>

          <div className="founder__credential">
            <p className="founder__cred-title">Tijani Mubarak</p>
            <p className="founder__cred-sub">Founder · Backend Engineer · Former Head Prefect Boy (2018 set), Ajogbo Grammar School</p>
          </div>
        </div>

        {/* Image */}
        <div className="founder__image-col reveal-right">
          <div className="founder__image-wrap">
            <img
              src={images.founder}
              alt="Tijani Mubarak — Founder of the Ajogbo Future Leaders Initiative"
              className="founder__image"
            />
          </div>
          <div className="founder__quote">
            <p className="founder__quote-text">
              "Professional success can also be used to create opportunities for others."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
