import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Section } from "./Section";

export const Projects = () => (
  <Section id="work" title="Selected work">
    <div className="space-y-10">
      {projects.map((project) => (
        <article key={project.title}>
          <h3 className="font-medium">{project.title}</h3>
          <p className="mt-1.5 leading-relaxed text-muted text-pretty">{project.summary}</p>
          <p className="mt-3 font-mono text-[13px] leading-relaxed text-accent">
            {project.metric}
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
                  className="inline-flex items-center gap-0.5 underline decoration-muted/50 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  </Section>
);
