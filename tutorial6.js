console.log('Welcome in tutorial 6');
const name = 'Anwar';
const greeting = 'Good Morning';

console.log(greeting+" "+name);

let html;
html = "<h1>This is heading</h1>"+
        "<p>This is my paragraph</p>";

html = html.concat('this',' str2');

// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
console.log(html);

// console.log(html[1]);
console.log(html.indexOf('This'));
console.log(html.lastIndexOf('This'));
console.log(html.charAt(4));
console.log(html.endsWith('str2'));
console.log(html.includes('is'));
console.log(html.substring(-9));
console.log(html.substring(0,4));
console.log(html.slice(-9));
console.log(html.slice(0,4));
console.log(html.split(' '));
console.log(html.replace('This','it')); //Replace only first occurance
console.log(html.replaceAll('This','it')); //Replace all occurance

let fruit1 = 'Orange';
let fruit2 = 'Apple';

let myHtml = `Hello ${name}
                <h1>This is heading</h1>
                <p>You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;

// Exercise

let car1 = 'Maruti 800';
let car2 = 'Maruti Swift vdi';
let newHtml = `I like ${car1} but my favorite car is ${car2}`;

// document.body.innerHTML = newHtml;