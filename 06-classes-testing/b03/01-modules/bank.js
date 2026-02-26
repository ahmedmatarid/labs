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

// export function set(id, { balance, type }) {}

export function get(id) {
  return accounts.find((a) => a.id === id);
  // for (const a of accounts) {
  //   if (a.id === id) {
  //     return a;
  //   }
  // }
  // return undefined;
}

export function getAll() {
  // return Array.from(accounts);
  return [...accounts];
}

export function remove(id) {
  const index = accounts.indexOf((a) => a.id === id);
  if (index !== -1) {
    return accounts.splice(index, 1)[0];
  }

  // if (get(id)) {
  //   accounts = accounts.filter((a) => a.id !== id);
  // }
}

// const a = remove(id);
// if (a) {
//   console.log(`removed account ${id}`);
// } else {
//   console.error(`failed to remove account ${id}`);
// }

// export function deposit(id, amount) {
//   const account = get(id);

//   if (account) {
//     if (amount > 0.0) {
//       account.balance += amount;
//       return true;
//     }
//   }

//   return false;
// }

export function deposit(id, amount) {
  const account = get(id);

  if (!account || amount <= 0.0) {
    return false;
  }

  account.balance += amount;
  return true;
}

export function withdraw(id, amount) {
  const account = get(id);

  if (!account || amount <= 0.0 || account.balance < amount) {
    return false;
  }

  account.balance -= amount;
  return true;
}
