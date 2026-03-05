import { nanoid } from "nanoid";

// import { nanoid } from "https://esm.sh/nanoid";
// <script src="https://esm.sh/nanoid" type="module"></script>;

export default class BankAccount {
  #id;
  #balance;

  constructor(account) {
    if (new.target === BankAccount) {
      throw new Error("Abstract classes cannot be instantiated.");
    }
    // if (this instanceof BankAccount) {
    //   throw new Error("Abstract classes cannot be instantiated.");
    // }

    this.#id = account?.id ?? BankAccount.#generateId();
    this.#balance = account?.balance ?? 0.0;
  }

  // method() {
  //   throw new Error("Abstract methods must be overridden.");
  // }

  get id() {
    return this.#id;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0.0) {
      // console.error("Amount should be positive.");
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
    return `${this.#id} ${this.balance}`;
  }

  toJSON() {
    return { id: this.#id, balance: this.#balance };
  }

  static #generateId() {
    return nanoid(10);
  }
}
