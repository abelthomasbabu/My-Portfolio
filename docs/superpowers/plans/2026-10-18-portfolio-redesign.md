# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the space-themed portfolio with a minimal single-column page that leads with AI engineering.

**Architecture:** All copy lives in one data module (`src/data/content.js`); small presentational components render it on one route. Theme is a `dark` class on `<html>`, set before first paint from `localStorage` or `prefers-color-scheme`.

**Tech Stack:** React 19, Vite 6, Tailwind v4, react-router 7, Geist / Geist Mono (`@fontsource-variable`), Vitest 3 (content tests only).

**Spec:** `docs/superpowers/specs/2026-10-18-portfolio-redesign-design.md`

## Global Constraints

- Resume (Oct 2026) is the source of truth for every fact; no new claims.
- Column max width 680px (`max-w-[680px]`), 16px side padding at 375px, no horizontal scroll.
- One accent colour, used only for links and metrics.
- No animation except link hover; `prefers-reduced-motion` disables transitions.
- LinkedIn URL: `https://www.linkedin.com/in/abel-thomas-b-0270b5134/`.
- RAG and Hydra projects have no links and no "on request" text.
- Resume served at `/resume/Abel-Thomas-Babu-Resume.pdf`.

## Review Focus

- `localStorage` blocked (private mode): theme still follows the system, toggle still works for the session.
- No JS yet / first paint: no flash of the wrong theme (inline script in `index.html`).
- 375px wide: long stack lines and metric lines wrap, nothing overflows.
- A project with no `links` renders no empty link row.
- Unknown route renders NotFound with a link home.

Tests pinning the 1st and 4th live in Task 1 and Task 3; the rest are checked in Task 5.

---

### Task 1: Content module and its tests

**Files:**
- Create: `src/data/content.js`, `src/data/content.test.js`
- Modify: `package.json` (add `vitest@3` dev dep, script `"test": "vitest run"`)
- Copy: `C:\Users\abelt\Downloads\Abel Thomas Babu Resume.pdf` → `public/resume/Abel-Thomas-Babu-Resume.pdf`; delete `public/resume/Abel Thomas Babu.pdf`

**Interfaces:**
- Produces: named exports
  - `profile: { name, tagline, context, currently, email, location, links: {label, href}[] }`
  - `projects: { title, summary, metric, stack: string[], links: {label, href}[] }[]` (3, order: RAG, Vision RL agent, Hydra)
  - `experience: { company, role, period, location, stack, bullets: string[] }[]` (Nezuna, Apps Team)
  - `skills: { group, items: string[] }[]` (AI / ML, Backend, Frontend / Mobile, Tools)
  - `education: { school, degree, period, note }[]`

- [ ] **Step 1: Write failing tests** in `content.test.js`:
  - every `href` in `profile.links` and all `projects[].links` starts with `https://`, `mailto:` or `/`;
  - no `href` equals `#blank` or contains `abel-thomas-babu` under `linkedin.com/in/`;
  - `projects.map(p => p.title)` has length 3 and RAG first; RAG and Hydra `links` are `[]`;
  - every `/`-relative href exists under `public/` (`fs.existsSync`);
  - `experience[0].company === "Nezuna Technologies"`.
- [ ] **Step 2:** `npm test` → FAIL (module missing).
- [ ] **Step 3:** Write `content.js` with copy taken from the resume and spec. Tagline: "AI engineer working on LLMs and RAG, on a Python backend foundation."
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Commit `feat: add portfolio content module`.

### Task 2: Theme, fonts and global styles

**Files:**
- Modify: `src/index.css` (replace entirely), `index.html`
- Create: `src/components/ThemeToggle.jsx`, `src/lib/theme.js`, `src/lib/theme.test.js`
- Modify: `package.json` (add `@fontsource-variable/geist`, `@fontsource-variable/geist-mono`)

**Interfaces:**
- Produces: `getStoredTheme(): "light" | "dark" | null` and `setStoredTheme(t)` in `src/lib/theme.js`, both no-throw when storage is unavailable; `<ThemeToggle />`.
- CSS tokens on `:root` and `.dark`: `--bg`, `--fg`, `--muted`, `--border`, `--accent`; Tailwind `@theme` maps them to `bg`, `fg`, `muted`, `line`, `accent`; `@custom-variant dark (&:where(.dark, .dark *))`.

- [ ] **Step 1: Failing test** `theme.test.js`: with `localStorage.getItem` throwing, `getStoredTheme()` returns `null` and `setStoredTheme("dark")` does not throw (vitest `environment: "jsdom"` via file comment; add `jsdom` dev dep).
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement `theme.js`, `ThemeToggle` (sun/moon from lucide, `aria-label`), new `index.css` (font imports, tokens, base body styles, reduced-motion rule; Star Jedi font and all keyframes removed). In `index.html`: inline pre-paint script applying `dark` class; new title "Abel Thomas Babu: AI Engineer" and description from tagline; OG tags updated.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Commit `feat: new theme tokens, fonts and toggle`.

### Task 3: Page sections

**Files:**
- Create: `src/components/Section.jsx`, `Intro.jsx`, `Projects.jsx`, `Experience.jsx`, `Skills.jsx`, `Education.jsx`, `Footer.jsx` (replace old), `src/components/Projects.test.jsx`
- Modify: `src/pages/Home.jsx`, `src/pages/NotFound.jsx`, `src/App.jsx` (drop `Toaster`)
- Modify: `package.json` (add `@testing-library/react` dev dep)

**Interfaces:**
- Consumes: Task 1 exports; `ThemeToggle` from Task 2.
- Produces: `<Section title id>{children}</Section>`; each section component takes no props and reads `content.js`.

- [ ] **Step 1: Failing test** `Projects.test.jsx`: renders 3 `article`s; the RAG article contains "0.94" and has no `a` element.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement the components (mono font for dates, metrics, stack; metrics in accent), compose in `Home.jsx` in spec order, `NotFound` with link to `/`.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Commit `feat: minimal single-column page`.

### Task 4: Remove old code and dependencies

**Files:**
- Delete: `src/components/{AboutSection,ContactSection,DarkAndLight,HeroSection,Navbar,ProjectSection,SkillsSection,StarBackground}.jsx`, `src/components/ui/`, `src/hooks/use-toast.js`, `src/assets/react.svg`, `public/vite.svg`, `public/projects/portfolio.png`, `public/projects/flaskapp.png`
- Modify: `package.json` (uninstall `@emailjs/browser`, `@radix-ui/react-toast`, `@radix-ui/themes`, `class-variance-authority`), `README.md` (tech stack, description)

- [ ] **Step 1:** Delete files, uninstall packages.
- [ ] **Step 2:** `npm run lint && npm test && npm run build` → all pass, no unresolved imports.
- [ ] **Step 3:** Commit `chore: remove old theme, toast and EmailJS`.

### Task 5: Browser check

- [ ] **Step 1:** Run `npm run dev`; in the browser pane check desktop and 375px, light and dark, and with `localStorage` cleared.
- [ ] **Step 2:** Click every link; confirm resume PDF opens; visit `/nope` for NotFound.
- [ ] **Step 3:** Fix anything found, re-run `npm run lint && npm test && npm run build`, commit `fix: ...` if needed.
