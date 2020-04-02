console.log("6.Advanced types");
console.log("2.Type guards");
{
class Foo{
    name:string;
}
class Bar{
    status:string;
}

type foobar = Foo | Bar;

function checkFoobar(unknown:foobar){
    // type guard for property existance
    if('name' in unknown){
        //type guard for property type
        if(typeof unknown.name == 'string' ){
            console.log(unknown.name + " is Foo");
        }
    }
    // type guard for property existence same as before
    else if(unknown instanceof Bar){
        console.log(unknown.status + " is Bar");
    }
    else{
        console.log("Ain't foo nor bar");
    }
}

let f = new Foo();
let b = new Bar();

f.name = "foo";
checkFoobar(f);

b.status = "bar";
checkFoobar(b);
}
