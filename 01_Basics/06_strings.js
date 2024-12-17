//* One way to create a string variable:
const firstName = "Katrina";
const repoCount = 50;

//* Another way to create a string variable in an object with the new keyword:
const gameName = new String("GTA-Punjab");
//* In browser we can see whenever we use new String keyword it will create a object of that name in a key value pair like:
//* String: {0: "G", 1:"T", 2:"A" and so on} and this also give you some prototype to use with this and it will count the length of the characters also.

console.log(gameName[0]); // O/p: G
console.log(gameName.__proto__); // O/p: {}

console.log(gameName.length); // O/p: 10
console.log(gameName.toUpperCase()); // O/p: GTA-PUNJAB

console.log(gameName.charAt(2)); // O/p: A
console.log(gameName.indexOf("u")); // O/p: 5

//* So Technically subString will not add the fourth index value but if you count the words those are 4 only or as per the numbers.
const newString = gameName.substring(0, 4); // O/p: GTA-
console.log(newString);

//* Slice is same as subString only but in this slice we can use negative values for reverse order.
const anotherString = gameName.slice(-10, 5);
console.log(anotherString);

//* So Trim function helps to reduce the unnecessary space.
const newStringOne = "   Salman    ";
console.log(newStringOne); // O/p:    Salman
console.log(newStringOne.trim()); // O/p: Salman

//* Through replace function we can replace the things we want.
const url = "https://youtube.com/sani%20patel";
console.log(url.replace("%20", "-")); // O/p: https://youtube.com/sani-patel

// To check weather the text is available in that particular string or not
console.log(url.includes("sani")); // true

//* Help us to split the data into Array.
console.log(gameName.split("-")); //O/p: [ 'GTA', 'Punjab' ]

console.log(gameName, firstName); // o/p: [String: 'GTA-Punjab'] Katrina

//* How to concatenate the string variable:

// Old way to do:
console.log(firstName + repoCount + "Hi"); // O/p: Katrina50Hi

// Modern Way to do:
console.log(`Hello my name is ${firstName} and repo count is ${repoCount}`); // Hello my name is Katrina and repo count is 50
