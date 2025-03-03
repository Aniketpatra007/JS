// singleton
// Object.create

// object literals
const mySym = Symbol("key1");
const JSUser = {
  name: "Aniket",
  "full name ": "Aniket Patra",
  [mySym]: "myKey1", //correct syntax of using a symbbol as a key
  age: 20,
  location: "Kolkata",
  email: "aniket@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
JSUser.backchod = true;
console.log(JSUser);

// console.log(JSUser.email); // not recomended
// console.log(JSUser["email"]);

// console.log(JSUser["full name "]);

// console.log(JSUser[mySym]);

JSUser.email = "aniket@lol.com";
// Object.freeze(JSUser);
JSUser.email = "aniket@microsoft.com";
// console.log(JSUser);


JSUser.greeting = function () {
  console.log("Hello JS user");
  
}
JSUser.greeting2 = function () {
  console.log(`Hello JS user, ${this['name']}`);
  
}
console.log(JSUser.greeting());

console.log(JSUser.greeting2());
