console.error("peeka...");
console.log("boo!");

let index = 1;

while (index <= 100) {
  if (index % 2 === 1) {
    // console.log(index);
  }
  index++;
}

for (let index2 = 1; index2 <= 100; index2++) {
  if (index2 % 2) {
    // console.log(index2);
  }
}

const cars = ["Toyota", "Honda", "BMW"];
// const cars = {
//   0: "Toyota",
//   1: "Honda",
//   2: "BMW",
// };
// cars["whatever"] = "whichever";
// cars[-1] = { key: "value" };

cars.push("Volvo");
cars.unshift("Mercedes");
console.log(cars);

// ...[1, 2, 3] -> 1, 2, 3
// [...[1, 2, 3]] -> [1, 2, 3]

const cars2 = ["الف", "🙂", "Mercedes", ...cars, "Volvo"];

// function f(a, b, ...args) {
//   args[0]; args.length -> args["length"]
//   args[1];
//   args[2];
// }

// f(1, 2, 3)

// ...(...[1, 2, 3])

function show(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }
  for (const ele of arr) {
    console.log(ele);
  }
}

show(cars);
cars2.sort();
show(cars2);
show(cars.toSorted());
show(cars);
