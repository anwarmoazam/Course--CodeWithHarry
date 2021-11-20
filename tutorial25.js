console.log('This is tutorial 25');

let divElement = document.createElement('div');

let text = document.createTextNode('This is my element. click to edit it');
divElement.appendChild(text);

divElement.setAttribute('id','elem');
divElement.setAttribute('class','elem');
divElement.setAttribute('style','border: 2px solid black; width: 154px; margin: 34px; padding:23px');

let container = document.querySelector('.container');
let first = document.getElementById('myFirst');

// Insert the element before element with id first
container.insertBefore(divElement,first);

divElement.addEventListener('click',function(){
    let html = elem.innerHTML;
    divElement.innerHTML=html;

})

`textarea class="textarea form-control" id="exampleFormControlTextarea1" rows="3"></textarea>`