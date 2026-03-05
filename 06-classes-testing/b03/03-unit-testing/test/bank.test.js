import Bank from "../../02-classes/bank.js";
import CurrentAccount from "../../02-classes/current-account.js";
import SavingsAccount from "../../02-classes/savings-account.js";
import { describe, test, expect } from "bun:test";

describe("Bank", () => {
  describe("constructor", () => {
    test("creates a bank with an empty account list", () => {
      const b = new Bank([]);
      expect(b.accounts).toHaveLength(0);
    });

    test("creates a bank with pre-populated accounts", () => {
      const a1 = new CurrentAccount({ id: "c1", balance: 100 });
      const a2 = new SavingsAccount({ id: "s1", balance: 200 });
      const b = new Bank([a1, a2]);
      expect(b.accounts).toHaveLength(2);
      expect(b.accounts[0]).toBe(a1);
      expect(b.accounts[1]).toBe(a2);
    });

    test("does not share state with the original array", () => {
      const a1 = new CurrentAccount({ id: "c1", balance: 100 });
      const original = [a1];
      const b = new Bank(original);
      original.push(new SavingsAccount({ id: "s1", balance: 50 }));
      expect(b.accounts).toHaveLength(1);
    });
  });
});
