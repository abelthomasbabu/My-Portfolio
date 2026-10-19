import { skills } from "@/data/content";
import { Section } from "./Section";

export const Skills = () => (
  <Section id="skills" number="03" title="Inventory">
    <dl className="grid gap-6 sm:grid-cols-2">
      {skills.map(({ group, items }) => (
        <div key={group} className="reveal border-2 border-line bg-surface p-5 shadow-[4px_4px_0_var(--line)]">
          <dt className="font-pixel text-xs text-amber uppercase">{group}</dt>
          <dd className="mt-3 flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="border-2 border-line bg-bg px-2 py-0.5 font-mono text-xs transition-colors duration-100 hover:border-accent hover:text-accent"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);
