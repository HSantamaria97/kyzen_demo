import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { Section } from '../../components/Section/Section';
import { CoachIntro } from '../../components/CoachIntro/CoachIntro';
import { CTA } from '../../components/CTA/CTA';


export const metadata: Metadata = {
  title: 'About me',
  description: 'Meet Francis Paesano: software engineer, personal trainer, and calisthenics specialist who enjoys helping beginners learn to train.',
};

export default function About() {
  return <>
    <PageIntro eyebrow="About Kyzen" title="A little about me." description="I’m Francis Paesano. I enjoy fitness, teaching, and helping people learn how to train." />
    <CoachIntro />
    <section className="about-calisthenics" aria-labelledby="calisthenics-title">

      <div className="site-container about-calisthenics-grid">
        <div className="mettle-prose">
          <p className="eyebrow">My own training</p>
          <h2 id="calisthenics-title">Why I enjoy calisthenics.</h2>
          <p>Alongside weight training, I have a particular interest in calisthenics: using your own bodyweight to build strength and control. The handstand is one example of what I enjoy practicing in my own training.</p>
          <p>You don’t need to be able to do this to train with me. We can begin with simpler bodyweight movements, take time with the technique, and choose exercises that fit your current experience.</p>
          <p>Whether you’re interested in lifting weights, learning bodyweight exercises, or a mix of both, we’ll talk about what you want to work on.</p>
        </div>
        <figure>
          <img src="/assets/training-handstand.jpg" alt="Francis practicing a handstand outdoors in daylight" width="1100" height="1650" loading="lazy" />
          <figcaption>Francis practicing a handstand in Austin.</figcaption>
        </figure>
      </div>
    </section>
    <Section>
      <div className="grid gap-10 md:grid-cols-3">
        {[
          ['Time to understand the exercises', 'I want you to understand what you’re practicing and why it’s in your program. If a movement is unfamiliar, we can work through the setup and your questions. You don’t need gym experience to begin that conversation.'],
          ['Training with the equipment you have', 'My experience includes weight training and a particular interest in calisthenics. That gives us different ways to approach your training, including bodyweight exercises when equipment is limited. We’ll discuss your space and choose an approach that makes sense for you.'],
          ['A routine you can keep returning to', 'Working as a software engineer helped me understand the challenge of making room for exercise around a job. Before planning sessions, I want to hear about your schedule and what has made training hard to maintain. That context matters as much as your goals.'],
        ].map(([title, text]) => <div key={title}><h3>{title}</h3><p className="muted mt-4">{text}</p></div>)}
      </div>
    </Section>
    <CTA />
  </>;
}
