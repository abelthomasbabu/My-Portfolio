import { profile } from "@/data/content";

export const Footer = () => (
  <footer className="mt-20 flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-line pt-6 text-sm text-muted">
    <a
      href={`mailto:${profile.email}`}
      className="underline decoration-line transition-colors hover:text-accent hover:decoration-accent"
    >
      {profile.email}
    </a>
    <span>
      {profile.location} · {new Date().getFullYear()}
    </span>
  </footer>
);
