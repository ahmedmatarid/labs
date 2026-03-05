import Bank from "../../02-classes/bank.js";
import { describe, test, expect } from "bun:test";

const bank = new Bank([]);

describe("bank", () => {
  describe("create", () => {
    test("bank with empty array should return an empty bank", () => {
      expect(bank.accounts).toHaveProperty("length");
      expect(bank.accounts.length).toBe(0);
    });
  });
  describe("accounts", () => {
    test("is immutable", () => {
      const a = bank.accounts;
      const foo = {};
      a.push(foo);
      expect(bank.accounts).not.toContain(foo);
    });
  });
});
