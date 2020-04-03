console.log("8.Decorators");
console.log("9.Validations part 1");

class User {

    constructor(public name, public age:number) {
        this.name = name;
        this.age = age;
    }
}

const form1 = document.getElementById("iform");

if (form1) {
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        const hname = document.getElementById('iname') as HTMLInputElement;
        const hage = document.getElementById('iage') as HTMLInputElement;

        const name = hname.value;
        const age = +hage.value;

        const user = new User(name, age);

        console.log(user)
    })
}
