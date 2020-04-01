console.log("Module 5.Classes and interfaces");
console.log("4.Getters and Setters");
{
class Department {

    constructor(protected name: string, protected subdept: string = "") {
        this.name = name;
        this.subdept = subdept;
    }

    elaborate() {
        console.log(" Department is: " + this.name);
    }

    private employees: string[] = [];

    addEmployees(name: string) {
        this.employees.push(name);
    }

    showEmployees() {
        console.log("Number of employees: " + this.employees.length);
        console.log("Names: ");
        console.log(this.employees);
    }
}

class SubDepartment extends Department{
    admins:string[] ;
    constructor(id:string, admins:string[]) {
        super(id,'SUB');
        this.admins = admins;
    }

    //getter
    get currentName(){
        return this.name;
    }

    //setter
    set currentName(value:string){
        this.name = value;
    }
}

const it = new SubDepartment('IT', ['Admin']);
console.log(it);
it.elaborate();
console.log(`current name: ${it.currentName}` );
it.currentName = "newName";
console.log(`named changed to: ${it.currentName}` );
}
