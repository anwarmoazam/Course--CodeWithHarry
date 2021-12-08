console.log('Welcome in tutorial 49');

// Character classes
let regex = /\war/; //word character - _ or alphabet or number
regex = /\w+d1r/; //\w+ means one or more word characters
regex = /\Wbhai/; //Non word character
regex = /\W+bhai/; //\W+ means more than one Non word character
regex = /number \d999/; //\d means digit
regex = /number \d+/; //\d+ means more than one digit
regex = /\D999/; //\D means non digit
regex = /\D+999/; //\D+ means more than one non digit
regex = /\ska number/; // Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace character
regex = /\Ska number/; // Match non whitespace character
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /1r2r\b/; // Match one or more than one non whitespace character


// Assertions
regex = /h(?=y)/
regex = /h(?!y)/

const str = "ha_rd1r2r 3r bhai hyrryka number 899999harry9999";


let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}