console.log("Module 2-Basics");

console.log("10.Return types & void");

function printMessage(message:string):void{
    console.log(message);
}

printMessage("Something");

console.log("function return(void): " + printMessage("void"));// it is undefined
