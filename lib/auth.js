// Admin auth guard - check localStorage session
export function isAdminAuthenticated() {
  if (typeof window === 'undefined') return false;
  const auth = localStorage.getItem('dub-admin-authenticated') === 'true';
  const ts = localStorage.getItem('dub-admin-timestamp');
  // Session expires after 24 hours
  if (ts && Date.now() - parseInt(ts) > 24 * 60 * 60 * 1000) {
    localStorage.removeItem('dub-admin-authenticated');
    localStorage.removeItem('dub-admin-timestamp');
    return false;
  }
  return auth;
}

export function logoutAdmin() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('dub-admin-authenticated');
  localStorage.removeItem('dub-admin-timestamp');
}
