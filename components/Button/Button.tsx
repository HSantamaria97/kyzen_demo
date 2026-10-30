import Link from 'next/link';
import type { ReactNode } from 'react';
export function Button({ href = '/contact/', children, secondary = false }: {
    href?: string;
    children: ReactNode;
    secondary?: boolean;
}) { return <Link className={secondary ? 'button button-secondary' : 'button'} href={href}>{children}<span aria-hidden="true">↗</span></Link>; }
