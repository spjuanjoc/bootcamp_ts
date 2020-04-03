console.log("8.Decorators");
console.log("2.Functor");

{
function DecoratorFunctor(){
    return function(ctor: Function){
        console.log('Decorator functor ctor');
        console.log(ctor);
    };
}

@DecoratorFunctor()
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
