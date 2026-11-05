import type { Metadata } from 'next';
import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactLinks } from '../../components/ContactLinks/ContactLinks';
export const metadata: Metadata = { title: 'Contact Kyzen', description: 'Book a free consultation with Kyzen Personal Training in Austin. Talk through your goals, try a workout, and discuss training options.' };
export default function Contact() {
  return <Section><div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><div><p className="eyebrow">Contact Kyzen</p><h1>Let’s talk about your training.</h1><p className="muted mt-6">Have a question or ready to get started? Text, call, or email us.</p><ContactLinks /><div className="contact-info mt-9"><h3>Your free consultation</h3><p className="muted mt-3">We’ll talk about your goals and do a workout, then go over training options and prices. You can decide from there.</p></div></div><div><h2 className="contact-draft-heading">Your goals and questions.</h2><ContactForm /></div></div></Section>;
}
