import { nanoid } from "nanoid";
// import { nanoid } from "https://esm.sh/nanoid";
// <script src="https://esm.sh/nanoid" type="module"></script>

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

// CRUD interface/operations

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

// export function set(id, account) {
//   const index = accounts.findIndex((a) => a.id === id);
//   if (index !== -1) {
//     accounts[index] = account;
//   }
// }

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

export function totalBalance() {
  return accounts.reduce((t, a) => t + a.balance, 0);
}

export function deductFee(fee) {
  // for (const a of accounts) {
  //   if (a.type === "Current") {
  //     a.balance -= fee;
  //   }
  // }

  accounts
    // .filter((a) => a.type === "Current")
    .forEach((a) => {
      if (a.type === "Current") {
        a.balance -= fee;
      }
    });
}

export function distributeBenefit(percentage) {
  accounts.forEach((a) => {
    if (a.type === "Savings") {
      a.balance *= 1 + percentage;
    }
  });
}

export function toJSON() {
  return [...accounts];
}

export function fromJSON(pojo) {
  // accounts = pojo;

  accounts.splice(0);
  pojo.forEach((a) => {
    accounts.push(a);
  });
}

export function startup() {
  // read file
  // parse
  // fromJSON()
}

export function shutdown() {
  // toJSON()
  // stringify
  // save file
}

// export { add, remove as delete };
