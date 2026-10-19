import { profile, sections } from "@/data/content";
import { useActiveSection } from "@/lib/useReveal";
import { ThemeToggle } from "./ThemeToggle";

const ids = sections.map((s) => s.id);

export const Header = () => {
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-20 border-b-2 border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1040px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-pixel text-base uppercase hover:text-accent">
          {profile.name.split(" ").map((w) => w[0]).join("")}
          <span className="pixel-blink text-accent">_</span>
        </a>

        <nav aria-label="Sections" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className="border-2 border-transparent px-3 py-1.5 font-pixel text-xs text-muted uppercase transition-colors duration-100 hover:text-fg aria-[current]:border-line aria-[current]:bg-accent aria-[current]:text-on-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
