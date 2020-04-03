// import {Runtime} from "inspector";
// import PropertyDescriptor = module

console.log("8.Decorators");
console.log("6.property-accessor");
{
function propertyDecorator(target:any, name:string) {
    console.log("Property decorator");
}

// function accesorDecorator(target:any, name:string, descriptor:PropertyDescriptor )
function accesorDecorator(target, name, descriptor ){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Person{
    @propertyDecorator
    name = 'PersonName';

    private _id:number;

    @accesorDecorator
    set id(value:number){
        if(value > 0){
            this._id = value;
        }
        else{
            console.log('id must be > 0');
        }
    }

    constructor() {
        console.log('Person ctor');
    }
}

const p = new Person();
console.log(p);
}
