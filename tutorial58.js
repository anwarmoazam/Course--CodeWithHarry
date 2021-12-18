console.log('This is tutorial 58');

// Set stores unique values
const mySet = new Set(); //Initialize an empty set
console.log('The set looks like : ',mySet);

// Adding values to this set
mySet.add('This');
mySet.add('My name');
mySet.add('This2');
mySet.add('That');
mySet.add(34);
mySet.add(true);
mySet.add(false);
console.log('The set looks like this now : ',mySet);
console.log(typeof mySet);

// Use a constructor to initialize the set
// let mySet2 = new Set([1,45,'this',false,{a:4,b:8},'this']);
// console.log('The new Set 2 : ',mySet2);

console.log('Size of mySet',mySet.size); //Get the size of the set

console.log(mySet.has(356)); //Check whether set has 356 or not

console.log('Before removal',mySet.has('This2'));
mySet.delete('This2'); //Remove an element from the set
console.log('After removal',mySet.has('This2'));

// Iterating a set
//  

mySet.forEach((item)=>{
    console.log('Item is : ',item);
})

// Quiz : Can you use Array.from(mySet) to convert set into an array
let newSetArray = Array.from(mySet);

console.log(newSetArray);