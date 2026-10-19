import { experience } from "@/data/content";
import { Section } from "./Section";

export const Experience = () => (
  <Section id="experience" number="02" title="Experience">
    <ol className="space-y-12 border-l-2 border-dashed border-line pl-7">
      {experience.map((job) => (
        <li key={job.company} className="reveal relative">
          <span aria-hidden="true" className="absolute top-1.5 -left-[37px] size-4 border-2 border-line bg-accent" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-xl font-semibold tracking-tight">
              {job.role} <span className="font-normal text-muted">· {job.company}</span>
            </h3>
            <p className="font-pixel text-xs text-amber uppercase">{job.period}</p>
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            {job.stack} · {job.location}
          </p>
          <ul className="mt-4 space-y-2.5 leading-relaxed text-muted">
            {job.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-5 text-pretty before:absolute before:top-[0.6em] before:left-0 before:size-2 before:bg-accent"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);
