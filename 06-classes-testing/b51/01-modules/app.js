import * as bank from "./bank.js";

bank.getAll().forEach((a) => {
  bank.remove(a.id);
});

// console.log(bank.getAll());
bank.add({ balance: 100, type: "Current" });
bank.add({ balance: 10000, type: "Savings" });
console.log(bank.getAll());
bank.deductFee(5);
bank.distributeBenefit(1 / 100);
console.log(bank.getAll());
console.log(bank.totalBalance());
console.log(bank.fromJSON(bank.toJSON()));
