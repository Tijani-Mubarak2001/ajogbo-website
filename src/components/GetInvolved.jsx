import { Users, Lightbulb, Heart } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_URL } from '../data/content';
import './GetInvolved.css';

const paths = [
  {
    icon: Users,
    title: 'Volunteer',
    desc: 'Join the alumni volunteer network. Help coordinate, plan and deliver the programme alongside fellow alumni who share a commitment to giving back.',
    cta: 'Join the Volunteer Team',
  },
  {
    icon: Lightbulb,
    title: 'Mentor',
    desc: `Share your professional knowledge and career experience directly with students. Even one session can meaningfully change a student's perspective.`,
    cta: 'Become a Mentor',
  },
  {
    icon: Heart,
    title: 'Support',
    desc: 'Contribute educational materials or help with programme needs. Your voluntary contribution provides students with tools to learn and grow.',
    cta: 'Offer Support',
  },
];

export default function GetInvolved() {
  const mailtoHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : undefined;

  return (
    <section className="involved section section--light" id="get-involved" aria-labelledby="involved-heading">
      <div className="container">
        <div className="involved__header reveal">
          <span className="eyebrow">Three Ways to Contribute</span>
          <div className="divider divider--center" />
          <h2 id="involved-heading">Get Involved</h2>
          <p className="involved__lead">
            There is a meaningful role for everyone who wants to see Ajogbo students
            access mentorship, professional guidance and educational support.
          </p>
        </div>

        <div className="involved__grid">
          {paths.map((path, i) => {
            const Icon = path.icon;
            const linkHref = path.title === 'Volunteer' && WHATSAPP_URL ? WHATSAPP_URL : mailtoHref;
            
            return (
              <div key={path.title} className={`involved__card reveal delay-${i + 1}`}>
                <div className="involved__icon">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="involved__card-title">{path.title}</h3>
                <p className="involved__card-desc">{path.desc}</p>
                {linkHref ? (
                  <a
                    href={linkHref}
                    target={path.title === 'Volunteer' ? '_blank' : undefined}
                    rel={path.title === 'Volunteer' ? 'noopener noreferrer' : undefined}
                    className="btn btn--primary involved__card-btn"
                    id={`involved-btn-${path.title.toLowerCase()}`}
                  >
                    {path.cta}
                  </a>
                ) : (
                  <span className="involved__card-note">
                    Contact information coming soon
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="involved__community reveal">
          <p className="involved__community-text">
            <strong>Building Opportunity Through Community</strong><br />
            This initiative connects education, professional experience and community
            development — demonstrating that growth and service can go hand in hand.
          </p>
        </div>
      </div>
    </section>
  );
}
