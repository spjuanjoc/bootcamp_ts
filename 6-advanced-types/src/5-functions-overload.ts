console.log("6.Advanced types");
console.log("5.Function overloads");
{
type primitive = string | number | boolean;

function add(a:number, b:number);
function add(a:string, b:string);

function add(a:primitive, b:primitive) {

    if(typeof a == 'string' && typeof b == 'string')
    {
        return a.toString() + b.toString();
    }
    return +a + +b;
};

console.log(add(1,2));
console.log(add('1','2'));
}
