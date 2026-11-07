'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Progressive enhancement: content is visible without JavaScript. */
export function ScrollMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(
      'main .mettle-section-heading, main .section-heading, main .mettle-prose, main .coach-intro-copy, main .service-card, main .journal-card, main .mettle-split > img, main .about-calisthenics figure, main .trainer-portrait-stage, main .training-included-grid > *, main .training-editorial-grid > *'
    )).filter(element => !element.closest('.mettle-hero') && !element.parentElement?.closest('.service-card,.journal-card,.mettle-prose'));
    const reveal = (element: HTMLElement) => {
      element.dataset.reveal = 'visible';
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target as HTMLElement); });
    }, { threshold: 0, rootMargin: `0px 0px -${Math.round(window.innerHeight * .2)}px 0px` });
    candidates.forEach(element => {
      // Never hide content already in view, including restored scroll positions.
      if (preference.matches || element.getBoundingClientRect().top < innerHeight) return;
      element.classList.add('scroll-reveal');
      if (element.matches('img,figure,.trainer-portrait-stage')) element.classList.add('scroll-reveal-photo');
      const index = element.matches('.service-card,.journal-card') ? Array.from(element.parentElement!.children).indexOf(element) % 3 : 0;
      element.style.setProperty('--reveal-delay', `${index * 80}ms`);
      element.dataset.reveal = 'pending';
      observer.observe(element);
    });
    const showAll = () => { if (preference.matches) candidates.forEach(reveal); };
    const focus = (event: FocusEvent) => {
      if (event.target instanceof Element) {
        const element = event.target.closest<HTMLElement>('[data-reveal="pending"]');
        if (element) reveal(element);
      }
    };
    const rings = Array.from(document.querySelectorAll<HTMLElement>('.trainer-rings'));
    const ringObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      (entry.target as HTMLElement).dataset.motionVisible = String(entry.isIntersecting);
    }));
    rings.forEach(ring => ringObserver.observe(ring));
    const visibility = () => rings.forEach(ring => { ring.dataset.pageHidden = String(document.hidden); });
    visibility();
    preference.addEventListener('change', showAll);
    document.addEventListener('focusin', focus);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      observer.disconnect(); ringObserver.disconnect();
      preference.removeEventListener('change', showAll);
      document.removeEventListener('focusin', focus);
      document.removeEventListener('visibilitychange', visibility);
      candidates.forEach(element => {
        delete element.dataset.reveal;
        element.classList.remove('scroll-reveal', 'scroll-reveal-photo');
        element.style.removeProperty('--reveal-delay');
      });
      rings.forEach(ring => { delete ring.dataset.motionVisible; delete ring.dataset.pageHidden; });
    };
  }, [pathname]);
  return null;
}
