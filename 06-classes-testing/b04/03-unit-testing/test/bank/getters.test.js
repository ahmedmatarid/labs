import { describe, test, expect } from "bun:test";
import Bank from "../../../02-classes/bank.js";
import CurrentAccount from "../../../02-classes/current-account.js";
import SavingsAccount from "../../../02-classes/savings-account.js";

describe("Bank", () => {
  describe("accounts", () => {
    test("returns all accounts", () => {
      const a1 = new CurrentAccount({ id: 1, balance: 100 });
      const a2 = new SavingsAccount({ id: 2, balance: 200 });
      const bank = new Bank([a1, a2]);

      expect(bank.accounts).toEqual([a1, a2]);
    });

    test("returns a copy — mutating it does not affect the bank", () => {
      const bank = new Bank([new CurrentAccount({ id: 1, balance: 100 })]);
      bank.accounts.push(new SavingsAccount({ id: 2, balance: 200 }));

      expect(bank.accounts).toHaveLength(1);
    });
  });
});
