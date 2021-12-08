console.log('Welcome in tutorial 44');

// Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if(a!=undefined){
    throw new Error ('This is not undefined');
} else{
    console.log('This is undefined');
}

try {
    // fgdkloiiij
    console.log("We are inside try block");
    functionHarry();
} catch (error) {
    console.log("Are you okay");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally{
    console.log("Finally we will run this");
}