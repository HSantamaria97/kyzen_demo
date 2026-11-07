'use client';

import { useEffect, useId, useState } from 'react';
import { aceCredential, aceIsCurrent } from '../../lib/credentials';

/** Original Kyzen ornament, not an ACE logo or an issuing-body seal. */
function CredentialEmblem({ medical = false }: { medical?: boolean }) {
  const id = useId().replace(/:/g, '');
  if (medical) return <svg className="credential-emblem" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-heart`} x1="20" y1="14" x2="61" y2="67" gradientUnits="userSpaceOnUse"><stop stopColor="#F56A74" /><stop offset=".45" stopColor="#D9364C" /><stop offset="1" stopColor="#A91D36" /></linearGradient>
      <linearGradient id={`${id}-cross`} x1="34" y1="25" x2="53" y2="55" gradientUnits="userSpaceOnUse"><stop stopColor="#6FD0FA" /><stop offset=".5" stopColor="#189CDE" /><stop offset="1" stopColor="#0968A7" /></linearGradient>
    </defs>
    <path d="M40 69C30 62 9 46 9 29C9 18 16 12 26 12C32 12 37 15 40 20C43 15 48 12 54 12C64 12 71 18 71 29C71 46 50 62 40 69Z" fill={`url(#${id}-heart)`} />
    <path d="M16 28C16 21 20 18 26 18C29 18 31 19 33 21" stroke="#FFD0D4" strokeOpacity=".65" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 25h12v10h10v12H46v10H34V47H24V35h10V25Z" fill="#7C172E" opacity=".35" transform="translate(0 2)" />
    <path d="M34 25h12v10h10v12H46v10H34V47H24V35h10V25Z" fill={`url(#${id}-cross)`} stroke="#C9F0FF" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M36 27h8M26 37h7" stroke="#E2F8FF" strokeOpacity=".7" strokeLinecap="round" />
  </svg>;
  return <svg className="credential-emblem" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-metal`} x1="16" y1="6" x2="65" y2="75" gradientUnits="userSpaceOnUse"><stop stopColor="#F1F7FC" /><stop offset=".3" stopColor="#A5BBCA" /><stop offset=".6" stopColor="#415D73" /><stop offset="1" stopColor="#D6E5EF" /></linearGradient>
      <linearGradient id={`${id}-face`} x1="20" y1="12" x2="60" y2="70" gradientUnits="userSpaceOnUse"><stop stopColor="#213D53" /><stop offset="1" stopColor="#0B1621" /></linearGradient>
      <linearGradient id={`${id}-blue`} x1="26" y1="22" x2="55" y2="60" gradientUnits="userSpaceOnUse"><stop stopColor="#9CDEFF" /><stop offset=".45" stopColor="#2DA9EF" /><stop offset="1" stopColor="#0867A6" /></linearGradient>
    </defs>
    <circle cx="40" cy="42" r="35" fill="#000" opacity=".22" />
    <circle cx="40" cy="39" r="35" fill={`url(#${id}-metal)`} />
    <circle cx="40" cy="39" r="32.5" fill={`url(#${id}-face)`} stroke="#0C1C28" />
    <circle cx="40" cy="39" r="27.5" stroke="#B6D1E3" strokeOpacity=".3" strokeWidth=".75" />
    <path d="M16 25A28 28 0 0 1 58 17" stroke="#E6F5FF" strokeOpacity=".65" strokeLinecap="round" />
    <path d="M23 64A29 29 0 0 0 66 48" stroke="#239EE4" strokeWidth="2" strokeLinecap="round" />
    {medical ? <>
      <path d="M34 23h12v10h10v12H46v10H34V45H24V33h10V23Z" fill="#050D14" transform="translate(0 2)" />
      <path d="M34 23h12v10h10v12H46v10H34V45H24V33h10V23Z" fill={`url(#${id}-metal)`} />
      <path d="M37 27h6v10h10v4H43v10h-6V41H27v-4h10V27Z" fill={`url(#${id}-blue)`} />
      <path d="M35 24h10M25 34h8" stroke="#fff" strokeOpacity=".7" strokeLinecap="round" />
    </> : <>
      <path d="m25 48 9-22h9l-9 22h-9Zm13 0 9-22h9l-9 22h-9Z" fill="#050D14" transform="translate(0 2)" />
      <path d="m25 46 9-22h9l-9 22h-9Z" fill={`url(#${id}-metal)`} />
      <path d="m38 46 9-22h9l-9 22h-9Z" fill={`url(#${id}-blue)`} />
      <path d="M25 54h30" stroke="#D0E7F7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M35 25h6M48 25h6" stroke="#fff" strokeOpacity=".65" strokeLinecap="round" />
    </>}
    <path d="M12 39h3m50 0h3M40 10v3m0 52v3" stroke="#B4D5E9" strokeOpacity=".6" />
  </svg>;
}

export function CredentialBadges() {
  // Start unverified during SSR; recheck in the browser so a static build cannot
  // continue advertising an active credential after its configured expiry.
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    const update = () => setCurrent(aceIsCurrent(aceCredential, new Date()));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return <ul className="hero-credentials" aria-label="Professional credentials">
    <li className="credential-item">
      {aceCredential.authorizedLogoSrc
        ? <img className="credential-official-logo" src={aceCredential.authorizedLogoSrc} alt="American Council on Exercise" width="72" height="72" />
        : <CredentialEmblem />}
      <div className="credential-label">
        <strong>{current ? <>ACE Certified<br />Personal Trainer</> : <>ACE Certified<br />Personal Trainer</>}</strong>
        {current && <span className="credential-status is-current">Certification verified</span>}
        {aceCredential.status === 'expired' && <span className="credential-status">Certification not current</span>}
      </div>
    </li>
    <li className="credential-item">
      <CredentialEmblem medical />
      <div className="credential-label"><strong>CPR Certified</strong></div>
    </li>
  </ul>;
}
