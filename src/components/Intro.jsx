import { profile } from "@/data/content";
import { sprites } from "@/data/sprites";
import { PixelSprite } from "./PixelSprite";
import { ThemeToggle } from "./ThemeToggle";

export const Intro = () => (
  <header>
    <div className="flex justify-end">
      <ThemeToggle />
    </div>

    <div className="mt-8 grid items-end gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
      <div>
        <h1 className="font-pixel text-3xl leading-tight uppercase sm:text-4xl">{profile.name}</h1>
        <p className="mt-5 text-xl leading-snug text-pretty">{profile.tagline}</p>
        <p className="mt-3 text-muted text-pretty">{profile.context}</p>
      </div>
      <PixelSprite
        rows={sprites.desk}
        scale={6}
        title="Pixel-art desk with a monitor showing code, a mug and a PC tower"
        className="mx-auto h-auto max-w-full sm:mx-0"
      />
    </div>

    <nav aria-label="Profile links" className="mt-10 flex flex-wrap gap-3">
      {profile.links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          {...(href.startsWith("https://") && { target: "_blank", rel: "noreferrer" })}
          className="pixel-panel px-3 py-1.5 font-mono text-sm hover:text-accent"
        >
          {label}
        </a>
      ))}
    </nav>
  </header>
);
