// Primitive
// Call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 182365827489124781247168714297814n;           //BigInt
//JavaScript is dynamically typed. This means that variable types are determined at runtime, and you don’t need to explicitly declare a variable’s type. You can assign different types of values to the same variable during execution.
// Reference (Non primitive)
// Call by reference
// Array, Objects, Functions


const heros = ['Geralt of Rivia', 'Lambert', 'Eskel'];
let myObj = {
    name: "Aniket",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof bigNumber);
