console.log('Welcome in tutorial 46');

let reg = /harry/; //This is a regular expression literal in JS
// reg = /harry/g; //g means global
// reg = /Harry/i; //i means case insensitive


console.log(reg);
console.log(reg.source);

let str = "This is great code with harry and also harry bhai";
// Function to match expressions
// 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(str);
console.log(result);
// console.log(result.input);
// console.log(result.index);

// result = reg.exec(str);
// console.log(result);

// result = reg.exec(str);
// console.log(result);

// 2. test() - Returns true or false
result = reg.test(str);
console.log(result); //This will only print true if the "reg" is there in the string str

// 3. Match() - It will return an array of results or null

result = str.match(reg);
console.log(result);

// 4. search() - Returns index of first match else -1
result = str.search(reg);
console.log(result);

// 5.replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

result = str.replace(reg, 'Anwar');
console.log(result);