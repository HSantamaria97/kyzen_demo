import Link from 'next/link';
import { posts } from '../../lib/blog';

export function BlogCards({ exclude, expanded = false }: { exclude?: string; expanded?: boolean }) {
  return <div className={expanded ? 'journal-reading-list' : 'grid gap-7 md:grid-cols-2 lg:grid-cols-3'}>
    {posts.filter(post => post.slug !== exclude).map(post => <article className="journal-card" key={post.slug}>
      <Link href={`/blog/${post.slug}/`} className="journal-card-image" aria-label={`Read ${post.title}`}><img src={post.image} alt={post.imageAlt} loading="lazy" /></Link>
      <div className="journal-card-copy"><p className="eyebrow">{post.category}</p><h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><p>{post.excerpt}</p>{expanded && <><p>{post.sections[0].paragraphs[0]}</p><div className="journal-article-topics"><h4>In this article</h4><ul>{post.sections.map(section => <li key={section.heading}>{section.heading}</li>)}</ul></div></>}<Link className="text-link" href={`/blog/${post.slug}/`}>Read article <span aria-hidden="true">↗</span></Link></div>
    </article>)}
  </div>;
}
