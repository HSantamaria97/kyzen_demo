# Hero credentials

Configure ACE in `lib/credentials.ts`. The default is unverified; no active ACE certification is claimed.

After checking Francis's credential, set `status` to `verified`, `verifiedOn` to the date checked, and `expiresOn` to the credential's expiration date (both `YYYY-MM-DD`). All three are required for the active label. An expired date or a future verification date prevents the active label. Dates are evaluated in UTC, through the end of the expiration day. The client checks at mount and every minute, including for static exports. Dates are not displayed in the hero.

Use `expired` to explicitly mark a credential not current. Leave dates null until confirmed.

`authorizedLogoSrc` is optional. The current asset is the ACE logo supplied by the site owner, copied without modification. Its display does not change the certification status; verification remains pending until confirmed. Set this path only to a local, authorized, unmodified official ACE asset. The fallback SVG is original Kyzen decoration, not an ACE logo, seal, or endorsement.

The CPR & First Aid emblem is original SVG artwork. It carries no issuing organization's branding and does not mention AED. The qualification text is supplied by the site owner.
