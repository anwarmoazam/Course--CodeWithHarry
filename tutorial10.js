console.log('Welcome in tutorial 10');

function greet(name, thank='Regards!') {
    console.log(`Hello ${name}!! Curls of your silky hair and curves of your dressing pair, simply irrestible! ${thank}`)
}

let name = 'Anwar Moazam';
let name2 = 'Hafizur Rehman';

greet(name2);


const myObj = {
    name: 'Anwar',
    game: function(){
        return 'GTA';
    }
}

console.log(myObj.game());

let arr = ['fruit','vegetable','furniture'];

arr.forEach(function (element, index, array) {
    console.log(element,index);
});


{
    var i = 234;
    console.log(i);
}


function ui(name) {
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui('harry'),i);