import promptSync from "prompt-sync";
const prompt = promptSync();

// const number = prompt("How many? ");
// console.log(`You are ${number}`);

// const obj = {
//   key: "value",
// };

// console.log(obj);

function readStudents() {
  const students = [];
  // for (let i = 0; i < 5; i++) {
  //   students.push({
  //     name: prompt("Name: "),
  //     gender: prompt("Gender: "),
  //     age: 0,
  //     grade: 0,
  //   });
  // }
  // return students;

  return Array.from({ length: 5 }, (_) => ({
    name: prompt("Name: "),
    gender: prompt("Gender: "),
    age: Math.floor((35 - 17 + 1) * Math.random() + 17), // [17, 35]
    grade: Math.floor((100 - 0 + 1) * Math.random() + 0), // [0, 100]
  }));
}

// (a, b) -> a + (b - a) * t -> t in [0, 1]
// a * t + b * (1 - t)

// const students = readStudents();
// console.log(students);

// console.log(
//   [1, 2, 3, 4, 5].forEach((x) => {
//     console.log(x);
//   }),
// );

// const arr = [4, 1, 2, 3, 5];
// const arr2 = Array.from(arr);
// // const arr2 = [...arr];
// arr2.sort();

// console.log(arr, arr2);

// const arr3 = Array.from({ length: 100 }).map((_, i) => i);
// console.log(arr3);

// const range = (n) => Array.from({ length: n }, (_, i) => i);

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  // { name: "Fane2", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

// youngest student(s)
// smallest age
students.map((s) => s.age).reduce((m, a) => (m > a ? a : m), +Infinity);
const minAge = students.reduce((m, a) => (m > a.age ? a.age : m), +Infinity);
console.log(
  students.reduce((m, a) => (m.age > a.age ? a : m), { age: +Infinity }),
);

console.log(students.filter((s) => s.age === minAge));
console.log(students.find((s) => s.age === minAge));

// oldest student
console.log(
  students.reduce((m, a) => (m.age < a.age ? a : m), { age: -Infinity }),
);

// average age
console.log(students.reduce((t, s) => t + s.age, 0) / students.length);

// median age
// const students2 = Array.from(students);
// students2.sort((a, b) => a.age - b.age);
console.log(
  students.toSorted((a, b) => a.age - b.age)[(students.length - 1) / 2],
);

// grade variance
const mean = students.reduce((m, s) => m + s.grade, 0) / students.length;
const variance =
  students.reduce((m, s) => m + (s.grade - mean) ** 2, 0) / students.length;
const stdev = variance ** 0.5;

// males, females
const males = students.filter((s) => s.gender === "Male");
const females = students.filter((s) => s.gender === "Female");

students.filter((s) => s.gender === "Male").reduce((m, s) => m + s.grade, 0) /
  students.filter((s) => s.gender === "Male").length;

// sorted by name, asc
console.log(
  students.toSorted((a, b) =>
    a.name < b.name ? -1 : a.name === b.name ? 0 : +1,
  ),
);

// sorted by grade, desc
console.log(students.toSorted((a, b) => b.grade - a.grade));

// female with the highest grade
students.reduce(
  (m, s) => (s.gender === "Female" && m.grade < s.grade ? s : m),
  { grade: -Infinity },
);

// any failing students?
console.log(students.filter((s) => s.grade < 60).length > 0);
console.log(students.reduce((m, s) => m || s.grade < 60, false));
console.log(students.reduce((m, s) => m && s.grade >= 60, true));

console.log(students.some((s) => s.grade < 60));
console.log(students.every((s) => s.grade >= 60));

for (const s of students) {
  s.pass = s.grade >= 60;
}
console.log(students);

students.forEach((s) => {
  s.pass = s.grade >= 60;
});
console.log(students);

students.map((s) => ({ ...s, pass: s.grade >= 60 }));
// students.map((s) => {
//   s.pass = s.grade >= 60;
// });
