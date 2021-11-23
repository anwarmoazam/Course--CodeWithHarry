console.log('Welcome in tutorial 14');

/*

element selector
1. Single element selector
2. Multi element selector

*/


// 1. Single element selector

let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
// element.style.backgroundColor = 'blue';
// element.innerText = 'Harry is a good boy';
element.innerHTML = '<b>Harry is a good boy</b>';
// console.log(element.innerHTML);

let sel = document.querySelector('#myFirst') //use # with id when use queryselector
sel = document.querySelector('.child') //use . with class when use queryselector
sel = document.querySelector('h1') //also use tag name and get first element with queryselector
sel.style.color = 'green';

// console.log(sel);


// 2. Multi element selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');

// console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName("<div>");

console.log(elems);