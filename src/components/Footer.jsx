import { profile } from "@/data/content";

export const Footer = () => (
  <footer className="mt-24 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t-2 border-line pt-6 text-sm text-muted">
    <a
      href={`mailto:${profile.email}`}
      className="underline decoration-muted/50 hover:text-accent hover:decoration-accent"
    >
      {profile.email}
    </a>
    <span className="font-mono text-xs">
      {profile.location} · {new Date().getFullYear()}
    </span>
  </footer>
);
