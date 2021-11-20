console.log('Welcome in tutorial 9');

// General loops: for, while, do-while

// For loop

// for(let i=1; i<=100; i++){
//     console.log(i);
// }

// While loop

// let j=0;
// while(j<100){
//     console.log(j);
//     j++;
// }

// Do-while loop

// let k=0;
// do{
//     if(k===5){
//         k++;
//         continue;
//     }
//     console.log(k+1);
//     k++;
// } while(k<10);

let arr = [2,5,6,4,2,3];
arr.forEach(function (element,index,array) {
    console.log(element,index,array);
});


let obj = {
    name: 'Rohan Das',
    age: 78,
    type: 'Dangerous Programmer',
    os: 'Ubuntu'
}

// for(let key in obj){
//     console.log(`${key} of object is ${obj[key]}`);
// }


console.log('done');

