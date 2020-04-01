console.log("Module 2-Basics");

console.log("Tuples");

const role/*:string | number[]*/: [number, string] = [0, 'engineer'];

role[0] = 1;
role.push('admin');

for (let it of role) {
    console.log(it);
}

