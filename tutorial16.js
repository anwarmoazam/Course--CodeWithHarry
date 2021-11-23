console.log('Welcome in tutorial 16');

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title','mytitle');
element.appendChild(text);
// element.append(text);
// element.innerHTML = '<b>Hello this is created by me</b>';
let ul = document.querySelector('ul.this');
ul.appendChild(element);

// console.log(element);
console.log(ul);
console.log(ul.childElementCount);

let element2 = document.createElement('h3');
element2.id = 'element2';
element2.className = 'element2';
let tnode = document.createTextNode('This is a created node for element2');
element2.appendChild(tnode);

element.replaceWith(element2);

ul.firstElementChild.id = 'firstul';
ul.lastElementChild.id = 'lastul';

let ulFirst = document.getElementById('firstul');
let ulLast = document.getElementById('lastul');

// ul.replaceChild(ulLast,ulFirst);
// ul.removeChild(document.getElementById('lastul'));

let pr = element2.getAttribute('id');
pr = element2.hasAttribute('id');
element2.removeAttribute('id');
element2.setAttribute('id','newId');

console.log(element2,pr);

// Quick quiz

let heading = document.createElement('h1');
let link = document.createElement('a');
link.setAttribute('href','https://www.codewithharry.com/');
let headingText = document.createTextNode('Code with harry');
heading.appendChild(headingText);
link.appendChild(heading);
let container = document.getElementsByClassName('container');
container[0].prepend(link);
