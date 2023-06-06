//without arrow functions
/*
const sayhello = function() {
  console.log("hello");
};
sayhello();
*/
//with arrow functions
//example 1
/*
const sayHello = () => {
  console.log("hello");
};
sayHello();
*/
//example 2
//single param does not need parenthesis
/*
const sayHello = name => console.log(`hello, ${name}`);
sayHello("paris");
*/
//multiple params
//if you include more than one params, you should include parenthesis
/*
const sayHello = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
sayHello("Paris", "Charalampidis");
*/
//example 3
//object literal
/*
const sayHello = () => {
  (msg: "Hello")
};
console.log(sayHello());
*/
//use arrow functions as callbacks
/*
const users = ["Paris", "Nefeli", "Marina"];

const nameLength = users.map(name => name.length);
console.log(nameLength);
*/
