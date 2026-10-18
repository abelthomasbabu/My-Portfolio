import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { sprites } from "@/data/sprites";
import { PixelSprite } from "./PixelSprite";
import { Section } from "./Section";

export const Projects = () => (
  <Section id="work" number="01" title="Selected work">
    <div className="space-y-6">
      {projects.map((project) => (
        <article key={project.title} className="pixel-panel flex flex-col gap-4 p-5 sm:flex-row sm:gap-5">
          <PixelSprite rows={sprites[project.icon]} scale={4} className="shrink-0" />
          <div className="min-w-0">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="mt-1.5 leading-relaxed text-muted text-pretty">{project.summary}</p>
            <p className="mt-3 font-mono text-sm leading-relaxed text-accent">
              <span className="text-amber">&gt;</span> {project.metric}
            </p>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted">
              {project.stack.join(" · ")}
            </p>
            {project.links.length > 0 && (
              <div className="mt-3 flex gap-4 text-sm">
                {project.links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-0.5 underline decoration-muted/50 hover:text-accent hover:decoration-accent"
                  >
                    {label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  </Section>
);
