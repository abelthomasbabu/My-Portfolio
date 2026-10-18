import { describe, expect, it } from "vitest";
import { palette, sprites } from "./sprites";

describe("sprites", () => {
  for (const [name, rows] of Object.entries(sprites)) {
    it(`${name} is a rectangle that only uses palette colours`, () => {
      const width = rows[0].length;
      for (const row of rows) {
        expect(row).toHaveLength(width);
        for (const ch of row) {
          if (ch !== ".") expect(palette).toHaveProperty(ch);
        }
      }
    });
  }

  it("has the desk scene and one icon per project", () => {
    expect(Object.keys(sprites)).toEqual(
      expect.arrayContaining(["desk", "rag", "agent", "hydra"])
    );
  });
});

describe("project icons", () => {
  it("gives every project a sprite", async () => {
    const { projects } = await import("./content");
    for (const p of projects) expect(sprites).toHaveProperty(p.icon);
  });
});
