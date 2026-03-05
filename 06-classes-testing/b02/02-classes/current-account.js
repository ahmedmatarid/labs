import BankAccount from "./bank-account.js";

export default class CurrentAccount extends BankAccount {
  static #fee = 1;

  // constructor(account) {
  //   super(account);
  //   // do more stuff
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
    CurrentAccount.#fee = amount;
  }

  static toJSON() {
    return { fee: CurrentAccount.#fee };
  }
}
