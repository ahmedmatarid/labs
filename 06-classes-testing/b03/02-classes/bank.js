export default class Bank {
  #accounts = [];

  constructor(accounts) {
    // this.#accounts = Array.from(accounts);
    this.#accounts = [...accounts];

    // this.#accounts = accounts.map((o) =>
    //   o instanceof CurrentAccount || o instanceof SavingsAccount
    //     ? o
    //     : o.type === "Current"
    //       ? new CurrentAccount(o)
    //       : new SavingsAccount(o),
    // );
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
      this.#accounts.splice(index, 1)[0];
    }
  }

  totalBalance() {
    return this.#accounts.reduce((t, a) => t + a.balance, 0);
  }

  toString() {
    return (
      this.#accounts
        // .map((a) => `${a.id} ${a.balance} ${a.type}`)
        .join("\n")
    );
  }

  toJSON() {
    return [...this.#accounts];
  }
}
