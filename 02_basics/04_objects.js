const tinderUser = new Object(); // singleton object
const tiktokUser = {}; // non-singleton object or object literals

tiktokUser.id = "123abc";
tiktokUser.name = "Chapri";
tiktokUser.isLoggedIn = true;
// console.log(tiktokUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullname: {
      firstname: "Aniket",
      lastname: "Patra",
    },
  },
};

// console.log(regularUser.fullname?.userFullname?.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
  {
    id: 4,
    email: "d@gmail.com",
  },
  {
    id: 5,
    email: "e@gmail.com",
  },
];
console.log(users[0].id);

console.log(tiktokUser);
console.log(Object.keys(tiktokUser)); //returns an array consisting of all keys
console.log(Object.values(tiktokUser)); //returns an array consisting of all values
console.log(Object.entries(tiktokUser)); //returns an array of pairs of key value pairs

console.log(tiktokUser.hasOwnProperty("isLoggedIn"));
console.log(tiktokUser.hasOwnProperty("isLogged"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Destructuring an object

const course = {
  coursename: "JS in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor } = course;
console.log(courseInstructor);
const { coursename: cname } = course;
console.log(cname);

// const navbar = ({company}) => {

// }
// navbar(company = "aniket")

// {
//  " name": "hitesh",
//   "coursename ": 'js in hindi',
//   "price":'free'
// }

[{}, {}, {}];
