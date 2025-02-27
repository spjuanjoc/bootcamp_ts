console.log("8.Decorators");
console.log("9.2.Validations part 2");

class User {

    constructor(public name, public age:number) {
        this.name = name;
        this.age = age;
    }
}

function validate(obj: object):boolean {
    //if name.empty
    // return false
    // if age <= 0
    // return false
    return true;
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

        if(!validate(user)){
            alert('Wrong input');
        }

        console.log(user)
    })
}
