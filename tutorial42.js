console.log('Welcome in tutorial 42');

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

// function getData(){
//     console.log("Started getData");
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

// console.log("Before running getData");
// getData();
// console.log("After running getData");

function getData(){
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

// getData();

function postData(){
    url = 'https://dummy.restapiexample.com/api/v1/create';
    data = '{"name":"anwarmoazam1985","salary":"123","age":"23"}';
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url,params).then(response => response.json())
    .then(data => console.log(data))
}

postData();

