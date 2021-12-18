console.log('This is tutorial 59');

const str1 = "Hello";
const str2 = "Hello";

console.log(str1 === str2);
console.log(null === null);
console.log(undefined === undefined);



// Symbols
const sym1 = Symbol('My Identifier');
const sym2 = Symbol('My Identifier');

// console.log('Symbol is : ',sym1);
// console.log('Type of Symbol is : ',typeof sym1);

console.log(sym1 === sym2);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

let myObj = {};
myObj[k1] = 'Harry';
myObj[k2] = 'Rohan';
myObj['name'] = 'Good boy';
myObj[4] = 'Good INT';


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // Alert!! : Cannot do this to get Rohan because it is same as myObj["k2"]

// Symbols are ignored in for-in loop
for(let key in myObj){
    console.log(key,myObj[key]);
}

console.log(JSON.stringify(myObj));