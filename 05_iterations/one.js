// for

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   if(element === 7){
//     console.log("7 is the best number");

//   }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loopvalue: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(`${i} * ${j} = ${i*j}`);

//   }
// }

let myArray = ['flash', 'batman', 'superman'];
for (let index = 0; index < myArray.length; index++) {
  // console.log(myArray[index]);
}

// break and continue
// for (let index = 1; index <= 20; index++) {
//   if (index === 7) {
//     console.log(`Detected 7`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }
for (let index = 1; index <= 20; index++) {
  if (index === 7) {
    console.log(`Detected 7`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
