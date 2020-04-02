console.log("6.Advanced types");
console.log("4.Index properties");

{interface Foo{
    // index property. What for?
    [prop:string]:string;
}

const Bar:Foo = {
    // name: 1 // invalid cause it expects a string
    name: 'some name'
};

console.log(Bar);

}
