console.log("6.Advanced types");
console.log("6.Optional chaining");


const obj = {
    name:'name',
    id: 'id',
    subObj: {subname: 'subname', subid: 'subid'}
};

// console.log(obj.subObj.subid);
console.log(obj?.subObj?.subid);

console.log("7.Nullish coalescing");

const foo = null;
const bar = foo ?? 'DEFAULT';

console.log(foo);
console.log(bar);
