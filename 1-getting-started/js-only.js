const button = document.getElementById("button1");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
    return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(input1.value, input2.value));
});
