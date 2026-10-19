import { describe, expect, it } from "vitest";
import { palette, sprites } from "./sprites";

describe("sprites", () => {
  for (const [name, frames] of Object.entries(sprites)) {
    it(`${name}: every frame is the same rectangle and only uses palette colours`, () => {
      const height = frames[0].length;
      const width = frames[0][0].length;
      for (const rows of frames) {
        expect(rows).toHaveLength(height);
        for (const row of rows) {
          expect(row).toHaveLength(width);
          for (const ch of row) {
            if (ch !== ".") expect(palette).toHaveProperty(ch);
          }
        }
      }
    });
  }
});

describe("project icons", () => {
  it("gives every project an animated sprite", async () => {
    const { projects } = await import("./content");
    for (const p of projects) {
      expect(sprites).toHaveProperty(p.icon);
      expect(sprites[p.icon].length).toBeGreaterThan(1);
    }
  });
});
