console.log('Welcome in tutorial 21');

/*
You have to create a div and inject it into the page which contains a heading.

whenever someone clicks on the div, it should be converted into an editable item, whenever user clicks away (blur). save the note into the local storage.
*/

let divDOM = document.createElement('div');
let text = document.querySelector('.yourhead').innerText;
divDOM.append(text);
divDOM.style.border = '2px solid green' ;
document.body.append(divDOM);

