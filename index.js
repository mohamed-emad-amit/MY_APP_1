const products = [
  { title: "title#1", price: 10 }, // 0
  { title: "title#2", price: 20 }, // 1
  { title: "title#3", price: 30 }, // 2
  { title: "title#4", price: 40 }, // 3
];

const lastIndex = products.length - 1;
// console.log(products[lastIndex]);

products.push({ title: "title#5", price: 50 }, { title: "title#6", price: 60 });
const deletedItem = products.pop();
// console.log(deletedItem);

// products.unshift({ title: "title#0", price: 0 });
// products.shift()
// console.log(products);
// console.log("products before splice");
// console.log(products);
// const newProducts = products.splice(3);
// console.log("products after splice");
// console.log(products);
// // console.log(newProducts);

// const user = { "first name": "mohamed", age: 30 };
// console.log(user.name);
// user.name = "emad";
// user.email = "mohamed@gmail.com";
// user["name"] = "emad";
// console.log(user);

console.log();

const color = "red";
let message = color !== "red" ? "color red" : "color not red";

console.log(message);
// console.log(products);

// Display all DataTypes Y Know
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
console.log(typeof 123123n);
// Create An List of Users
// Each User Contain => Name | ID | Gender
const users = [
  { id: 1, name: "mohamed", gender: "male" },
  { id: 2, name: "fatma", gender: "female" },
  { id: 3, name: "ali", gender: "male" },
];
// // Display Gender and ID of Last User
// const lastUserIndex = users.length - 1;
// const lastUser = users[lastUserIndex];
// console.log(lastUser.gender, lastUser.id);
// // Update Gender 1st User
// users[0].gender = "Female";
// users[0].name = "Mai";
// // Add 2 Users After Display At End
// users.push(
//   { name: "kareem", id: 4, gender: "male" },
//   { name: "ahmed", id: 5, gender: "male" }
// );
// // Add 1 Users After Display At Frist of List
// users.unshift({ name: "samy", id: 6, gender: "male" });
// // Delete Last User
// users.pop();
// users.pop();
// // Seperate List TO 2 List Eq Sizes
// console.log(users.length);
// const newUsers = users.splice(users.length / 2);
// // Display Size of Each Slice IF EQ Sizes Become True
// if (newUsers.length == users.length) {
//   console.log("EQ Sizes");
// }

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

// function myFunction(name) {
//   console.log("hello " + name);
// }
// const x = function (name) {
//   console.log("hello " + name);
// };

// const y = (name) => console.log("hello " + name);

// x("ahmed");

// myFunction("mohamed");

// users.forEach((user, i) => {
//   if (user.gender == "male") {
//     user.age = i;
//   }
// });

// const newArray = users.map((item, index) => {
//   console.log(item);
//   return { fullName: item.name };
// });
// console.log(newArray);

// const newArray = users.filter((item, index) => item.id !== 3);
// console.log(newArray);

// Display Each Item In Array
users.forEach((item) => {
  console.log(item);
});

// Add New Key And Value For Each Item
const newUsers = users.map((item, index) => {
  return { ...item, index, id: index };
});
console.log(newUsers);
// Delete Any User Has Gender Male


// hello
