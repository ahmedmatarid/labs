export default class Bank {
  #accounts;

  constructor(accounts) {
    this.#accounts = Array.from(accounts ?? []);
    // this.#accounts = accounts ?? [];
  }

  get accounts() {
    return [...this.#accounts];
  }

  // set accounts(accounts) {
  //   this.#accounts = Array.from(accounts);
  // }

  get(id) {
    return this.#accounts.find((a) => a.id === id);
  }

  add(account) {
    this.#accounts.push(account);
  }

  remove(id) {
    const index = this.#accounts.findIndex((a) => a.id === id);
    if (index !== -1) {
      return this.#accounts.splice(index, 1)[0];
    }
  }

  totalBalance() {
    this.#accounts.reduce((t, a) => t + a.balance, 0);
  }

  toString() {
    return this.#accounts.map((a) => a.toString()).join("\n");
  }

  toJSON() {
    return this.accounts;
  }

  // fromJSON(pojo) {}
}
