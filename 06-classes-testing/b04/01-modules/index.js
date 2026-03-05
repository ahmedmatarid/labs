// import ppp, { a as a1, b as b1, print as pr } from "./module.js";
// // import ppp from "./module.js";
// import { a, b } from "./dummy.js";

// console.log(a);
// console.log(b);
// b.push(4);
// console.log(b);
// pr();
// console.log(ppp);

// import { add, getAll, toJSON, fromJSON } from "./bank.js";
import * as bank from "./bank.js";

// add({});
// add({ balance: 110, type: "Savings", a: 1, b: 2 });
// console.log(getAll());

// const arr = [1, 2, 3, 4];
// const spliced = arr.splice(2, 1, "a", "b", "c");
// console.log(arr);
// console.log(spliced);

const data = `{
  "dependencies": {
    "nanoid": "^5.1.6"
  }
}`;
// data.a = 1;
// const obj = JSON.parse(data);
// console.log(obj.dependencies);

// console.log(JSON.stringify(bank.getAll()));

// console.log(
//   JSON.parse(`[
//   { "id": "08a45dd424", "balance": 502.3, "type": "Savings" },
//   { "id": "a9e2465841", "balance": 4100, "type": "Current" },
//   { "id": "7160dca601", "balance": 34420.55, "type": "Current" },
//   { "id": "2efde49d9d", "balance": 61023.69, "type": "Savings" },
//   { "id": "IztdMEI8hc", "balance": 0, "type": "Current" },
//   { "id": "1fmWlgVDn3", "balance": 110, "type": "Savings" }
// ]`),
// );

bank.fromJSON([]);
console.log(bank.getAll());
bank.add({ balance: 100 });
bank.add({ balance: 999, type: "Savings" });

bank.deductFee(10);
console.log(bank.totalBalance());
bank.distributeBenefit(6 / 100);
console.log(bank.totalBalance());

console.log(bank.getAll());
console.log(bank.toJSON());
