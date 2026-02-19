console.log("peekaboo!");

// let index = 1;
// while (index <= 100) {
//   // if (index % 2 === 1) {
//   if (index % 2) {
//     console.log(index);
//   }
//   index++;
// }

const array = [];
let index = 1;
while (index <= 100) {
  if (index % 2) {
    array.push(index);
  }
  index++;
}

console.log(array);

let index2 = 1;
for (let index2 = 1; index2 <= 100; index2++) {
  if (index2 % 2) {
    console.log(index2);
  }
}

// const array2 = [];
// array2[0] = 1;
// array2[1] = 5;
// array2["whatever"] = "whichever";
// array2[-1] = [4, 5];
// console.log(array2);

const cars = ["Toyota", "Honda", "BMW"];
cars.push("Volvo");
cars.unshift("Mercedes");

console.log(cars);

// let cars2 = ["Toyota", "Honda", "BMW"];
// cars2 = ["Mercedes", ...cars2, "Volvo"];

function show(array) {
  // for (const element in array) {
  //   console.log(element);
  // }

  for (const element of array) {
    console.log(element);
  }
}

cars.sort(); // in-place sorting
const cars2 = cars.toSorted();
show(cars);
show(cars2);
