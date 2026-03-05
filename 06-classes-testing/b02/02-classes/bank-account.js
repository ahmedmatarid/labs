import { nanoid } from "nanoid";

export default class BankAccount {
  #id;
  #balance;
  // whatever = 1;

  constructor(account) {
    // abstract class, shouldn't be instantiated
    if (new.target === BankAccount) {
      throw new Error("Abstract classes cannot be instantiated.");
    }

    // if (this instanceof BankAccount) {
    //   throw new Error("Abstract classes cannot be instantiated.");
    // }

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
      throw new Error("Amount should be positive.");
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0.0) {
      throw new Error("Amount should be positive.");
    }
    if (this.#balance < amount) {
      throw new Error("Insufficient funds.");
    }

    this.#balance -= amount;
  }

  toString() {
    return `${this.id} ${this.balance}`;
  }

  toJSON() {
    return { id: this.id, balance: this.balance };
  }

  static #generateId() {
    return nanoid(10);
  }
}
