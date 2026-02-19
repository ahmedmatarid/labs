// console.error("peeka...");
// console.log("boo!");

let index = 1;

while (index <= 100) {
  // if (index % 2 === 1) {
  if (index % 2) {
    // console.log(index);
  }
  index++;
}

for (let index = 1; index <= 100; index += 1) {
  if (index % 2) {
    // console.log(index);
  }
}

const cars = ["Toyota", "Honda", "BMW"];
console.log(cars);
// cars["whatever"] = "whichever";
// cars[3] = "Mercedes";
// cars[-1] = [];
// console.log(cars);
// console.log(cars.length);

// const obj = {
//   0: "Toyota",
//   1: "Honda",
//   2: "BMW",
//   3: "Mercedes",
//   whatever: "whichever",
//   "-1": [],
//   length: 4,
// };
// console.log(cars.whatever);
// console.log(cars["whatever"]);

cars.push("Volvo");
cars.unshift("Mercedes");
console.log(cars);

// const obj = {
//   0: 1,
//   0: 2,
// };
// console.log(obj);

function show(arr) {
  // for (let index = 0; index < arr.length; index++) {
  //   console.log(arr[index]);
  // }

  // for (const ele in arr) {
  //   // keys
  //   console.log(ele);
  // }

  for (const ele of arr) {
    // values
    console.log(ele);
  }
}
show(cars);

cars.sort();
show(cars);
