console.log('Welcome in tutorial 3');

// Variables in JS
// var, let, const

var name = `'Anwar"`;
var channel;
var marks = 40;
// channel='CodeWithHarry';
console.log(name,channel,marks);

// Rules for creating Javascript variables


/*
1. Cannot start with numbers.
2. Can Start with letter, numbers, _ or $
3. Are case sensitive
*/

var city = 'Pali';

// var $city = 'Pali';
// console.log($city);

const ownersName = 'Hari Ram';
// ownersName = "Anwar" //Cannot do this
console.log(ownersName);

// const fruit; //Cannot do this

{
    let city = 'Rampur';
    city = 'Hyderabad';
    console.log(city);
}

console.log(city);

const arr1 = [12,23,12,53,3];
arr1.push(45);
arr1.push(50);
// arr1 = [1,2,3]; //Cannot reinitialize const type array
console.log(arr1);

/*
Most common programming case types:
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/

