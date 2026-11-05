import Link from 'next/link';
import { posts } from '../../lib/blog';

export function BlogCards({ exclude }: { exclude?: string }) {
  return <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
    {posts.filter(post => post.slug !== exclude).map(post => <article className="journal-card" key={post.slug}>
      <Link href={`/blog/${post.slug}/`} className="journal-card-image" aria-label={`Read ${post.title}`}><img src={post.image} alt={post.imageAlt} loading="lazy" /></Link>
      <div className="journal-card-copy"><p className="eyebrow">{post.category}</p><h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}/`}>Read article <span aria-hidden="true">↗</span></Link></div>
    </article>)}
  </div>;
}
