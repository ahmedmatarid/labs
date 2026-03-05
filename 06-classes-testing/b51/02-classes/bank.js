export default class Bank {
  #accounts;

  constructor(accounts = []) {
    this.#accounts = accounts;
  }

  get accounts() {
    return [...this.#accounts];
    // return this.#accounts;
  }

  // set accounts(accounts) {
  //   this.#accounts = accounts;
  // }

  get(id) {
    return this.#accounts.find((a) => a.id === id);
  }

  add(account) {
    this.#accounts.push(account);
    return account.id;
  }

  remove(id) {
    const index = this.#accounts.findIndex((a) => a.id === id);
    if (index !== -1) {
      return this.#accounts.splice(index, 1)[0];
    }
  }
  totalBalance() {
    return this.#accounts.reduce((t, a) => t + a.balance, 0.0);
  }

  toString() {
    return this.#accounts.map((a) => a.toString()).join("\n");
  }

  toJSON() {
    return this.#accounts;
    // return this.#accounts.map((a) => a.toJSON());
  }

  // fromJSON(json) {
  //   this.#accounts = JSON.parse(json).map((o) =>
  //     o.type === "Current" ? new CurrentAccount(o) : new SavingsAccount(o),
  //   );
  // }
}
