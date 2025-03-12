// for of

//["", "", ""]
// [{},{},{}]
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = 'Hello World';
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('RU', 'Russia');
map.set('UK', 'United Kingdom');
// console.log(map);
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}

const myObject = {
  game1: 'CSGO',
  game2: 'The Witcher 3',
};

for (const [key, value] of myObject) {
  // can't iterate objects like this
  console.log(`${key} : ${value}`);
}
