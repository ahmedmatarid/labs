import Bank from "./bank.js";
import BankAccount from "./bank-account.js";
import CurrentAccount from "./current-account.js";
import SavingsAccount from "./savings-account.js";

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

const bank = new Bank(
  accounts.map((a) =>
    a.type === "Current" ? new CurrentAccount(a) : new SavingsAccount(a),
  ),
);

// console.log(bank);
// console.log(bank.toString());
// console.log(bank.accounts);

let account;

try {
  account = new BankAccount();

  try {
    account.deposit(-100);
  } catch (e) {
    console.error(e.message);
  } finally {
  }

  console.log(account.toString());
  console.log(account.toJSON());
  console.log(JSON.stringify(account));
} catch (e) {
  console.error(e.message);
}

const current = new CurrentAccount({ balance: 1000 });
current.deposit(100);
console.log(current.toString());

bank.add(current);
console.log(bank.toString());

const data = JSON.stringify(bank);
const bank2 = new Bank(
  JSON.parse(data).map((a) =>
    a.type === "Current" ? new CurrentAccount(a) : new SavingsAccount(a),
  ),
);
console.log(bank2.toString());
console.log(JSON.stringify(CurrentAccount));
console.log(JSON.stringify(SavingsAccount));
CurrentAccount.fee = 10;
console.log(JSON.stringify(CurrentAccount));

console.log(
  JSON.stringify([
    { id: "08a45dd424", balance: 502.3, type: "Savings" },
    { id: "a9e2465841", balance: 4100.0, type: "Current" },
    { id: "7160dca601", balance: 34420.55, type: "Current" },
    { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
  ]),
);
