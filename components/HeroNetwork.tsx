'use client';

import { useEffect, useRef } from 'react';

/** Moving points connect and disconnect as they pass, forming new polygons. */
export function HeroNetwork() {
 const canvas = useRef<HTMLCanvasElement>(null);
 useEffect(() => {
  const element = canvas.current;
  const context = element?.getContext('2d');
  if (!element || !context) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, frame = 0, elapsed = 0, previous = 0;
  let visible = true;
  const points = Array.from({ length: 65 }, (_, i) => ({
   x: ((i * 137.508) % 1000) / 1000,
   y: ((i * 239.173 + 73) % 1000) / 1000,
   phase: i * 2.399,
  }));
  const draw = () => {
   context.clearRect(0, 0, width, height);
   const count = width < 768 ? 32 : points.length;
   const reach = width < 768 ? 155 : 230;
   const positions = points.slice(0, count).map(p => ({
    x: p.x * width + Math.sin(elapsed * .14 + p.phase) * 80,
    y: p.y * height + Math.cos(elapsed * .11 + p.phase * .8) * 70,
   }));
   positions.forEach((point, i) => {
    for (let j = i + 1; j < positions.length; j++) {
     const other = positions[j];
     const distance = Math.hypot(point.x - other.x, point.y - other.y);
     if (distance >= reach) continue;
     context.strokeStyle = `rgba(35,166,245,${.32 * (1 - distance / reach)})`;
     context.lineWidth = 1;
     context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke();
    }
    context.fillStyle = 'rgba(69,183,255,.45)';
    context.beginPath(); context.arc(point.x, point.y, 1.6, 0, Math.PI * 2); context.fill();
   });
  };
  const tick = (time: number) => {
   if (previous) elapsed += Math.min((time - previous) / 1000, .05);
   previous = time;
   draw();
   frame = requestAnimationFrame(tick);
  };
  const start = () => {
   cancelAnimationFrame(frame); previous = 0;
   draw();
   if (visible && !motion.matches && !document.hidden) frame = requestAnimationFrame(tick);
  };
  const resize = new ResizeObserver(() => {
   const rect = element.getBoundingClientRect();
   width = rect.width; height = rect.height;
   const ratio = Math.min(window.devicePixelRatio || 1, 2);
   element.width = Math.round(width * ratio); element.height = Math.round(height * ratio);
   context.setTransform(ratio, 0, 0, ratio, 0, 0);
   start();
  });
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start(); });
  resize.observe(element); intersection.observe(element);
  motion.addEventListener('change', start);
  document.addEventListener('visibilitychange', start);
  return () => {
   cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect();
   motion.removeEventListener('change', start); document.removeEventListener('visibilitychange', start);
  };
 }, []);
 return <div className="hero-network" aria-hidden="true"><canvas ref={canvas} /></div>;
}
