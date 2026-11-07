import Link from 'next/link';
import { Icon } from '../Icon/Icon';
import { ContactLinks } from '../ContactLinks/ContactLinks';

export function HomeHero() {
  return <section className="reference-hero" id="home">
    <img className="reference-hero-photo" src="/assets/training-lunge.jpg" alt="Francis demonstrating a dumbbell lunge" fetchPriority="high" />
    <div className="reference-hero-shade" />
    <div className="home-wrap reference-hero-copy">
      <p className="eyebrow">Kyzen Personal Training</p>
      <h1>Personal training in Austin,<br /><span>with a plan that fits your life.</span></h1>
      <p className="hero-description">Kyzen offers mobile personal training, small-group sessions, and online coaching. If you’re new to exercise or having trouble staying consistent, we’ll help you figure out where to start and what to work on.</p>
      <div className="reference-actions"><Link href="/contact/" className="button">Book a free consultation <span aria-hidden="true">→</span></Link><Link href="/#training" className="button button-secondary">See the training options</Link></div>
      <div className="reference-location-icons"><span><Icon name="home" />Mobile training</span><span><Icon name="person" />Small groups</span><span><Icon name="calendar" />Online coaching</span></div>
    </div>
  </section>;
}

const benefits = [
  { icon: 'person', title: 'Start with your experience', copy: 'New to exercise or returning to it? We’ll discuss your experience and concerns before planning the work.' },
  { icon: 'calendar', title: 'Have a plan to follow', copy: 'Your workouts follow a longer-term program. We track what you complete and use it to plan what comes next.' },
  { icon: 'chart', title: 'Understand the exercises', copy: 'You’ll learn what each movement is for and how it fits the plan. There’s time to ask questions as you practice.' },
  { icon: 'shield', title: 'Learn proper form', copy: 'During in-person sessions, your trainer watches your movement and gives feedback so you can practice with guidance.' },
] as const;
export function HomeBenefits() {
  return <section className="reference-benefits" aria-label="How we work"><div className="home-wrap">{benefits.map(item => <article key={item.title}><Icon name={item.icon} /><div><h2>{item.title}</h2><p>{item.copy}</p></div></article>)}</div></section>;
}

export function HomeProcess() {
  const steps = [
    ['Tell us about yourself', 'We’ll talk about your goals, previous fitness experience, and what has made exercise difficult to keep up with.'],
    ['Do a workout together', 'The free consultation includes a workout. You’ll have a chance to ask questions and see how we explain the exercises.'],
    ['Decide how to continue', 'Afterward, we’ll explain the training options, prices, and session structure. If you’d like to continue, we’ll find a time that works.'],
  ];
  return <section className="reference-process" id="how-it-works"><div className="reference-process-photo"><img src="/assets/Instruction.png" alt="Francis spotting a client during a bench press" loading="lazy" /></div><div className="reference-process-copy"><p className="eyebrow">The free consultation</p><h2>Here’s what to expect.</h2><ol>{steps.map(([title,copy],index) => <li key={title}><span className="reference-step">{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>;
}

export function HomeLocations() {
  return <section className="reference-areas austin-locations" id="locations">
    <div className="austin-city-panel"><img src="/assets/austin-skyline.jpg" alt="Downtown Austin overlooking Lady Bird Lake" loading="lazy" width="1800" height="1350" /><div className="austin-city-shade" /><div className="austin-city-copy"><p className="eyebrow">In-person training</p><h2>Austin and the surrounding area.</h2><p>We focus on North and Central Austin. Tell us where you’d like to train, and we’ll check whether the location works. Online coaching is also available.</p><Link className="button" href="/contact/">Ask about your location <span aria-hidden="true">→</span></Link></div></div>
    <div className="austin-map-panel"><iframe title="Map of Austin and surrounding areas" src="https://www.openstreetmap.org/export/embed.html?bbox=-98.02%2C30.12%2C-97.45%2C30.72&amp;layer=mapnik&amp;marker=30.2672%2C-97.7431" loading="lazy" referrerPolicy="no-referrer" /><div className="austin-map-caption"><span>Austin and surrounding areas</span><a href="https://www.openstreetmap.org/#map=10/30.42/-97.735" target="_blank" rel="noopener noreferrer">Open larger map ↗</a></div></div>
  </section>;
}

const questions = [
  ['Do I need gym experience?', 'No. We welcome beginners, including people with little or no gym experience. We’ll start with what you can do now, and we’ll take time to explain the movements and help with your form.'],
  ['Where do you train?', 'We offer mobile training in Austin and the surrounding area, with a focus on North and Central Austin. We can discuss your home, apartment gym, or another suitable location. We also offer online coaching.'],
  ['How often can we meet?', 'We’ll discuss how often you’d like to train, your availability, and the structure of the sessions during your consultation. Online coaching includes a weekly call.'],
  ['What does small-group training involve?', 'Two or more people train together. The group should have roughly similar goals so we can plan useful sessions and give everyone enough attention.'],
  ['How much does training cost?', 'We’ll explain the prices and available options after the free consultation, before you decide whether to continue. You can also text or email us with pricing questions.'],
  ['What happens at the free consultation?', 'We’ll talk about your goals, fitness experience, and what has made progress difficult, then do a workout. Afterward, we’ll explain the training options and prices.'],
  ['What is included in online coaching?', 'We provide workouts, meal plans, and a longer-term training program. You do the workouts independently. We have weekly calls to review how things are going, and you can ask questions between calls.'],
  ['How do I get started?', 'Text us at (302) 740-7929 or email kyzen_pt@gmail.com to book a free consultation. Tell us a little about what you’re looking for and when you’re available.'],
];
export function HomeFAQ({ expanded = false }: { expanded?: boolean }) { return <section className="reference-faq" id="faq"><div className="home-wrap"><p className="eyebrow">Before you start</p><h2>A few questions you might have.</h2><div className={expanded ? "faq-answer-grid" : "reference-faq-grid"}>{questions.map(([question,answer]) => expanded ? <article key={question}><h3>{question}</h3><p>{answer}</p></article> : <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>; }
export function HomeContact() { return <section className="reference-contact" id="contact"><div className="home-wrap"><p className="eyebrow">Contact Kyzen</p><h2>Let’s talk about what you need.</h2><ContactLinks /></div></section>; }
