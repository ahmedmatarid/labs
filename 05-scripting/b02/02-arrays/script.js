// flatten(array) -> [2, 3, 34, 89, 55, 101, 34, 34, 89, 34, 99];

// const a = {
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

function flatten(array) {
  const result = [];

  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array[i].length; j++) {
  //     result.push(array[i][j]);
  //   }
  // }

  for (const subArray of array) {
    for (const element of subArray) {
      result.push(element);
    }
  }

  return result;
}

const array = flatten([
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
]);

console.log(array);
// console.log(array.flat());

function successor(x) {
  return x + 1;
}

function comparator(a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}

// const sortd = (array) => array.toSorted((a, b) => (a < b ? 1 : a > b ? -1 : 0)); // non-numeric
const sortd = (array) => array.toSorted((a, b) => b - a); // numeric

console.log(sortd(array));
console.log(array);

function map(array, fn) {
  const result = [];

  for (const element of array) {
    result.push(fn(element));
  }

  return result;
}

function filter(array, fn) {
  const result = [];

  for (const element of array) {
    if (fn(element)) {
      result.push(element);
    }
  }

  return result;
}

function reduce(array, fn, initialValue) {
  let result = initialValue;

  for (const element of array) {
    result = fn(result, element);
  }

  return result;
}

// const mapped = map(array, (x) => x * x);
console.log(array.map((x) => x * x));
console.log(array.filter((x) => x % 2));
console.log(reduce(array, (acc, x) => acc + x, 0));
console.log(reduce(["1", "2", "3"], (acc, x) => acc + x, ""));
console.log(reduce([1, 2 - 5, 6], (acc, x) => (acc > x ? acc : x), -Infinity));

console.log(array.map((x) => x * x));
console.log(array.filter((x) => x % 2));

array
  .map((x) => x * x)
  .filter((x) => x % 2)
  .reduce((acc, x) => acc + x, 0);

array.forEach((x) => console.log(x));

// array.reduce(array, (a, x, i) => (a) => (a + x) / i, 0);

array.filter((x) => x > 40).reduce((acc, x) => acc + x, 0);

console.log(array.filter((x, i, a) => a.indexOf(x) === i));

[1, 2, 3].indexOf(0); // -> -1
[1, 2, 3, 2].indexOf(2); // -> 1

[1, 2, 3, 4].reduce((acc, x) => (p(x) ? [...acc, f(x)] : acc), []);

let sumg40 = (arr) =>
  arr
    .filter((x) => x > 40)
    .map((x) => x * x)
    .map((x) => -x)
    .filter((x) => x % 3 === 0)
    .reduce((acc, ele) => acc + ele, 0);
console.log(sumg40(array3));

// filter(map(x)) x.map.filter

// const distinct = arr => [...new Set(arr)];
const distinct = (arr) =>
  arr.filter((x, index, array) => array.indexOf(x) === index);
// Array.indexOf;

console.log(distinct(array3));

// [1, 2, 1].indexOf(1) -> 0
// [1, 2, 1].indexOf(2) -> 1
// [1, 2, 1].indexOf(3) -> -1

// ["word1", "word2", "word3"].map((x) => "<li>" + x + "</li>").join("\n");
