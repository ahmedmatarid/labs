import BankAccount from "./bank-account.js";

export default class SavingsAccount extends BankAccount {
  static #benefit = 0.01;

  // constructor(account) {
  //   super(account);
  //   // super({ ...account, type: "Savings" });
  // }

  distribute() {
    this.deposit(CurrentAccount.#benefit);
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

  static set benefit(percentage) {
    if (percentage <= 0.0) {
      throw new Error("Benefit must be positive.");
    }

    SavingsCurrent.#benefit = percentage;
  }

  static toJSON() {
    return { benefit: SavingsAccount.#benefit };
  }
}
