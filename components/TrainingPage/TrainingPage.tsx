import Link from 'next/link';
import { Section } from '../Section/Section';
import { CTA } from '../CTA/CTA';
import { services } from '../Services/Services';
import { trainingPages } from '../../lib/training';
export function TrainingPage({index}:{index:number}) {
 const service=services[index];
 const page=trainingPages[index];
 return <>
 <section className="training-hero"><div className="site-container training-hero-grid"><div><p className="eyebrow">Training with Kyzen</p><h1>{service.title}</h1><p className="training-lead">{page.intro}</p><Link href="/contact/" className="button">Book a free consultation <span aria-hidden="true">→</span></Link><p className="training-hero-note">{index===2?'Independent workouts · Weekly calls':'Mobile training · Austin and surrounding areas'}</p></div><img src={service.image} alt={service.alt} fetchPriority="high" /></div></section>
 <Section><div className="training-editorial-grid"><div><p className="eyebrow">Is this right for you?</p><h2>{page.fitTitle}</h2></div><div><p className="muted">{page.fit}</p><ul className="training-inclusions">{page.audience.map(item=><li key={item}>{item}</li>)}</ul><p className="muted">{page.approach}</p></div></div></Section>
 <Section className="surface"><div className="training-section-heading"><p className="eyebrow">The support you get</p><h2>What’s included</h2></div><div className="training-included-grid">{page.includes.map(([title,copy])=><article key={title}><h3>{title}</h3><p className="muted mt-4">{copy}</p></article>)}</div></Section>
 <Section><div className="training-editorial-grid"><div><p className="eyebrow">Getting started</p><h2>Here’s how it works.</h2><p className="muted mt-6">There’s time to ask questions before deciding whether to continue.</p></div><ol className="training-steps">{page.steps.map(([title,copy],i)=><li key={title}><span aria-hidden="true">{i+1}</span><div><h3>{title}</h3><p className="muted mt-3">{copy}</p></div></li>)}</ol></div></Section>
 <Section className="surface"><div className="training-editorial-grid"><div><p className="eyebrow">The practical details</p><h2>{page.logisticsTitle}</h2></div><div><p className="muted">{page.logistics}</p><Link className="text-link mt-6" href={index===2?'/contact/':'/locations/'}>{index===2?'Ask about online coaching':'Check your location'} ↗</Link></div></div></Section>
 <Section><div className="training-editorial-grid"><div><p className="eyebrow">Before you book</p><h2>Questions about {index===0?'one-on-one training':index===1?'small-group training':'online coaching'}.</h2></div><div>{page.faqs.map(([question,answer])=><details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p className="muted pb-6">{answer}</p></details>)}</div></div></Section>
 <div className="training-alternatives site-container"><p className="muted">Looking for a different kind of support?</p><div className="flex flex-wrap gap-7 mt-4">{services.filter(item=>item.href!==service.href).map(item=><Link className="text-link" key={item.href} href={item.href}>{item.title} ↗</Link>)}</div></div><CTA />
 </>;
}
