console.log("6.Advanced types");
console.log("1.Intersections, unions, and aliases");
{
type unionAlias = string | number;
let AorB:unionAlias;

AorB = 1;
console.log(AorB);
AorB = "one";
console.log(AorB);

function StringOrNumber(v:unionAlias){}

StringOrNumber("string");
StringOrNumber(123);

interface A {
    a:string
}
interface B {
    b:string
}
interface AB extends A,B{}

let a:A = {a:"a"};
let b:B = {b:"b"};
let ab:A&B = {a:"a",b:"b"};
let AnB:AB = {a:"a",b:"b"};
console.log(a);
console.log(b);
console.log(ab);
console.log(AnB);
}
