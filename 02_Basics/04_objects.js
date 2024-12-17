// SingleTon Object created
const tinderUser = new Object();
// Non SingleTon Object created
const tinderUser1 = {};

console.log(tinderUser); // O/p: {}
console.log(tinderUser1); // O/p: {}

// Basic way to add the details in existing object:
tinderUser.id = "1";
tinderUser.fullName = "Sherry Perry";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // O/p: { id: '1', fullName: 'Sherry Perry', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Tom",
      lastName: "Jerry",
    },
  },
};

console.log(regularUser.fullName); // O/p: { userFullName: { firstName: 'Tom', lastName: 'Jerry' } }
console.log(regularUser.fullName.userFullName.firstName); // O/p: Tom

//*  ? is used when we are getting the data from backend to check weather this data is existed or not to give more protection.
// console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
console.log(obj3); // O/p: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = { 5: "a", 6: "b" };
const obj5 = { 7: "a", 8: "b" };

const obj6 = Object.assign(obj4, obj5);
//* if we put object in front of the merging objects this will just make sure that it will be a object, the result will be the same as above approach.
const obj7 = Object.assign({}, obj4, obj5);
console.log(obj6); // O/p: { '5': 'a', '6': 'b', '7': 'a', '8': 'b' }
console.log(obj7); // O/p: { '5': 'a', '6': 'b', '7': 'a', '8': 'b' }

//* Spread Operator:
const obj8 = { ...obj4, ...obj5 };
console.log(obj8); // O/p: { '5': 'a', '6': 'b', '7': 'a', '8': 'b' }

//* Data coming from backend in Array of object [{}]

const user = [
  {
    id: 1,
    email: "hi@gmail.com",
  },
  {
    id: 2,
    email: "ji@gmail.com",
  },
  {
    id: 3,
    email: "ki@gmail.com",
  },
];

//* One Way to access the data from array of objects:
console.log(user[1].email); // O/p: ji@gmail.com

console.log(Object.keys(tinderUser)); // O/p: [ 'id', 'fullName', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // O/p: [ '1', 'Sherry Perry', false ]
console.log(Object.entries(tinderUser)); // O/p: [[ 'id', '1' ],[ 'fullName', 'Sherry Perry' ],[ 'isLoggedIn', false ]]

//* hasOwnProperty Determines whether an object has a property with the specified name.
console.log(tinderUser.hasOwnProperty("is")); // O/p: false
