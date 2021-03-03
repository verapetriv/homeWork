// 3.1
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const items = Object.keys(user);

// for (const item of items) {
//     console.log(`${item}: ${user[item]}`);
// }

// 3.2
// const countProps = function(obj) {
//     const items = Object.keys(obj);
//     return items.length;
//   };

//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// 3.3
// const findBestEmployee = function(employees) {
//     const arrEmployees = Object.keys(employees);
//     console.log(arrEmployees);

//     let theBestEmployee = arrEmployees[0];

//     for (let i = 1; i < arrEmployees.length; i += 1) {
//         if (employees[theBestEmployee] < employees[arrEmployees[i]]) {
//             theBestEmployee = arrEmployees[i];
//         }
//     }

//     return theBestEmployee;
// };

// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence
  
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// 3.4
// const countTotalSalary = function(employees) {
//     const salaries = Object.values(employees);

//     let totalSalary = 0;

//     for (let salary of salaries) {
//         const numberSalary = Number(salary);
//         totalSalary += numberSalary;
//     }

//     return totalSalary;
// };

// console.log(countTotalSalary({}));  // 0


// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

// 3.5
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
  
// const getAllPropValues = function(arr, prop) {
//     let keysArray = [];

//     for (let item of arr) {
//         if (item[prop] !== undefined) {
//             keysArray.push(item[prop]);
//         }
//     }

//     return keysArray;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// 3.6
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];
  
// const calculateTotalPrice = function(allProdcuts, productName) {
//     let totalPrice = 0;

//     for (let i = 0; i < allProdcuts.length; i += 1) {
//         const item = allProdcuts[i];
        
//         if (item.name === productName) {
//             totalPrice = item.price * item.quantity;
//         }
//     }

//     return totalPrice;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// 3.7
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     const transaction = {
//       id: Date.now(),
//       amount,
//       type,
//     };
//     return transaction;
//   },
  
//   deposit(amount) {
//     this.balance += amount;

//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('Cнятие такой суммы не возможно, недостаточно средств.');
//       return;
//     }

//     this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));

//     this.balance -= amount;
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (id === this.transactions[i].id) {
//           return this.transactions[i];
//       }
//     }
    
//     console.log('Транзакции с таким id нет.');
//   },

//   getTransactionTotal(type) {
//     let totalSum = 0;

//     for (let transaction of this.transactions) {
//       if (type === transaction.type) {
//         totalSum += transaction.amount;
//       }
//     }

//     return totalSum;
//   },
// };

// console.log(account.deposit(222));
// console.log(account.getBalance());

// setTimeout(() => console.log(account.withdraw(2)), 1000);
// setTimeout(() => console.log(account.getBalance()), 1000);

// setTimeout(() => console.log(account.withdraw(222)), 2000);
// setTimeout(() => console.log(account.getBalance()), 2000);

// setTimeout(() => console.log(account.withdraw(67)), 4000);
// setTimeout(() => console.log(account.getBalance()), 4000);

// setTimeout(() => console.log(account.deposit(345)), 5000);
// setTimeout(() => console.log(account.getBalance()), 5000);

// setTimeout(() => console.log(account.transactions), 5000);

// setTimeout(() => console.log(account.getTransactionDetails(account.transactions[1].id)), 5000);

// setTimeout(() => console.log(account.getTransactionTotal('withdraw')), 5000);