console.log('Welcome in tutorial 24');

let today = new Date();
console.log(today);

let otherDate = new Date('12/13/1976 04:13:13'); //Format should be MM/DD/YYYY
// otherDate = new Date('09/16/1976'); 
// console.log(otherDate);

let a;
a = otherDate.getDay(); //this will return 0 in a. (0=Sunday,1=Monday,2=Tuesday,3=Wednesday,4=Thursday,5=Friday,6=Saturday)
a = otherDate.getDate(); //Returns date in a
a = otherDate.getMinutes(); //Returns minutes value in a
a = otherDate.getSeconds(); //Returns seconds value in a
a = otherDate.getHours(); //Returns hours value from date object in a
a = otherDate.getTime(); //ask
a = otherDate.getMilliseconds(); //ask
a = otherDate.getMonth(); //Return month as number (0 to 11 where 0=January and 11=December)
otherDate.setDate(23); //Set date to otherDate
otherDate.setMonth(0); //Set date to otherDate
otherDate.setFullYear(1900); //Set Year to otherDate
otherDate.setMinutes(2); //Set Minutes to otherDate
otherDate.setHours(1); //Set Hour to otherDate
otherDate.setSeconds(3); //Set Seconds to otherDate

console.log(otherDate);

