console.log('Welcome in tutorial 41');

// ARROW FUNCTION

// Creating a regular function
// const harry = function (){
//     console.log("This is the best person ever");
// }

// Converting it to an arrow function
// const harry = ()=> {
//     console.log("This is the best person ever");
// }

// harry();

// function returning something
// const greet = function(){
//     return `Good Morning`;
// }

// One lines do not require braces/return
// one line will automatically return
// const greet = () => `Good Morning`;

// const greet = () => ({name: "Anwar"});

// console.log(greet());

// const greet = name => "Good Morning " + name;

// console.log(greet("Anwar"));

// Single parameter do not need parenthesis.
// but you will have to put paranthesis if there are multiple parameters.
const greet = (name,suffix) => "Good Morning " + name +" "+ suffix;

console.log(greet("Anwar","Bye"));
