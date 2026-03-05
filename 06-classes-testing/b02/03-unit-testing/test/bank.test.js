import { describe, test, expect } from "bun:test";
// import * as bank from "../../01-modules/bank.js";
import Bank from "../../02-classes/bank.js";
import SavingsAccount from "../../02-classes/savings-account.js";

const bank = new Bank();

describe("bank", () => {
  describe("constructor", () => {
    test("stores a copy — mutating the original array does not affect the bank", () => {
      const accounts = [new SavingsAccount(), new SavingsAccount()];
      const b = new Bank(accounts);
      accounts.push(new SavingsAccount());

      expect(b.accounts).toHaveLength(2); // updating accounts shouldn't change the bank
    });
  });
});
