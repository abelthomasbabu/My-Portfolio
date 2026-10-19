import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { sprites } from "@/data/sprites";
import { PixelSprite } from "./PixelSprite";
import { Section } from "./Section";

// The icon animates while the card is hovered or has keyboard focus.
const Project = ({ project }) => {
  const [active, setActive] = useState(false);
  const on = () => setActive(true);
  const off = () => setActive(false);

  return (
    <div className="reveal">
      <article
        onPointerEnter={on}
        onPointerLeave={off}
        onFocus={on}
        onBlur={off}
        className="pixel-panel is-hoverable grid gap-6 p-6 sm:grid-cols-[132px_minmax(0,1fr)] sm:p-8"
      >
        <div className="flex items-center gap-5 sm:flex-col sm:items-start">
          <PixelSprite frames={sprites[project.icon]} scale={5} playing={active} interval={260} className="shrink-0" />
          <div>
            <p className="font-pixel text-3xl text-accent">{project.highlight.value}</p>
            <p className="mt-1 text-sm leading-snug text-muted">{project.highlight.label}</p>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 leading-relaxed text-muted text-pretty">{project.summary}</p>
          <p className="mt-4 font-mono text-[13px] leading-relaxed">
            <span className="text-amber">&gt;</span> {project.metric}
          </p>

          <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="border-2 border-line px-2 py-0.5 font-mono text-xs">
                {tech}
              </li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="mt-5 flex gap-4 text-sm">
              {project.links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label}: ${project.title}`}
                  className="inline-flex min-h-11 items-center gap-1 font-pixel text-xs uppercase underline decoration-2 underline-offset-4 hover:text-accent"
                >
                  View on {label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export const Projects = () => (
  <Section id="work" number="01" title="Selected work">
    <div className="space-y-6">
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  </Section>
);
