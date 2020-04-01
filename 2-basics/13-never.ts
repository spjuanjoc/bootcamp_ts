console.log("Module 2-Basics");

console.log("13.never types");

function generateError(message2: string, code2: number): never {
    throw {message2, code2};
}

generateError('An error occurred', 500);
