const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

// const array2 = {
//   0: {
//     0: 2,
//     1: 3,
//   },
//   1: {
//     0: 34,
//     1: 89,
//   },
//   2: {
//     0: 55,
//     1: 101,
//     2: 34,
//   },
//   3: {
//     0: 34,
//     1: 89,
//     2: 34,
//     3: 99,
//   },
// };

function flatten(arr) {
  const result = [];
  for (const sub of arr) {
    for (const ele of sub) {
      result.push(ele);
    }
  }
  return result;
}

console.log(flatten(array));

function successor(x) {
  return x + 1;
}

const f = (x) => x + 1;
const sigma = (x, y) => x + y;

console.log(f(2));

function comparator(a, b) {
  // if (a < b) {
  //   return -1;
  // } else if (a > b) {
  //   return 1;
  // } else {
  //   return 0;
  // }

  return a < b ? -1 : a > b ? 1 : 0;
}

// function bsort(arr, comparator) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (comparator(arr[j], arr[j + 1]) > 0) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
// }

// console.log(array.flat().sort(comparator));
console.log(array.flat().sort((a, b) => (a < b ? 1 : a > b ? -1 : 0)));

// console.log(
//   array
//     .flat()
//     .sort((a, b) =>
//       a % 2 === 1 && b % 2 === 0 ? -1 : a % 2 === 0 && b % 2 === 1 ? 1 : 0,
//     ),
// );

// (f o g)(x) = f(g(x))
// x.g.f = (x.g).f

function map(arr, fn) {
  const result = [];
  for (const ele of arr) {
    result.push(fn(ele));
  }
  return result;
}

function filter(arr, fn) {
  const result = [];
  for (const ele of arr) {
    if (fn(ele)) {
      result.push(ele);
    }
  }
  return result;
}

let array3 = array.flat();

console.log(map(array3, (x) => x ** x));

console.log(array3.map((x) => x ** x));
console.log(array3.filter((x) => x % 2 === 0));

function reduce(arr, fn, initial) {
  let acc = initial;
  for (const ele of arr) {
    acc = fn(acc, ele);
  }
  return acc;
}

console.log(reduce(array3, (acc, ele) => acc + ele, 0));
console.log(array3.reduce((acc, ele) => acc + ele, 0));

// [1, 2, 3].reduce((acc, ele) => (pn(ele) ? acc.push(fn(ele)) : acc), []);
console.log(["asd", "qwe", "zxc"].reduce((acc, ele) => acc + " " + ele, ""));
console.log(["asd", "qwe", "zxc"].join(" "));

console.log(array3.reduce((acc, ele) => (acc > ele ? acc : ele), -Infinity));
console.log(Math.max(...array3));

// f(intialValue, ele) === ele
// sum(0, ele) = ele
// product(1, ele) = ele
// max(-Infinity, ele) = ele

let sumg40 = (arr) =>
  arr
    .filter((x) => x > 40)
    .map((x) => x * x)
    .map((x) => -x)
    .filter((x) => x % 3 === 0)
    .reduce((acc, ele) => acc + ele, 0);
console.log(sumg40(array3));

// const distinct = arr => [...new Set(arr)];
const distinct = (arr) =>
  arr.filter((x, index, array) => array.indexOf(x) === index);
// Array.indexOf;

console.log(distinct(array3));

// [1, 2, 1].indexOf(1) -> 0
// [1, 2, 1].indexOf(2) -> 1
// [1, 2, 1].indexOf(3) -> -1

// ["word1", "word2", "word3"].map((x) => "<li>" + x + "</li>").join("\n");
