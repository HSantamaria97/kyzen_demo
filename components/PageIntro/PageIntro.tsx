export function PageIntro({ eyebrow, title, description }: {
    eyebrow: string;
    title: string;
    description: string;
}) { return <section className="page-intro"><div className="site-container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="muted mt-6 max-w-2xl">{description}</p></div></section>; }
