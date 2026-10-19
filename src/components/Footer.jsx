import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";
import { sprites } from "@/data/sprites";
import { PixelSprite } from "./PixelSprite";

const social = profile.links.filter((l) => l.href.startsWith("https://"));

export const Footer = () => (
  <footer className="pt-28">
    <div className="reveal grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
      <div>
        <h2 className="max-w-[18ch] font-pixel text-2xl uppercase text-balance sm:text-4xl">
          Have a project in mind? Let's talk.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex min-h-11 items-center font-mono text-base break-all underline decoration-accent decoration-2 underline-offset-[6px] transition-colors duration-150 hover:text-accent sm:text-xl"
        >
          {profile.email}
        </a>
      </div>
      <PixelSprite
        frames={sprites.bridge}
        scale={5}
        interval={500}
        title="Pixel-art Tyne Bridge at night over a shimmering river, Newcastle"
        className="h-auto w-full max-w-[320px] border-2 border-line bg-[#0b1220] shadow-[4px_4px_0_var(--line)]"
      />
    </div>

    <div className="dither mt-16" aria-hidden="true" />
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-sm text-muted">
      <span className="font-mono text-xs">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </span>
      <div className="flex gap-2">
        {social.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1 px-2 font-mono transition-colors duration-150 hover:text-accent"
          >
            {label}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
