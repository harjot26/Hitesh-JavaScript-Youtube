const arr = [9, 7, 5, 1, 3, 0];
console.log(arr); // O/p: [ 9, 7, 5, 1, 3, 0 ]
console.log(arr[4]); // O/p: 3

const heroes = ["IronMan", "Thor"];
console.log(heroes); // O/p: [ 'IronMan', 'Thor' ]
console.log(heroes[1]); // O/p: Thor

const newArr = new Array(2, 4, 6, 8); // Created a new Array with the new keyword which is object.
console.log(newArr); // O/p: [ 2, 4, 6, 8 ]

// Array Methods:
arr.push(6); // To added any value in existing array.
arr.push(8);
arr.push(); // undefined and yes it will pass an empty space to the array.
arr.pop(); // if we don't pass any value in pop method then it will remove the last index value.
arr.pop(2); // no matter what value we tried to pass it will always remove the last index value only.
console.log(arr); // [9,7,5,1,3,0,6] 6 added to at the end of the array through push method.

const newArr1 = [8, 4, 2, 6, 9];
newArr1.unshift(3); // It will add the number on the starting index
newArr1.shift(); // It will remove the value from starting index
console.log(newArr1);

//* includes: Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(newArr1.includes(9)); // true

//* indexOf: Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(newArr1.indexOf(3)); // O/p: -1
console.log(newArr1.indexOf(4)); // O/p: 1

const newArr2 = [3, 6, 7, 8, 3, 4, 9];
const newArr3 = newArr2.join(); // Join help us to convert into string and also separated by the specified separator string for example commas.
console.log(newArr3);

// slice, splice:

console.log("A", newArr2);

const newArr4 = newArr2.slice(1, 3); // it won't add the last index value as given.
console.log(newArr4); // O/p: [ 6, 7 ]
console.log("B", newArr2); // O/p: B [3, 6, 7, 8,3, 4, 9], nothing changes in original array

const newArr5 = newArr2.splice(1, 3); // In this it will also take the last index value and plus it will remove those values from the original array in splice method.
console.log("C", newArr2); // O/p: C [ 3, 3, 4, 9 ]
console.log(newArr5); // O/p: [ 6, 7, 8 ]
