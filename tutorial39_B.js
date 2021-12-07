console.log('Welcome in tutorial 39_B');

// Pretend that this response is coming from the server
const students = [
    {name: "Harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]

// function enrollStudents()
function enrollStudents(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error){
                resolve();
            } else{
                reject();
            }
        },1000)
    })
}

// function getStudents()
function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    },5000)
}

let newStudent = {name:"Sunny",subject:"Python"}
enrollStudents(newStudent).then(getStudents).catch(function(){
    console.log("Some error occured");
});
// getStudents();

// Function inside then is ran as - resolve()
// Function inside catch is ran as - reject()