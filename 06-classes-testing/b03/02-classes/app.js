import Bank from "./bank.js";
import BankAccount from "./bank-account.js";
import CurrentAccount from "./current-account.js";
import SavingsAccount from "./savings-account.js";

// const bank = new Bank({ field2: 6 });
// bank.field1 = 3;
// console.log(bank.field1);
// console.log(bank.field2);
// console.log(bank);

// const data = JSON.stringify(bank);
// const pojo = JSON.parse(data);
// const bank2 = new Bank(pojo);
// console.log(bank2);
// console.log(JSON.stringify(bank2));

const bank = new Bank([
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
]);

console.log(bank);
console.log(bank.toString());
console.log(JSON.stringify(bank));

try {
  const account = new BankAccount();
  try {
    // account.deposit(-1);
    account.withdraw(100);
  } catch (e) {
    console.error(e.message);
  }
} catch (e) {
  console.error(e.message);
} finally {
  // release resources
}

// console.log(`${account} extra`);
// console.log(account);

CurrentAccount.fee = 10;
SavingsAccount.benefit = 6 / 100;
console.log(JSON.stringify(CurrentAccount));
console.log(JSON.stringify(SavingsAccount));

const current = new CurrentAccount({ balance: 1000 });
// console.log(current.toString());
const savings = new SavingsAccount({ balance: 99999 });
// console.log(savings.toString());

const newBank = new Bank([current, savings]);
console.log(newBank.toString());
console.log(newBank.toJSON());

const data = JSON.stringify(newBank);
const pojo = JSON.parse(data);
const objs = pojo.map((o) =>
  o.type === "Current" ? new CurrentAccount(o) : new SavingsAccount(o),
);
// console.log(pojo);
// console.log(objs);
const newNuBank = new Bank(objs);
console.log(newNuBank.toString());
