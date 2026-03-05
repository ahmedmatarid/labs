export default class Bank {
  #accounts = [];

  constructor(accounts = []) {
    this.#accounts = [...accounts];
  }

  get accounts() {
    // return Array.from(this.#accounts);
    return [...this.#accounts];
  }

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
    return (
      this.#accounts
        // .map((a) => `${a.id} ${a.balance} ${a.type}`)
        .join("\n")
    );
  }

  toJSON() {
    return { accounts: this.#accounts };
  }
}
