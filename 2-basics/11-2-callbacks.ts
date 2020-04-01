console.log("Module 2-Basics");

console.log("11-2.Callbacks");

function fooWithCallback(a: number, cb: (num: number) => void): void {
    console.log(a.toString());
    cb(a);
}

let n = 5;

fooWithCallback(n, (result) => {
    console.log("From anon function: " + result);
});

function bar(a, cb: (b: number) => void) {
    cb(a);
}

bar(n, (c) => {
    c = c + 2;
    console.log("From callback: " + c);
});

