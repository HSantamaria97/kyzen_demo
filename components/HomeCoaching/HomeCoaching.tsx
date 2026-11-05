import Link from 'next/link';

const startingPoints = [
  { title: 'What would you like help with?', copy: 'Tell us what you want from training and what has made it difficult to keep up with before.' },
  { title: 'New to the gym?', copy: 'We’ll explain the exercises and why we’re doing them. You can ask questions as we go.' },
  { title: 'Interested in calisthenics?', copy: 'We specialize in bodyweight training and can plan workouts with minimal equipment.' },
];

export function HomeCoaching() {
  return (
    <section className="home-coaching" aria-labelledby="coaching-title">
      <div className="home-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">How we teach</p>
          <h2 id="coaching-title">We’ll start with<br /><span>what you can do now.</span></h2>
          <p className="coaching-intro">You don’t need gym experience to work with us. We take time with the movements, explain the reasons, and listen to your concerns. Proper form is something we’ll keep working on together.</p>
          <div className="coaching-starting-points">
            {startingPoints.map(({ title, copy }) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <Link href="/contact/" className="button">Ask us about training <span aria-hidden="true">→</span></Link>
        </div>
        <figure className="handstand-feature">
          <div className="handstand-image"><img src="/assets/training-handstand.jpg" alt="Kyzen trainer demonstrating an outdoor handstand, with hands planted on the ground" width="1100" height="1650" loading="lazy" /></div>
          <figcaption><span>Francis practicing a handstand.</span>This is an advanced movement. Your own training starts at your current level.</figcaption>
        </figure>
      </div>
      <div className="home-wrap activity-foundation">
        <div><p className="eyebrow">Consistency over extremes</p><h3>Small steps count, too.</h3><p>You can spread activity throughout the week. A short walk or a manageable strength session can be part of a routine you build over time.</p></div>
        <div><strong>2 days</strong><p>of muscle-strengthening activity each week is part of the CDC’s general guidance for adults, alongside 150 minutes of moderate aerobic activity or an equivalent amount of vigorous activity.</p><a href="https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" target="_blank" rel="noopener noreferrer">Read the CDC activity guidelines ↗</a></div>
      </div>
    </section>
  );
}
