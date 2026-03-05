// import whatever, { SPECIAL, SPECIAL2, successor } from "./bank.js";

// let v = SPECIAL;
// v++;
// console.log(v);

// console.log(SPECIAL);
// console.log(SPECIAL2);
// console.log(whatever);

// console.log(successor(1));

import { add, getAll, totalBalance, deductFee, toJSON } from "./bank.js";

add({});
add({ balance: 100 });
add({ type: "Current" });
add({ id: "123", balance: 1000, type: "Savings" });

console.log(getAll());
console.log(totalBalance().toFixed(2));

deductFee(100);
console.log(getAll());

// console.log(JSON.stringify([{ id: 1, type: "C" }, 2, "string", false, null]));

const json = toJSON();
console.log(json);
console.log(JSON.parse(json));
