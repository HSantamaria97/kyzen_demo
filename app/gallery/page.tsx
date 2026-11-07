import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { Section } from '../../components/Section/Section';
import { Gallery } from '../../components/Gallery/Gallery';
import { CTA } from '../../components/CTA/CTA';
export const metadata: Metadata = { title: 'Gallery', description: 'Explore authentic Kyzen training photography in gym and outdoor settings.' };
export default function GalleryPage() { return <><PageIntro eyebrow="The gallery" title="Find your training environment." description="A look at Kyzen coaching, weight training, and calisthenics in gym and outdoor settings. Some photos show advanced movements, including handstands and L-sits. Your own program starts with your current experience and goals; these demonstrations aren’t requirements for getting started."/><Section><Gallery /></Section><CTA /></>; }
