console.log('This is tutorial 25');

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