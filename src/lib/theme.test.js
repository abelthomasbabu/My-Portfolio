// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { getStoredTheme, setStoredTheme } from "./theme";

afterEach(() => vi.restoreAllMocks());

describe("theme storage", () => {
  it("returns null and does not throw when storage is blocked", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    expect(getStoredTheme()).toBeNull();
    expect(() => setStoredTheme("dark")).not.toThrow();
  });

  it("round-trips a stored theme and ignores unknown values", () => {
    setStoredTheme("dark");
    expect(getStoredTheme()).toBe("dark");
    localStorage.setItem("theme", "purple");
    expect(getStoredTheme()).toBeNull();
  });
});
