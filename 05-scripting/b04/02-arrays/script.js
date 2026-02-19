const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

// const obj = {
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
    for (const item of sub) {
      result.push(item);
    }
  }

  return result;
}

console.log(array.flat());
console.log(flatten(array));

function comparator(a, b) {
  // if (a < b) {
  //   return -1;
  // } else if (a > b) {
  //   return 1;
  // } else {
  //   return 0;
  // }

  return a < b ? 1 : a > b ? -1 : 0;
}

// function bubblesort(arr) {
//   const sorted = [...arr];
//   const n = sorted.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (comparator(sorted[j], sorted[j + 1]) > 0) {
//         [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
//       }
//     }
//   }

//   return sorted;
// }

const flat = array.flat();

function comparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

const f = (x) => x;
const sum = (x, y) => x + y;

// flat.sort((a, b) => b - a);
// console.log(flat);

const sortd = (arr) => arr.sort((a, b) => b - a);
console.log(sortd(flat));

// console.log(["الف", 1, 2, "asd", "🙂"].sort());

function map(arr, fn) {
  const result = [];

  for (const item of arr) {
    result.push(fn(item));
  }

  return result;
}

const square = (arr) => map(arr, (x) => x * x);
const negate = (arr) => map(arr, (x) => -x);
const square2 = (arr) => arr.map((x) => x * x);
console.log(square([1, 2, 3, 4, 5]));

function filter(arr, fn) {
  const result = [];

  for (const item of arr) {
    if (fn(item)) {
      result.push(item);
    }
  }

  return result;
}

// filter([1, 2, 3, 4, 5], (x) => x % 2 === 0);
console.log([1, 2, 3, 4, 5].filter((x) => x % 2 === 1));
// console.log(filter([1, 2, 3, 4, 5], (x) => x % 2 === 0));

[1, 2, 3, 4, 5]
  .map((x) => x * x)
  .filter((x) => x % 2 === 0)
  .sort((a, b) => b - a);

// sort(filter(map()));
// map.filter.sort

// f(g(h(x)))
// f o g o h (x)
// h.g.f x

// f g h x
// x h g f
// x f y

function reduce(arr, fn, initial) {
  let acc = initial;

  for (const item of arr) {
    acc = fn(acc, item);
  }

  return acc;
}

// f(...arr) -> f(a0, a1, ..., an)

// function f(a, b, ...args) {
//   args[0]
//   args[1]
//   args[2]
// }

// ...[1,2,3] -> 1,2,3
// ...(1,2,3) -> [1,2,3]

console.log(reduce([1, 2, 3, 4, 5], (acc, item) => acc + item, 0));
console.log(reduce([1, 2, 3, 4, 5], (acc, item) => acc * item, 1));

// const fn = (x) => x;
// const pn = (x) => true;

// console.log(
//   [1, 2, 3, 4, 5].reduce(
//     (acc, item) => (pn(item) ? [...acc, fn(item)] : acc),
//     [],
//   ),
// );

// if (item > max) {
//   max = item;
// }

// max = f(max, item);
// max = max < item ? item : max;

[1, 2, 3, 4, 5].reduce((acc, item) => (acc < item ? item : acc), -Infinity);
[1, 2, 3, 4, 5].reduce((acc, item) => acc + item, 0);
[1, 2, 3, 4, 5].reduce((acc, item) => acc + item, "");

// max(-Infinity, item) -> item
// sum(0, item) -> item
// product(1, item) -> item

// [1,2,3]

// []
// [...[], 1]  = [1]
// [...[1], 2] = [1, 2]
// [...[1, 2], 3] = [1, 2, 3]

// [1, 2, 3, 4].forEach((x) => {
//   console.log(x);
// });

flat.filter((x) => x > 40).reduce((acc, item) => acc + item, 0);

flat.filter((x, ind, arr) => arr.indexOf(x) === ind);

// arr.indexOf(ele) -> index of ele in arr at first occurence or -1 if not found
