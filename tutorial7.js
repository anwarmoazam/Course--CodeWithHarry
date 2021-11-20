console.log('Welcome in tutorial 7');

let marks = [34,23,24,93,73,25];
const fruits = ['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]];

const arr = new Array(23,123,21,'Orange');

// console.log(arr);
// console.log(mixed);
// console.log(fruits[0]);

// console.log(arr.length);
// console.log(Array.isArray(mixed));

arr[0] = 'Anwar';
let arrElement = arr[0];
// console.log(arrElement);
// console.log(arr);

let value = marks.indexOf(73);
// console.log(value);

// Mutating or Modifying arrays

marks.push(3564);
// console.log(marks);
marks.unshift(1009);
// console.log(marks);
marks.pop();
// console.log(marks);
marks.shift();
// console.log(marks);
marks.splice(1,2);
// console.log(marks);
marks.reverse();
// console.log(marks);
marks = marks.concat(fruits);
// console.log(marks);

let myObj = {
        'first name': 'Anwar',
        channel: 'Code With Moien Sir',
        isActive: true,
        marks: [1,5,3,6]
}

console.log(myObj);
console.log(myObj.marks[2]);
console.log(myObj.isActive);
console.log(myObj["first name"]);
console.log(myObj.channel);
console.log(myObj['channel']);