//* Object De- Structuring :

const course = {
  courseName: "Js in Hindi",
  price: 999,
  courseInstructor: "Hitesh",
};

// This is one way to access the object values and call it.
course.courseInstructor;

//* This is De-Structure Way:
const { courseInstructor } = course;
console.log(courseInstructor); // O/p: Hitesh

//* we can also assign name to the keys according to our selves:
const { price: cost } = course;
console.log(cost); // O/p: 999

//* Json Data:

//* object format from the backend:

// {
//     "name": "Harry",
//     "courseName": "js in hindi",
//     "price": "free"
// }

//* Array of object format from the backend:

[{}, {}, {}];
