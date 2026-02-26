// export const data = 1;
// export const data2 = 2;
// const data3 = 3;

// export default data3;

// // export { data };

import { nanoid } from "nanoid";

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

// console.log(nanoid());

// console.log(accounts);

// export function add({ balance, type }) {
export function add({ balance, type }) {
  const id = nanoid(10);
  accounts.push({ id, balance: balance ?? 0, type: type ?? "Savings" });
  // accounts.push({ ...account, id });
  return id;
}

export function get(id) {
  return accounts.find((a) => a.id === id);
}

export function getAll() {
  // return Array.from(accounts);
  return [...accounts];
}
export function remove(id) {
  const index = accounts.findIndex((a) => a.id === id);
  if (index !== -1) {
    const spliced = accounts.splice(index, 1);
    return spliced[0];
  }
}

export function deposit(id, amount) {
  const account = get(id);
  if (!account) {
    return false;
  }
  if (amount <= 0.0) {
    return false;
  }

  account.balance += amount;
  return true;
}

export function withdraw(id, amount) {
  const account = get(id);
  if (!account) {
    return false;
  }
  if (amount <= 0.0) {
    return false;
  }
  if (account.balance < amount) {
    return false;
  }

  account.balance -= amount;
  return true;
}
