import { teamMembers } from '../data/content';
import { User } from 'lucide-react';
import './TeamSection.css';

export default function TeamSection() {
  return (
    <section className="team section" aria-labelledby="team-heading">
      <div className="container">
        <div className="team__header reveal">
          <span className="eyebrow">Leadership</span>
          <div className="divider divider--center" />
          <h2 id="team-heading">Meet the Team</h2>
          <p className="team__lead">
            The initiative is coordinated by a dedicated volunteer leadership team
            committed to making this programme a success for Ajogbo Grammar School
            students.
          </p>
        </div>

        <div className="team__grid">
          {teamMembers.map((member, i) => (
            <div
              key={member.role}
              className={`team__card reveal delay-${i + 1}${member.placeholder ? ' team__card--placeholder' : ''}`}
              role="article"
            >
              <div className="team__photo-wrap">
                {member.placeholder ? (
                  <div className="team__photo-placeholder" aria-label="Treasurer photo coming soon">
                    <User size={52} strokeWidth={1} />
                    <span className="team__photo-placeholder-label">Photo Coming Soon</span>
                  </div>
                ) : (
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="team__photo"
                  />
                )}
              </div>
              <div className="team__info">
                <span className="team__role">{member.role}</span>
                <h3 className="team__name">{member.name}</h3>
                <p className="team__desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
