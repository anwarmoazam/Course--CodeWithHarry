console.log('Welcome in tutorial 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');

let nodeName = cont.childNodes[1].nodeName;
// console.log(cont.children);
let nodeType = cont.childNodes[0].nodeType;


// Node Type
/*
1. element
2. Attribute
3. Text Node
8. Comment
9. Document
10. Doctype
*/

// console.log(nodeName);
// console.log(nodeType);


let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children);
// console.log(container.firstChild);
// console.log(container.childNodes);
// console.log(container.firstElementChild);
// console.log(container.lastElementChild);
// console.log(container.lastChild);
// console.log(container.children);
// console.log(container.childElementCount);
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling.children[0].children);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);








