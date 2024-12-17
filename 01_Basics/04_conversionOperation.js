//* Conversions

let num = 33;

console.log(typeof num);

let str = String(num);
console.log(typeof str);

let str1 = true;
let num1 = Number(str1);

console.log(typeof num1, num1);

// Different ways to check the conversion:

//* "33" => 33;
//* "33abc" => NaN;
//* true => 1; false => 0;

//* 1 => true; 0 => false;
//* "" => false;
//* "hi" => true;

// ********* Operations *********** /;

//* PostFix increment
let p = 12;
let q = p++;

console.log(`p: ${p}, q: ${q}`); // o/p will be p: 13, q: 12

//* Prefix increment
let s = 4;
let t = ++s;

console.log(`s: ${s}, t: ${t}`); // o/p will be s: 5, t: 5

//* PostFix decrement:
let x = 3;
let y = x--;

console.log(`x: ${x}, y: ${y}`); // o/p x: 2, y: 3

//* PreFix decrement:
let z = 5;
let n = --z;

console.log(`z: ${z}, n: ${n}`); // o/p z: 4, n: 4;
