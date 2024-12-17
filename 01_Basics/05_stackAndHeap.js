//* All the primitive data will go in the stack memory.
//* All the non primitive(reference) data will go in the heap memory.

//* In Stack memory it will not change the original data instead it will create a copy of that variable and make the changes in that copy variable only.
//* In Heap memory it will store the reference of the original data and we make any changes to the copy data it will also change the data to the original data as well.

//* Stack Memory(Primitive Data):

let firstName = "Sukhwinder";

let secondName = firstName;
secondName = "Jaz";

console.log(firstName, secondName); // O/p: Sukhwinder, Jaz

//* Heap Memory(Non-Primitive):

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
(userTwo.email = "two@google.com"), console.log(userOne, userTwo); // o/p: email: two@google.com, email: two@google.com
