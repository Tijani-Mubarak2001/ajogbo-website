import './IntroHighlights.css';

const highlights = [
  { number: '01', title: 'Mentorship', desc: 'Connecting students with professionals who guide, encourage and inspire.' },
  { number: '02', title: 'Career Development', desc: 'Exposing students to diverse career pathways and real-world opportunity.' },
  { number: '03', title: 'Educational Support', desc: 'Providing materials and practical support to students who need it most.' },
];

export default function IntroHighlights() {
  return (
    <section className="intro section section--green" aria-labelledby="intro-heading">
      <div className="container intro__inner">
        <p id="intro-heading" className="intro__statement reveal">
          Built by alumni. Designed for students. Sustained by community.
        </p>
        <div className="intro__grid">
          {highlights.map((item, i) => (
            <div key={item.number} className={`intro__card reveal delay-${i + 1}`}>
              <span className="intro__number">{item.number}</span>
              <h3 className="intro__title">{item.title}</h3>
              <p className="intro__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
