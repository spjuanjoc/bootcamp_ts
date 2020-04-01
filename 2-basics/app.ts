console.log("Module 2-Basics");

console.log("1. Primitive types");

function add(n1:number, n2:number):number{
    console.log("Typeof n1: " + typeof  n1);
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result= add(number1, number2);
console.log("result: " + result);
