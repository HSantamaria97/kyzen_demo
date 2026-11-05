# Kyzen

A multi-page business website and blog using Next.js App Router, TypeScript, React, and Tailwind CSS v4. Based on Kyzen’s supplied reference and authentic training photography.

## Develop

Run `npm install`, then `npm run dev`. Open http://127.0.0.1:3000.

## Build

Run `npm run build`. Next generates a static export in `out/`, and the postbuild script removes only raw uploaded photo copies from that export. Original photos in `public/` remain untouched. Optimized images in `public/assets/` are included.

This project is local-only. Do not deploy, publish, or upload the source to a hosting service unless the user explicitly requests it. Preview with `npm run dev`.

## Structure

- `app/`: Home, Training, About, Blog, Locations, FAQ, Gallery, and Contact pages with individual metadata.
- `app/blog/[slug]/`: statically generated article pages, including article metadata, further reading, and related posts.
- `lib/blog.ts`: typed article content. Add an entry with a unique slug, category, excerpt, image, sections, and sources; the blog index and article routes update automatically on the next build. No external CMS or account is required.
- `components/<Component>/`: typed shared navigation, sections, CTA, service cards, gallery, FAQ, and contact form.
- `app/globals.css`: centralized colors, typography, spacing, borders, and component styles. Mobile-first Tailwind utilities handle layouts and spacing.
- `public/assets/`: selected optimized images from the supplied photos.

One primary font, Inter, is loaded from Google Fonts with system fallbacks. Replace with a self-hosted font if external font requests are undesirable.

## Before launch

The consultation form intentionally saves a draft in the visitor’s browser only. It does not send a request. Connect an actual booking/contact service and update the disclosure before accepting real inquiries. Add verified direct business contact details, and confirm service areas, rates, availability, and consultation copy. No testimonials, credentials, results, or contact information were invented.
