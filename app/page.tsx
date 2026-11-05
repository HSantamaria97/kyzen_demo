import Link from 'next/link';
import { HomeHero, HomeBenefits, HomeProcess } from '../components/HomeSections/HomeSections';
import { Section } from '../components/Section/Section';
import { Services } from '../components/Services/Services';
import { BlogCards } from '../components/BlogCards/BlogCards';
import { Button } from '../components/Button/Button';
import { HomeCoaching } from '../components/HomeCoaching/HomeCoaching';
import { CTA } from '../components/CTA/CTA';

export default function Home() {
  return <div className="reference-home multipage-home">
    <HomeHero /><HomeBenefits />
    <div id="training"><Section><div className="section-heading"><div><p className="eyebrow">Ways to work together</p><h2>Choose the support that works for you.</h2><p className="muted mt-6 max-w-2xl">You can train with us one-on-one, join a small group, or follow a program online. We’ll talk through the options during your consultation.</p></div></div><Services /><p className="muted mt-8">For in-person sessions, we travel within Austin and the surrounding area, with a focus on North and Central Austin. <Link className="text-link" href="/locations/">Check your location ↗</Link></p></Section></div>
    <HomeCoaching /><HomeProcess />
    <Section className="surface"><div className="home-coach-preview grid items-center gap-10 md:grid-cols-[0.7fr_1.3fr] lg:gap-20"><img src="/assets/kyzen-coach-portrait.png" alt="Francis Paesano, the trainer behind Kyzen" width={382} height={510} loading="lazy" /><div><p className="eyebrow">Meet Francis Paesano</p><h2>Meet the trainer behind Kyzen.</h2><p className="muted mt-6 mb-8">Francis Paesano brings experience in weight training and a specialty in calisthenics. His approach is patient and thorough, with time to explain the movements and answer your questions.</p><Button href="/about/" secondary>Meet Francis</Button></div></div></Section>
    <Section><div className="section-heading"><div><p className="eyebrow">From the blog</p><h2>A few things worth knowing about training.</h2></div><Link href="/blog/" className="text-link">Visit the blog ↗</Link></div><BlogCards /></Section>
    <CTA />
  </div>;
}
