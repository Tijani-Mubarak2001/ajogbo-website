import { Eye, Link2, TrendingUp } from 'lucide-react';
import './PurposeSection.css';

const pillars = [
  {
    icon: Eye,
    title: 'Discover',
    description:
      'Expose students to educational and career possibilities that exist beyond their immediate environment, broadening what they believe is achievable.',
  },
  {
    icon: Link2,
    title: 'Connect',
    description:
      'Introduce students to professionals who can become mentors, role models and long-term guides as they navigate education and early career decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description:
      'Support personal development — confidence, leadership, responsible decision-making and practical preparation for life after secondary school.',
  },
];

export default function PurposeSection() {
  return (
    <section className="purpose section section--light" aria-labelledby="purpose-heading">
      <div className="container">
        <div className="purpose__header reveal">
          <span className="eyebrow">Purpose of the Initiative</span>
          <div className="divider" />
          <h2 id="purpose-heading" className="purpose__heading">
            More Than a Career Talk
          </h2>
          <p className="purpose__lead">
            The goal is not simply to organise one event. It is to build recurring
            relationships between students and professionals that help young people make
            informed decisions about education, careers, leadership and their future.
          </p>
        </div>

        <div className="purpose__grid">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`purpose__card reveal delay-${i + 1}`}>
                <div className="purpose__icon-wrap">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="purpose__card-title">{item.title}</h3>
                <p className="purpose__card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
