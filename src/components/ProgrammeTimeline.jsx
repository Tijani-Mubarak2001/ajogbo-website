import { timelineSteps } from '../data/content';
import './ProgrammeTimeline.css';

export default function ProgrammeTimeline() {
  return (
    <section className="timeline section section--light" aria-labelledby="timeline-heading">
      <div className="container">
        <div className="timeline__header reveal">
          <span className="eyebrow">How the Programme Works</span>
          <div className="divider" />
          <h2 id="timeline-heading">From Alumni Commitment to Student Impact</h2>
          <p className="timeline__lead">
            The initiative follows a deliberate five-stage process — from mobilising
            the alumni network to sustaining meaningful student engagement over time.
          </p>
        </div>

        <div className="timeline__steps">
          {timelineSteps.map((step, i) => (
            <div
              key={step.number}
              className={`timeline__step reveal delay-${Math.min(i + 1, 5)}`}
            >
              <div className="timeline__connector" aria-hidden="true">
                <div className="timeline__dot" />
                {i < timelineSteps.length - 1 && (
                  <div className="timeline__line" />
                )}
              </div>
              <div className="timeline__body">
                <span className="timeline__number">{step.number}</span>
                <h3 className="timeline__step-title">{step.title}</h3>
                <p className="timeline__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline__footer reveal">
          <p className="timeline__ongoing">
            The initiative is designed to be ongoing — not a single event.
          </p>
        </div>
      </div>
    </section>
  );
}
