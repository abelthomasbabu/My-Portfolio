// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders three projects, RAG first with its metric and no link row", () => {
    const { container } = render(<Projects />);
    const articles = container.querySelectorAll("article");
    expect(articles).toHaveLength(3);
    expect(articles[0].textContent).toContain("0.94");
    expect(articles[0].querySelector("a")).toBeNull();
    expect(articles[1].querySelector("a")).not.toBeNull();
  });
});
