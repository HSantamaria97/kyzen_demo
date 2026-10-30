import type { ReactNode } from 'react';
export function Section({ children, className = '', id }: {
    children: ReactNode;
    className?: string;
    id?: string;
}) { return <section id={id} className={'section ' + className}><div className="container">{children}</div></section>; }
