console.log('Welcome in tutorial 21');

/*
You have to create a div and inject it into the page which contains a heading.

whenever someone clicks on the div, it should be converted into an editable item, whenever user clicks away (blur). save the note into the local storage.
*/

let divDOM = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if(val==null){
    text = document.createTextNode('This is my element. click to edit it');
} else{
    text = document.createTextNode(val);
}
divDOM.appendChild(text);
divDOM.setAttribute('id','editable');
divDOM.setAttribute('style','border: 2px solid green; width: 200px; margin: 34px; padding: 23px');
let container = document.querySelector('.container');
let first = document.getElementById('myFirst');
container.insertBefore(divDOM,first);

divDOM.addEventListener('click',function(){
    let noTextArea = document.getElementsByClassName('textEdit').length;
    if(noTextArea==0){
        let html = editable.innerHTML;
        divDOM.innerHTML = `<textarea id="textEdit" class="textEdit" aria-label="With textarea">${html}</textarea>`;
    }

    let textArea = document.getElementById('textEdit');
    textArea.addEventListener('blur',function(){
        editable.innerHTML = textArea.value;
        localStorage.setItem('text',textArea.value);
    }) 
})

// divDOM.addEventListener('blur',function(){
//     let textArea = document.getElementById('textEdit');
//     editable.innerHTML = textArea.value;
//     localStorage.setItem('text',textArea.value);
// })



// // Create a new element
// let divElem = document.createElement('div');

// // Add text to that created element
// let text = document.createTextNode('This is my element. click to edit it.')
// divElem.appendChild(text);
// // Give element id, style and class

// divElem.setAttribute('id','elem');
// divElem.setAttribute('class','elem');
// divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding: 23px;')

// // Grab the main container
// let container = document.querySelector('.container');
// let first = document.getElementById('myFirst');

// // Insert the element before element with id first
// container.insertBefore(divElem,first);

// // Add event listener to the divElem
// divElem.addEventListener('click',function(){
//     let noTextAreas = document.getElementsByClassName('textarea').length;
//     if(noTextAreas == 0){
//         let html = elem.innerHTML;
//         divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
//     }
//     // listen for the blur event on textarea
//     let textarea = document.getElementById('textarea');
//     textarea.addEventListener('blur',function(){
//         elem.innerHTML = textarea.value;
//     })
// });
