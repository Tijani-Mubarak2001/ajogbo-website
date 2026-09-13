import { Monitor, Briefcase, Users, Star, BookOpen, MessageCircle } from 'lucide-react';
import { programmeAreas } from '../data/content';
import './ProgrammeGrid.css';

const iconMap = {
  Monitor,
  Briefcase,
  Users,
  Star,
  BookOpen,
  MessageCircle,
};

export default function ProgrammeGrid() {
  return (
    <section className="programmes section section--light" id="programmes" aria-labelledby="programmes-heading">
      <div className="container">
        <div className="programmes__header reveal">
          <span className="eyebrow">What Students Can Expect</span>
          <div className="divider" />
          <h2 id="programmes-heading">Programme Areas</h2>
          <p className="programmes__lead">
            The initiative delivers structured sessions across six core areas, giving
            students exposure, mentorship and practical support.
          </p>
        </div>

        <div className="programmes__grid">
          {programmeAreas.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.number}
                className={`prog-card reveal delay-${Math.min(i + 1, 5)}`}
                role="article"
              >
                <div className="prog-card__header">
                  <span className="prog-card__number">{item.number}</span>
                  <div className="prog-card__icon">
                    {Icon && <Icon size={22} strokeWidth={1.5} />}
                  </div>
                </div>
                <h3 className="prog-card__title">{item.title}</h3>
                <p className="prog-card__desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
