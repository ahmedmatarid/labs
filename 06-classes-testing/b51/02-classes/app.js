import Bank from "./bank.js";
import BankAccount from "./bank-account.js";
import CurrentAccount from "./current-account.js";
import SavingsAccount from "./savings-account.js";

const bank = new Bank();

// console.log(bank.accounts);
// bank.add({ balance: 100, type: "Current" });
// bank.add({ balance: 1000, type: "Savings" });
// console.log(bank.toString());
// console.log(JSON.stringify(bank));

let account;
try {
  account = new BankAccount(); // should fail
} catch (e) {
  console.error(e.message);
} finally {
}

// const account3 = new BankAccount();

// const account2 = new CurrentAccount(); // should succeed
// console.log(account2.toString());
// console.log(JSON.stringify(account2));

bank.add(new CurrentAccount({ balance: 100 }));
bank.add(new SavingsAccount({ balance: 1000 }));
bank.add(new CurrentAccount({ balance: 99 }));
bank.add(new SavingsAccount({ balance: 99999 }));

// const json = JSON.stringify(bank);
const json =
  '[{"id":"nLleI_pP9L","balance":100,"type":"Current"},{"id":"BRlSpFg-TG","balance":1000,"type":"Savings"},{"id":"9Uk8HHzR0C","balance":99,"type":"Current"},{"id":"RTyTUj3KrI","balance":99999,"type":"Savings"}]';
console.log(json);
const parsed = JSON.parse(json);
console.log(parsed);
const accounts = parsed.map((o) =>
  o.type === "Current" ? new CurrentAccount(o) : new SavingsAccount(o),
);

const bank2 = new Bank(accounts);
console.log(bank2.toString());

bank2.get("nLleI_pP9L").deposit(100);
console.log(bank2.get("nLleI_pP9L").toString());

console.log(JSON.stringify(CurrentAccount));
console.log(JSON.stringify(SavingsAccount));
