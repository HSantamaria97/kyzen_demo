import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { Section } from '../../components/Section/Section';
import { BlogCards } from '../../components/BlogCards/BlogCards';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Blog', description: 'Practical articles about strength training, calisthenics, and building a training routine that fits your life.' };
export default function BlogPage() {
  return <div className="blog-index"><PageIntro eyebrow="The Kyzen blog" title="A few notes on training." description="Getting started often brings up questions: what should you practice, how do you know an exercise suits you, and where does training fit into your week? These articles give you a place to begin." /><Section><div className="blog-reading-intro"><h2>What would you like help with?</h2><p className="muted">Start with strength basics if you’re new to weights, explore calisthenics if you’re curious about bodyweight training, or read about building a routine if finding time is the difficult part. Each article explains the topic and offers questions you can bring to a conversation with your trainer.</p></div><BlogCards expanded /></Section><Section className="surface"><div className="blog-next-step"><div><h2>Have a question about your own training?</h2><p className="muted mt-4">An article can help you understand the basics. A conversation gives us room to discuss your experience, equipment, and goals. Kyzen offers one-on-one training, small-group sessions, and online coaching.</p></div><Link className="button" href="/contact/">Book a free consultation <span aria-hidden="true">→</span></Link></div></Section></div>;
}
