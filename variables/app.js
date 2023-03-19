// var , let, const

var name = "Dan Abramov";
console.log(name);
name = "Tobias Cristopher";
console.log(name);

// init var
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// cannot start with number

// Multi word vars

var firstName = "Dan"; // Camel case
var firstName = "tobias"; //Underscore
var FirstName = "Abramov"; // Pascal case
var firstname;

// Let
// let name = "Dan Abramov";
// console.log(name);
// name = "Tobias Cristopher";
// console.log(name);

// Const
const name = "Matrix";
console.log(name);
// can not reassign
name = "TrinitiyForce";
// have to assign a value
// const greeting;

const person = {
  name: "jhon",
  age: 30,
};
person.name = "tobirama";
person.age = 32;
console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers = [1, 2, 3, 4, 5,6]; error
console.log(numbers);
