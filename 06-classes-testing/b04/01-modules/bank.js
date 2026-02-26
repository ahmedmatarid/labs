import { nanoid } from "nanoid";

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

// CRUD

export function add({ balance, type }) {
  const id = nanoid(10);
  accounts.push({ id, balance: balance ?? 0, type: type ?? "Current" });
  return id;
}

export function getAll() {
  // return Array.from(accounts);
  return [...accounts];
}

export function get(id) {
  return accounts.find((a) => a.id === id);
}

// export function set(id, {balance, type}) {}

export function remove(id) {
  // const account = get(id);
  // if (account) {
  //   accounts = accounts.filter((a) => a.id !== id);
  // }

  const index = accounts.findIndex((a) => a.id === id);
  if (index !== -1) {
    accounts.splice(index, 1)[0];
  }
}

export function deposit(id, amount) {
  if (amount <= 0) {
    return false;
  }

  const account = get(id);
  if (!account) {
    return false;
  }

  account.balance += amount;
  return true;
}

export function withdraw(id, amount) {
  if (amount <= 0) {
    return false;
  }

  const account = get(id);
  if (!account) {
    return false;
  }

  if (account.balance < amount) {
    return false;
  }

  account.balance -= amount;
  return true;
}
