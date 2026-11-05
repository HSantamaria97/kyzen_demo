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
    <Section>
      <div className="grid gap-10 md:grid-cols-3">
        {[
          ['Personal attention', 'Focused sessions with room for your questions, your pace, and your preferences.'],
          ['A practical plan', 'A training approach that works with your space, equipment, and routine.'],
          ['Consistency in real life', 'Less travel and a clear purpose for each session can make showing up feel simpler.'],
        ].map(([title, text]) => <div key={title}><h3>{title}</h3><p className="muted mt-4">{text}</p></div>)}
      </div>
    </Section>
    <CTA />
  </>;
}
