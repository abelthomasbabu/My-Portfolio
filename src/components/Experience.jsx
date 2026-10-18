import { experience } from "@/data/content";
import { Section } from "./Section";

export const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-10">
      {experience.map((job) => (
        <article key={job.company}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-medium">
              {job.role} <span className="text-muted">· {job.company}</span>
            </h3>
            <p className="font-mono text-xs text-muted">{job.period}</p>
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            {job.stack} · {job.location}
          </p>
          <ul className="mt-3 space-y-2 leading-relaxed text-muted">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="relative pl-4 text-pretty before:absolute before:left-0 before:content-['–']">
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);
