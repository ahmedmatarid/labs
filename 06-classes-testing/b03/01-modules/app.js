// // import whatever, { a, succ as s } from "./module.js";
// import whatever from "./module.js";
// import { nanoid } from "nanoid";
// import { a, b, succ as s } from "./dummy.js";

// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ s(1):", s(1));
// console.log("🥸 ~ q:", whatever);
// console.log(nanoid(10));

// import { add, get, getAll, toJSON, fromJSON } from "./bank.js";
import * as bank from "./bank.js";

// add({ balance: 100, type: "Savings", a: "b", bla: "bloo" });
// console.log(getAll());
// console.log(get("08a45dd424"));
// console.log(get(""));

// const array = [1, 2, 3, 4];
// const spliced = array.splice(1, 2, "a", "b", "c");

// console.log(array);
// console.log(spliced);

// let data = `{
//   "dependencies": {
//     "nanoid": "^5.1.6"
//   }
// }`;
// data.dependencies = 1; results in an exception, read-only property

// data = JSON.parse(data);
// console.log(data.dependencies);

// console.log(JSON.stringify(getAll()));

// const serializedState = JSON.stringify(toJSON());
// console.log(serializedState);

// fromJSON([
//   { id: "08a45dd424", balance: 502.3, type: "Savings" },
//   { id: "a9e2465841", balance: 4100, type: "Current" },
// ]);

// console.log(getAll());

console.log(bank.getAll());
bank.deductFee(10);
console.log(bank.totalBalance());
bank.distributeBenefit(6 / 100);
console.log(bank.totalBalance());
console.log(JSON.stringify(bank.toJSON()));
