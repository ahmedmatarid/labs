import promptSync from "prompt-sync";

const prompt = promptSync();

const number = prompt("How many? ");
console.log(number);

const obj = {
  dependencies: {
    "prompt-sync": "^4.2.0",
  },
};

const obj2 = {
  name: "Dane",
  last: "Doe",
  subobj: {
    array: [1, 2, 34],
    toggle: true,
  },

  m1: (x) => x + 1,
  m2: (x) => -x,
};

obj2.m1(2);
obj2.m3 = (x) => x + 2;
