console.log('Welcome in tutorial 20');

let impArray = ['Ginger','Onion','Ladyfinger'];
// Add a key value pair inside local storage
localStorage.setItem('Name','Anwar');
localStorage.setItem('Name2','Hafiz');
localStorage.setItem('Vegetables',JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local storage
let name = localStorage.getItem('Name');
let name2 = localStorage.getItem('Name2');
let vegetables = JSON.parse(localStorage.getItem('Vegetables'));
console.log(name,name2,vegetables);


sessionStorage.setItem('sessionName','Anwar');
sessionStorage.setItem('sessionName2','Hafiz');
sessionStorage.setItem('sessionVegetables',JSON.stringify(impArray));
// sessionStorage.clear();