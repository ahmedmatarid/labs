// const SPECIAL = 42;
// const D = 13;
// export const SPECIAL2 = 1337;

// const hidden = 0;

// export const successor = (x) => x + 1;

// export { SPECIAL };
// export default D;

import { nanoid } from "nanoid";

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

// CRUD interface

export function add({ balance, type }) {
  const id = nanoid(10);
  // account.id = id;
  // accounts.push(account);
  accounts.push({ id, balance: balance ?? 0.0, type: type ?? "Current" });
  return id;
}

export function getAll() {
  return [...accounts];
  // return Array.from(accounts);
}

export function get(id) {
  return accounts.find((a) => a.id === id);
}

export function remove(id) {
  // const faccounts = accounts.filter((a) => a.id === id);
  // accounts = accounts.filter((a) => a.id !== id);
  // if (faccounts.length === 0) {
  //   return null;
  // } else {
  //   return faccounts[0];
  // }

  const index = accounts.findIndex((a) => a.id === id);

  if (index !== -1) {
    return accounts.splice(index, 1)[0];
  }
}

export function deposit(id, amount) {
  const account = get(id);

  if (account) {
    if (amount > 0) {
      account.balance += amount;
      return true;
    }
  }
  return false;
}

export function withdraw(id, amount) {
  const account = get(id);

  // if (!account || amount <= 0 || account.balance < amount) {
  //   return false;
  // }

  if (!account) {
    return false;
  }
  if (amount <= 0) {
    return false;
  }
  if (account.balance < amount) {
    return false;
  }

  account.balance -= amount;
  return true;
}

// const arr = [1, 2, 3, 4];
// console.log(arr.splice(1, 0));
// console.log(arr);

export function totalBalance() {
  return accounts.reduce((t, a) => t + a.balance, 0.0);
}

export function deductFee(fee = 1.0) {
  accounts.forEach((a) => {
    if (a.type === "Current") {
      a.balance -= fee;
    }
  });
}

export function distributeBenefit(percentage = 0.0125) {
  accounts.forEach((a) => {
    if (a.type === "Savings") {
      a.balance *= 1 + percentage;
    }
  });
}

export function toJSON() {
  return JSON.stringify(accounts);
}

export function fromJSON(json) {
  return JSON.parse(json);
}
