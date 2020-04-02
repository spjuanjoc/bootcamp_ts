console.log("7.Generics: Templates");
console.log("3.keyof");

{
function FooKV<K extends keyof V,V>(key:K, value:V) {
    return value[key];
}

let m = FooKV(0,'Juan');

console.log(m);// m at 0
}
