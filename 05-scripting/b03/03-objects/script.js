// const obj = {
//   1: 0,
//   key1: "value1",
//   key2: {
//     key1: "value1",
//     key2: "value2",
//     key3: [1, 2, 3],
//   },
//   key3: false,

//   method1: () => console.log("This is method1"),
//   method2: (param) => console.log("This is method2 with param: " + param),
// };

// obj.method1();
// obj.method2("Hello");

// const obj2 = { ...obj, method1: () => console.log("Overriden") };
// obj2.method1();

// obj1.key1;
// obj1["key1"];
// obj1[1];

import promptSync from "prompt-sync";
const prompt = promptSync();

const number = prompt("How many? ");
console.log(number);

const person = {
  name: prompt("What is your name? "),
};
console.log(person);
