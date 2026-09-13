import { Compass, Cpu, Heart, TrendingUp, Package, Globe } from 'lucide-react';
import { impactItems } from '../data/content';
import './ImpactSection.css';

const iconMap = { Compass, Cpu, Heart, TrendingUp, Package, Globe };

export default function ImpactSection() {
  return (
    <section className="impact section section--light" id="impact" aria-labelledby="impact-heading">
      <div className="container">
        <div className="impact__header reveal">
          <span className="eyebrow">Intended Impact</span>
          <div className="divider" />
          <h2 id="impact-heading">The Change We Want to Create</h2>
          <p className="impact__lead">
            Six areas where the Ajogbo Future Leaders Initiative aims to make a
            meaningful, lasting difference in the lives of current students.
          </p>
        </div>

        <div className="impact__grid">
          {impactItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className={`impact__card reveal delay-${Math.min(i + 1, 5)}`}>
                <div className="impact__card-icon">
                  {Icon && <Icon size={26} strokeWidth={1.5} />}
                </div>
                <h3 className="impact__card-title">{item.title}</h3>
                <p className="impact__card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
