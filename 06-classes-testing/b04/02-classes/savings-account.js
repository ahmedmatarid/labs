import BankAccount from "./bank-account.js";

export default class SavingsAccount extends BankAccount {
  static #benefit = 6 / 100;
  // #field1;

  // constructor(account) {
  //   super(account);

  //   // this.#field1 = account.field1;
  // }

  distribute() {
    this.deposit(this.balance * SavingsAccounts.#benefit);
  }

  toString() {
    return `${super.toString()} Savings`;
  }

  toJSON() {
    return { ...super.toJSON(), type: "Savings" };
  }

  static get benefit() {
    return SavingsAccount.#benefit;
  }

  static set benefit(amount) {
    SavingsAccount.#benefit = amount;
  }

  static toJSON() {
    return { benefit: SavingsAccount.#benefit };
  }
}
