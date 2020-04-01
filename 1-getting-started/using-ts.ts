const button1 = document.getElementById("button2")!;
const input12 = document.getElementById("num1")! as HTMLInputElement;
const input22 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

if (button1){
    button1.addEventListener("click", function() {
        console.log(add(+input12.value, +input22.value));
    });
}
