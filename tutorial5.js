// type conversion and type coercion
console.log('Welcome in tutorial 5');
let myVar;
myVar = 34;
console.log(myVar, typeof myVar);
let boolVar = true;
console.log(boolVar,typeof boolVar);
boolVar = String(true);
console.log(boolVar,typeof boolVar);

let date = new Date();
console.log(date,typeof date);

date = String(new Date());
console.log(date, typeof date);

let arr = [1,2,3,4,5];
console.log(arr.length);
arr = String(arr);
console.log(arr.length);

let i = 8;
i=i.toString();
console.log(i,typeof i);
i=Number(i);
console.log(i,typeof i);

let j = true;
console.log(j, typeof j);
j=String(j);
console.log(j, typeof j);
j=Number(false);
console.log(j, typeof j);

let number = parseInt('34.fdfsg552');
console.log(number, typeof number);

number = Number('34.552');
console.log(number, typeof number);

number = parseFloat('34.552');
console.log(number, typeof number);

number = number.toFixed(1);
console.log(number, typeof number);



// Type Coercion
let myStr = Number("698");
let myNum = 34;

console.log(myStr+myNum);