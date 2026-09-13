import { professions } from '../data/content';
import { images } from '../data/images';
import './AlumniNetwork.css';

export default function AlumniNetwork() {
  return (
    <section className="alumni section" aria-labelledby="alumni-heading">
      <div className="alumni__bg">
        <img
          src={images.students}
          alt=""
          className="alumni__bg-img"
          aria-hidden="true"
        />
        <div className="alumni__overlay" aria-hidden="true" />
      </div>

      <div className="container alumni__inner">
        <div className="alumni__content reveal">
          <span className="eyebrow eyebrow--white">Alumni Network</span>
          <div className="divider" />
          <h2 id="alumni-heading" className="alumni__heading">
            Different Careers. One Community.
          </h2>
          <p className="alumni__lead">
            The initiative brings together alumni from different professional
            backgrounds so students can learn directly from people who have navigated
            different educational and career pathways. Every profession has something
            valuable to offer.
          </p>

          <div className="alumni__professions">
            {professions.map((prof, i) => (
              <span
                key={prof}
                className={`alumni__prof reveal delay-${Math.min(i + 1, 5)}`}
              >
                {prof}
              </span>
            ))}
          </div>

          <p className="alumni__note">
            Alumni from all these fields and more are invited to contribute through
            talks, mentoring, practical sessions and career conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
