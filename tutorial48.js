console.log('Welcome in tutorial 48');

// Regular Expressions
    // Basic Functions
    // Metacharacter Symbols

    
// const regex = /^h/i;


// Character Sets - We use []
let regex = /h[a-z]rry/; //can be any character from a to z
regex = /h[aty]rry/; //can be an a, t or y
regex = /h[^aty]rry/; //cannot be any of a, t or y
regex = /h[^aty]rr[yu]/; //cannot be any of a, t or y + can be an u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; //we can have as many character sets as we want

// const str = "hirry bhai";


// Quantifiers - We use {}
regex = /har{2}y/ // r can occur exactly 2 times
regex = /har{0,2}y/ // r can occur exactly 0 to 2 (0 or 1 or 2) times

// const str = "hary bhai";

// Groupings - We use paranthesis for grouping ()
regex = /(har){2}([0-9]r){3}/

const str = "harhar1r2r3rbhai";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}