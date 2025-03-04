const user = {
  username: "aniket",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); // this -> current context
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);          // in node environment this refers to empty object, but in browser this refers to window

// function chai() {
//   let username = 'aniket'
//   console.log(this.username);

// }
// chai()

// const chai = function () {
//   let username = 'aniket'
//   console.log(this.username);

// }

// const chai =  () =>{
//   let username = 'aniket'
//   console.log(this);

// }
// chai()

// const addTwo = (num1, num2) => {       //explicit return
//   return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2   //  implicit return
const addTwo = (num1, num2) => num1 + num2;
// const returnObj = () => {username : 'aniket'}     // not working
const returnObj = () => ({ username: "aniket" }); //working

console.log(returnObj());

console.log(addTwo(3, 4));



