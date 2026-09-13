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
            a clear picture of what the future could hold, this initiative is the alumni
            community's way of giving back to the school that shaped them.
          </p>

          <p className="about__body">
            The Ajogbo Future Leaders Initiative reconnects alumni with the school and
            creates a sustainable, ongoing platform through which professionals from
            different fields can share their knowledge, experiences and practical
            guidance with students.
          </p>

          <p className="about__body">
            Rather than limiting the engagement to a single career talk, the programme
            builds recurring interactions that help students make informed decisions
            about education, careers, leadership and their future.
          </p>

          <div className="about__highlight">
            <span className="about__highlight-icon">↗</span>
            <p className="about__highlight-text">
              An ongoing alumni-to-student engagement programme — built to last beyond
              a single event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
