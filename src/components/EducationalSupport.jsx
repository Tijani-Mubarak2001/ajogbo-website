import { ShoppingBag, BookOpen, PenTool, Shirt, Layers, Settings } from 'lucide-react';
import { educationSupportItems } from '../data/content';
import { images } from '../data/images';
import './EducationalSupport.css';

const iconMap = { ShoppingBag, BookOpen, PenTool, Shirt, Layers, Settings };

export default function EducationalSupport() {
  return (
    <section className="edu section" aria-labelledby="edu-heading">
      <div className="container edu__inner">
        {/* Text */}
        <div className="edu__content reveal-left">
          <span className="eyebrow">Educational &amp; Material Support</span>
          <div className="divider" />
          <h2 id="edu-heading">Support That Goes Beyond the Classroom</h2>

          <p className="edu__lead">
            Mentorship is only one part of the initiative. Where resources permit,
            alumni will also contribute voluntary financial support towards educational
            materials and reasonable programme logistics.
          </p>

          <p className="edu__body">
            The aim is to ensure that students who need practical support can receive
            it alongside the mentorship and career guidance — removing as many barriers
            as possible to learning and opportunity.
          </p>

          <div className="edu__items">
            {educationSupportItems.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.label} className="edu__item">
                  <div className="edu__item-icon">
                    {Icon && <Icon size={18} strokeWidth={1.5} />}
                  </div>
                  <span className="edu__item-label">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="edu__note">
            <p>
              Educational support is provided on a voluntary, resource-dependent basis.
              The initiative prioritises ensuring students are equipped to learn.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="edu__image-col reveal-right">
          <div className="edu__image-wrap">
            <img
              src={images.students}
              alt="Students at Ajogbo Grammar School benefiting from educational support"
              className="edu__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
