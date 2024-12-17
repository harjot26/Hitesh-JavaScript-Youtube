//* Checking and Getting the Date and time through some javaScript functions.

let myDate = new Date();

console.log(typeof myDate); // O/p: Object
console.log(myDate); // O/p: 2024-12-12T05:04:56.125Z
console.log(myDate.toString()); // O/p: Thu Dec 12 2024 10:36:26 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // O/p: Thu Dec 12 2024
console.log(myDate.toLocaleString()); // O/p: 12/12/2024, 10:39:03 AM
console.log(myDate.getDate()); // O/p: 12 we will get the date only.
console.log(myDate.getDay()); // O/p: 4 through this we will get the day number of the week.
console.log(myDate.toISOString()); // O/p: 2024-12-12T05:13:17.947Z
console.log(myDate.toJSON()); // O/p: 2024-12-12T05:14:18.826Z
console.log(myDate.toLocaleDateString()); // O/p: 12/12/2024
console.log(myDate.toLocaleTimeString()); // O/p: 10:46:51 AM
console.log(myDate.toTimeString()); // O/p: 10:48:41 GMT+0530 (India Standard Time)

//* We can create the date format.

let myCreatedDate = new Date(2023, 0, 23); // 2023 is a year, and the month start from 0 means it is an array so it will start from 0 index where the value is 1(Jan), 23 is a date.
console.log(myCreatedDate.toDateString()); // O/p: Mon Jan 23 2023

let myCreatedDate1 = new Date(2022, 8, 26, 0, 0); // After Date, we can also set the time
console.log(myCreatedDate1.toString()); // Mon Sep 26 2022 00:00:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date("2024-01-14"); // if we are using in string format then we have to use month of 1 only not from 0.
console.log(myCreatedDate2.toLocaleString()); // O/p: 1/14/2023, 5:30:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // O/p: 1733982323671(These are the milliseconds from Jan 1970 till now)

// How this getTime function works Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(myCreatedDate2.getTime()); // O/p: 1705190400000

// now() Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(Math.floor(Date.now() / 1000)); // O/p: 1733982778 (we have converted milliseconds into seconds through dividing 1000 with date.now() and Math.floor is used to remove the decimal values.)

const newDate = new Date();
console.log(newDate.getMonth() + 1); // O/p: 12, if I don't use +1 then it will give me the 11 month, to avoid that we used +1

// SO through Below we can create it customize as well.
newDate.toLocaleString("default", {
  weekday: "long",
});
