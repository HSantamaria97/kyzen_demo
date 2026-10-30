import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { Section } from '../../components/Section/Section';
import { Gallery } from '../../components/Gallery/Gallery';
import { CTA } from '../../components/CTA/CTA';
export const metadata: Metadata = { title: 'Gallery', description: 'Explore authentic Kyzen training photography in gym and outdoor settings.' };
export default function GalleryPage() { return <><PageIntro eyebrow="The gallery" title="Find your training environment." description="A look at strength training in everyday spaces—from the gym floor to the outdoors. Photography supplied by Kyzen."/><Section><Gallery /></Section><CTA /></>; }
