'use client';
import Link from 'next/link';
import { BrandLogo } from '../BrandLogo/BrandLogo';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
const services = [['/one-on-one-training/', 'One-on-one'], ['/small-group-training/', 'Small-group'], ['/online-coaching/', 'Online coaching']];
const links = [['/about/', 'About'], ['/blog/', 'Blog'], ['/contact/', 'Contact']];
export function Navbar() {
 const [open,setOpen]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 const button=useRef<HTMLButtonElement>(null);
 const dropdown=useRef<HTMLDetailsElement>(null);
 const pathname=usePathname();
 const close=()=>{setOpen(false);if(dropdown.current) dropdown.current.open=false;};
 const isActive=(href:string)=>href==='/'?pathname==='/':pathname.startsWith(href);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>48);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 useEffect(()=>{const outside=(event:MouseEvent)=>{if(dropdown.current&&!dropdown.current.contains(event.target as Node)) dropdown.current.open=false;};document.addEventListener('click',outside);return()=>document.removeEventListener('click',outside);},[]);
 return <header className={['site-header',pathname==='/'?'reference-header':'',scrolled?'is-scrolled':'',open?'menu-is-open':''].filter(Boolean).join(' ')} onKeyDown={event=>{if(event.key==='Escape'){if(dropdown.current?.open){dropdown.current.open=false;dropdown.current.querySelector('summary')?.focus();}else if(open){setOpen(false);button.current?.focus();}}}}>
 <div className="site-container flex min-h-20 flex-wrap items-center justify-between gap-4"><Link className="brand" href="/" aria-label="Kyzen home" onClick={close}><BrandLogo /></Link>
 <button ref={button} className="menu-button md:hidden" aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>Menu <span aria-hidden="true">{open?'×':'☰'}</span></button>
 <nav id="main-navigation" aria-label="Main navigation" className={(open?'flex':'hidden')+' w-full flex-col gap-1 pb-5 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:pb-0'}>
 <Link href="/" aria-current={isActive('/')?'page':undefined} onClick={close}>Home</Link>
 <details ref={dropdown} className="services-menu"><summary className={services.some(([href])=>isActive(href))?'is-active':''}>Services <svg className="nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary><div className="services-submenu">{services.map(([href,label])=><Link key={href} href={href} aria-current={isActive(href)?'page':undefined} onClick={close}>{label}</Link>)}</div></details>
 {links.map(([href,label])=><Link key={href} href={href} aria-current={isActive(href)?'page':undefined} onClick={close}>{label}</Link>)}
 <Link className="nav-cta" href="/contact/" onClick={close}>Book a consultation →</Link></nav></div></header>;
}
