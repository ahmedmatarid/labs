// import d, { data, data2 } from "./bank.js";
// import { d1, d2 } from "./dummy.js";

// // data++;
// console.log(d1);
// console.log(d2);
// console.log(d);

import {
  add,
  deductFee,
  distributeBenefit,
  fromJSON,
  get,
  getAll,
  remove,
  toJSON,
  totalBalance,
} from "./bank.js";

add({ balance: 0, type: "Current" });
console.log(getAll());

console.log(get("08a45dd424"));
const acc = get("08a45dd424");
acc.balance += 1000000;
console.log(get(""));
console.log(remove("08a45dd424"));
console.log(remove(""));
console.log(getAll());

// const json = `{
//   "dependencies": {
//     "nanoid": "^5.1.6"
//   }
// }`;
// console.log(json);
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(JSON.stringify(obj));

// const o = [{ a: "b" }];
// console.log(JSON.stringify(o));

console.log(getAll());
const json = toJSON();
console.log(json);
// save it to a file
// send it over the network
fromJSON(json);
console.log(getAll());

deductFee(10);
console.log(getAll());
console.log(totalBalance());
distributeBenefit(6 / 100);
console.log(totalBalance());
console.log(toJSON());
