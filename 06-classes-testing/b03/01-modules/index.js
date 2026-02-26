// // import whatever, { a, succ as s } from "./module.js";
// import whatever from "./module.js";
// import { nanoid } from "nanoid";
// import { a, b, succ as s } from "./dummy.js";

// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ s(1):", s(1));
// console.log("🥸 ~ q:", whatever);
// console.log(nanoid(10));

import { add, get, getAll } from "./bank.js";

add({ balance: 100, type: "Savings", a: "b", bla: "bloo" });
console.log(getAll());
console.log(get("08a45dd424"));
console.log(get(""));

// const array = [1, 2, 3, 4];
// const spliced = array.splice(1, 2, "a", "b", "c");

// console.log(array);
// console.log(spliced);
