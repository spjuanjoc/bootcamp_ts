console.log("Module 2-Basics");

console.log("8.Literal types");

function combineLiteral(a: number | string,
                        b: number | string,
                        as: 'as-number'|'as-string') {
    let result;
    if (typeof a == 'number' && typeof b == 'number' || as == 'as-number') {
        result = +a + +b;
    } else {
        result = a.toString() + b.toString();
    }

    return result;
}

const combinedNumL = combineLiteral(1, 2, 'as-number');
const combineStrL = combineLiteral("1", "2", 'as-string');
const combinedNumstr = combineLiteral('1', 2, 'as-number');
const combinedStrnum = combineLiteral('1', 2, 'as-string');

console.log("As number: " + combinedNumL);
console.log("As string: " + combineStrL);
console.log("As number: " + combinedNumstr);
console.log("As string: " + combinedStrnum);
