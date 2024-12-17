const account = 12345;

// We cannot change the const variable value
// account = 456; // TypeError: Assignment to constant variable.

// We cannot declare constant variable without an initializer.
// const visible; //SyntaxError: Missing initializer in const declaration

let email = "hi@gmail.com";
// let and var we can create a variable without passing any initializer by default it will undefined.
let visible; // undefined
// We cannot reinitiate or update the email with the let keyword but we can update without let keyword just talking the same variable name with that we can update.
// let email = "ku@gmail.com"; // SyntaxError: Identifier 'email' has already been declared

// So in let keyword variable we can update the value.
email = "ji@gmail.com"; // Now the let email variable has been updated to ji@gmail.com instead of hi@gmail.com.

var pass = "12345";
var ji; // undefined

// In var we can change/update the value with the var keyword and without var keyword as well.
var pass = "897"; // update value 897 from 12345
// so in var keyword variable also we can update the value, but now a days this keyword is not using anymore by new company.
pass = "567"; // pass "12345" updated to "567"

// In JS we can declare variable without any keyword also, it will also creates a memory, but do not try to use this approach.
city = "Amritsar";
city = "Ludhiana"; // So this one also updated Amritsar to Ludhiana

console.table([account, email, pass, city, visible, ji]);
