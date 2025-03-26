const user = {
  username: 'aniket',
  loginCount: 7,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
// console.log(user['username']);
// user.getUserDetails()
// console.log(this);


// const promiseOne = new Promise();
// const date = new Date()

function User(username, loginCount, isLoggedIn){
  // the lhs value is variable and the rhs value is the value that is passed
  this.username = username
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  return this;
}

const userOne =new User("aniket", 69, true);
const userTwo =new User("ronaldo", 7, false);
console.log(userOne.constructor);


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true