import BankAccount from "./bank-account.js";

export default class CurrentAccount extends BankAccount {
  static #fee = 1.0;

  // constructor(account) {
  //   super(account);
  //   // super({ ...account, type: "Current" });
  // }

  charge() {
    this.withdraw(CurrentAccount.#fee);
  }

  toString() {
    return `${super.toString()} Current`;
  }

  toJSON() {
    return { ...super.toJSON(), type: "Current" };
  }

  static get fee() {
    return CurrentAccount.#fee;
  }

  static set fee(amount) {
    if (amount <= 0.0) {
      throw new Error("Fee must be positive.");
    }

    CurrentAccount.#fee = amount;
  }

  static toJSON() {
    return { fee: CurrentAccount.#fee };
  }
}
