import { profile } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

export const Intro = () => (
  <header>
    <div className="flex items-start justify-between gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
      <ThemeToggle />
    </div>
    <p className="mt-4 text-lg leading-relaxed text-pretty">{profile.tagline}</p>
    <p className="mt-2 text-muted text-pretty">{profile.context}</p>
    <p className="mt-6 text-sm text-muted">
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
        Currently
      </span>{" "}
      {profile.currently}
    </p>
    <nav aria-label="Profile links" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
      {profile.links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          {...(href.startsWith("https://") && { target: "_blank", rel: "noreferrer" })}
          className="underline decoration-muted/50 transition-colors hover:text-accent hover:decoration-accent"
        >
          {label}
        </a>
      ))}
    </nav>
  </header>
);
