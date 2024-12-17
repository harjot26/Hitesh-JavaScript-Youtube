const marvel_heroes = ["Thor", "IronMan", "SpiderMan"];
const dc_heroes = ["Superman", "Flash", "Batman"];

//* Push: Appends new elements to the end of an array, and returns the new length of the array.

// marvel_heroes.push(dc_heroes); //* It's just merge the 1 array inside another array.
// console.log(marvel_heroes); //* O/p: [ 'Thor', 'IronMan', 'SpiderMan', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heroes[3]); //* O/p: [ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel_heroes[3][0]); //* O/p: Superman

//* Concat:  Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log("All Heroes:", allHeroes); //* O/p: All Heroes: [ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Flash', 'Batman' ]

//* Spread Operator: We are spreading the data and then merging the data into the new Array.
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); // O/p: [ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Flash', 'Batman' ]

//* Flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // O/p: [1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Harry")); // O/p: false
//* from: will create an array of the value.
console.log(Array.from("Harry")); // O/p: [ 'H', 'a', 'r', 'r', 'y' ]
//* from is unable to convert the object value directly into the array.
console.log(Array.from({ firstName: "Sunny", lastName: "Singh", age: "20" })); // O/p: []

let score1 = 100;
let score2 = 200;
let score3 = 300;

//* of: Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
