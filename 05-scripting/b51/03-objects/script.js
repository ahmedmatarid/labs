import promptSync from "prompt-sync";
import { nanoid } from "nanoid";

const prompt = promptSync();

// while (true) {
//   console.log(nanoid());
// }

// const number = prompt("How old? ");
// console.log(`You are ${number} years old!`);

function readStudents() {
  // read 2 students
  const n = 5;
  const arr = Array.from({ length: n }, () => ({
    name: prompt("Name: "),
    gender: prompt("Gender: "),
    age: Math.floor((35 - 17 + 1) * Math.random() + 17),
    grade: Math.round((100 - 0 + 1) * Math.random() + 0),
  }));
  console.log(arr);

  const arr2 = [];
  for (let i = 0; i < 5; i++) {
    // const name = prompt("Name: ");
    // const gender = prompt("Gender: ");
    // const age = Math.floor((35 - 17 + 1) * Math.random() + 17);
    // const grade = Math.round((100 - 0 + 1) * Math.random() + 0);

    // arr2.push({
    //   name,
    //   gender,
    //   age,
    //   grade,
    // });

    arr2.push({
      name: prompt("Name: "),
      gender: prompt("Gender: "),
      age: Math.floor((35 - 17 + 1) * Math.random() + 17),
      grade: Math.round((100 - 0 + 1) * Math.random() + 0),
    });
  }
  console.log(arr2);
  // [
  //   {
  //     name: string,
  //     gender: "male" | "female",
  //     age: int,
  //     grade: int,
  //   },
  //   {},
  // ];
}

// readStudents();

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

// youngest student
// that is, find the _student_ with the youngest age
// const minAge = students
//   .map((s) => s.age)
//   .reduce((m, a) => (m < a ? m : a), +Infinity);

const minAge = Math.min(...students.map((s) => s.age));
console.log(minAge);
console.log(students.filter((s) => s.age === minAge));

// console.log(
//   students.filter(
//     (s) =>
//       s.age ===
//       students.map((s) => s.age).reduce((m, a) => (m < a ? m : a), +Infinity),
//   ),
// );

// oldest student
const maxAge = Math.max(...students.map((s) => s.age));
console.log(maxAge);
console.log(students.filter((s) => s.age === maxAge));

// average age

console.log(students.reduce((sum, s) => sum + s.age, 0) / students.length);

// median age

console.log(students.map((s) => s.age).sort((a, b) => b - a)[(5 - 1) / 2]);

console.log(students.sort((a, b) => b.age - a.age)[(5 - 1) / 2]);

// console.log([10, "abc", 2, 999, "😭", "الف"].sort());

// average grade

const mean = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log(mean);

// grade variance

console.log(
  students.reduce((sum, s) => sum + (s.grade - mean) ** 2, 0) / students.length,
);

// males, females

const males = students.filter((s) => s.gender === "male");
const females = students.filter((s) => s.gender === "female");

// male average grade
const averageMales = males.reduce((sum, s) => sum + s.grade, 0) / males.length;

const averageMales2 =
  males
    .filter((s) => s.gender === "male")
    .reduce((sum, s) => sum + s.grade, 0) /
  males.filter((s) => s.gender === "male").length;

// students sorted by name (asc)
console.log(
  students.sort((a, b) => (a.name < b.name ? -1 : a.name === b.name ? 0 : +1)),
);

// students sorted by grade (desc)

// console.log(
//   students.sort((a, b) =>
//     a.grade > b.grade ? -1 : a.name === b.name ? 0 : +1,
//   ),
// );

console.log(students.sort((a, b) => b.grade - a.grade));

// student with highest grade

const maxGrade = Math.max(...students.map((s) => s.grade));
console.log(students.filter((s) => s.grade === maxGrade));

console.log(students.sort((a, b) => b.grade - a.grade)[0]);

// female student with the highest grade

const maxFemaleGrade = Math.max(
  ...students.filter((s) => s.gender === "female").map((s) => s.grade),
);
console.log(
  students
    .filter((s) => s.gender === "female")
    .filter((s) => s.grade === maxFemaleGrade),
);

console.log(
  students.filter((s) => s.gender === "female" && s.grade === maxFemaleGrade),
);

// check if there are failing students

console.log(students.filter((s) => s.grade < 60).length !== 0);
console.log(students.reduce((f, s) => f || s.grade < 60, false)); // 😭😭
console.log(students.reduce((f, s) => f && s.grade >= 60, true)); // 😭😭😭

console.log(students.some((s) => s.grade < 60));
console.log(students.every((s) => s.grade >= 60));

// if (false || students[0].grade < 60 || students[1].grade < 60 || students[2].grade < 60 || students[3].grade < 60 || students[4].grade < 60) {
//   return true;
// } else {
//   return false;
// }

// a || b -> a + b || false
// a && b -> a * b * true

// add passing fields

const studentsCopy = [...students];
const obj = { a: 1 };
const objCopy = { ...obj };

// const studentsExtra = students.map((s) => (s.pass = s.grade >= 60));
const studentsExtra = students.map((s) => ({
  ...s,
  // grade: 0,
  pass: s.grade >= 60,
}));
console.log(studentsExtra);
