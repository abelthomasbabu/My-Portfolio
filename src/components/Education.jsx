import { education } from "@/data/content";
import { Section } from "./Section";

export const Education = () => (
  <Section id="education" number="04" title="Education">
    <div className="space-y-6">
      {education.map((item) => (
        <div key={item.school}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-lg font-medium">{item.school}</h3>
            <p className="font-mono text-xs text-amber">{item.period}</p>
          </div>
          <p className="mt-0.5 text-muted">{item.degree}</p>
          {item.note && <p className="mt-0.5 text-sm text-accent">{item.note}</p>}
        </div>
      ))}
    </div>
  </Section>
);
