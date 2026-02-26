// import ppp, { a as a1, b as b1, print as pr } from "./module.js";
// // import ppp from "./module.js";
// import { a, b } from "./dummy.js";

// console.log(a);
// console.log(b);
// b.push(4);
// console.log(b);
// pr();
// console.log(ppp);

import { add, getAll } from "./bank.js";

add({});
add({ balance: 110, type: "Savings", a: 1, b: 2 });
console.log(getAll());

// const arr = [1, 2, 3, 4];
// const spliced = arr.splice(2, 1, "a", "b", "c");
// console.log(arr);
// console.log(spliced);
