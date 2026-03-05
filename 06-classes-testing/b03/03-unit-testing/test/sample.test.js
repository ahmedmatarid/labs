import { describe, test, expect } from "bun:test";

describe("aspect 1", () => {
  describe("feature 1", () => {
    test("description of test 1 (always passing)", () => {
      expect(true).toBe(true);
    });

    test("description of test 1 (always failing)", () => {
      // throw "";
      expect(true).toBe(false);
    });
  });
});
