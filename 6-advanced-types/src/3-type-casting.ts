console.log("6.Advanced types");
console.log("3.Type casting");

{
//cast to HTMLInputElement
let inputElem = <HTMLInputElement>document.getElementById("input1")!;
let inputElem2 = document.getElementById("input2")! as HTMLInputElement;
}

