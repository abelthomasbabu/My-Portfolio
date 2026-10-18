import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { profile, projects, experience, skills } from "./content";

const allLinks = [...profile.links, ...projects.flatMap((p) => p.links)];

describe("content", () => {
  it("uses only absolute, mailto or site-relative links", () => {
    for (const { href } of allLinks) {
      expect(href).toMatch(/^(https:\/\/|mailto:|\/)/);
    }
  });

  it("has no placeholder or dead LinkedIn links", () => {
    for (const { href } of allLinks) {
      expect(href).not.toBe("#blank");
      expect(href).not.toMatch(/linkedin\.com\/in\/abel-thomas-babu/);
    }
  });

  it("lists three projects, RAG first, with no links for RAG and Hydra", () => {
    expect(projects).toHaveLength(3);
    expect(projects[0].title).toMatch(/RAG/);
    expect(projects[0].links).toEqual([]);
    expect(projects.find((p) => /Hydra/.test(p.title)).links).toEqual([]);
  });

  it("points site-relative links at files that exist", () => {
    for (const { href } of allLinks.filter((l) => l.href.startsWith("/"))) {
      expect(existsSync(join(process.cwd(), "public", href))).toBe(true);
    }
  });

  it("leads experience with Nezuna", () => {
    expect(experience[0].company).toBe("Nezuna Technologies");
  });
});

describe("profile copy", () => {
  it("has no 'currently' line", () => {
    expect(profile).not.toHaveProperty("currently");
  });
});

describe("skills", () => {
  it("covers every language and tool named on the resume", () => {
    const all = skills.flatMap((s) => s.items);
    const resume = [
      "Python", "Java", "JavaScript", "TypeScript", "C#", "Swift", "SQL",
      "PyTorch", "OpenCV", "scikit-learn", "LangChain", "OpenAI API", "ChromaDB",
      "YOLOv8", "Stable-Baselines3", "Gymnasium", "Claude Code",
      "FastAPI", "Flask", ".NET", "PostgreSQL", "SQLAlchemy", "REST APIs", "Firebase",
      "React", "Tailwind CSS", "Streamlit", "Flutter", "UIKit", "Xcode",
      "Git", "GitHub Actions", "Docker", "Kubernetes",
    ];
    for (const s of resume) expect(all).toContain(s);
  });

  it("only lists what the resume supports", () => {
    expect(skills.flatMap((s) => s.items)).not.toContain("Spring Boot");
  });
});
