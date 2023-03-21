// primitive data types vs reference types

// primitive data types
// stored directly in the location the varriable acceses
// stored on the stack

// Reference data types
// accesed by reference
// object that are stored on the heap
// a pointer to a location in memory

// ---------------------------------------

// Primitive Data Types
// -------------
// string;
// number;
// boolean;
// null;
// indefined;
// symbol 'es6'
// BigInt

// -----------------------
// Primitive

// string
const name = "Dan  Abramov";
console.log(typeof name);
// number
const age = 45;
console.log(typeof age);
// Boolean
const hasKid = true;
console.log(typeof hasKid);
// Null
const car = null;
console.log(typeof car);
// undefined
let test;
console.log(typeof test);
// Symbol
const sym = Symbol();
console.log(typeof sym);

// ---------------
// Reference Types-Objects
// Array
const hobbies = ["movies", "music"];

console.log(typeof hobbies);
// Object literal
const address = {
  city: "BOSTON",
  state: "MA",
};

console.log(typeof address);

const today = new Date();
console.log(typeof today);
