import { skills } from "@/data/content";
import { Section } from "./Section";

export const Skills = () => (
  <Section id="skills" title="Skills">
    <dl className="space-y-2 text-sm">
      {skills.map(({ group, items }) => (
        <div key={group} className="grid gap-x-4 sm:grid-cols-[9rem_1fr]">
          <dt className="text-muted">{group}</dt>
          <dd>{items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);
