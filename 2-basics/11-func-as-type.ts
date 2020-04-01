console.log("Module 2-Basics");

console.log("11.Functions as types");

function foo(message:number):void{
    console.log(message.toString());
}

let functional: (number) => void;

functional = foo;

functional(1234);
