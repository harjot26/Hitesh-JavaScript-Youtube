//* 2 ways to declare objects in Js
//* 1st is literals and 2nd is constructor
//* And there is one more concept is there, which is called singleton:
//* singleton, if the object is made of using constructor then it will be a singleton.

//* Object literals:
// Object.create //? is a method to create a object in a constructor way and in this only the singleton created.

// Symbol data type:
const mySym = Symbol("key1");

const JsUser = {
  firstName: "Jaz",
  age: 19,
  //*   mySym: "myKey1",  // So this is not a correct way to declare to the symbol in object.
  [mySym]: "myKey1",
  email: "jaz09@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//* This is one to call the object data:
console.log(JsUser.email); // O/p: jaz09@gmail.com

//* This is another way to call the object data:
//* console.log(JsUser[age]);  // ReferenceError: age is not defined
//* Since the we are trying to call from [] then it should be quotes '',"" because in background js is converting those keys to a string.
console.log(JsUser["age"]); // O/p: 19
//* console.log(typeof JsUser.mySym); // O/p: myKey1, typeOf is string
console.log(typeof JsUser[mySym]); // o/p: [Symbol(key1)]: 'myKey1'

//* Change or Update the data from existing Obj:

JsUser.email = "jaz@chatgpt.com"; // Overriding the email.

//* Freeze the Object value:
//* Object.freeze(JsUser); // Through Freeze now we are unable to make changes in the existing object:
JsUser.email = "jaz@microsoft.com"; // This email doesn't updated in the object because we used a freeze in an object.
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.firstName}`);
};
//* The below Error I got because I Freezed the object, so unable to make the changes:
// console.log(JsUser.greeting); // Undefined
// console.log(JsUser.greeting()); // Error: TypeError: JsUser.greeting is not a function
console.log(JsUser.greeting); // O/p: [Function (anonymous)]
console.log(JsUser.greeting()); // O/p: Hello JS user
console.log(JsUser.greetingTwo()); // O/p: Hello JS user, Jaz
