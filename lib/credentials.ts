export type AceCredential = {
  status: 'unverified' | 'verified' | 'expired';
  verifiedOn: string | null;
  expiresOn: string | null;
  /** Local path to an authorized, unmodified official asset. Otherwise leave null. */
  authorizedLogoSrc: string | null;
};

export const aceCredential: AceCredential = {
  status: 'unverified',
  verifiedOn: null,
  expiresOn: null,
  authorizedLogoSrc: '/assets/ace-logo.png',
};

export function aceIsCurrent(credential: AceCredential, now: Date) {
  if (credential.status !== 'verified' || !credential.verifiedOn || !credential.expiresOn) return false;
  const verified = Date.parse(`${credential.verifiedOn}T00:00:00Z`);
  const expires = Date.parse(`${credential.expiresOn}T23:59:59.999Z`);
  return Number.isFinite(verified) && Number.isFinite(expires) && verified <= now.getTime() && expires >= now.getTime();
}
