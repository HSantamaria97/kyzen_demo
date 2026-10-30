import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { Section } from '../../components/Section/Section';
import { Services } from '../../components/Services/Services';
import { FAQ } from '../../components/FAQ/FAQ';
import { CTA } from '../../components/CTA/CTA';
export const metadata: Metadata = { title: 'Services', description: 'Explore at-home personal training, apartment gym coaching, and outdoor sessions in Austin.' };
export default function ServicesPage() { return <><PageIntro eyebrow="Training services" title="Your space. A more focused session." description="Choose the setting that works for you. Each option brings one-on-one coaching and a plan shaped around your goals."/><Section><Services detailed/></Section><Section className="surface"><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Austin & surrounding areas</p><h2>Local coaching, closer to home.</h2></div><div><p className="muted">Training locations include Austin, Round Rock, Cedar Park, Pflugerville, and Georgetown. Tell us your neighborhood during your consultation to confirm availability and a suitable setting.</p><p className="muted mt-5">Pricing, session length, and scheduling are discussed together before you commit to a plan.</p></div></div></Section><Section><h2 className="mb-8">Before your first session.</h2><FAQ /></Section><CTA /></>; }
