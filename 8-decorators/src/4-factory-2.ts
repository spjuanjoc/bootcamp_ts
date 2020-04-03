console.log("8.Decorators");
console.log("4.Factory-2");
{
function DecoratorFactory2(title:string, hookId:string){
    return function(ctor: Function){
        const hookElement = document.getElementById(hookId);
        if(hookElement){
            hookElement.innerHTML = title;
        }
        else{
            console.log('Elem not found again');
        }
    };
}

// @DecoratorFactory2('Decorator title','section')
@DecoratorFactory2('<h1>Decorator title</h1>','section')
class Person{
    name = 'Jane';

    constructor() {
        console.log('Person ctor');
    }
}

const p = new Person();
console.log(p);
}
