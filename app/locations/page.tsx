import type { Metadata } from 'next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import { HomeLocations } from '../../components/HomeSections/HomeSections';
import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
export const metadata: Metadata = { title: 'Where we train', description: 'Mobile personal training in Austin and surrounding areas, with a focus on North and Central Austin. Online coaching is also available.' };
export default function Locations() {
  return <><PageIntro eyebrow="Where we train" title="We can come to you in Austin." description="We focus on North and Central Austin and also work in the surrounding area. Let us know where you’d like to train, and we’ll check whether the location works." /><HomeLocations /><Section><div className="grid gap-10 md:grid-cols-2"><div><h2>Tell us about your space.</h2><p className="muted mt-5">We can discuss your home, apartment gym, or another suitable location. We can plan effective workouts with minimal equipment, so let us know what you have available.</p></div><div><h3>Prefer to train independently?</h3><p className="muted mt-4 mb-7">Online coaching includes a planned program, weekly calls, and the chance to ask questions between check-ins. We’ll plan the workouts, and you’ll complete them on your own.</p><Button>Ask about training</Button></div></div></Section></>;
}
