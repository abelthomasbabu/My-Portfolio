// Theme choice is a per-viewer convenience: storage may be blocked, so never throw.
const KEY = "theme";

export function getStoredTheme() {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function setStoredTheme(theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // Storage unavailable: the choice lasts for this page view only.
  }
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
