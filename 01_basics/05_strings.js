const name = "aniket"
const repoCount = 20

console.log(name + repoCount +" value" );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('funct10n-007-aniket');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('1'));

const newString = gameName.substring(1,4);
console.log(newString);

const anotherString = gameName.slice(-8,8);
console.log(anotherString);

const newStringOne = "          Aniket             ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://aniket.com/aniket%20patra"
const r_url = url.replace('%20', '-');
console.log(r_url);
console.log(url.includes('Aniket'));


console.log(gameName.split('-',2));