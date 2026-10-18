# Portfolio redesign: design

Date: 18 Oct 2026. Branch: `redesign`.

## Goal

Replace the space-themed, tutorial-style portfolio with a calm, text-first single page
that a recruiter can read in under a minute. Lead with AI engineering (LLMs, RAG,
applied ML); full-stack work is supporting evidence. The resume (Oct 2026) is the
source of truth for all content.

## Success criteria

- One page, one column (~680px), readable at 375px wide with no horizontal scroll.
- Every fact on the page matches the current resume; no stale or broken links.
- Light and dark themes (system default, manual toggle); no decorative animation.
- `npm run build` and `npm run lint` pass.

## Content, top to bottom

1. **Intro**: name; "AI engineer working on LLMs and RAG, on a Python backend
   foundation."; "Software Engineer at Nezuna · MSc Advanced CS (Distinction),
   Newcastle"; "Currently: extending my RAG assistant with LangGraph agent workflows."
   Links: GitHub (github.com/abelthomasbabu), LinkedIn
   (linkedin.com/in/abel-thomas-b-0270b5134), email, Resume (PDF).
2. **Selected work** (3 entries: one sentence, headline metric, stack, links):
   - AI Papers RAG Assistant: hybrid dense + BM25 retrieval; 0.94 faithfulness,
     0.94 context recall (RAGAS); Docker + Kubernetes. No link (repo not public),
     no "on request" note.
   - Vision-based RL agent: YOLOv8s + DQN; inference 64–67 ms → 9–14.5 ms;
     0.994 mAP@0.5; generalises across 3 games. Link: GitHub repo.
   - Hydra flood predictor: IoT (Arduino, ESP8266) + logistic regression, Firebase.
     No link: the repo `hydra-flood-predictor` holds only a LICENSE file (checked
     18 Oct); add the link once code is pushed.
   - Contact manager is removed.
3. **Experience**: Nezuna Technologies (Software Engineer, Aug 2026 – present, remote):
   shift scheduler, invoicing module. Apps Team Technologies (Software Developer
   Intern, Dec 2022 – Feb 2023): iOS UI screens, ~35% scrolling improvement.
4. **Skills**: four grouped lines from the resume (AI/ML, Backend, Frontend/Mobile,
   Tools). No filters.
5. **Education**: Newcastle MSc (Distinction, Vice Chancellor's International
   Scholarship, NCL+ Award); Saintgits BTech (First Class).
6. **Footer**: email, Newcastle upon Tyne, year.

## Visual design

- Fonts: Geist (text), Geist Mono (dates, metrics, stack tags), self-hosted via npm.
- Neutral greys plus one accent colour, used only for links and metrics.
- Theme: follows `prefers-color-scheme`; small toggle stores the choice in
  `localStorage` (wrapped in try/catch).
- Motion: link hover only; nothing animates under `prefers-reduced-motion`.

## Code

- Keep React 19, Vite, Tailwind v4, react-router (needed for later case-study pages).
- All copy lives in `src/data/content.js`; components only render it.
- Components: `Intro`, `Section`, `Projects`, `Experience`, `Skills`, `Education`,
  `Footer`, `ThemeToggle`.
- Delete: `StarBackground`, `DarkAndLight`, `Navbar`, old sections, toast system
  (`ui/toast*`, `use-toast`), `ContactSection` and EmailJS.
- Remove unused dependencies: `@emailjs/browser`, `@radix-ui/react-toast`,
  `@radix-ui/themes`, `class-variance-authority`.
- Replace `public/resume/Abel Thomas Babu.pdf` with the current resume at
  `public/resume/Abel-Thomas-Babu-Resume.pdf`.
- Update `index.html` title, description and Open Graph text; README tech stack.

## Testing

- `npm run build`, `npm run lint`.
- In the browser pane: desktop and 375px widths, light and dark, every link opens
  the right target, resume PDF downloads.

## Out of scope (later)

- Case-study pages for the RAG assistant and the RL agent.
- New Open Graph preview image.
- LinkedIn rewrite (drafted after the site copy is final).
