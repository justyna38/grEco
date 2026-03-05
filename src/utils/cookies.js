const isBrowser = typeof document !== 'undefined';

export function getCookie(name) {
  if (!isBrowser) return null;

  const nameEQ = `${name}=`;
  const parts = document.cookie.split(';');

  for (let part of parts) {
    part = part.trim();
    if (part.startsWith(nameEQ)) {
      return decodeURIComponent(part.substring(nameEQ.length));
    }
  }

  return null;
}

export function setCookie(name, value, days) {
  if (!isBrowser) return;

  const expires = (() => {
    if (!days) return '';
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    return `; expires=${date.toUTCString()}`;
  })();

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}${expires}; path=/; SameSite=Lax`;
}

export function deleteCookie(name) {
  if (!isBrowser) return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}

