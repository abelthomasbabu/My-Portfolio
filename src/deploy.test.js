import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Vercel config", () => {
  it("rewrites unknown routes to the SPA so NotFound and deep links work", () => {
    const config = JSON.parse(readFileSync("vercel.json", "utf8"));
    expect(config.rewrites).toContainEqual({ source: "/(.*)", destination: "/index.html" });
  });
});
