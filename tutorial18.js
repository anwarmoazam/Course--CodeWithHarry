console.log('Welcome in tutorial 18');

let btn = document.getElementById('btn');
btn.addEventListener('dblclick',func2);
btn.addEventListener('click',func1);
btn.addEventListener('mousedown',func3);

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('You entered no');
// })

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('You leave no');
// })

// document.querySelector('.container').addEventListener('mousemove',function(e){
//     console.log(e.offsetX,e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
//     console.log('You triggered mouse move event');
// })


function func1(e){
    console.log('Click',e);
    e.preventDefault();
}

function func2(e){
    console.log('Double click',e);
    e.preventDefault();
}

function func3(e){
    console.log('Thanks, its a mouse down',e);
    e.preventDefault();
}