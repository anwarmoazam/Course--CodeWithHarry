console.log('Welcome in tutorial 35');

// AJAX (Asynchronous javascript and XML)(AJAX uses XMLHttpRequest object also called xhr object)
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    // Use this for POST request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json')

    // What to do on progress (Optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is ',xhr.readyState);
    // }

    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        } else{
            console.log('Some error occured');
        }
    }

    // send the request
    params = `{"name":"test21551","salary":"123","age":"23"}`
    xhr.send(params);

    console.log('We are done!');
}






let popBtn = document.getElementById('populateBtn');
popBtn.addEventListener('click',populateHandler);

function populateHandler(){
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);


    // What to do on progress (Optional)
    // xhr.onprogress = function(){
    //     console.log('On progress');
    // }

    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is ',xhr.readyState);
    // }

    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = '';
            let values = obj.data
            for(let i=0; i<values.length; i++){
                str += `<li>${values[i].employee_name}</li>`
            }
            list.innerHTML = str;
        } else{
            console.log('Some error occured');
        }
    }

    xhr.send();

    console.log('We are done fetching employees!');    
}














