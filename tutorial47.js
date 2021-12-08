console.log('Welcome in tutorial 47');

let regex = /harry/;
// Lets look into some metacharacter symbols
regex = /^har/; // ^ means expression will match if string start with
regex = /ry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; // . matches any one character
regex = /h*rry/; // * matches any 0 or more character
regex = /h?rryi?/; // ? after character means that character is optional
regex = /h\*rry/; // ? after character means that character is optional

let str = 'h*rry means codewith';

let result = regex.exec(str);
console.log(`The result from exec is : `,result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}