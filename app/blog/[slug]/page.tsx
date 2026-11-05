import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../../../lib/blog';
import { BlogCards } from '../../../components/BlogCards/BlogCards';
import { Section } from '../../../components/Section/Section';

export const dynamicParams = false;
export function generateStaticParams() { return posts.map(post => ({ slug: post.slug })); }
type ArticleProps = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: 'article' } } : { title: 'Article not found' };
}
export default async function Article({ params }: ArticleProps) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return <>
    <article className="journal-article">
      <header className="site-container article-header"><Link className="text-link" href="/blog/">← Back to the journal</Link><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="article-excerpt">{post.excerpt}</p></header>
      <figure className="site-container article-figure"><img className="article-cover" src={post.image} alt={post.imageAlt} /><figcaption>Photo: <a href={post.imageCredit.url} target="_blank" rel="noopener noreferrer">{post.imageCredit.name}</a></figcaption></figure>
      <div className="article-body">
        {post.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
        <aside className="article-sources"><h2>Further reading</h2><ul>{post.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul><p>General educational information. Discuss your own starting point and needs with an appropriate professional.</p></aside>
        <div className="article-next-step"><h2>Put your questions into a plan.</h2><p>Explore Kyzen’s approach to one-on-one training.</p><Link href="/one-on-one-training/" className="button">Explore training <span aria-hidden="true">→</span></Link></div>
      </div>
    </article>
    <Section className="surface"><h2 className="mb-10">Keep reading</h2><BlogCards exclude={post.slug} /></Section>
  </>;
}
