console.log("8.Decorators");
console.log("5.Factory-3");
{
function DecoratorFactory3(title:string, hookId:string){
    return function(ctor: any){
        const hookElement = document.getElementById(hookId);
        const p = new ctor();
        if(hookElement){
            hookElement.innerHTML = title;
            //search h1 in title
            hookElement.querySelector('h1').textContent = p.name;
        }
        else{
            console.log('Elem not found');
        }
    };
}

// @DecoratorFactory2('Decorator title','section')
@DecoratorFactory3('<h1>Decorator title</h1>','section')
class Person{
    name = 'PersonName';

    constructor() {
        console.log('Person ctor');
    }
}

const p = new Person();
console.log(p);
}
