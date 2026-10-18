import { experience } from "@/data/content";
import { Section } from "./Section";

export const Experience = () => (
  <Section id="experience" number="02" title="Experience">
    <ol className="space-y-10 border-l-2 border-line pl-6">
      {experience.map((job) => (
        <li key={job.company} className="relative">
          <span aria-hidden="true" className="absolute top-1.5 -left-[31px] size-3 bg-accent" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-lg font-medium">
              {job.role} <span className="text-muted">· {job.company}</span>
            </h3>
            <p className="font-mono text-xs text-amber">{job.period}</p>
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            {job.stack} · {job.location}
          </p>
          <ul className="mt-3 space-y-2 leading-relaxed text-muted">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="relative pl-4 text-pretty before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:bg-muted">
                {bullet}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);
