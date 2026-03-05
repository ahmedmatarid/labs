import { nanoid } from "nanoid";

export default class BankAccount {
  #id;
  #balance;

  constructor(account) {
    // this should only throw when creating a BankAccount
    // shouldn't throw when creating CurrentAccount or SavingsAccounts
    // we need a way to know where the constructor is called

    if (new.target === BankAccount) {
      throw new Error("Abstract classes cannot be instantiated.");
    }

    this.#id = account?.id ?? BankAccount.#generateId();
    this.#balance = account?.balance ?? 0.0;
  }

  get id() {
    return this.#id;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0.0) {
      throw new Error("Amount must be positive.");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0.0) {
      throw new Error("Amount must be positive.");
    }
    if (this.#balance < amount) {
      throw new Error("Amount must not be greater than balance.");
    }

    this.#balance -= amount;
  }

  toString() {
    return `${this.#id} ${this.balance}`;
  }

  toJSON() {
    return { id: this.#id, balance: this.#balance };
    // return [this.#id, this.#balance];
  }

  static #generateId() {
    return nanoid(10);
  }
}
