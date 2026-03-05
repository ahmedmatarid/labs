import { nanoid } from "nanoid";

export default class BankAccount {
  #id;
  #balance;

  constructor(account) {
    // prevent creating BankAccount but allow subtype instantiation
    if (new.target === BankAccount) {
      // if (this instanceof BankAccount) {
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
      // console.error("Amount must be positive.");
      // return false;
      throw new Error("Amount must be positive.");
    }

    this.#balance += amount;
    // return true;
  }

  withdraw(amount) {
    if (amount <= 0.0) {
      throw new Error("Amount must be positive.");
    }
    if (this.#balance < amount) {
      throw new Error("Insufficient funds.");
    }

    this.#balance -= amount;
  }

  abstractMethod() {
    throw new Error("Abstract methods should be implemented/overridden.");
  }

  toString() {
    return `${this.#id} ${this.#balance}`;
  }

  toJSON() {
    return {
      id: this.#id,
      balance: this.#balance,
    };
  }

  static #generateId() {
    return nanoid(10);
  }
}
