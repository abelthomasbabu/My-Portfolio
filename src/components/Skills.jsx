import { skills } from "@/data/content";
import { Section } from "./Section";

export const Skills = () => (
  <Section id="skills" number="03" title="Inventory">
    <dl className="space-y-5">
      {skills.map(({ group, items }) => (
        <div key={group}>
          <dt className="font-pixel text-xs uppercase text-muted">{group}</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {items.map((item) => (
              <span key={item} className="border-2 border-line bg-panel px-2 py-0.5 font-mono text-xs">
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);
