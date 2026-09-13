import './ImpactTracking.css';

const trackingItems = [
  { number: '40+', label: 'Volunteer Participation', desc: 'Number of alumni who volunteer and what they contribute.' },
  { number: '1000+', label: 'Students Reached', desc: 'Students who participate in mentorship, talks and sessions.' },
  { number: '3-4', label: 'Mentorship Sessions', desc: 'Sessions delivered, topics covered and outcomes noted.' },
  { number: '100s', label: 'Educational Support', desc: 'Hundreds of materials provided to students who receive them.' },
];

export default function ImpactTracking() {
  return (
    <section className="tracking section section--dark" aria-labelledby="tracking-heading">
      <div className="container tracking__inner">
        <div className="tracking__header reveal">
          <span className="eyebrow eyebrow--white">Ongoing Initiative</span>
          <div className="divider" />
          <h2 id="tracking-heading">Measuring What We Do</h2>
          <p className="tracking__lead">
            Impact will be documented through volunteer participation, sessions
            delivered, students reached, educational materials provided, feedback and
            subsequent activities. These records will help the initiative measure
            progress over time.
          </p>
        </div>

        <div className="tracking__grid">
          {trackingItems.map((item, i) => (
            <div key={item.number} className={`tracking__card reveal delay-${i + 1}`}>
              <span className="tracking__number">{item.number}</span>
              <h3 className="tracking__label">{item.label}</h3>
              <p className="tracking__desc">{item.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
