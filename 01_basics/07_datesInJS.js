// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);


// let myCreatedDate = new Date(2025, 0, 23)
// let myCreatedDate = new Date(2025, 0, 23, 5,3)
// let myCreatedDate = new Date("2025-01-23")
let myCreatedDate = new Date("01-23-2025")
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
    
})

