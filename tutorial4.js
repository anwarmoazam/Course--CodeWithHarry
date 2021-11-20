console.log('Welcome in tutorial 4');

/* Primitive data types
string
numbers
boolean
null
undefined
symbol
*/

// Primitive data types
// String
let name = 'Anwar';
console.log('My string is ' + name);
console.log('Data type is ' + (typeof name));

// Numbers
let marks = 40;
console.log('Data type is '+ typeof marks);

// Boolean
let isDrive = true;
console.log('Data type is '+ typeof isDrive);

// Null
let nullVar = null;
console.log('Data type is '+ typeof nullVar);

// Undefined
let undef = undefined;
console.log('Data type is '+ typeof undef);

// Reference Data types
// Arrays
let myarr = [1,2,3,4,false,'string'];
console.log('Data type is '+ typeof myarr);

// Object Literals
let stMarks = {
    anwar: 34,
    hafiz: 40,
    rohan: 38
}

console.log(stMarks);
console.log(typeof stMarks);

// Functions
function findName() {
    
}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);