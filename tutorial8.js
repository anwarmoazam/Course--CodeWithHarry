console.log('Welcome in tutorial 8');

const age = 65;
const vari = 34;
const doesDrive = false;

// if(age == 19){
//         console.log('Age is 19');
// } else if(age == 65){
//         console.log('Age is 65');
// } else{
//         console.log('Age is not 19');
// }

// if(typeof vari !== 'undefined'){
//         console.log('Vari is defined');
// } else{
//         console.log('Vari is not defined');
// }

// if(doesDrive && age>18){
//         console.log('You can drive');
// } else{
//         console.log(`You can't drive`);
// }

// if(doesDrive || age>78){
//         console.log('You can drive');
// } else{
//         console.log(`You can't drive`);
// }


// Ternary Oprator
console.log(age==45?'Age is 45':'Age is not 45');


let myAge = 28;
switch (myAge) {
        case 18:
                console.log('You are 18');               
                break;
        case 28:
                console.log('You are 28');
                break;
        case 38:
                console.log('You are 38');
                break;        
        default:
                console.log('You are unknown age');
                break;
}