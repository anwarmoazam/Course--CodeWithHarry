let str1 = 'aaabcccdeeef';
let str2 = 'abcbad';
let str3 = 'abcabcabc';

// first non reprating character

function nonRepeatFirst(str){
    let obj = {};
    for(let i=0; i<str.length; i++){
        if(str[i] in obj){
            obj[str[i]]++;  
        } else{
            obj[str[i]]=1;
        }
    }
    
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(obj[char]==1){
            return char;
        }
    }
    return '_';

    // for(let i=0; i<str.length; i++){
    //     let isDuplicate = false;
    //     for(let j=0; j<str.length; j++){
    //         if(str[i]==str[j] && i!=j){
    //             isDuplicate = true;
    //             break;
    //         }
    //     }
    //     if(isDuplicate == false){
    //         return str[i];
    //     }
    // }
    // return '_';

}

console.log(nonRepeatFirst("aaabcccdeeef"));
console.log(nonRepeatFirst('abcbad'));
console.log(nonRepeatFirst('abcabcabc'));

