console.log("8.Decorators");
console.log("1.plain");
{
function PlainDecorator(ctor: Function){
    console.log('Decorator ctor');
    console.log(ctor);
}

@PlainDecorator
class Person{
    name = 'Jane';

    constructor() {
        console.log('Person ctor');
    }
}

//
// const p = new Person();
// console.log(p);
}
