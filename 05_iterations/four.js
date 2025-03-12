const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'Swift by apple',
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'ruby', 'python', 'java', 'cpp'];
for (const key in programming) {
  console.log(`index ${key} : ${programming[key]}`); // for an array the key are the indexes, i.e: 0,1,2,3,4, ...
}

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('RU', 'Russia');
map.set('UK', 'United Kingdom');

for (const key in map) {          // map is non-iterable like this
  console.log(key);
}
