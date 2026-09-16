import { images } from '../data/images';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container about__inner">
        {/* Left — image */}
        <div className="about__image-col reveal-left">
          <div className="about__image-wrap">
            <img
              src={images.students}
              alt="Students at Ajogbo Grammar School"
              className="about__image"
            />
            <div className="about__image-badge">
              <span className="about__badge-text">Ajogbo Grammar School</span>
              <span className="about__badge-sub">Ajibode Ota, Ogun State</span>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div className="about__content reveal-right">
          <span className="eyebrow">About the Initiative</span>
          <div className="divider" />
          <h2 id="about-heading" className="about__heading">
            Giving Back Through Knowledge, Opportunity and Community
          </h2>

          <p className="about__lead">
            Founded by alumni who remember what it felt like to be a student without
            a clear picture of what the future could hold, this initiative is the
            alumni community's way of giving back to the school that shaped them.
          </p>

          <p className="about__body">
            The Ajogbo Future Leaders Initiative reconnects alumni with the school
            and creates a sustainable, ongoing platform through which professionals
            from different fields share their knowledge, experiences and practical
            guidance directly with current students.
          </p>

          <p className="about__body">
            Every alumni volunteer brings something unique — a career path, a skill,
            a story. Together, these contributions give students a broader, more
            informed picture of the world and what is possible for them.
          </p>

          <div className="about__highlight">
            <span className="about__highlight-icon">↗</span>
            <p className="about__highlight-text">
              An ongoing alumni-to-student engagement programme — built to last beyond
              a single event, driven by a community that genuinely cares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
