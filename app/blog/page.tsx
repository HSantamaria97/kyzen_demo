import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { Section } from '../../components/Section/Section';
import { BlogCards } from '../../components/BlogCards/BlogCards';
export const metadata: Metadata = { title: 'Blog', description: 'Practical articles about strength training, calisthenics, and building a training routine that fits your life.' };
export default function BlogPage() {
  return <><PageIntro eyebrow="The Kyzen blog" title="A few notes on training." description="Articles about getting started with weights, learning bodyweight movements, and making time to exercise." /><Section><h2 className="sr-only">Latest articles</h2><BlogCards /></Section></>;
}
