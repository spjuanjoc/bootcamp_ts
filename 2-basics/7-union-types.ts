console.log("Module 2-Basics");

console.log("7.Union types");

function combine(a: number | string, b: number | string) {
    let result: number | string;
    if (typeof a == 'number' && typeof b == 'number') {
        result = a + b;
    } else {
        result = a.toString() + b.toString();
    }
    return result;
}

const combinedNum = combine(1, 2);
const combineStr = combine("1", "2");

console.log(combinedNum);
console.log(combineStr);
