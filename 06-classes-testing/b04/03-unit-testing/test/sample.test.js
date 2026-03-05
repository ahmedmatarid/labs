import { describe, test, expect } from "bun:test";

describe("feature", () => {
  test("pass", () => {});
  test("fail", () => {
    expect(true).toBe(false);
  });
});
