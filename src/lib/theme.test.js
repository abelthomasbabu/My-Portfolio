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
    localStorage.setItem("theme-v1", "purple");
    expect(getStoredTheme()).toBeNull();
  });
});

describe("theme storage key", () => {
  it("ignores the old site's 'theme' key so returning visitors follow the system", () => {
    localStorage.clear();
    localStorage.setItem("theme", "dark");
    expect(getStoredTheme()).toBeNull();
  });
});
