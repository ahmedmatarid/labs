// import d, { data, data2 } from "./bank.js";
// import { d1, d2 } from "./dummy.js";

// // data++;
// console.log(d1);
// console.log(d2);
// console.log(d);

import { add, get, getAll, remove } from "./bank.js";

add({ balance: 0, type: "Current" });
console.log(getAll());

console.log(get("08a45dd424"));
const acc = get("08a45dd424");
acc.balance += 1000000;
console.log(get(""));
console.log(remove("08a45dd424"));
console.log(remove(""));
console.log(getAll());
