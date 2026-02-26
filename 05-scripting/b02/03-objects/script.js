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

// const number = prompt("How many? ");
// console.log(number);

// const name = prompt("What is your name? ");
// const person = {
//   name,
// };
// console.log(person);

// const students = [];
// for (let i = 0; i < 5; i++) {
//   const student = {};
//   student.name = prompt("Name: ");
//   student.gender = prompt("Gender: ");
//   student.age = Math.floor((35 - 17 + 1) * Math.random() + 17); // [0, 1[
//   student.grade = Math.floor((100 - 0 + 1) * Math.random() + 0);
//   students.push(student);
// }

// console.log(students);

// const a = [1, 2, 3, 4, 5].map((x) => {
//   console.log(x);
//   return x;
// });
// console.log(a);

// [1, 2, 3, 4, 5].forEach((x) => console.log(x));

// (a,b) -> a + (b-a) * t, t in [0,1]

// function readStudents() {
//   return Array.from({ length: 5 }, (_) => ({
//     name: prompt("Name: "),
//     gender: prompt("Gender: "),
//     age: Math.floor((35 - 17 + 1) * Math.random() + 17),
//     grade: Math.floor((100 - 0 + 1) * Math.random() + 0),
//   }));
// }

// const students = readStudents();
// console.log(students);

// const range = (n) => Array.from({ length: n }, (_, i) => i);

// console.log(Array.from({ length: 100 }, (_) => Math.random()));

const sz = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  // { name: "Fane2", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

// youngest student
console.log(
  sz.reduce((ma, s) => (s.age < ma.age ? s : ma), { age: +Infinity }),
);

// oldest student
console.log(
  sz.reduce((ma, s) => (s.age > ma.age ? s : ma), { age: -Infinity }),
);

// youngest student**s**
const minAge = sz.reduce((ma, s) => (s.age < ma ? s.age : ma), +Infinity);
console.log(sz.filter((s) => s.age === minAge));

// median student age
const sortedAge = sz.map((s) => s.age).sort((a, b) => b - a);
console.log(sortedAge[Math.floor(sortedAge.length / 2)]);

// console.log([10, 2, 3].sort());

// average grade

const mean = sz.reduce((a, s) => a + s.grade, 0) / sz.length;
console.log(mean);

// grade variance

console.log(sz.reduce((a, s) => a + (s.grade - mean) ** 2, 0) / sz.length);

// males / females

const males = sz.filter((s) => s.gender === "Male");
const females = sz.filter((s) => s.gender === "Female");

console.log(males, females);

// average male

console.log(males.reduce((a, s) => a + s.grade, 0) / males.length);

// desc by grade

console.log(sz.toSorted((a, b) => b.grade - a.grade));

// highest female grade student

females.filter((f) => f.grade === Math.max(...females.map((s) => s.grade)));

// any failing students? grade < 60?

console.log(sz.filter((s) => s.grade < 60).length !== 0);
console.log(sz.some((s) => s.grade < 60));

console.log(sz.filter((s) => s.grade >= 60).length === sz.length);
console.log(sz.every((s) => s.grade >= 60));

console.log(sz.map((s) => ({ ...s, pass: s.grade >= 60 })));
