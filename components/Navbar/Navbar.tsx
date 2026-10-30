'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
const links = [['/about/', 'About'], ['/services/', 'Services'], ['/gallery/', 'Gallery'], ['/contact/', 'Contact']];
export function Navbar() { const [open, setOpen] = useState(false); const button = useRef<HTMLButtonElement>(null); const pathname = usePathname(); return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) {
    setOpen(false);
    button.current?.focus();
} }}><div className="container flex min-h-20 flex-wrap items-center justify-between gap-4"><Link className="brand" href="/" aria-label="Kyzen home">KYZEN<span aria-hidden="true">•••••</span></Link><button ref={button} className="menu-button md:hidden" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>Menu <span aria-hidden="true">{open ? '×' : '☰'}</span></button><nav id="main-navigation" aria-label="Main navigation" className={(open ? 'flex' : 'hidden') + ' w-full flex-col gap-1 pb-5 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:pb-0'}>{links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact/" onClick={() => setOpen(false)}>Free consultation ↗</Link></nav></div></header>; }
