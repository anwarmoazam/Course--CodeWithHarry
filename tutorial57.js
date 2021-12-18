console.log('This is tutorial 57');

// Maps in JavaScript : We can use any type of key or value

let myMap = new Map() ;
console.log(myMap);

const key1 = 'myStr';
const key2 = {};
const key3 = function(){};

// Setting map values
myMap.set(key1,'This is a string');
myMap.set(key2,'This is an empty object');
myMap.set(key3,'This is an empty function');
console.log(myMap)

// Getting the values from a map
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size)

// You can loop using for-of to get keys and values
for(let[key,value] of myMap){
    console.log(key,value)
}

// Get only keys
for(let key of myMap.keys()){
    console.log('Key is',key);
}

// Get only values
for(let values of myMap.values()){
    console.log('Value is',values);
}

// You can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log('Key is ',key);
    console.log('Value is ', value);
})

// Converting Map ro an array
let myArray = Array.from(myMap);
console.log('Map to array is : ',myArray);

// Converting Map keys to an array
let myArrayKeys = Array.from(myMap.keys());
console.log('Map to keys array is : ',myArrayKeys);

// Converting Map values to an array
let myArrayValues = Array.from(myMap.values());
console.log('Map to values array is : ',myArrayValues);