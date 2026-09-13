import { CheckCircle } from 'lucide-react';
import { documentationItems } from '../data/content';
import './DocumentationSection.css';

export default function DocumentationSection() {
  return (
    <section className="docs section section--light" aria-labelledby="docs-heading">
      <div className="container docs__inner">
        <div className="docs__content reveal-left">
          <span className="eyebrow">Evidence &amp; Documentation</span>
          <div className="divider" />
          <h2 id="docs-heading">Measuring What We Do</h2>

          <p className="docs__lead">
            To ensure the impact of the initiative can be demonstrated credibly over
            time, the programme will maintain clear records of all activities and
            outcomes.
          </p>

          <ul className="docs__list" role="list">
            {documentationItems.map((item) => (
              <li key={item} className="docs__item">
                <CheckCircle size={20} className="docs__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="docs__note">
            These records will help the initiative measure progress, identify areas for
            improvement and demonstrate accountability to the school, alumni and the
            wider community.
          </p>
        </div>

        <div className="docs__visual reveal-right">
          <div className="docs__commitment">
            <span className="docs__commitment-label">Core Commitment</span>
            <p className="docs__commitment-text">
              Accountability and transparency are built into how this initiative
              operates from the beginning.
            </p>
          </div>
          <div className="docs__pillars">
            {['Transparency', 'Accountability', 'Sustainability', 'Community Trust'].map((p) => (
              <div key={p} className="docs__pillar">
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
