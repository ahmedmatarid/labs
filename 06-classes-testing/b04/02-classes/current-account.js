import BankAccount from "./bank-account.js";

export default class CurrentAccount extends BankAccount {
  static #fee = 10;
  // #field1;

  // constructor(account) {
  //   super(account);

  //   // this.#field1 = account.field1;
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
