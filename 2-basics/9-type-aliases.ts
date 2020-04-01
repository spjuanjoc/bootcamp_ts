console.log("Module 2-Basics");

console.log("9.Type aliases");

type alias = number | string;
type literal = 'as-number'|'as-string';
function combineAlias(a: alias,
                      b: alias,
                      as: literal) {
    let result;
    if (typeof a == 'number' && typeof b == 'number' || as == 'as-number') {
        result = +a + +b;
    } else {
        result = a.toString() + b.toString();
    }

    return result;
}

const combinedNum3 = combineAlias(1, 2, 'as-number');
const combineStr3 = combineAlias("1", "2", 'as-string');
const combinedNumstr3 = combineAlias('1', 2, 'as-number');
const combinedStrnum3 = combineAlias('1', 2, 'as-string');

console.log("As number: " + combinedNum3);
console.log("As string: " + combineStr3);
console.log("As number: " + combinedNumstr3);
console.log("As string: " + combinedStrnum3);
