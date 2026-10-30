import { Button } from '../Button/Button';
export function PageIntro({ eyebrow, title, description }: {
    eyebrow: string;
    title: string;
    description: string;
}) { return <section className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="muted mt-6 max-w-2xl">{description}</p><div className="mt-8"><Button>Book a free consultation</Button></div></div></section>; }
