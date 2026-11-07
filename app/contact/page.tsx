import type { Metadata } from 'next';
import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactLinks } from '../../components/ContactLinks/ContactLinks';
export const metadata: Metadata = { title: 'Contact Kyzen', description: 'Book a free consultation with Kyzen Personal Training in Austin. Talk through your goals, try a workout, and discuss training options.' };
export default function Contact() {
  return <Section><div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><div><p className="eyebrow">Contact Kyzen</p><h1>Let’s talk about your training.</h1><p className="muted mt-6">Have a question or ready to get started? Text, call, or email us. Let us know which training option interests you, where you’d like to train, and when you’re usually available.</p><ContactLinks /><div className="contact-info mt-9"><h3>Your free consultation</h3><p className="muted mt-3">We’ll talk about your goals and do a workout, then go over training options and prices. You can decide from there. You don’t need to choose a program before getting in touch.</p></div></div><div><h2 className="contact-draft-heading">Your goals and questions.</h2><p className="muted mb-5">Use this space to note your experience, what you want help with, and anything you’d like to ask.</p><ContactForm /></div></div></Section>;
}
