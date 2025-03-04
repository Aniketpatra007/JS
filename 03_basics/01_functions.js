function sayMyName() {
  console.log("A");
  console.log("N");
  console.log("I");
  console.log("K");
  console.log("E");
  console.log("T");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {        //parameters
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}
const result = addTwoNumbers(3, 4); //arguments
// console.log(result);

function loginUserMessage(username = 'sam') {
  if (!username) {
    console.log("Please enter a username");
    return
  }
    
  return `${username} just Logged in`
}

// console.log(loginUserMessage("Aniket"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1) {
  // ... -> rest operator
  return num1       // will return an array
}
// console.log(calculateCartPrice(200,400,500));

const user = {
  username: "Aniket",
  price : 199
}
function handleObject(anyObject) {

  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}
// handleObject(user)
handleObject({
  username: 'sam',
  price : 399
})

const myNewArray = [200, 300, 400, 100, 900];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
