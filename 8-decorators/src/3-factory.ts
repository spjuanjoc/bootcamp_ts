console.log("8.Decorators");
console.log("3.Factory");
{
function DecoratorFactory(title:string){
    return function(ctor: Function){
        console.log(title);
    };
}

@DecoratorFactory('DECORATOR-FACTORY')
class Person{
    name = 'Jane';

    constructor() {
        console.log('Person ctor');
    }
}

const p = new Person();
console.log(p);
}
