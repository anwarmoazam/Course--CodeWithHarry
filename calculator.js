console.log("This is Calculator Project");

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button')
let buttonText = '';
let screenValue = '';

for(let item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue = screen.value;
            screenValue += buttonText;
            screen.value = screenValue;
        } else if(buttonText == 'C'){
            screenValue = "0";
            screen.value = screenValue;
        } else if(buttonText == '='){
            screen.value = eval(screenValue);
        } else if(buttonText == '←'){
            screenValue = screen.value;
            screen.value = screenValue;
            if(screenValue.length>1){
                screenValue = screenValue.substring(0, screenValue.length-1);
                screen.value = screenValue;
            } else{
                screenValue = "0";
                screen.value = screenValue;
            }
        } else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}