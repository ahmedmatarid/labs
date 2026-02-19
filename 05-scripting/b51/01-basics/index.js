console.log("peekaboo!");

let index = 0;
while (++index <= 100) {
  if (index % 2 === 1) {
    console.log(index);
  }
}

// let i = 0;
// console.log(i);
// i = 1;

for (let index = 1; index <= 100; index++) {
  if (index % 2 === 1) {
    console.log(index);
  }
}

// console.log(2 === "2");
// console.log(2 === 2.0);
// null
// undefined

const cars = ["Toyota", "Honda", "BMW"];
cars.push("Volvo");
cars.unshift("Mercedes");
console.log(cars);

function show(array) {
  for (let element of array) {
    console.log(element);
  }
}

// cars[-1] = "Test";
// console.log(cars[-1]);
// cars["whatever"] = "whichever";
// console.log(cars);

show(cars);

cars.sort();
show(cars);
