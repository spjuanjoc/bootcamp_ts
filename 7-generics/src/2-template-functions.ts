console.log("7.Generics: Templates");
console.log("2.template functions");
{
function Foo<T>(a:T) {
    return a;
}

let obj = Foo({name: 'Juan'});
console.log(obj);
obj.name = 'Jose';
console.log(obj);

let obj2 = Foo<number>(0);
console.log(obj2);

let obj3 = Foo<boolean>(false);
console.log(obj3);
}
