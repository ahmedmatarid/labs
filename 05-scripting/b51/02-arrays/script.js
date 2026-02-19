const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

function flatten(array) {
  let result = [];

  for (let subarray of array) {
    for (let element of subarray) {
      result.push(element);
    }
  }

  return result;
}

console.log(flatten(array));

function sortd(array) {
  // function asc(a, b) {
  //   if (a < b) return -1;
  //   if (b < a) return +1;
  //   return 0;
  // }

  // function des(a, b) {
  //   if (a < b) return +1;
  //   if (b < a) return -1;
  //   return 0;
  // }

  // const asc = (a, b) => (a < b ? -1 : a > b ? +1 : 0);
  // const des = (a, b) => (a < b ? +1 : a > b ? -1 : 0);
  // const des = (a, b) => -asc(a, b);

  return array.toSorted((a, b) => (a < b ? +1 : a > b ? -1 : 0));
}

console.log(sortd(flatten(array)));

function max(array) {
  let result = array[0];
  for (let element of array) {
    // if (element > result) {
    //   result = element;
    // }
    result = result > element ? result : element;
  }
  return result;
}

function square(array) {
  let result = [];

  for (let element of array) {
    result.push(element ** 2);
  }

  return result;
}

function map(array, f) {
  let result = [];

  for (let element of array) {
    result.push(f(element));
  }

  return result;
}

// ...[1,2,3] -> 1,2,3
// [...[1,2,3], 4] -> [1, 2, 3, 4]

function map(array, p) {
  let result = [];

  for (let element of array) {
    if (p(element)) {
      result.push(element);
      // previousResult = result
      // result = [...result, element];
    }
  }

  return result;
}

function reduce(array, reducer, initial) {
  let result = initial;
  for (let element of array) {
    result = reducer(result, element);
  }
  return result;
}

console.log(square(flatten(array)));

// [e0, e1, e2, ..]

// [e0**2, e1**2, e2**2, ...]

// [f(e0), f(e1), f(e2), ...] // x -> x**2

console.log(map(flatten(array), (x) => x ** 2));
console.log(map(flatten(array), (x) => x ** 3));
console.log(map(flatten(array), (x) => -x));
console.log(flatten(array).map((x) => x ** 2));
console.log(flatten(array).filter((x) => x % 2 === 1));
console.log(flatten(array).reduce((r, e) => r + e, 0));
console.log(flatten(array).reduce((r, e) => r * e, 1));
console.log(flatten(array).reduce((r, e) => (r > e ? r : e), -Infinity));
console.log(array.reduce((flat, subarray) => flat.concat(subarray), []));

console.log([1, 2, 3].map((x) => -x));
console.log([1, 2, 3].filter((x) => x > 1));
console.log(
  [1, 2, 3].reduce((r, x) => r + x),
  0,
);

console.log(
  [1, 2, 3]
    .map((x) => -x) // [-1,-2,-3]
    .filter((x) => x < -1) // [-2, -3]
    .reduce((r, x) => r + x, 0), // -5,
);

console.log(
  array
    .flat()
    .filter((x) => x > 40)
    .reduce((r, x) => r + x, 0),
);

array.indexOf();

console.log(
  array.flat().filter((ele, index, arr) => arr.indexOf(ele) === index),
);

// [1, 2, 1, 3, 3, 2]

console.log(
  array.flat().filter((ele, index, arr) => arr.indexOf(ele) !== index),
);

// console.log(array.flat().map((_, index) => index));
