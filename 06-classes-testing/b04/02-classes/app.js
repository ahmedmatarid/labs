import Bank from "./bank.js";
import BankAccount from "./bank-account.js";
import CurrentAccount from "./current-account.js";
import SavingsAccount from "./savings-account.js";

const bank = new Bank();
console.log(bank);
const bank2 = new Bank([
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
]);
console.log(bank2.toString());

// console.log(bank + "123");
// console.log(`${bank2} 123`);
console.log(JSON.stringify(bank2));

try {
  const account = new BankAccount();
  try {
    account.deposit(-1);
  } catch (e) {
    console.error(e.message);
  }
} catch (e) {
  console.error(e.message);
} finally {
  // release resources
}

const account1 = new CurrentAccount();
console.log(account1.toString());
console.log(JSON.stringify(account1));
const account2 = new SavingsAccount();

const bank3 = new Bank([account1, account2]);
console.log(bank3.toString());
console.log(JSON.stringify(bank3));

const data = `{"accounts":[{"id":"qSaJ_sOLlx","balance":0,"type":"Current"},{"id":"ABhNJqF_7G","balance":0,"type":"Savings"}]}`;
const parsed = JSON.parse(data);
console.log(parsed);
parsed.accounts = parsed.accounts.map((o) =>
  o.type === "Current" ? new CurrentAccount(o) : new SavingsAccount(o),
);
console.log(parsed.accounts);
const bank4 = new Bank(parsed.accounts);
console.log(bank4.toString());
// parsed.accounts[0].deposit(100);

console.log(JSON.stringify(CurrentAccount));
console.log(JSON.stringify(SavingsAccount));

console.log(JSON.stringify({ a: undefined }));
console.log(JSON.stringify({ a: null }));
console.log(JSON.stringify({ a: (x) => x }));
