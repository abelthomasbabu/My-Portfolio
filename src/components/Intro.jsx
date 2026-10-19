import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/content";
import { sprites } from "@/data/sprites";
import { PixelField } from "./PixelField";
import { PixelSprite } from "./PixelSprite";

const resume = profile.links.find((l) => l.label === "Resume");
const social = profile.links.filter((l) => l.href.startsWith("https://"));

export const Intro = () => (
  <div id="top" className="relative isolate">
    {/* Full-bleed backdrop behind the centred column. */}
    <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
      <PixelField />
    </div>

    <div className="grid items-center gap-12 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[minmax(0,1fr)_auto]">
      <div>
        <p className="reveal inline-flex items-center gap-2 border-2 border-line bg-surface px-3 py-1 font-pixel text-xs uppercase">
          <span aria-hidden="true" className="pixel-blink size-2 bg-accent" />
          {profile.role} · {profile.location}
        </p>

        <h1 className="reveal mt-6 font-pixel text-[2.4rem] leading-[1.05] uppercase text-balance sm:text-6xl">
          {profile.name}
        </h1>

        <p className="reveal mt-6 max-w-[38ch] text-xl leading-snug text-pretty sm:text-2xl">
          {profile.tagline}
        </p>
        <p className="reveal mt-3 max-w-[60ch] text-muted text-pretty">{profile.context}</p>

        <div className="reveal mt-9 flex flex-wrap items-center gap-4">
          <a href={resume.href} className="pixel-button inline-flex min-h-11 items-center gap-2 px-5 font-pixel text-sm uppercase">
            <ArrowDownToLine size={16} aria-hidden="true" />
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="pixel-panel inline-flex min-h-11 items-center gap-2 px-5 font-pixel text-sm uppercase hover:text-accent"
          >
            <Mail size={16} aria-hidden="true" />
            Email
          </a>
          {social.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1 px-2 font-mono text-sm text-muted underline decoration-2 underline-offset-4 transition-colors duration-150 hover:text-accent"
            >
              {label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="reveal mx-auto lg:mx-0">
        <PixelSprite
          frames={sprites.desk}
          scale={8}
          interval={380}
          title="Pixel-art desk: code types itself on the monitor while a mug steams"
          className="h-auto w-[256px] max-w-full drop-shadow-[6px_6px_0_var(--line)] sm:w-[288px]"
        />
      </div>
    </div>
  </div>
);
