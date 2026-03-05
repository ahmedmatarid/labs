import BankAccount from "./bank-account.js";

export default class SavingsAccount extends BankAccount {
  static #benefit;

  constructor(account) {
    super(account);

    // extra statements
  }

  distribute() {
    this.deposit(this.balance * SavingsAccount.#benefit);
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
