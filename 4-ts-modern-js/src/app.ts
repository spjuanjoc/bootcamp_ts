console.log("Module 4-TS and modern JS");

let foo = 1;
const name1 = "Juan";
// name1 = "Other name"; //! name1 is read-only

//1. Let & const vs 'var' (legacy)
const bar: boolean = true;

if (bar) {
    let baz = 0;
    console.log("local let: " + baz);
    var foobar = 1;
    console.log("local var: " + foobar)
}

// console.log("print local let out of its scope: " + baz);// not found
console.log("print local var out of its scope: " + foobar);


//2. Arrow functions
// since ES6
let arrFunc = () => {
    console.log("Message from arrow function")
};
arrFunc();

const arrF2 = (a: number): void => {
    a++;
    console.log("Another message from arrow func. a= " + a)
};
arrF2(1);


//3. Default parameters
function defaultParams(a: number, b: number = 1) {
    return a + b;
}

console.log("Default params function: " + defaultParams(1));

//4. Spread operator (...)
const hobbies = ['Sports', 'Cooking'];
const spreadHobbies = ['Hiking', ...hobbies];

spreadHobbies.push(...hobbies);
for (let it of spreadHobbies)
{
    console.log(it);
}


//5. Rest parameters ? -> variadic functions
function addVariadic(...numbers:number[]):number{
    let result = 0;
    for (let it of numbers){
        result += it;
    }
    return result;
}

console.log("addVariadic: " + addVariadic(1,2,3));

// pull from array nd object
const numbers = [1,2,3];
const [one,two,three] = numbers;
console.log("Pull from array: " + one + two + three );
for(let it of numbers)
{
    console.log(it);
}

const someWidget = {
    member1 : 1,
    member2 : 2
};
const {member1:m1,member2} = someWidget;
console.log("Pull from object: m1=" + m1 + " m2=" + member2);

console.log("using ES6");
