console.log("Module 2-Basics");

console.log("Enums");

enum Role {ADMIN , READ_ONLY = 10, AUTHOR = 20};

const rolesTuple: [number, string] = [Role.AUTHOR, 'engineer'];

for (let it of rolesTuple) {
    console.log(it);
}

