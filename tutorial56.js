console.log('This is tutorial 56 on for-in and for-of loops');

let people = ["Harry","Rohan","Anwar","Shubham","Vikrant"];

// ***************For-in loop******************
// Traditional for loops
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// 1. ITERATING AN OBJECT
let obj = {
    name: "harry",
    language: "JavaScript",
    hobbies: "Android app development"
}

console.log(obj);
// 1.1 Iterating an object using traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop
for(let keys in obj){
    console.log(obj[keys]);
}

// 2. ITERATING A STRING
// We can use for-in loop with string ro loop through all the characters 
let myString = "This is my string";
// for(let char in myString){
//     console.log(myString[char])
// }

// Quiz - Use traditional for loop to iterate through the Same string
for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    console.log(element);
}

// ***************For-of loop******************
console.log("For of loop Starts here *******************")
people = ["Harry","Rohan","Anwar","Shubham","Vikrant"];

for(let name of people){
    console.log(name);
}

for(let char of myString){
    console.log(char);
}