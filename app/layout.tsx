import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import './redesign.css';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { ScrollMotion } from '../components/ScrollMotion';
export const metadata: Metadata = { title: { default: 'Kyzen Personal Training | Austin', template: '%s | Kyzen' }, description: 'Mobile personal training in Austin, small-group sessions, and online coaching. Planned workouts and clear guidance from Kyzen.' };
export const viewport: Viewport = { themeColor: '#080d10' };
export default function RootLayout({ children }: {
    children: ReactNode;
}) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /><ScrollMotion /></body></html>; }
