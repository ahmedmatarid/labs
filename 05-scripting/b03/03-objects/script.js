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

// const number = prompt("How many? ");
// console.log(`${number} years.`);

// const person = {
//   name: prompt("What is your name? "),
// };
// console.log(person);

function readStudents() {
  return Array.from({ length: 5 }, () => ({
    name: prompt("Name: "),
    gender: prompt("Gender: "),
    age: Math.floor((35 - 17 + 1) * Math.random() + 17), // [0, 1[
    grade: Math.floor((100 - 0 + 1) * Math.random() + 0),
  }));
}

// [0, 1, 2, 3, 4, 5] -> range(6)
// [0,1,2,3,4, 1000000].forEach()
const arr1 = [4, 1, 2, 3];
const arr2 = Array.from({ length: 100 }).map((_, i) => i);
// const arr2 = [...arr1];
// arr2.sort();
// console.log(arr1);
console.log(arr2);

const range = (n) => Array.from({ length: n }).map((_, i) => i);
const arr3 = Array.from({ length: 100 }, (_, i) => i);
console.log(arr3);

// f /@ [1,2,3] -> [f(1),f(2),f(3)]
// [1,2,3] // f -> f(1,2,3)

// (a,b) -> a + (b - a) * t, t in [0,1]
// (35- 17)[0, 1( + 17

// const students = readStudents();
// console.log(students);

// const students = [];
const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

// youngest student(s)
// smallest age
students.map((s) => s.age).reduce((m, a) => (m > a ? a : m), +Infinity);

const minAge = students.reduce((m, s) => (m > s.age ? s.age : m), +Infinity);

console.log(minAge);
console.log(
  students.reduce((m, s) => (m.age > s.age ? s : m), { age: +Infinity }),
);
console.log(students.find((s) => s.age === minAge));
console.log(students.filter((s) => s.age === minAge));

//oldest student(s)

console.log(
  students.reduce((m, s) => (m.age < s.age ? s : m), { age: -Infinity }),
);

// median student age
const sortedStudents = students.toSorted((a, b) => a.age - b.age);
console.log(sortedStudents);
console.log(sortedStudents[(sortedStudents.length - 1) / 2].age);

// mean grade

const mean = students.reduce((m, s) => m + s.grade, 0) / students.length;

/// grade variance

const variance =
  students.reduce((m, s) => m + (s.grade - mean) ** 2, 0) / students.length;

console.log(mean);
console.log(variance);

const males = students.filter((s) => s.gender === "Male");
const females = students.filter((s) => s.gender === "Female");

males.reduce((m, s) => m + s.grade, 0) / males.length;

console.log(
  students.toSorted((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? +1 : 0,
  ),
);

console.log(students.toSorted((a, b) => b.grade - a.grade));

const maxFemaleGrade = Math.max(...females.map((s) => s.grade));
console.log(females.find((s) => s.grade === maxFemaleGrade));

console.log(
  students.reduce(
    (m, s) => (s.gender === "Female" && m.grade < s.grade ? s : m),
    { grade: 0 },
  ),
);

// any failing students?
console.log(students.find((s) => s.grade < 60) ? "found" : "not found");
console.log(students.reduce((found, s) => found || s.grade < 60, false));
// console.log(students.reduce((found, s) => s.grade < 60 || found, false));
console.log(students.some((s) => s.grade < 60));
console.log(students.every((s) => s.grade >= 60));

// {pass: true | false} // based on their grade
// console.log(
//   students.map((s) => {
//     s.pass = s.grade >= 60;
//     return s;
//   }),
// );

// console.log(students.map((s) => ({ ...s, pass: s.grade >= 60 })));

students.forEach((s) => {
  s.pass = s.grade >= 60;
});
console.log(students);
