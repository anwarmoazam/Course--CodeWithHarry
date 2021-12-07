console.log('Welcome in tutorial 43');

async function harry(){
    console.log("Inside harry function");
    const response = await fetch('https://api.github.com/users')
    console.log("Before response");
    const users = await response.json();
    console.log('Users resolved');
    return users;
}

console.log("Before calling harry");
let a = harry();
console.log("After calling harry");
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this JS file");
