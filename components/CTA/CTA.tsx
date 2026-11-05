import { Button } from '../Button/Button';
import { Section } from '../Section/Section';
export function CTA() {
  return <Section className="cta-section"><div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center"><div><p className="eyebrow">Free consultation</p><h2>Let’s meet before you decide.</h2><p className="muted mt-5 max-w-xl">We’ll talk about your goals and experience, then do a workout. Afterward, We’ll explain the training options and prices so you can decide how to continue.</p></div><Button>Book a free consultation</Button></div></Section>;
}
