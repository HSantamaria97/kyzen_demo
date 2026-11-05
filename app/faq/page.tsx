import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { HomeFAQ } from '../../components/HomeSections/HomeSections';
import { CTA } from '../../components/CTA/CTA';
export const metadata: Metadata = { title: 'FAQ', description: 'Answers about Kyzen mobile personal training, equipment, locations, consultations, and getting started.' };
export default function FAQPage() { return <><PageIntro eyebrow="A little clarity" title="Questions before you start?" description="Learn what to expect from training with Kyzen. For your own schedule, location, or goals, start with a conversation." /><HomeFAQ /><CTA /></>; }
