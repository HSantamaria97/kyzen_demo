'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
type Draft = {
    name: string;
    email: string;
    phone: string;
    goals: string;
};
const key = 'kyzen-consultation-draft';
export function ContactForm({compact=false}:{compact?:boolean}) { const formRef = useRef<HTMLFormElement>(null); const [status, setStatus] = useState(''); useEffect(() => { try {
    const draft = JSON.parse(localStorage.getItem(key) || 'null') as Partial<Draft> | null;
    if (draft && formRef.current) {
        for (const field of ['name', 'email', 'phone', 'goals'] as const) {
            const input = formRef.current.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement | null;
            if (input && typeof draft[field] === 'string')
                input.value = draft[field] as string;
        }
        setStatus('Your saved draft is ready to edit. No request has been sent.');
    }
}
catch { } }, []); function save(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (!event.currentTarget.reportValidity())
    return; try {
    localStorage.setItem(key, JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))));
    setStatus('Draft saved on this device. No request has been sent.');
}
catch {
    setStatus('Your browser could not save this draft. No request has been sent. Please keep a copy of your details.');
} } return <form ref={formRef} onSubmit={save} className={compact ? "contact-form compact-form" : "contact-form"}><p className="eyebrow">Your consultation</p><div className="grid gap-x-5 md:grid-cols-2"><label htmlFor="name">Full name<input id="name" name="name" autoComplete="name" placeholder="Full name" required maxLength={100}/></label><label htmlFor="phone">Phone <span className="muted">(optional)</span><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" maxLength={40}/></label></div><label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" placeholder="Email address" required maxLength={200}/></label><label htmlFor="goals">What are you working toward?<textarea id="goals" name="goals" rows={compact?2:4} maxLength={2000} placeholder="Your goals / notes (optional)"/></label><p className="small muted mb-5">This draft stays on your device. To book a consultation, contact Kyzen directly.</p><button className="button w-full" type="submit">Save consultation draft <span aria-hidden="true">↗</span></button><p role="status" aria-live="polite" className="form-status mt-4">{status}</p></form>; }
