import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
export const metadata: Metadata = { title: { default: 'Kyzen | Personal training. On your terms.', template: '%s | Kyzen' }, description: 'Mobile personal training in Austin and surrounding areas. One-on-one coaching at your home, apartment gym, or preferred location.' };
export const viewport: Viewport = { themeColor: '#080d10' };
export default function RootLayout({ children }: {
    children: ReactNode;
}) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /></body></html>; }
