// Remembers the user's own birth details in localStorage — same simple
// pattern as ThemeToggle/LanguageToggle, just with a compound value since
// a birthday has several fields. Only BirthDateForm instances that pass
// `remember` ever read/write this; partner/"their" birthday forms
// (Compatibility, Romance) never touch it, so a saved value always means
// "the user's own birthday", never someone they looked up.
const KEY = 'birthDate';

export function loadBirthMemory() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveBirthMemory(fields) {
  try {
    const existing = loadBirthMemory() || {};
    localStorage.setItem(KEY, JSON.stringify({ ...existing, ...fields }));
  } catch {
    // localStorage can throw (private browsing, quota) — remembering the
    // birthday is a nice-to-have, never worth breaking form submission over.
  }
}
