console.log(Math); // O/p: Object [Math] {}

//* abs will give us absolute value and remember if the value is negative it will convert into positive value but for the positive value it won't convert into negative.
console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(4.6)); // O/p: 5
console.log(Math.round(4.3)); // O/p: 4

//* To get the higher value we will use the ceil method no matter whatever the decimal value.
console.log(Math.ceil(6.1)); // O/p: 7
//* To get the lower value we will use the floor method no matter whatever the decimal value is.
console.log(Math.floor(6.9)); // O/p: 6

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(2, 5, 6, 9, 11));

//* The Random number will come between 0 and 1
console.log(Math.random()); // O/p: 0.21861774779558818
console.log(Math.random() * 10); // O/p: 3.365041609459667, the first value can also become 0.
console.log(Math.random() * 10 + 1); // Now with adding + 1 it will make sure the first value never becomes 0.
// console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); // O/p: 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // O/p: 16
