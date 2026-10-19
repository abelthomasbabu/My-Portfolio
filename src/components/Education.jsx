import { education } from "@/data/content";
import { Section } from "./Section";

export const Education = () => (
  <Section id="education" number="04" title="Education">
    <div className="grid gap-6 sm:grid-cols-2">
      {education.map((item) => (
        <div key={item.school} className="reveal border-2 border-line bg-surface p-6 shadow-[4px_4px_0_var(--line)]">
          <p className="font-pixel text-xs text-amber uppercase">{item.period}</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.school}</h3>
          <p className="mt-1 text-muted">{item.degree}</p>
          {item.note && <p className="mt-3 text-sm text-accent">{item.note}</p>}
        </div>
      ))}
    </div>
  </Section>
);
