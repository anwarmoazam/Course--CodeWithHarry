console.log('Welcome in tutorial 13');

// Exercise 1

// You have to create a variable which is a string containing the text which is a link you are interested in.
// You have to fetch all the links from a given page which contains this text.

let str = 'python';

let links = document.links;

// first solution
Array.from(links).forEach(function(e){
    if(e.href.includes(str)){
        console.log(e.href)
    }
})

// second solution
for(let i=0; i<links.length; i++){
    if(links[i].href.includes(str)){
        console.log(links[i].href);
    }
}

