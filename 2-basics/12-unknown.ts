console.log("Module 2-Basics");

console.log("12.unknown types");

let input:unknown;
let nameStr:string;

input=5;
input='Something';

// nameStr=input;//Error
if(typeof input == 'string'){
    nameStr = input;
}


