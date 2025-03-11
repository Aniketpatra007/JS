// if
// const isUserLoggedIn = true;
// if(2 === "2"){
//     console.log('executed');
    
// }
// const temperature = 41
// if(temperature < 50){
//     console.log('temperature is lesser than 50');
    
// }else{
//     console.log('temperature is greater than 50');
    
// }

// let score = 200
// if(score > 100){
//     let power = 'fly'
//     console.log(`User power : ${power}`);
    
// }
// console.log(`User power : ${power}`);           //error out of scope


// const balance = 1000
// // if(balance > 500) console.log('test'), console.log('test2');

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log('less than 1200');
    
// }

const userLoggedIn = true;
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}