console.log('Welcome in tutorial 37');

// Pretend that this response is coming from the server
const students = [
    {name: "Harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]

// function enrollStudents()
function enrollStudents(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    },3000)
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
    },1000)
}

let newStudent = {name:"Sunny",subject:"Python"}
enrollStudents(newStudent,getStudents);
// getStudents();